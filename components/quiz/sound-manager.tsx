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
        bgMusicRef.current = new Audio('/bible-quiz-kids/music.mp3');
        bgMusicRef.current.loop = true;
        bgMusicRef.current.volume = 0.3;

        return () => {
            if (bgMusicRef.current) {
                bgMusicRef.current.pause();
                bgMusicRef.current = null;
            }
        };
    }, []);

    const playTone = (freq: number, type: OscillatorType, duration: number) => {
        if (!isEnabled) return;
        const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
        if (!AudioContext) return;

        const ctx = new AudioContext();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.frequency.setValueAtTime(freq, ctx.currentTime);
        osc.type = type;

        gain.gain.setValueAtTime(0.1, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        osc.stop(ctx.currentTime + duration);
    };

    osc.start();
    osc.stop(ctx.currentTime + duration);
};

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
    playClick: () => playTone(800, 'sine', 0.1),
    playSuccess: () => {
        if (!isEnabled) return;
        // Little major triad arpeggio
        setTimeout(() => playTone(600, 'sine', 0.1), 0);
        setTimeout(() => playTone(750, 'sine', 0.1), 100);
        setTimeout(() => playTone(900, 'sine', 0.2), 200);
    },
    playError: () => playTone(200, 'sawtooth', 0.3),
    playContinue: () => playTone(1200, 'sine', 0.15),
    playComplete: () => {
        // Victory fanfare
        setTimeout(() => playTone(500, 'sine', 0.2), 0);
        setTimeout(() => playTone(500, 'sine', 0.2), 150);
        setTimeout(() => playTone(500, 'sine', 0.2), 300);
        setTimeout(() => playTone(800, 'sine', 0.6), 450);
    },
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
