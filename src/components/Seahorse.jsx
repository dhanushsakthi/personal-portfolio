import React from 'react';

const Seahorse = ({ size = 24, className = "" }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="currentColor"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
    >
        {/* Detailed Seahorse Silhouette */}
        <path d="M42 15C38 15 34 17 32 20C30 23 30 28 34 32C30 35 25 35 22 36C20 37 18 39 18 41C18 43 20 44 22 44C26 44 32 42 36 38C38 42 42 45 47 45C55 45 60 40 60 32C60 25 55 20 48 20C48 18 46 15 42 15Z" />
        <path d="M47 45C42 45 35 50 35 65C35 75 42 82 50 82C58 82 65 75 65 65C65 58 60 52 55 50" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M50 82C40 82 32 74 32 64C32 55 38 48 45 48" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M52 30C52 31 51 32 50 32C49 32 48 31 48 30C48 29 49 28 50 28C51 28 52 29 52 30Z" fill="white" />
        {/* Dorsal spikes */}
        <path d="M48 20L52 15L55 20L60 16L62 22L68 18L68 25L75 22L73 30L80 28L75 35L82 35L75 42L80 45L72 50" />
        {/* Tail spiral detail */}
        <path d="M50 82C55 82 60 78 60 72C60 67 56 62 50 62C45 62 42 66 42 70C42 73 44 76 47 76C49 76 51 74 51 72C51 71 50 70 49 70" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

export default Seahorse;
