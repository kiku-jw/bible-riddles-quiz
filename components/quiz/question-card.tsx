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

    const { playClick, playSuccess, playError } = useSound();

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
    const isSpecialSummary = question.id === 12 || question.id === 26;

    const requiredCount = isMulti
        ? question.options?.filter(o => o.isCorrect).length || 0
        : 1;

    const validateAnswer = (currentSelection: number[]) => {
        if (!question.options || currentSelection.length === 0) return;

        if (isSpecialSummary) {
            setIsCorrect(true);
            setShowResult(true);
            confetti({
                particleCount: 200,
                spread: 100,
                origin: { y: 0.6 }
            });
            onAnswer(true);
            return;
        }

        const correctIndices = question.options
            .map((opt, idx) => opt.isCorrect ? idx : -1)
            .filter(idx => idx !== -1);

        const isAnswerCorrect = isSingle
            ? question.options[currentSelection[0]]?.isCorrect
            : (currentSelection.length === correctIndices.length &&
                currentSelection.every(idx => correctIndices.includes(idx)));

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
            onAnswer(true);
        } else {
            playError();
        }
    };

    const handleOptionClick = (index: number) => {
        if (showResult && isCorrect) return;
        playClick();
        let newSelection: number[];
        if (isSingle) {
            newSelection = [index];
            setSelectedOptions(newSelection);
            validateAnswer(newSelection);
        } else {
            const isSelected = selectedOptions.includes(index);
            if (isSelected) {
                newSelection = selectedOptions.filter(i => i !== index);
            } else {
                newSelection = [...selectedOptions, index];
            }
            setSelectedOptions(newSelection);
            if (newSelection.length === requiredCount) {
                validateAnswer(newSelection);
            } else if (showResult && !isCorrect) {
                setShowResult(false);
                setIsCorrect(false);
            }
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

            <div className="w-full max-w-2xl mx-auto relative z-10 px-4 py-2 md:py-4 transition-all duration-300">
                <div className="text-center mb-2 md:mb-3">
                    {isMulti ? (
                        <div className="inline-flex flex-col items-center gap-1 px-3 py-1 bg-primary/10 border border-primary/20 rounded-xl">
                            <span className="text-[10px] md:text-xs font-medium text-primary">
                                🔹 Обери ВСІ правильні відповіді
                            </span>
                        </div>
                    ) : (
                        <span className="inline-block px-3 py-1 bg-secondary/60 rounded-full text-[10px] md:text-xs text-muted-foreground font-medium">
                            🔹 Обери одну правильну відповідь
                        </span>
                    )}
                </div>

                <div className="relative bg-card/90 backdrop-blur-md border border-border rounded-xl p-3 md:p-5 shadow-lg mb-3 md:mb-5 overflow-hidden watercolor-texture">
                    <h2 className="text-lg md:text-xl text-foreground text-center leading-snug text-balance relative z-10 font-bold">
                        {question.question}
                    </h2>
                </div>

                <div className="grid gap-2">
                    {question.options?.map((option, index) => {
                        const isSelected = selectedOptions.includes(index);
                        const isThisCorrect = option.isCorrect;

                        let optionStyle = 'bg-card/80 hover:bg-card border-border hover:border-primary/40';
                        if (showResult) {
                            if (isCorrect) {
                                if (isThisCorrect) optionStyle = 'bg-correct/40 border-correct shadow-sm';
                            } else if (isSelected) {
                                optionStyle = 'bg-destructive/20 border-destructive/40';
                            }
                        } else if (isSelected) {
                            optionStyle = 'bg-primary/10 border-primary shadow-sm';
                        }

                        return (
                            <motion.button
                                key={index}
                                whileHover={{ scale: 1.005, y: -0.5 }}
                                whileTap={{ scale: 0.995 }}
                                onClick={() => handleOptionClick(index)}
                                className={cn(
                                    'w-full p-3 rounded-lg border text-left transition-all duration-300',
                                    'flex items-center gap-3 backdrop-blur-sm',
                                    optionStyle
                                )}
                            >
                                <span className={cn(
                                    'w-6 h-6 rounded-full border flex items-center justify-center text-xs font-bold shrink-0 transition-all',
                                    (showResult && isCorrect && isThisCorrect) ? 'bg-correct text-correct-foreground border-correct' :
                                        (showResult && !isCorrect && isSelected) ? 'bg-destructive text-destructive-foreground border-destructive' :
                                            isSelected ? 'bg-primary text-primary-foreground border-primary' : 'bg-muted border-border'
                                )}>
                                    {String.fromCharCode(1040 + index)}
                                </span>
                                <span className="text-base font-medium leading-tight">{option.text}</span>
                            </motion.button>
                        );
                    })}
                </div>

                <AnimatePresence>
                    {showResult && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="mt-4"
                        >
                            {isCorrect ? (
                                <div className="text-center">
                                    <div className="bg-correct/10 border border-correct/30 rounded-2xl p-3 md:p-4 mb-3 md:mb-4">
                                        <p className="text-lg md:text-xl text-foreground font-bold mb-1">
                                            {correctPhrase}
                                        </p>
                                        {question.afterReveal && (
                                            <p className="text-sm text-muted-foreground leading-tight">
                                                {question.afterReveal}
                                            </p>
                                        )}
                                    </div>
                                    <button
                                        onClick={onContinue}
                                        className="px-8 py-3 bg-primary text-primary-foreground rounded-full text-lg font-bold shadow-lg hover:bg-primary/90 transition-all transform hover:scale-105"
                                    >
                                        Далі
                                    </button>
                                </div>
                            ) : (
                                <div className="text-center">
                                    <div className="bg-secondary/40 border border-border rounded-2xl p-3 md:p-4 mb-3 md:mb-4">
                                        <p className="text-lg md:text-xl text-foreground font-bold italic">
                                            {tryAgainPhrase}
                                        </p>
                                    </div>
                                    <button
                                        onClick={tryAgain}
                                        className="px-8 py-3 bg-secondary text-secondary-foreground rounded-full text-lg font-bold hover:bg-secondary/80 transition-all border border-border"
                                    >
                                        Спробувати ще
                                    </button>
                                </div>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>

                {!showResult && isMulti && selectedOptions.length >= requiredCount && (
                    <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-4 text-center"
                    >
                        <button
                            onClick={() => validateAnswer(selectedOptions)}
                            className="px-8 py-3 bg-primary text-primary-foreground rounded-full text-lg font-bold shadow-lg hover:bg-primary/90 transition-all transform hover:scale-105"
                        >
                            Перевірити
                        </button>
                    </motion.div>
                )}
            </div>
        </motion.div>
    );
}
