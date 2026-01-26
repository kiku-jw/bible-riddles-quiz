'use client';

import React, { createContext, useContext, useState, useEffect, useRef, useCallback } from 'react';

interface SoundContextType {
    playClick: () => void;
    playSuccess: () => void;
    playError: () => void;
    playContinue: () => void;
    playComplete: () => void;
    toggleSound: () => void;
    isEnabled: boolean;
    startBackgroundMusic: () => void;
}

const SoundContext = createContext<SoundContextType | undefined>(undefined);

export function SoundProvider({ children }: { children: React.ReactNode }) {
    const [isEnabled, setIsEnabled] = useState(true);
    const bgMusicRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        bgMusicRef.current = new Audio('/music.mp3');
        bgMusicRef.current.loop = true;
        bgMusicRef.current.volume = 0.3;

        return () => {
            if (bgMusicRef.current) {
                bgMusicRef.current.pause();
                bgMusicRef.current = null;
            }
        };
    }, []);

    const playSound = useCallback((path: string) => {
        if (!isEnabled) return;
        const audio = new Audio(path);
        audio.play().catch(() => { });
    }, [isEnabled]);

    const toggleSound = () => {
        setIsEnabled(prev => {
            const next = !prev;
            if (bgMusicRef.current) {
                if (next) {
                    bgMusicRef.current.play().catch(() => { });
                } else {
                    bgMusicRef.current.pause();
                }
            }
            return next;
        });
    };

    const startBackgroundMusic = () => {
        if (isEnabled && bgMusicRef.current) {
            bgMusicRef.current.play().catch(() => { });
        }
    };

    const value = {
        playClick: () => playSound('/sounds/click.mp3'),
        playSuccess: () => playSound('/sounds/success.mp3'),
        playError: () => { }, // No error sound as per instructions
        playContinue: () => playSound('/sounds/continue.mp3'),
        playComplete: () => playSound('/sounds/complete.mp3'),
        toggleSound,
        isEnabled,
        startBackgroundMusic
    };

    return <SoundContext.Provider value={value}>{children}</SoundContext.Provider>;
}

export const useSound = () => {
    const context = useContext(SoundContext);
    if (!context) throw new Error('useSound must be used within SoundProvider');
    return context;
};
