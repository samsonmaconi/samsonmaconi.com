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
// Skill name -> Simple Icons slug. Logo files are fetched into public/img/skills by scripts/fetch-skill-icons.sh;
// any that are missing fall back to the bundled inline icons below.
const LOGO_SLUGS = {
    "react": "react", "typescript": "typescript", "graphql": "graphql", "next.js": "nextdotjs",
    "react native": "react", "nodejs": "nodedotjs", "jest": "jest", "playwright": "playwright",
    "claude code": "claude", "copilot": "githubcopilot", "cursor": "cursor", "mcp": "modelcontextprotocol",
    "git": "git", "azure": "microsoftazure", "databricks": "databricks", "npm": "npm",
    "javascript": "javascript", "html": "html5", "css": "css3", "python": "python"
};

class LogoImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { failed: false };
    }
    render() {
        if (this.state.failed) return this.props.fallback;
        return <img className="img-fluid" src={`./img/skills/${this.props.file}.svg`} alt={this.props.name} title={this.props.name} onError={() => this.setState({ failed: true })} />;
    }
}

export default function Icon({ icon }) {
    const key = icon.toLowerCase();
    const slug = LOGO_SLUGS[key];
    if (slug) return <LogoImage file={key.replace(/[^a-z0-9]+/g, '-')} name={icon} fallback={renderInline(icon)} />;
    return renderInline(icon);
}

function renderInline(icon) {
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
