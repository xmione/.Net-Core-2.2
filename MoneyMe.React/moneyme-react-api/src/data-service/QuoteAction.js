import React, { Component } from 'react';

import { Container, Button } from 'react-bootstrap';
import QuoteList from './GetQuote';
import AddQuote from './AddQuote';
import axios from 'axios';
const apiUrl = 'http://localhost:26344/api/Calculator/';

class QuoteActionApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAddQuote: false,
      error: null,
      response: {},
      quoteData: {},
      isEditQuote: false,
      isQuoteDetails:true,
    }

    this.onFormSubmit = this.onFormSubmit.bind(this);

  }

  onCreate() {
    this.setState({ isAddQuote: true });
    this.setState({ isQuoteDetails: false });
  }
  onDetails() {
    this.setState({ isQuoteDetails: true });
    this.setState({ isAddQuote: false });
  }

  onFormSubmit(data) {
    this.setState({ isAddQuote: true });
    this.setState({ isQuoteDetails: false });
    if (this.state.isEditQuote) {
     axios.post(apiUrl + 'UpdateQuoteDetails',data).then(result => {
      alert(result.result);
        this.setState({
          response:result.result,  
          isAddQuote: false,
          isEditQuote: false
        })
      });
    } else {
   
     axios.post(apiUrl + 'InsertQuoteDetails',data).then(result => {
      alert(result.data);
        this.setState({
          response:result,  
          isAddQuote: false,
          isEditQuote: false
        })
      });
    }
  
  }

  editQuote = ID => {

    this.setState({ isQuoteDetails: false });
   axios.post(apiUrl + "GetQuoteDetailsByID", {"ID":ID}).then(result => {

        this.setState({
          isEditQuote: true,
          isAddQuote: false,
          quoteData: result.data         
        });
      },
      (error) => {
        this.setState({ error });
      }
    )
   
  }


  render() {
  
    let quoteForm;
    if (this.state.isAddQuote || this.state.isEditQuote) {

      quoteForm = <AddQuote onFormSubmit={this.onFormSubmit} quote={this.state.quoteData} />
     
    }
  

    return (
      <div className="App">
        <Container>
          <h1 style={{ textAlign: 'center' }}>Quote List</h1>
          <hr></hr>
          {!this.state.isQuoteDetails && <Button variant="primary" onClick={() => this.onDetails()}> Quote Details</Button>}
          {!this.state.isAddQuote && <Button variant="primary" onClick={() => this.onCreate()}>Add Quote</Button>}
          <br></br>
          {!this.state.isAddQuote && <QuoteList editQuote={this.editQuote} />}
          {quoteForm}
        </Container>
      </div>
    );
  }
}
export default QuoteActionApp;