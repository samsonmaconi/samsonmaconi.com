import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import Section from '../Section';

export default class QuotesSection extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentQuoteId: 0
        };
        this.quotes = props.quotes;
    }

    componentDidMount() {
        this.quotesInterval = setInterval(
            () => {
                this.nextQuote()
            }, 17000
        );
    }

    componentWillUnmount() {
        clearInterval(this.quotesInterval);
    }

    nextQuote() {
        let newCurrentQuoteId = this.state.currentQuoteId < 4 ? this.state.currentQuoteId + 1 : 0;
        this.setState({
            currentQuoteId: newCurrentQuoteId
        });
    }

    render() {

        return (
            <Section id="quotes" className="quotes" fluid={1} backgroundImage={this.props.backgroundImage}>
                <div className="row mx-md-5">
                    <div className="col text-center align-self-center animated zoomInUp" key={this.state.currentQuoteId} >
                        <q className="display-4">
                            {ReactHtmlParser(this.quotes[this.state.currentQuoteId][0])}
                        </q>
                    </div>
                </div>
            </Section>
        );
    }
}