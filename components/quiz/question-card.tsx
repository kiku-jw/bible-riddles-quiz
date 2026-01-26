'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { QuizQuestion } from '@/lib/quiz-data';
import { useSound } from './sound-manager';
import confetti from 'canvas-confetti';
import Image from 'next/image';

const CORRECT_PHRASES = [
    'Чудово! Ти молодець!',
    'Правильно! Так тримати!',
    'Відмінно! Ти добре знаєш цю історію!',
    'Браво! Ти справжній знавець!',
    'Супер! Продовжуй у тому ж дусі!',
    'Вау! Ти дуже уважний!',
    'Точно! Ти добре запам\'ятав!',
    'Прекрасно! Єгова радіє твоїй старанності!',
];

const TRY_AGAIN_PHRASES = [
    'Майже вдалося! Спробуй ще раз',
    'Гарна спроба! Подумай ще трішки',
    'Ти на правильному шляху! Ще разок',
    'Не здавайся! Ти зможеш!',
    'Ось-ось знайдеш правильну відповідь!',
    'Продовжуй шукати! Ти впораєшся!',
];

interface QuestionCardProps {
    question: QuizQuestion;
    onAnswer: (isCorrect: boolean) => void;
    onContinue: () => void;
}

export function QuestionCard({ question, onAnswer, onContinue }: QuestionCardProps) {
    const [selectedOptions, setSelectedOptions] = useState<number[]>([]);
    const [showResult, setShowResult] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const [hasAttempted, setHasAttempted] = useState(false);

    const { playClick, playSuccess } = useSound();

    const bgImage = question.part === 'josiah' ? '/bible-quiz-kids/images/josiah.jpg' : '/bible-quiz-kids/images/jeremiah.jpg';

    const correctPhrase = useMemo(() =>
        CORRECT_PHRASES[Math.floor(Math.random() * CORRECT_PHRASES.length)],
        [question.id]
    );

    const tryAgainPhrase = useMemo(() =>
        TRY_AGAIN_PHRASES[Math.floor(Math.random() * TRY_AGAIN_PHRASES.length)],
        [question.id, hasAttempted]
    );

    useEffect(() => {
        setSelectedOptions([]);
        setShowResult(false);
        setIsCorrect(false);
        setHasAttempted(false);
    }, [question.id]);

    const isSingle = question.type === 'single';
    const isMulti = question.type === 'multi';
    const isSpecialSummary = question.id === 12 || question.id === 25;

    const requiredCount = isMulti
        ? question.options?.filter(o => o.isCorrect).length || 0
        : 1;

    const handleOptionClick = (index: number) => {
        if (showResult && isCorrect) return; // Block only if already solved correctly

        playClick();

        if (isSingle) {
            // Immediate check for single choice
            const isAnswerCorrect = question.options?.[index].isCorrect || false;

            if (isAnswerCorrect) {
                setSelectedOptions([index]);
                setIsCorrect(true);
                setShowResult(true);
                confetti({
                    particleCount: 150,
                    spread: 70,
                    origin: { y: 0.6 },
                    colors: ['#fbbf24', '#f59e0b', '#d97706']
                });
                playSuccess();
                onAnswer(true);
            } else {
                // Wrong answer logic for single choice
                // Highlight just this option as wrong, allow retry
                setSelectedOptions([index]); // Select checking
                setIsCorrect(false);
                setShowResult(true);
                // We keep showResult true to show the red color, but we need to reset it if they click another
                // Actually, if we set ShowResult, we lock the UI in current implementation.
                // Let's modify the UI rendering to allow clicking others if !isCorrect
            }
        } else {
            // Multi behavior stays same
            if (showResult) return;
            setSelectedOptions(prev =>
                prev.includes(index)
                    ? prev.filter(i => i !== index)
                    : [...prev, index]
            );
        }
    };

    const checkAnswer = () => {
        if (!question.options || selectedOptions.length === 0) return;

        if (isAnswerCorrect) {
            confetti({
                particleCount: 200,
                spread: 100,
                origin: { y: 0.6 }
            });
            // playSuccess() removed as per user request to disable confetti sound
            onAnswer(true);
            return;
        }

        const correctIndices = question.options
            .map((opt, idx) => opt.isCorrect ? idx : -1)
            .filter(idx => idx !== -1);

        const isAnswerCorrect =
            selectedOptions.length === correctIndices.length &&
            selectedOptions.every(idx => correctIndices.includes(idx));

        setIsCorrect(isAnswerCorrect);
        setShowResult(true);
        setHasAttempted(true);

        if (isAnswerCorrect) {
            confetti({
                particleCount: 150,
                spread: 70,
                origin: { y: 0.6 },
                colors: ['#fbbf24', '#f59e0b', '#d97706']
            });
            // playSuccess() removed
            onAnswer(true);
        }
    };

    const tryAgain = () => {
        setSelectedOptions([]);
        setShowResult(false);
        setIsCorrect(false);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden"
        >
            <div className="absolute inset-0 z-0">
                <Image
                    src={bgImage}
                    alt="Background"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-background/70 backdrop-blur-sm" />
            </div>

            <div className="w-full max-w-2xl mx-auto relative z-10 px-4 py-12">
                <div className="text-center mb-6">
                    {isMulti ? (
                        <div className="inline-flex flex-col items-center gap-2 px-6 py-3 bg-primary/10 border-2 border-primary/20 rounded-2xl">
                            <span className="text-base font-medium text-primary">
                                🔹 Обери ВСІ правильні відповіді
                            </span>
                        </div>
                    ) : (
                        <span className="inline-block px-5 py-2 bg-secondary/60 rounded-full text-sm text-muted-foreground font-medium">
                            🔹 Обери одну правильну відповідь
                        </span>
                    )}
                </div>

                <div className="relative bg-card/90 backdrop-blur-md border-2 border-border rounded-3xl p-8 shadow-xl mb-8 overflow-hidden watercolor-texture">
                    <h2 className="text-2xl md:text-3xl text-foreground text-center leading-relaxed text-balance relative z-10 font-bold">
                        {question.question}
                    </h2>
                </div>

                <div className="grid gap-4">
                    {question.options?.map((option, index) => {
                        const isSelected = selectedOptions.includes(index);
                        const isThisCorrect = option.isCorrect;

                        let optionStyle = 'bg-card/80 hover:bg-card border-border hover:border-primary/40';

                        // Logic:
                        // If solved (isCorrect && showResult): Show Green on Correct choice.
                        // If failing (showResult && !isCorrect): Show Red on Selected choice. Do NOT show Green on others.

                        if (showResult) {
                            if (isCorrect) {
                                // Game won state
                                if (isThisCorrect) optionStyle = 'bg-correct/40 border-correct shadow-md';
                            } else {
                                // Wrong attempt state
                                if (isSelected) optionStyle = 'bg-destructive/20 border-destructive/40';
                                // We intentionally do NOT highlight the correct answer here
                            }
                        } else if (isSelected) {
                            optionStyle = 'bg-primary/15 border-primary shadow-sm';
                        }

                        return (
                            <motion.button
                                key={index}
                                whileHover={{ scale: 1.02, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => handleOptionClick(index)}
                                className={cn(
                                    'w-full p-5 rounded-2xl border-2 text-left transition-all duration-300',
                                    'flex items-center gap-4 backdrop-blur-sm',
                                    optionStyle
                                )}
                            >
                                <span className={cn(
                                    'w-10 h-10 rounded-full border-2 flex items-center justify-center text-lg font-bold shrink-0 transition-all',
                                    (showResult && isCorrect && isThisCorrect) ? 'bg-correct text-correct-foreground border-correct' :
                                        (showResult && !isCorrect && isSelected) ? 'bg-destructive text-destructive-foreground border-destructive' :
                                            isSelected ? 'bg-primary text-primary-foreground border-primary' : 'bg-muted border-border'
                                )}>
                                    {String.fromCharCode(1040 + index)}
                                </span>
                                <span className="text-xl font-medium">{option.text}</span>
                            </motion.button>
                        );
                    })}
                </div>

                <AnimatePresence>
                    {showResult && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="mt-8"
                        >
                            {isCorrect ? (
                                <div className="text-center">
                                    <div className="bg-correct/20 border-2 border-correct/40 rounded-3xl p-6 mb-6">
                                        <p className="text-2xl text-foreground font-bold mb-2">
                                            {correctPhrase}
                                        </p>
                                        {question.afterReveal && (
                                            <p className="text-lg text-muted-foreground">
                                                {question.afterReveal}
                                            </p>
                                        )}
                                    </div>
                                    <button
                                        onClick={onContinue}
                                        className="px-12 py-5 bg-primary text-primary-foreground rounded-full text-xl font-bold shadow-xl hover:bg-primary/90 transition-all transform hover:scale-105"
                                    >
                                        Далі
                                    </button>
                                </div>
                            ) : (
                                <div className="text-center">
                                    <div className="bg-secondary/60 border-2 border-border rounded-3xl p-6 mb-6">
                                        <p className="text-2xl text-foreground font-bold italic">
                                            {tryAgainPhrase}
                                        </p>
                                    </div>
                                    <button
                                        onClick={tryAgain}
                                        className="px-12 py-5 bg-secondary text-secondary-foreground rounded-full text-xl font-bold hover:bg-secondary/80 transition-all border-2 border-border"
                                    >
                                        Спробувати ще
                                    </button>
                                </div>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>

                {!showResult && isMulti && selectedOptions.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-8 text-center"
                    >
                        <button
                            onClick={checkAnswer}
                            className="px-12 py-5 bg-primary text-primary-foreground rounded-full text-xl font-bold shadow-xl hover:bg-primary/90 transition-all transform hover:scale-105"
                        >
                            {isMulti && selectedOptions.length < requiredCount
                                ? `Обрано ${selectedOptions.length} з ${requiredCount}`
                                : 'Перевірити'}
                        </button>
                    </motion.div>
                )}
            </div>
        </motion.div>
    );
}
