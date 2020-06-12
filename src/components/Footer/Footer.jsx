import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default class Footer extends React.Component {

    render() {
        return (
            <div>
                <footer id="footer" className="Footer footer container-fluid pt-5 animated fadeIn">
                    <div className="row">
                        <div className="col-12">
                            <ul className="list-unstyled nav justify-content-center">
                                <li className="nav-item"><a className="nav-link fab fa-twitter fa-lg" target="_blank" rel="noopener noreferrer" href="https://twitter.com/samsonmaconi"></a></li>
                                <li className="nav-item"><a className="nav-link fab fa-github fa-lg" target="_blank" rel="noopener noreferrer" href="https://github.com/samsonmaconi"></a></li>
                                <li className="nav-item"><a className="nav-link fab fa-instagram fa-lg" target="_blank" rel="noopener noreferrer" href="http://instagram.com/samsonmaconi"></a></li>
                                <li className="nav-item"><a className="nav-link fab fa-linkedin-in fa-lg" target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/samsonmaconi/"></a></li>
                                <li className="nav-item"><a className="nav-link fab fa-facebook-f fa-lg" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/samsonmaconi"></a></li>
                                <li className="nav-item"><a className="nav-link fas fa fa-envelope fa-lg d-none d-md-block" href="mailto:hello@samsonmaconi.com"></a></li>
                            </ul>
                            <p className="pt-3 text-center copyright mt-2 mb-0">© {new Date().getFullYear()} Made with <i id="love" className="fas fa-heart"></i> by <Link className="themepulse-hover" to="/about">Samson Maconi</Link>.</p>
                        </div>
                    </div>

                </footer>
            </div>

        );
    }
}
