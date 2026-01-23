import React from 'react';

const Seahorse = ({ size = 24, className = "" }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
    >
        {/* Artistic Seahorse Silhouette matching the user's logo style */}
        <path d="M12 2C10.5 2 9.5 3 9.5 4.5C9.5 5.5 10 6 11 6.5C10 7.5 9 9 9 11C9 14 11 15.5 13 15.5C13 17.5 11 18.5 10 18.5C9 18.5 8 18 8 17" />
        <path d="M14 5C16 5 17 6.5 17 8.5C17 11 15 13 13 13" />
        <path d="M11 20C12 21 14 21.5 16 21C18 20.5 19.5 18.5 19 16.5C18.5 14.5 16.5 13 14.5 13.5" />
        <path d="M9.5 4.5C9.5 4.2 9.7 4 10 4" />
        <circle cx="11.5" cy="4.2" r="0.5" fill="currentColor" stroke="none" />
    </svg>
);

export default Seahorse;
