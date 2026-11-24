export default () => {
    return {
        summary: [
            ["<p>Back in '08 - '12, during my undergraduate studies, I had the fortune of learning from a broad range of students and experienced scholars from multicultural backgrounds at <a class='cu' href='http://www.covenantuniversity.edu.ng'>Covenant University</a>, where I received a comprehensive exposure and " +
                "theoretical understanding of the core areas of Computer Science.</p> <p>Over the 4-year period and beyond, I developed an interest in Application development, honing my skills in several programming and scripting languages and frameworks by studying and taking on freelance projects.</p>", "./img/credentials/cu_logo.png", "Covenant University"],
            ["<p>I recently worked with a top financial institutions in Nigeria, <a class='gtb' href='http://www.gtbank.com'>Guaranty Trust Bank</a>, where I gained a more comprehensive outlook on the " +
                "intricacies of the local economy as it relates to the Financial Services industry and IT. These experiences have taught me the importance of capital structure, resource allocation and the impact of innovation in a dynamic business ecosystem.</p>" +
                "<p>In spite my exciting foray in the banking sector, my passion for IT remains resolute as I maintain an appreciation for the breadth of this field and its boundless possibilities for growth.</p>", "./img/credentials/gtbank_logo.png", "GTBank"],
        ],

        cv: {
            "Technology": {
                "Day-to-day Comfort": ["Javascript", "Typescript", "GraphQL (Apollo, Relay)", "Next.js", "React Native", "Jest", "Playwright", "Web performance (Core Web Vitals)", "Design systems", "Accessibility (WCAG)", "HTML5", "SCSS / CSS", "SQL", "React", "Angular", "REDUX", "NodeJS", "CI/CD", "JQuery", "Python", "Bootstrap", "Amazon Web Services", "Version Control (GIT)", "MySQL", "Photoshop", "VSCode", "Webpack", "Gulp", "NPM", "Java", "MacOS", "Windows", "Linux"],
                "Experience with": ["Azure", "Visual Studio", "Google Web Toolkit", "PHP", "Databricks", "Statsig", "Prebid.js", "Google Ad Manager"]
            },
            "Work Experience": [
                ["Engineering Senior Associate", "Atlassian", "Sep 2025 - Nov 2026", [
                    "Confluence Frontend Performance team. Lifted Confluence's layout-shift (CLS) rating from about 93% to 97.8% with fixes across five first-party macros, skeleton loaders and SSR manifest preloading.",
                    "Consolidated 35+ GraphQL queries, improving page loads (VC90) by an estimated 5-10% and Total Blocking Time by an estimated 10-15%.",
                    "Helped migrate Confluence's data layer from legacy Confluence Cloud GraphQL to the Atlassian GraphQL Gateway behind Statsig and Switcheroo feature flags.",
                    "Built the Agentic Analytics UI with designers for Confluence web and mobile.",
                    "Cut monthly production hotfixes from 4-6 to at most one by decoupling hydration, SSR and visual-parity E2E suites and building a Databricks dashboard.",
                    "Refactored code ownership across the Atlassian frontend monorepo with Compass metadata: 20+ proposals to automate PR reviewer routing.",
                    "Joined on-call, kept runbooks current, conducted interviews and onboarded two graduates in Australia."
                ], "Vancouver, Canada (Remote)"],
                ["Senior Software Engineer", "Versus", "Jul 2023 - Aug 2025", [
                    "Contributed to the FourPlay Sports React Native app, now on the App Store and Google Play, and built a lightweight Reddit app to onboard users.",
                    "Owned end-to-end ad monetization with Prebid.js, Google Ad Manager and Video.js.",
                    "Led a reusable design system and moved the core widget codebase from JavaScript to TypeScript, with a configuration system for partner styling, feature toggles and A/B tests.",
                    "Mentored peers through code reviews and engineering best practices."
                ], "California, USA (Remote)"],
                ["Software Engineer III", "Microsoft", "Jul 2021 - Feb 2023", [
                    "Led engineering for cryptocurrency experiences across MSN and Windows.",
                    "Built an Instagram-style Finance video feed that Sports later adopted to replace its legacy solution.",
                    "Championed reusable, configurable components aligned with the internal design system.",
                    "Added UI test suites for early regression detection and mentored junior developers."
                ], "Vancouver, Canada (Remote)"],
                ["Freelance Software Developer", "samsonmaconi.com", "Jul 2012 - Present", "The goal in mind is to provide small businesses as well as recently established startups with well-thought websites and applications that conveys their unique brand or product and actually works. Primary code utilization for samsonmaconi.com includes ReactJS and SCSS, and Git for Version control.", "Everywhere"],
                ["Software Engineer", "Calabrio", "Apr 2020 - Jun 2021", [
                    "Led the rebuild of a core data-filtering interface, replacing legacy GWT with React.",
                    "Improved CI/CD through stronger test coverage, earlier testing and better developer tools."
                ], "Vancouver, Canada (Remote)"],
                ["JavaScript Developer", "Semios Bio Technologies", "Sep 2019 - Dec 2019", [
                    "Built responsive React web and mobile apps.",
                    "Helped migrate the architecture from REST to GraphQL."
                ], "Vancouver, Canada"],
                ["Portfolio Manager", "Guaranty Trust Bank Treasury", "Mar 2015 - Jul 2018", "After my National Youth Service Year, I secured a job with Guaranty Trust Bank as a Portfolio Manager in the bank’s Treasury. My primary responsibilities included, and were not limited to, Liquidity Management and Optimal utilisation of funds.", "Lagos, Nigeria"],
                ["Website Developer and Content Manager", "Moke Zenith School of Excellence", "Nov 2012 - Nov 2013", "During my National Youth Service Year I had the privilege of working with a school in a rural community where I volunteered to develop a website for the school essentially for information dissemination.", "Ogun, Nigeria"],
                ["IT Associate", "DBH Solutions", "Dec 2012 - Sep 2013", "I also worked with a Technology Consultancy firm, DBH Solutions during my National Youth Service Year. My primary responsibilities were Network and System Administration. I also provided project management support working with tools like MS-Visio and MS-Projects, and compilation of project proposal documents for prospective clients.", "Lagos, Nigeria"],
                ["IT Trainee", "Financial Datanet House Limited (FDHL)", "Mar 2011 – Aug 2011", "I had my first immersive exposure to the workforce in 2011 where I interned at FDHL, a Training and Consulting firm. I was a member of a small team that managed the firms Network and Inventory management.", "Lagos, Nigeria"]
            ],
            "Certification": [
                ["ACI Dealing Certificate", "Association Cambiste Internationale", "2016"],
                ["Cisco Certified Networking Associate", "Cisco Systems", "2012"],
                ["Oracle Certified Associate", "Oracle Corporation", "2011"]
            ],
            "Education": [
                ["Master of Applied Computer Science", "Dalhousie University", "2018 - 2020", "Halifax, Canada"],
                ["Guaranty Trust Bank Entry Level Program", "GTBank Academy", "2014 - 2015", "Lagos, Nigeria"],
                ["BSc Hons, Management Information Systems", "Covenant University, Ota", "2008 - 2012", "Ogun, Nigeria"],
                ["General Education and Vocational School", "Citizens Comprehensive College", "2002 – 2008", "Lagos, Nigeria"]
            ],
            "Language": [
                ["English", "Full Professional Proficiency"],
                ["French", "Elementary Proficiency"],
                ["Yoruba", "Native Proficiency"]
            ]
        }
    }
}