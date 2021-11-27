import React, { Component } from 'react';
import FaqComponent from './faq-component/FaqComponent';
import HomeComponent from './Home/HomeComponent';
import ReviewComponent from './review-component/ReviewComponent';
import GlobalTableComponent from './Table/GlobalTableComponent';

class LandingPage extends Component {
    render() {
        return (
            <div>
                <section class="main-banner" id="dashboard">
                        <ReviewComponent />
                        <HomeComponent />
                </section>
                <section class="main-banner" id="reviews">
                    <div class="container">
                        <div class="row ">
                            <div class="col-lg-12 text-center">
                                <div class="section-title  ">
                                    <h5 class="main-title">Avishkaar <span class="virtual"> Timelines </span> </h5>

                                </div>
                            </div>
                        </div>
                        <div class="row mt-lg-5">
                            <div class="col-8 mx-auto"><p class="text-center">
                                Avishkaar has 3 rounds of participation. Round 0 and 1 is for registration and idea submission, they run in parallel, round 2 is coding challenge.</p></div>
                        </div>


                    </div>
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