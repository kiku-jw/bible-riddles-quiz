'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const GALLERY_IMAGES = [
    { src: '/bible-quiz-kids/images/intro.jpg', alt: 'Intro' },
    { src: '/bible-quiz-kids/images/josiah-king.jpg', alt: 'King Josiah' },
    { src: '/bible-quiz-kids/images/transition.jpg', alt: 'Time Passing' },
    { src: '/bible-quiz-kids/images/jeremiah.jpg', alt: 'Prophet Jeremiah' },
    { src: '/bible-quiz-kids/images/finale.jpg', alt: 'Finale' },
];

const EXTERNAL_LINKS = [
    {
        title: 'Фільм про Йосію',
        url: 'https://www.jw.org/finder?wtlocale=K&docid=1102019289&srcid=share',
        color: 'bg-orange-600 hover:bg-orange-700',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="18" height="18" x="3" y="3" rx="2" />
                <path d="M7 3v18" />
                <path d="M3 7.5h4" />
                <path d="M3 12h18" />
                <path d="M3 16.5h4" />
                <path d="M17 3v18" />
                <path d="M17 7.5h4" />
                <path d="M17 16.5h4" />
            </svg>
        )
    },
    {
        title: 'Мультик про Єремію',
        url: 'https://www.jw.org/finder?wtlocale=K&docid=503000104&srcid=share',
        color: 'bg-blue-600 hover:bg-blue-700',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polygon points="10 8 16 12 10 16 10 8" />
            </svg>
        )
    }
];

export function CompletionScreen() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-screen w-full bg-[#fdf8f1] text-[#311c0f] flex flex-col items-center py-12 px-4 overflow-y-auto"
        >
            <div className="max-w-4xl w-full flex flex-col gap-12">

                {/* Header */}
                <div className="text-center space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                        Чудова подорож!
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        Ти успішно пройшов вікторину. Ось моменти твоєї пригоди:
                    </p>
                </div>

                {/* Gallery */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {GALLERY_IMAGES.map((img, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="relative aspect-video rounded-2xl overflow-hidden shadow-lg border-4 border-white transform hover:scale-105 transition-transform duration-300"
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Links */}
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-center">Дізнайся більше</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto w-full">
                        {EXTERNAL_LINKS.map((link, idx) => (
                            <a
                                key={idx}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex items-center justify-center gap-3 p-4 rounded-xl text-white font-bold shadow-md transition-all active:scale-95 ${link.color}`}
                            >
                                {link.icon}
                                <span>{link.title}</span>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Footer */}
                <div className="pt-12 text-center">
                    <a
                        href="https://t.me/kiku_ai"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground/60 hover:text-primary transition-colors bg-black/5 px-3 py-1 rounded-full"
                    >
                        <span>Created by</span>
                        <span className="font-semibold">KikuAI</span>
                    </a>
                </div>
            </div>
        </motion.div>
    );
}
