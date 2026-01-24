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
            <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
        </defs>
        {/* Dorsal Ridge / Spines */}
        <path d="M55 18C58 14 62 13 65 14L68 18L72 16L73 22L78 20L78 27L84 25L82 32L88 32L82 40L88 44L80 48L85 54L75 58L78 65L70 65" fill="#8b5cf6" opacity="0.8" />

        {/* Main Body Silhouette */}
        <path d="M45 15C40 15 35 18 32 22C30 26 30 32 35 36C30 40 25 40 22 41C20 42 18 44 18 46C18 48 20 49 22 49C27 49 33 46 38 42C40 47 45 50 50 50C58 50 64 45 64 35C64 27 58 20 50 20C50 18 48 15 45 15Z" fill="url(#bodyGradient)" />

        {/* Segmented Body / Belly */}
        <path d="M50 50C45 50 38 55 38 72C38 82 45 90 55 90C65 90 73 82 73 72C73 65 68 58 62 55" fill="none" stroke="url(#bodyGradient)" strokeWidth="12" strokeLinecap="round" />

        {/* Segment Lines (Ribs) */}
        <g stroke="rgba(255,255,255,0.2)" strokeWidth="1">
            <line x1="42" y1="58" x2="55" y2="58" />
            <line x1="40" y1="64" x2="58" y2="64" />
            <line x1="40" y1="70" x2="62" y2="70" />
            <line x1="42" y1="76" x2="65" y2="76" />
            <line x1="45" y1="82" x2="62" y2="82" />
        </g>

        {/* Coiled Tail */}
        <path d="M55 90C42 90 32 80 32 68C32 58 38 50 48 50C55 50 60 55 60 62C60 68 55 74 48 74C43 74 38 70 38 65" fill="none" stroke="url(#bodyGradient)" strokeWidth="6" strokeLinecap="round" />

        {/* Eye */}
        <circle cx="53" cy="28" r="5" fill="#111" />
        <circle cx="54.5" cy="26.5" r="1.5" fill="white" />
        <circle cx="52.2" cy="29.2" r="0.6" fill="white" />

        {/* Small Fin on back */}
        <path d="M68 50C75 45 82 48 85 58C82 65 75 68 68 65Z" fill="#a78bfa" opacity="0.6" />
    </svg>
);

export default Seahorse;
