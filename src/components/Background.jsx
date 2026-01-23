import React from 'react';

const Background = () => {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            {/* Base background color */}
            <div className="absolute inset-0 bg-[#020617]" />

            {/* Mesh Gradients (Google-inspired soft blobs) */}
            <div
                className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full opacity-20 blur-[120px] animate-pulse"
                style={{ background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)' }}
            />
            <div
                className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full opacity-15 blur-[120px] animate-pulse"
                style={{ background: 'radial-gradient(circle, #6366f1 0%, transparent 70%)', animationDelay: '2s' }}
            />
            <div
                className="absolute top-[20%] right-[10%] w-[30%] h-[30%] rounded-full opacity-10 blur-[100px]"
                style={{ background: 'radial-gradient(circle, #60a5fa 0%, transparent 70%)', animationDelay: '1s' }}
            />

            {/* Structured Pattern (Subtle dots) */}
            <div
                className="absolute inset-0 opacity-[0.15]"
                style={{
                    backgroundImage: `radial-gradient(#ffffff 0.5px, transparent 0.5px)`,
                    backgroundSize: '24px 24px'
                }}
            />

            {/* Subtlest Noise Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <filter id="noiseFilter">
                        <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
                    </filter>
                    <rect width="100%" height="100%" filter="url(#noiseFilter)" />
                </svg>
            </div>
        </div>
    );
};

export default Background;
