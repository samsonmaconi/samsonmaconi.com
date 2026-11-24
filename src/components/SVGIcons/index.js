import React from 'react';
import SVGIcons from './SVGIcons.jsx';
import { Typescript_SVG, Graphql_SVG, WebVitals_SVG } from './ExtraIcons';

// Newer icons live in ExtraIcons.jsx; everything else falls through to the original set.
export default function Icon({ icon }) {
    switch (icon.toLowerCase()) {
        case "typescript":
        case "ts": return <Typescript_SVG />;
        case "graphql": return <Graphql_SVG />;
        case "web vitals": return <WebVitals_SVG />;
        default: return <SVGIcons icon={icon} />;
    }
}
