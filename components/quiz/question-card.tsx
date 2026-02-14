'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { QuizQuestion } from '@/lib/quiz-data';
import type { Language } from './bible-quiz';
import { useSound } from './sound-manager';
import confetti from 'canvas-confetti';
import Image from 'next/image';

interface QuestionCardProps {
    question: QuizQuestion;
    onAnswer: (isCorrect: boolean) => void;
    onContinue: () => void;
    language: Language;
}

export function QuestionCard({ question, onAnswer, onContinue, language }: QuestionCardProps) {
    const [selectedOptions, setSelectedOptions] = useState<number[]>([]);
    const [showResult, setShowResult] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const [hasAttempted, setHasAttempted] = useState(false);
    const [lastClickedIndex, setLastClickedIndex] = useState<number | null>(null);
    const [showHint, setShowHint] = useState(false);

    const { playClick, playError } = useSound();

    const bgImage = question.part === 'josiah' ? '/bible-riddles-quiz/images/josiah.jpg' : '/bible-riddles-quiz/images/jeremiah.jpg';

    const feedbackText = useMemo(() => {
        if (showResult && lastClickedIndex !== null) {
            const optionFeedback = question.options?.[lastClickedIndex]?.feedback?.[language];
            if (optionFeedback) return optionFeedback;
        }
        return '';
    }, [question.id, language, showResult, lastClickedIndex]);

    useEffect(() => {
        setSelectedOptions([]);
        setShowResult(false);
        setIsCorrect(false);
        setHasAttempted(false);
        setLastClickedIndex(null);
        setShowHint(false);
    }, [question.id]);

    const isSingle = question.type === 'single';
    const isMulti = question.type === 'multi';
    const isSpecialSummary = false; // Previously hardcoded to 12 and 26, causing bugs

    const requiredCount = isMulti
        ? question.options?.filter(o => o.isCorrect).length || 0
        : 1;

    const validateAnswer = (currentSelection: number[], lastIdx: number) => {
        if (!question.options || currentSelection.length === 0) return;

        setLastClickedIndex(lastIdx);

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
            validateAnswer(newSelection, index);
        } else {
            const isSelected = selectedOptions.includes(index);
            if (isSelected) {
                newSelection = selectedOptions.filter(i => i !== index);
            } else {
                newSelection = [...selectedOptions, index];
            }
            setSelectedOptions(newSelection);

            // For multi, we only show result when clicking the explicit check button
            // But we keep track of the last clicked for the feedback text
            setLastClickedIndex(index);

            if (newSelection.length === requiredCount) {
                // We keep it as is, but maybe don't trigger validation automatically?
                // The user requested "auto-check" in v1.5, so I'll keep it.
                validateAnswer(newSelection, index);
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
        setLastClickedIndex(null);
    };

    const labels = {
        uk: { multi: 'Обери ВСІ правильні відповіді', single: 'Обери одну правильну відповідь', next: 'Далі', retry: 'Спробувати ще', check: 'Перевірити', hint: 'Підказка' },
        ru: { multi: 'Выбери ВСЕ правильные ответы', single: 'Выбери один правильный ответ', next: 'Далее', retry: 'Попробовать еще', check: 'Проверить', hint: 'Подсказка' },
        en: { multi: 'Choose ALL correct answers', single: 'Choose one correct answer', next: 'Next', retry: 'Try again', check: 'Check', hint: 'Hint' },
    }[language];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden"
        >
            <div className="absolute inset-0 z-0 text-white">
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
                                🔹 {labels.multi}
                            </span>
                        </div>
                    ) : (
                        <span className="inline-block px-3 py-1 bg-secondary/60 rounded-full text-[10px] md:text-xs text-muted-foreground font-medium">
                            🔹 {labels.single}
                        </span>
                    )}
                </div>

                <div className="relative premium-glass border border-white/10 rounded-2xl p-4 md:p-6 shadow-2xl mb-4 md:mb-6 overflow-hidden">
                    {/* Question Image revealed after correct answer */}
                    <AnimatePresence>
                        {showResult && isCorrect && question.image && (
                            <motion.div
                                initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                                animate={{ opacity: 1, height: 'auto', marginBottom: (typeof window !== 'undefined' && window.innerWidth < 768 ? 12 : 20) }}
                                exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                                className="relative w-full aspect-video rounded-lg overflow-hidden shadow-inner border border-primary/10"
                            >
                                <Image
                                    src={question.image}
                                    alt=""
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <h2 className="text-lg md:text-xl text-foreground text-center leading-snug text-balance relative z-10 font-bold">
                        {question.question?.[language]}
                    </h2>

                    {/* Hint Section */}
                    {question.hint && (
                        <div className="mt-3 text-center">
                            <button
                                onClick={() => { playClick(); setShowHint(!showHint); }}
                                className="text-xs font-medium text-primary/60 hover:text-primary transition-colors underline decoration-dotted underline-offset-4"
                            >
                                {labels.hint}
                            </button>
                            <AnimatePresence>
                                {showHint && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="mt-2 text-sm text-muted-foreground italic bg-primary/5 rounded-lg p-2 border border-primary/10"
                                    >
                                        {question.hint[language]}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    )}
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
                                <span className="text-base font-medium leading-tight">{option.text[language]}</span>
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
                            <div className="text-center">
                                <div className={cn(
                                    "border rounded-2xl p-3 md:p-4 mb-3 md:mb-4 transition-colors",
                                    isCorrect ? "bg-correct/10 border-correct/30" : "bg-secondary/40 border-border"
                                )}>
                                    <p className={cn(
                                        "text-lg md:text-xl font-bold mb-1",
                                        !isCorrect && "italic"
                                    )}>
                                        {feedbackText}
                                    </p>
                                    {isCorrect && question.afterReveal?.[language] && (
                                        <p className="text-sm text-muted-foreground leading-tight">
                                            {question.afterReveal[language]}
                                        </p>
                                    )}
                                </div>

                                {isCorrect ? (
                                    <button
                                        onClick={onContinue}
                                        className="px-8 py-3 bg-primary text-primary-foreground rounded-full text-lg font-bold shadow-lg hover:bg-primary/90 transition-all transform hover:scale-105"
                                    >
                                        {labels.next}
                                    </button>
                                ) : (
                                    <button
                                        onClick={tryAgain}
                                        className="px-8 py-3 bg-secondary text-secondary-foreground rounded-full text-lg font-bold hover:bg-secondary/80 transition-all border border-border"
                                    >
                                        {labels.retry}
                                    </button>
                                )}
                            </div>
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
                            onClick={() => validateAnswer(selectedOptions, selectedOptions[selectedOptions.length - 1])}
                            className="px-8 py-3 bg-primary text-primary-foreground rounded-full text-lg font-bold shadow-lg hover:bg-primary/90 transition-all transform hover:scale-105"
                        >
                            {labels.check}
                        </button>
                    </motion.div>
                )}
            </div>
        </motion.div>
    );
}
