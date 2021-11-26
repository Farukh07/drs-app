import React, { Component } from 'react';
import HomeComponent from '../Home/HomeComponent';

class HeaderComponent extends Component {
    render() {
        return (
            <div className="row">
                <HomeComponent></HomeComponent>
            </div>
        );
    }
}

export default HeaderComponent;