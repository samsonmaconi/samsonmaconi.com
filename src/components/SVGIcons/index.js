import React from 'react';
import SVGIcons from './SVGIcons.jsx';
import { Typescript_SVG, Graphql_SVG, WebVitals_SVG, Badge_SVG } from './ExtraIcons';

// Skills shown as labelled tiles: lowercase name -> [display label, colour]
const BADGES = {
    "next.js": ["Next.js", "#111111"],
    "react native": ["React Native", "#087EA4"],
    "jest": ["Jest", "#99425B"],
    "playwright": ["Play wright", "#2E7D32"],
    "accessibility": ["A11y", "#1565C0"],
    "design systems": ["Design Systems", "#6A1B9A"],
    "a/b testing": ["A/B Tests", "#EF6C00"],
    "claude code": ["Claude Code", "#B5532F"],
    "copilot": ["Copilot", "#37474F"],
    "cursor": ["Cursor", "#212121"],
    "mcp": ["MCP", "#00695C"],
    "prompting": ["Prompting", "#4527A0"],
    "agents": ["Agents", "#AD1457"],
    "azure": ["Azure", "#0078D4"],
    "databricks": ["Data bricks", "#C62828"],
    "ci/cd": ["CI/CD", "#455A64"]
};

// Newer icons live in ExtraIcons.jsx; everything else falls through to the original set.
export default function Icon({ icon }) {
    const key = icon.toLowerCase();
    if (BADGES[key]) return <Badge_SVG label={BADGES[key][0]} color={BADGES[key][1]} />;
    switch (key) {
        case "typescript":
        case "ts": return <Typescript_SVG />;
        case "graphql": return <Graphql_SVG />;
        case "web vitals": return <WebVitals_SVG />;
        default: return <SVGIcons icon={icon} />;
    }
}
