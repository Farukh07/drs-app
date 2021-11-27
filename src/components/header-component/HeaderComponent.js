import React, { Component } from 'react';
import HomeComponent from '../Home/HomeComponent';
import PerformanceReviewComponent from '../PerformanceReview/PerformanceReviewComponent';
class HeaderComponent extends Component {
    render() {
        return (
            <div className="row">
                <PerformanceReviewComponent></PerformanceReviewComponent>
            </div>
        );
    }
}

export default HeaderComponent;