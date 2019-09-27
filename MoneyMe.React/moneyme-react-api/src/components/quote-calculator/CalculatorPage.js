import React, { Component } from 'react';

import { Grid, Row, Button } from 'react-bootstrap';
import QuoteInfo from '../quote-calculator/QuoteInfo';
import EditQuoteInfo from '../quote-calculator/EditQuoteInfo';
import axios from 'axios';
const apiUrl = 'http://localhost:26344/api/Calculator/';

class CalculatorPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAddQuote: true,
      error: null,
      response: {},
      quoteData: this.props.data,
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
        this.setState({
          response:result.result,  
          isAddQuote: false,
          isEditQuote: false
        });
      },
      (error) => {
        this.setState({ error });
      })
      
    } else {
     axios.post(apiUrl + 'InsertQuoteDetails',data).then(result => {
        this.setState({
          response:result,  
          isAddQuote: false,
          isEditQuote: false
        })
      },
      (error) => {
        this.setState({ error });
      });
      
    }
    // window.location.reload();
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

  
  deleteQuote = ID => {

    this.setState({ isQuoteDetails: false });
   axios.post(apiUrl + "DeleteQuoteDetailsByID", {"ID":ID}).then(result => {

        this.setState({
          isEditQuote: false,
          isAddQuote: false,
        });
        window.location.reload();
        
      },
      (error) => {
        this.setState({ error });
      }
    )
   
  }


  render() {
  
    let quoteForm;
    if (this.state.isAddQuote || this.state.isEditQuote) {

      quoteForm = <EditQuoteInfo onFormSubmit={this.onFormSubmit} quote={this.state.quoteData} />
     
    }
  

    return (
      <div className="App">
        
        <Grid>
          <Row>
            <h1 style={{ textAlign: 'center' }}>Calculate Quote</h1>
            <hr></hr>
            <br></br>
            {quoteForm}
            
          </Row>
          {/* <Row>
            <h1 style={{ textAlign: 'center' }}>Quote List</h1>
            <hr></hr>
            {!this.state.isQuoteDetails && <Button variant="primary" onClick={() => this.onDetails()}> Quote Details</Button>}
            {!this.state.isAddQuote && <Button variant="primary" onClick={() => this.onCreate()}>Add Quote</Button>}
            <br></br>
            {!this.state.isAddQuote && <QuoteInfo editQuote={this.editQuote} deleteQuote={this.deleteQuote} />}
            {quoteForm}
          </Row> */}
          
        </Grid>
      </div>
    );
  }
}
export default CalculatorPage;