import React, { Component } from 'react';

import { Grid, Row, Button } from 'react-bootstrap';
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
     axios.put(apiUrl + 'UpdateQuoteDetails',data).then(result => {
      alert(result.data);
        this.setState({
          response:result,  
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
   axios.get(apiUrl + "GetQuoteDetailsByID/" + ID).then(result => {

        this.setState({
          isEditQuote: true,
          isAddQuote: true,
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
        <Grid>
          <Row>
          <h1 style={{ textAlign: 'center' }}>CRUD operation in React</h1>
          <hr></hr>
          {!this.state.isQuoteDetails && <Button variant="primary" onClick={() => this.onDetails()}> Quote Details</Button>}
          {!this.state.isAddQuote && <Button variant="primary" onClick={() => this.onCreate()}>Add Quote</Button>}
          <br></br>
          {!this.state.isAddQuote && <QuoteList editQuote={this.editQuote} />}
          {quoteForm}
          </Row>
        </Grid>
      </div>
    );
  }
}
export default QuoteActionApp;