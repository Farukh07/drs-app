import React, { Component } from 'react';
import HomeComponent from '../Home/HomeComponent';

class HeaderComponent extends Component {
    render() {
        return (
            <header id="topnav" className="py-lg-2 defaultscroll sticky">
                <div className="container-fluid">
                    <div className="header-container">
                        <a className="logo" href="#"><img src="http://www.clker.com/cliparts/e/p/U/6/0/k/drs-logo-hi.png" className="img-fluid"></img></a>
                        <div id="navigation">
                            <ul className="navigation-menu">
                                <li className="active"><a href="#dashboard">Dashboard</a></li>
                                <li><a href="#reviews">Reviews</a></li>
                                <li><a href="#performance">Performance</a></li>
                                <li><a href="#faq">FAQ<span className="text-lowercase">s</span></a> </li>

                            </ul>
                        </div>
                    </div>
                </div>

            </header>
        );
    }
}

export default HeaderComponent;