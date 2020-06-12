export default () => {
    return {
        profile: [
            ["Name", "Samson Maconi"],
            ["Birthdate", "1993-07-17"],
            ["Birthplace", "Lagos, Nigeria"],
            ["Favorite Colour", "Teal"],
            ["Lucky Number", 17],
            ["Choice Editor", "VS Code"],
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
            AppDev: {
                "Frameworks & Libraries": [["React", "NodeJS", "JQuery", ".NET", "Bootstrap", "MongoDB", "BABEL"], [1, 1, 1, 3, 1, 2, 2]],
                "Tools": [["Git", "MySQL", "VSCode", "Webpack", "Gulp", "NPM", "Visual Studio"], [1, 1, 1, 2, 2, 1, 1]],
                "Programming Languages": [["Javascript", "PHP", "Python", "HTML", "SCSS", "CSS", "SQL", "Java"], [1, 2, 2, 1, 1, 1, 1, 2]],
                "Operating Systems": [["MacOS", "Windows", "Ubuntu", "Linux"], [1, 1, 2, 1]]
            },
            Others: {
                "Others": ["Photoshop", "Portfolio Management", "Swimming"]
            }
        }
    }
}