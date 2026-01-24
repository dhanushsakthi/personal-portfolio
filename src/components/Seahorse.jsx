import React from 'react';

const Seahorse = ({ size = 24, className = "" }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
    >
        <defs>
            <linearGradient id="seahorseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="60%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#d946ef" />
            </linearGradient>
        </defs>

        {/* Anatomical Seahorse Shape */}
        <g fill="url(#seahorseGradient)">
            {/* 1. Head and Tube Snout - Very recognizable */}
            <path d="M40 15 C45 12 52 12 55 16 C58 20 57 26 54 29 L75 42 C78 44 76 50 72 50 L52 38 C50 41 45 42 42 40 C38 38 37 31 40 26 Z" />

            {/* 2. Head Crest */}
            <path d="M40 15 L38 8 L44 12 L46 6 L50 14 L55 9 L58 16" />

            {/* 3. Body Curve and Coiled Prehensile Tail */}
            <path d="M42 40 C35 50 35 60 45 65 C55 70 60 75 60 85 C60 95 52 98 45 98 C35 98 28 92 28 85 C28 78 34 72 40 72 C46 72 50 77 50 82 C50 87 46 91 42 91 C39 91 37 89 37 87" fill="none" stroke="url(#seahorseGradient)" strokeWidth="8" strokeLinecap="round" />

            {/* 4. Dorsal Spine Detail */}
            <path d="M40 30 L35 33 L38 40 L32 45 L35 55 L28 60 L32 70 L28 80 L35 90" fill="none" stroke="url(#seahorseGradient)" strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* Eye */}
        <circle cx="48" cy="22" r="4" fill="#0f172a" />
        <circle cx="49.5" cy="20.5" r="1.5" fill="white" />

        {/* Body Segments */}
        <g stroke="white" strokeWidth="0.5" opacity="0.2">
            <line x1="38" y1="48" x2="48" y2="48" />
            <line x1="35" y1="56" x2="55" y2="56" />
            <line x1="35" y1="64" x2="58" y2="64" />
            <line x1="38" y1="72" x2="55" y2="72" />
        </g>
    </svg>
);

export default Seahorse;
