import React, { Component } from 'react';
import FaqComponent from './faq-component/FaqComponent';
import HomeComponent from './Home/HomeComponent';
import PerformanceReviewComponent from './PerformanceReview/PerformanceReviewComponent';
import ReviewComponent from './review-component/ReviewComponent';
import GlobalTableComponent from './Table/GlobalTableComponent';

class LandingPage extends Component {
    render() {
        return (
            <div>
                <section class="main-banner" id="dashboard"> 
                    <HomeComponent />
                    <ReviewComponent />
                        
                </section>
                <section class="performance-table-banner" id="reviews">
                        <PerformanceReviewComponent />
                </section>
                <section class="performance-table-banner" id="performance">
                <GlobalTableComponent/>
                </section>
                <section class="main-banner" id="faq">
                    <FaqComponent/>
                </section>
            </div>
        );
    }
}

export default LandingPage;