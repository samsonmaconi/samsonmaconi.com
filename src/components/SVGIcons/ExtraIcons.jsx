import React from 'react';

export const Typescript_SVG = () => {
    return (
        <svg viewBox="0 0 128 128">
            <rect width="128" height="128" rx="10" fill="#3178C6" />
            <text x="116" y="112" textAnchor="end" fontFamily="Arial, Helvetica, sans-serif" fontWeight="700" fontSize="66" fill="#FFFFFF">TS</text>
        </svg>
    );
}

// A generic speed gauge (not a brand mark) for Core Web Vitals.
export const WebVitals_SVG = () => {
    return (
        <svg viewBox="0 0 128 128">
            <title>Core Web Vitals</title>
            <path d="M16 96 A48 48 0 1 1 112 96" fill="none" stroke="#0CCE6B" strokeWidth="12" strokeLinecap="round" />
            <path d="M64 96 L92 48" stroke="#202124" strokeWidth="8" strokeLinecap="round" />
            <circle cx="64" cy="96" r="10" fill="#202124" />
        </svg>
    );
}

export const Graphql_SVG = () => {
    return (
        <svg viewBox="0 0 128 128">
            <g fill="none" stroke="#E10098" strokeWidth="5" strokeLinejoin="round">
                <polygon points="64,16 105.6,40 105.6,88 64,112 22.4,88 22.4,40" />
                <polygon points="64,16 105.6,88 22.4,88" />
                <polygon points="105.6,40 64,112 22.4,40" />
            </g>
            <g fill="#E10098">
                <circle cx="64" cy="16" r="9" />
                <circle cx="105.6" cy="40" r="9" />
                <circle cx="105.6" cy="88" r="9" />
                <circle cx="64" cy="112" r="9" />
                <circle cx="22.4" cy="88" r="9" />
                <circle cx="22.4" cy="40" r="9" />
            </g>
        </svg>
    );
}

// Generic labelled tile for skills without a bundled logo (including AI tools).
// Deliberately not brand marks: just the name on a coloured tile.
export const Badge_SVG = ({ label, color = '#37474F' }) => {
    const lines = label.split(' ');
    const longest = Math.max(...lines.map(l => l.length));
    const size = Math.min(30, Math.floor(108 / (longest * 0.6)));
    const startY = 64 - ((lines.length - 1) * size * 1.15) / 2 + size * 0.35;
    return (
        <svg viewBox="0 0 128 128">
            <title>{label}</title>
            <rect width="128" height="128" rx="14" fill={color} />
            {lines.map((line, i) => (
                <text key={i} x="64" y={startY + i * size * 1.15} textAnchor="middle" fontFamily="Arial, Helvetica, sans-serif" fontWeight="700" fontSize={size} fill="#FFFFFF">{line}</text>
            ))}
        </svg>
    );
}
