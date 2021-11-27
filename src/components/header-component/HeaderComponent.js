import React, { Component } from 'react';
import HomeComponent from '../Home/HomeComponent';
import ReviewComponent from '../Review/ReviewComponent';
class HeaderComponent extends Component {
    render() {
        return (
            <div className="row">
                <ReviewComponent></ReviewComponent>
            </div>
        );
    }
}

export default HeaderComponent;