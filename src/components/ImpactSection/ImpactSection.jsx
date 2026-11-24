import React from 'react';
import Section from '../Section';
import './ImpactSection.css';

// Each stat counts from `from` to `to` the first time the section scrolls into view.
const STATS = [
    { from: 93, to: 97.8, decimals: 1, suffix: '%', label: 'Confluence layout-shift rating, up from about 93%', source: 'Atlassian' },
    { from: 0, to: 35, suffix: '+', label: 'GraphQL queries consolidated for faster page loads', source: 'Atlassian' },
    { from: 6, to: 1, prefix: '≤ ', label: 'monthly production hotfixes, down from 4 to 6', source: 'Atlassian' },
    { from: 0, to: 10, suffix: '+', label: 'years building production web interfaces', source: 'Microsoft, startups & freelance' }
];

// Official logo files go in public/img/companies (see the README there).
// Until a file exists, the company name is shown instead.
const COMPANIES = [
    { name: 'Atlassian', logo: './img/companies/atlassian.svg' },
    { name: 'Microsoft', logo: './img/companies/microsoft.svg' },
    { name: 'Versus', logo: './img/companies/versus.svg' },
    { name: 'Calabrio', logo: './img/companies/calabrio.svg' }
];

class CompanyLogo extends React.Component {

    constructor(props) {
        super(props);
        this.state = { failed: false };
    }

    render() {
        const { name, logo } = this.props;
        return this.state.failed
            ? <span className="company-name">{name}</span>
            : <img className="company-logo" src={logo} alt={name} onError={() => this.setState({ failed: true })} />;
    }
}

export default class ImpactSection extends React.Component {

    constructor(props) {
        super(props);
        this.statsRef = React.createRef();
        this.state = { progress: 0 };
        this.frame = null;
    }

    componentDidMount() {
        const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reduceMotion || !('IntersectionObserver' in window)) {
            this.setState({ progress: 1 });
            return;
        }
        this.observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                this.observer.disconnect();
                this.startCount();
            }
        }, { threshold: 0.4 });
        this.observer.observe(this.statsRef.current);
    }

    componentWillUnmount() {
        if (this.observer) this.observer.disconnect();
        if (this.frame) cancelAnimationFrame(this.frame);
    }

    startCount() {
        const duration = 1600;
        const start = performance.now();
        const tick = now => {
            const t = Math.min((now - start) / duration, 1);
            this.setState({ progress: 1 - Math.pow(1 - t, 3) });
            if (t < 1) this.frame = requestAnimationFrame(tick);
        };
        this.frame = requestAnimationFrame(tick);
    }

    format(stat) {
        const value = stat.from + (stat.to - stat.from) * this.state.progress;
        return `${stat.prefix || ''}${value.toFixed(stat.decimals || 0)}${stat.suffix || ''}`;
    }

    render() {
        return (
            <Section id="impact" className="ImpactSection" header="Impact" fluid={true} link="/credentials" linkToolTip="See where I did it...">
                <div className="row justify-content-center py-5 px-md-5" ref={this.statsRef}>
                    {STATS.map((stat, key) => (
                        <div key={key} className="col-12 col-sm-6 col-lg-3 text-center py-4">
                            <div className="stat-number themecolor1">{this.format(stat)}</div>
                            <p className="stat-label">{stat.label}</p>
                            <span className="stat-source">{stat.source}</span>
                        </div>
                    ))}
                </div>
                <div className="companies text-center pb-5">
                    <p className="companies-label">Previously at</p>
                    <div className="d-flex flex-wrap align-items-center justify-content-center">
                        {COMPANIES.map(company => (
                            <div key={company.name} className="company mx-4 my-3">
                                <CompanyLogo name={company.name} logo={company.logo} />
                            </div>
                        ))}
                    </div>
                    <small className="companies-note">Logos are trademarks of their respective owners. No endorsement implied.</small>
                </div>
            </Section>
        );
    }
}
