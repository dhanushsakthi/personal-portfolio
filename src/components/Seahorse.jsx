import React from 'react';

const Seahorse = ({ size = 24, className = "" }) => (
    <img
        src="/seahorse.png"
        alt="Seahorse"
        width={size}
        height={size}
        className={`${className} object-contain`}
        style={{ width: size, height: size }}
    />
);

export default Seahorse;
