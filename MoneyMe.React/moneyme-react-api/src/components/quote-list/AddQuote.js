import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';


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

    if (props.quote.result !== undefined) {
      this.state = props.quote.result
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
          <Row>
             <Col sm={7}>
              <form onSubmit={this.handleSubmit}>
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
                  <div className="form-group" >
                  <input type="hidden" name="id" className="form-control" id="id"  placeholder="ID" defaultValue={this.state.id} onChange={this.handleChange} />
                    <Button variant="success" type="submit">{actionStatus}</Button>
                  </div>
                  
                  {/* <button type="submit" className="btn btn-success btn-block">Submit</button> */}
                </form>
              {/*<Form onSubmit={this.handleSubmit}>
              <Form.Label>Amount</Form.Label>
                 <Form.Group>
                  <Form.Label>Amount</Form.Label>
                   <Form.Control
                    type="text"
                    name="Amount"
                    onChange={this.handleChange}
                    defaultValue={this.state.amount}
                    placeholder="Amount" />  
                </Form.Group>
                <Form.Group controlId="Term">
                  <Form.Label>Term</Form.Label>
                  <Form.Control
                    type="text"
                    name="Term"
                    onChange={this.handleChange}
                    defaultValue={this.state.term}
                    placeholder="Term" />
                </Form.Group>
                <Form.Group controlId="TermType" hidden>
                  <Form.Label>Term Type</Form.Label>
                  <Form.Control
                    type="text"
                    name="TermType"
                    value={this.state.termType}
                    onChange={this.handleChange}
                    placeholder="Term Type" />
                </Form.Group>
                <Form.Group controlId="Rate">
                  <Form.Label>Rate</Form.Label>
                  <Form.Control
                    type="text"
                    name="Rate"
                    onChange={this.handleChange}
                    defaultValue={this.state.rate}
                    placeholder="Rate" />
                </Form.Group>        
                <Form.Group controlId="RepaymentMonthly" hidden>
                  <Form.Label>RepaymentMonthly</Form.Label>
                  <Form.Control
                    type="text"
                    name="RepaymentMonthly"
                    onChange={this.handleChange}
                    defaultValue={this.state.repaymentMonthly}
                    placeholder="Repayment Monthly" />
                </Form.Group>
                <Form.Group controlId="RepaymentWeekly" hidden>
                  <Form.Label>RepaymentWeekly</Form.Label>
                  <Form.Control
                    type="text"
                    name="RepaymentWeekly"
                    onChange={this.handleChange}
                    defaultValue={this.state.repaymentWeekly}
                    placeholder="Repayment Weekly" />
                </Form.Group>      
                <Form.Group controlId="Title">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    name="Title"
                    onChange={this.handleChange}
                    defaultValue={this.state.title}
                    placeholder="Title" />
                </Form.Group>
                <Form.Group controlId="FirstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="FirstName"
                    onChange={this.handleChange}
                    defaultValue={this.state.firstName}
                    placeholder="First Name" />
                </Form.Group>
                <Form.Group controlId="LastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="LastName"
                    onChange={this.handleChange}
                    defaultValue={this.state.lastName}
                    placeholder="Last Name" />
                </Form.Group>
                <Form.Group controlId="EmailAddress">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="text"
                    name="EmailAddress"
                    onChange={this.handleChange}
                    defaultValue={this.state.emailAddress}
                    placeholder="Email Address" />
                </Form.Group>
                <Form.Group controlId="MobileNo">
                  <Form.Label>MobileNo</Form.Label>
                  <Form.Control
                    type="text"
                    name="MobileNo"
                    onChange={this.handleChange}
                    defaultValue={this.state.mobileNo}
                    placeholder="MobileNo" />
                </Form.Group>
                <Form.Group>
                  <Form.Control type="hidden" name="ID" value={this.state.id} />
                  <Button variant="success" type="submit">{actionStatus}</Button>          
                </Form.Group>
              </Form> */}
            </Col> 
          </Row>
      </div>
    )
  }
}

export default AddQuote;