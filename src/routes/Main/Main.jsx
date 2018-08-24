import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './Main.css';
import { Home, About, Credentials, Contact } from '../../views';

class Main extends React.Component {

    constructor(props) {
        super(props);
        console.log(this.props);

        this.style = {
            backgroundImage: props.backgroundImage,
            backgroundPosition: 'center',
            backgroundAttachment: "fixed",
            backgroundSize: "cover"
        };
    }

    render() {
        let { match, location } = this.props;
        return (
            <div id="top" className="Main" style={this.style}>
                {/* <div className="navbarfiller"></div> */}
                <Switch>
                    <Route path={`${match.path}home`} exact component={Home} />
                    <Route path={`${match.path}about`} exact component={About} />
                    <Route path={`${match.path}credentials`} exact component={Credentials} />
                    <Route path={`${match.path}contact`} exact component={Contact} />
                    {/* <Redirect to={{
                        pathname: '/home',
                        state: { from: location }
                    }} /> */}
                    {/* <Route component={PageNotFound} /> */}
                </Switch>
            </div>
        );
    }

}


export default Main;