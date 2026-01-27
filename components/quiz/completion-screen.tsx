'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const GALLERY_IMAGES = [
    { src: '/bible-quiz-kids/images/intro.jpg', alt: 'Начало пути', title: 'Початок подорожі' },
    { src: '/bible-quiz-kids/images/josiah.jpg', alt: 'Юний Йосія', title: 'Юний Йосія' },
    { src: '/bible-quiz-kids/images/josiah-king.jpg', alt: 'Цар Йосія', title: 'Цар Йосія' },
    { src: '/bible-quiz-kids/images/transition.jpg', alt: 'Час минає', title: 'Час минає...' },
    { src: '/bible-quiz-kids/images/jeremiah.jpg', alt: 'Пророк Єремія', title: 'Пророк Єремія' },
    { src: '/bible-quiz-kids/images/finale.jpg', alt: 'Радісне майбутнє', title: 'Радісне майбутнє' },
];

const EXTERNAL_LINKS = [
    {
        title: 'Фільм про Йосію',
        url: 'https://www.jw.org/finder?wtlocale=K&docid=1102019289&srcid=share',
        color: 'bg-orange-600 hover:bg-orange-700',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polygon points="10 8 16 12 10 16 10 8" />
            </svg>
        )
    }
];

export function CompletionScreen() {
    const [selectedImage, setSelectedImage] = useState<typeof GALLERY_IMAGES[0] | null>(null);

    const handleDownload = (img: typeof GALLERY_IMAGES[0]) => {
        const link = document.createElement('a');
        link.href = img.src;
        link.download = `${img.src.split('/').pop()}`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-screen w-full bg-[#fdf8f1] text-[#311c0f] flex flex-col items-center py-6 md:py-10 px-4 overflow-y-auto"
        >
            <div className="max-w-4xl w-full flex flex-col gap-8 md:gap-12">

                {/* Reward Header */}
                <div className="text-center space-y-3 md:space-y-5">
                    <motion.div
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        className="inline-block p-4 rounded-3xl bg-yellow-400/20 border-2 border-yellow-500/30 text-yellow-800 font-bold mb-2 shadow-sm"
                    >
                        🏆 НАГОРОДА ЗА СТАРАННІСТЬ 🏆
                    </motion.div>
                    <h1 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                        Ти справжній знавець Біблії!
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-tight">
                        Твої старання не залишилися непоміченими. В подарунок ти отримуєш колекцію красивих шпалер для твого пристрою.
                    </p>
                </div>

                {/* Gallery */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
                    {GALLERY_IMAGES.map((img, idx) => (
                        <motion.button
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            onClick={() => setSelectedImage(img)}
                            className="group relative aspect-video rounded-xl md:rounded-2xl overflow-hidden shadow-md border-2 md:border-4 border-white transform transition-all duration-300 hover:scale-105 active:scale-95"
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/20 backdrop-blur-md p-2 rounded-full border border-white/50">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="15 3 21 3 21 9" /><polyline points="9 21 3 21 3 15" /><line x1="21" y1="3" x2="14" y2="10" /><line x1="3" y1="21" x2="10" y2="14" />
                                    </svg>
                                </span>
                            </div>
                        </motion.button>
                    ))}
                </div>

                {/* Resources */}
                <div className="space-y-4 md:space-y-6">
                    <h2 className="text-xl md:text-2xl font-bold text-center">Продовжуй дізнаватися нове</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-2xl mx-auto w-full">
                        {EXTERNAL_LINKS.map((link, idx) => (
                            <a
                                key={idx}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex items-center justify-center gap-2 p-3 md:p-4 rounded-xl text-white text-sm md:text-base font-bold shadow-md transition-all active:scale-95 ${link.color}`}
                            >
                                {link.icon}
                                <span>{link.title}</span>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Footer */}
                <div className="pt-6 md:pt-10 text-center">
                    <a
                        href="https://t.me/kiku_ai"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs md:text-sm text-muted-foreground/60 hover:text-primary transition-colors bg-black/5 px-3 py-1.5 rounded-full"
                    >
                        <span>Created by</span>
                        <span className="font-semibold">KikuAI</span>
                    </a>
                </div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            className="relative w-full max-w-5xl aspect-video rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={selectedImage.src}
                                alt={selectedImage.alt}
                                fill
                                className="object-cover"
                            />

                            {/* Overlay UI */}
                            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 bg-gradient-to-t from-black/80 to-transparent flex justify-between items-end">
                                <div className="text-white space-y-1">
                                    <p className="text-xl md:text-2xl font-bold">{selectedImage.title}</p>
                                    <p className="text-white/60 text-sm md:text-base">Чудова картинка для твого робочого столу</p>
                                </div>
                                <button
                                    onClick={() => handleDownload(selectedImage)}
                                    className="p-3 md:p-4 bg-white text-black rounded-full shadow-lg hover:bg-white/90 transition-all active:scale-90 flex items-center justify-center"
                                    title="Скачать шпалери"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4" />
                                        <polyline points="7 10 12 15 17 10" />
                                        <line x1="12" y1="15" x2="12" y2="3" />
                                    </svg>
                                </button>
                            </div>
                        </motion.div>

                        <button
                            className="mt-6 text-white/50 hover:text-white transition-colors"
                            onClick={() => setSelectedImage(null)}
                        >
                            Закрити
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
