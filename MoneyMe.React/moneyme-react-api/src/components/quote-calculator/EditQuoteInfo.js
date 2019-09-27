import React from 'react';
import { Grid, Row, Form, Col, Button } from 'react-bootstrap';


class EditQuoteInfo extends React.Component {
  constructor(props) {
    super(props);
 
    this.initialState = {
      ID: 0,
      Amount: props.amount,
      Term: props.term,
      TermType: props.termType,
      Rate: props.rate,
      RepaymentMonthly:0.00,
      RepaymentWeekly:0.00,
      Title: props.title,
      FirstName: props.firstName,
      LastName: props.lastName,
      EmailAddress: props.emailAddress,
      MobileNo: props.mobileNo
    }

    if (props.quote !== undefined) {
      this.state = props.quote
    } else {
      this.state = this.initialState;
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onFormSubmit(this.state);
    this.setState(this.initialState);
  }
  render() {
    let pageTitle;
    let actionStatus;
    if (this.state.id) {

      pageTitle = <b>Edit Quote</b>
      actionStatus = <b>Update</b>
    } else {
      pageTitle = <b>Add Quote</b>
      actionStatus = <b>Save</b>
    }

    return (
      <div>      
        <h2> {pageTitle}</h2>
        <Grid>
          <Row>
              <Col md={12}>
                  <div className="row row-padding">
                      <div className="quote-calculator-font">
                          Compose JSON Object
                      </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="amount">Amount</label>
                    <input name="amount" className="form-control" id="amount" placeholder="Amount" defaultValue={this.state.amount} onChange={this.handleChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="term">Term</label>
                    <input name="term" className="form-control" id="term" placeholder="Term" defaultValue={this.state.term} onChange={this.handleChange} />
                  </div>
                  <div className="form-group" hidden>
                    <label htmlFor="termType">Term Type</label>
                    <input name="termType" className="form-control" id="termType" placeholder="Term Type" defaultValue={this.state.termType} onChange={this.handleChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="rate">Rate</label>
                    <input name="rate" className="form-control" id="rate" placeholder="Rate" defaultValue={this.state.rate} onChange={this.handleChange} />
                  </div>
                  <div className="form-group" hidden>
                    <label htmlFor="repaymentMonthly">RepaymentMonthly</label>
                    <input name="repaymentMonthly" className="form-control" id="repaymentMonthly" placeholder="Repayment Monthly" defaultValue={this.state.repaymentMonthly} onChange={this.handleChange} />
                  </div>
                  <div className="form-group" hidden>
                    <label htmlFor="repaymentWeekly">RepaymentWeekly</label>
                    <input name="repaymentWeekly" className="form-control" id="repaymentWeekly" placeholder="Repayment Weekly" defaultValue={this.state.repaymentWeekly} onChange={this.handleChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input name="title" className="form-control" id="title" placeholder="Title" defaultValue={this.state.title} onChange={this.handleChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input name="firstName" className="form-control" id="firstName" placeholder="First Name" defaultValue={this.state.firstName} onChange={this.handleChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input name="lastName" className="form-control" id="lastName" placeholder="Last Name" defaultValue={this.state.lastName} onChange={this.handleChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="emailAddress">Email Address</label>
                    <input name="emailAddress" className="form-control" id="emailAddress" placeholder="Email Address" defaultValue={this.state.emailAddress} onChange={this.handleChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="MobileNo">Mobile No</label>
                    <input name="mobileNo" className="form-control" id="mobileNo" placeholder="Mobile No" defaultValue={this.state.mobileNo} onChange={this.handleChange} />
                  </div>
                  <div className="row row-padding">
                      <div className="content-width">
                          <Button id="calculator-btn" className="calculate-btn" onClick={this.handleSubmit}>Calculate quote</Button>
                      </div>
                  </div>
              </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default EditQuoteInfo;