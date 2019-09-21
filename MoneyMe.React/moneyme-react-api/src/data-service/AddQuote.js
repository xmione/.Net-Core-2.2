import React from 'react';
import { Row, Form, Col, Button } from 'react-bootstrap';


class AddQuote extends React.Component {
  constructor(props) {
    super(props);
 
    this.initialState = {
      ID: 0,
      Amount: 0.00,
      Term: 0,
      TermType: 0,
      Rate:0.00,
      RepaymentMonthly:0.00,
      RepaymentWeekly:0.00,
      Title:'',
      FirstName: '',
      LastName: '',
      EmailAddress: '',
      MobileNo: ''
    }

    if (props.quote.result.id) {
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
    if (this.state.result.id) {

      pageTitle = <h3>Edit Quote</h3>
      actionStatus = <b>Update</b>
    } else {
      pageTitle = <h2>Add Quote</h2>
      actionStatus = <b>Save</b>
    }

    return (
      <div>      
        <h2> {pageTitle}</h2>
        <Row>
          <Col sm={7}>
            <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="Amount">
                <Form.Label>Amount</Form.Label>
                <Form.Control
                  type="text"
                  name="Amount"
                  value={this.state.result.amount}
                  onChange={this.handleChange}
                  placeholder="Amount" />
              </Form.Group>
              <Form.Group controlId="Term">
                <Form.Label>Term</Form.Label>
                <Form.Control
                  type="text"
                  name="Term"
                  value={this.state.result.term}
                  onChange={this.handleChange}
                  placeholder="Term" />
              </Form.Group>
              <Form.Group controlId="TermType">
                <Form.Label>Term Type</Form.Label>
                <Form.Control
                  type="text"
                  name="TermType"
                  value={this.state.result.termType}
                  onChange={this.handleChange}
                  placeholder="Term Type" 
                  hidden/>
              </Form.Group>
              <Form.Group controlId="Rate">
                <Form.Label>Rate</Form.Label>
                <Form.Control
                  type="text"
                  name="Rate"
                  value={this.state.result.rate}
                  onChange={this.handleChange}
                  placeholder="Rate" />
              </Form.Group>        
              <Form.Group controlId="RepaymentMonthly">
                <Form.Label>RepaymentMonthly</Form.Label>
                <Form.Control
                  type="text"
                  name="RepaymentMonthly"
                  value={this.state.result.repaymentMonthly}
                  onChange={this.handleChange}
                  placeholder="Repayment Monthly" />
              </Form.Group>
              <Form.Group controlId="RepaymentWeekly">
                <Form.Label>RepaymentWeekly</Form.Label>
                <Form.Control
                  type="text"
                  name="RepaymentWeekly"
                  value={this.state.result.repaymentWeekly}
                  onChange={this.handleChange}
                  placeholder="Repayment Weekly" />
              </Form.Group>      
              <Form.Group controlId="Title">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  name="Title"
                  value={this.state.result.Title}
                  onChange={this.handleChange}
                  placeholder="Title" />
              </Form.Group>
              <Form.Group controlId="FirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  name="FirstName"
                  value={this.state.result.firstName}
                  onChange={this.handleChange}
                  placeholder="First Name" />
              </Form.Group>
              <Form.Group controlId="LastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="LastName"
                  value={this.state.result.lastName}
                  onChange={this.handleChange}
                  placeholder="Last Name" />
              </Form.Group>
              <Form.Group controlId="EmailAddress">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="text"
                  name="EmailAddress"
                  value={this.state.result.emailAddress}
                  onChange={this.handleChange}
                  placeholder="Email Address" />
              </Form.Group>
              <Form.Group controlId="MobileNo">
                <Form.Label>MobileNo</Form.Label>
                <Form.Control
                  type="text"
                  name="MobileNo"
                  value={this.state.result.mobileNo}
                  onChange={this.handleChange}
                  placeholder="MobileNo" />
              </Form.Group>
              <Form.Group>
                <Form.Control type="hidden" name="ID" value={this.state.result.id} />
                <Button variant="success" type="submit">{actionStatus}</Button>          

              </Form.Group>
            </Form>
          </Col>
        </Row>
      </div>
    )
  }
}

export default AddQuote;