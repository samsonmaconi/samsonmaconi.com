export default () => {
    return {
        profile: [
            ["Name", "Samson Maconi"],
            ["Favorite Colour", "Teal"],
            ["Lucky Number", 17],
            ["Focus", "React, TypeScript & web performance"],
            ["Open to", "Full-time, contract & freelance work"],
            ["Location", "Lagos, Nigeria"]
        ],

        quotes: [
            ["The best way to <span>predict your story</span> is to write it.", "To paraphrase Abraham Lincoln"],
            ["<span>Be fearless</span> in the pursuit of what <span>sets your soul on fire</span>.", "Unknown"],
            ["Find out <span>who you are</span> and do it on <span>purpose</span>.", "Dolly Parton"],
            ["The opposite of love is not hate... the opposite of life is not death, it's <span>indifference</span>.", "Elie Wiesel"],
            ["If you are <span>neutral</span> in situations of injustice, you have chosen the side of the <span>oppressor</span>.", "Desmond Tutu"]
        ],

        skillSet: {
            // [skills, proficiency]: 1 = Expert, 2 = Advanced, 3 = Intermediate. First three render large.
            AppDev: {
                "Frontend": [["React", "TypeScript", "GraphQL", "Next.js", "React Native", "NodeJS"], [1, 1, 1, 2, 2, 1]],
                "Performance & Quality": [["Web Vitals", "Jest", "Playwright", "Accessibility", "Design Systems", "A/B Testing"], [1, 1, 2, 2, 1, 2]],
                "AI-Assisted Development": [["Claude Code", "Copilot", "Cursor", "MCP", "Prompting", "Agents"], [2, 2, 2, 2, 2, 2]],
                "Platforms & Tools": [["Git", "Azure", "Databricks", "VSCode", "NPM", "CI/CD"], [1, 2, 2, 1, 1, 2]],
                "Languages": [["Javascript", "TypeScript", "HTML", "CSS", "Python", "SQL"], [1, 1, 1, 1, 2, 1]]
            }
        }
    }
}
