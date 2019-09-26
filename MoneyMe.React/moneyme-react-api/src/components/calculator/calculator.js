import React from './node_modules/react';
import { Grid, Col, Row, Button } from './node_modules/react-bootstrap';
import './Home.css';
import '../Common/css/calculator.css';

const home = (props) => {
    return (
        <Grid>
            <Row>
                <Col md={12}>
                    <div className="row row-padding">
                        <div className="quote-calculator-font">
                            Quote Calculator
                        </div>
                    </div>
                    <div className="row center-block">
                        <div className="content-width">
                            <div id="slider">
                                <div id="custom-handle" className="ui-slider-handle"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row min-max-row-padding">
                        <div className="content-width">
                            <div id="min-value" className="min-value"></div>
                            <div className="center-text">How much do you need?</div>
                            <div id="max-value" className="max-value"></div>
                        </div>
                    </div>
                    <div className="row center-block">
                        <div className="content-width">
                            <div id="term-slider">
                                <div id="term-custom-handle" className="ui-slider-handle"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row min-max-row-padding">
                        <div className="content-width">
                            <div id="term-min-value" className="min-value"></div>
                            <div className="center-text">Terms</div>
                            <div id="term-max-value" className="max-value"></div>
                        </div>
                    </div>
                    <div className="row center-block">
                        <div className="content-width">
                            <div id="rate-slider">
                                <div id="rate-custom-handle" className="ui-slider-handle"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row min-max-row-padding">
                        <div className="content-width">
                            <div id="rate-min-value" className="min-value"></div>
                            <div className="center-text">Rate</div>
                            <div id="rate-max-value" className="max-value"></div>
                        </div>
                    </div>
                    <div className="row row-padding"></div>
                    <div className="row">
                        <div className="content-width">
                            <div className="col-md-4">
                                Title:
                            </div>
                            <div className="col-md-4">
                                First Name:
                            </div>
                            <div className="col-md-4">
                                Last Name:
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="content-width">
                            <div className="col-md-4">
                                <select id="title"></select>
                            </div>
                            <div className="col-md-4">
                                <input id="first-name" type="text" value="@Model.FirstName" />
                            </div>
                            <div className="col-md-4">
                                <input id="last-name" type="text" value="@Model.LastName" />
                            </div>
                        </div>
                    </div>
                    <div className="row row-padding"></div>
                    <div className="row">
                        <div className="content-width">
                            <div className="col-md-6">
                                Email:
                            </div>
                            <div className="col-md-6">
                                Mobile:
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="content-width">
                            <div className="col-md-6">
                                <input id="email-address" type="text" value="@Model.EmailAddress" />
                            </div>
                            <div className="col-md-6">
                                <input id="mobile-no" type="text" value="@Model.MobileNo" />
                            </div>
                        </div>
                    </div>
                    <div className="row row-padding">
                        <div className="content-width">
                            <Button href="#" id="calculate-btn" className="calculate-btn">Calculate quote</Button>
                        </div>
                    </div>
                    <div>
                        <input id="hdn-id" type="hidden" value="@Model.ID" />
                        <input id="hdn-amount" type="hidden" value="@Model.Amount" />
                        <input id="hdn-term" type="hidden" value="@Model.Term" />
                        <input id="hdn-rate" type="hidden" value="@Model.Rate" />
                        <input id="hdn-title" type="hidden" value="@Model.Title" />
                        <input id="hdn-first-name" type="hidden" value="@Model.FirstName" />
                        <input id="hdn-last-name" type="hidden" value="@Model.LastName" />
                        <input id="hdn-email" type="hidden" value="@Model.EmailAddress" />
                        <input id="hdn-mobile" type="hidden" value="@Model.MobileNo" />
                    </div>
                </Col>
            </Row>
        </Grid>
    )
}

export default home;
 