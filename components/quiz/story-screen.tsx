'use client';

import { motion } from 'framer-motion';
import type { QuizQuestion } from '@/lib/quiz-data';
import Image from 'next/image';

interface StoryScreenProps {
    screen: QuizQuestion;
    onContinue: () => void;
}

export function StoryScreen({ screen, onContinue }: StoryScreenProps) {
    const bgImage = screen.bgImage || (screen.type === 'intro' ? '/bible-quiz-kids/images/intro.jpg' :
        screen.type === 'transition' ? '/bible-quiz-kids/images/transition.jpg' : '/bible-quiz-kids/images/finale.jpg');

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen w-full flex items-center justify-center relative overflow-hidden"
        >
            <div className="absolute inset-0 z-0">
                <Image
                    src={bgImage}
                    alt="Background"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
            </div>

            <div className="max-w-3xl mx-auto text-center px-4 relative z-10">
                <div className="bg-card/90 backdrop-blur-md border-2 border-border rounded-[2rem] p-6 md:p-8 shadow-2xl watercolor-texture mb-6 overflow-hidden relative">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary/40 via-primary/80 to-primary/40" />

                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 md:mb-6 leading-tight">
                        {screen.type === 'intro' ? 'Початок подорожі' :
                            screen.type === 'transition' ? (screen.part === 'jeremiah' ? 'Нова історія' : 'Час перепочити') : 'Ти молодець!'}
                    </h2>

                    <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-6 md:mb-8 text-balance italic">
                        {screen.text}
                    </p>

                    <button
                        onClick={onContinue}
                        className="px-8 py-4 bg-primary text-primary-foreground rounded-full text-xl font-bold shadow-xl hover:bg-primary/90 transition-all transform hover:scale-105 active:scale-95"
                    >
                        {screen.type === 'intro' ? 'Розпочати подорож' : 'Продовжити'}
                    </button>
                </div>
            </div>
        </motion.div>
    );
}
