import React, { Component } from 'react';
import { Grid, Col, Row, Button } from 'react-bootstrap';
import axios from 'axios';
import './Home.css';
import '../Common/css/common-css.js';

const apiUrl = 'http://localhost:26344/api/Calculator/';
//import $ from 'jquery';

class HomePage extends Component {
    constructor(props) {
      super(props);
      this.initialState = { 
          isAddQuote: true,
          isEditQuote: false,
          jsonData:[{
                        AmountRequired:5000, 
                        Term:2, 
                        Title:"Mr.", 
                        FirstName:"John", 
                        LastName: "doe", 
                        Mobile:"0422111333", 
                        Email:"layton@flower.com.au"
          }],
          jsontext: "{}"
      };

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
        var data = this.state;
        this.setState({ isAddQuote: true });
        this.setState({ isQuoteDetails: false });
        if (this.state.isEditQuote) {
         axios.post(apiUrl + 'UpdateQuoteDetails', data).then(result => {
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
       
        //axios.get(apiUrl + 'GetQuoteDetails').then(result => {
        axios.post(apiUrl + 'InsertQuoteDetails', data).then(result => {
         
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

    redirectToOwnerDetails = (history, jsonData) => {
        this.history.push('/quote-calculator/' + jsonData);
    }

    render() {
        let jsonData = "{\r\n"  + this.state.jsonData.map(e=>JSON.stringify(e).replace(/{|}/g,'').replace(/,/g,',\r\n')).join(',\n') + "\r\n}";
        return (
            <Grid>
                <Row>
                    <Col md={12}>
                        <div className="row row-padding">
                            <div className="quote-calculator-font">
                                Compose JSON Object
                            </div>
                        </div>
                        <div className="row row-padding">
                            <div className="content-width">
                                <div className="col-md-12">
                                    <textarea id="jsontext" ref={(c) => this.state.jsontext } name="jsontext" cols="60" rows="10" defaultValue={jsonData}  onChange={this.handleChange} />
                                </div>
                            </div>
                        </div>
                        <div className="row row-padding">
                            <div className="content-width">
                                <Button id="calculator-btn" className="calculate-btn" onClick={this.handleSubmit}>Calculate quote</Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Grid>
        ); 
        
    }
    
}

export default HomePage;
 