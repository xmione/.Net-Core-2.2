import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CalculatorPage from '../quote-calculator/CalculatorPage';
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
          jsonData:{
                        AmountRequired: 5000, 
                        Term: 2, 
                        Title: "Mr.", 
                        FirstName: "John", 
                        LastName: "doe", 
                        Mobile: "0422111333", 
                        Email: "layton@flower.com.au"
          },
          jsontext: "{\r\n" 
                      +"\t\"AmountRequired\": 5000,\r\n" 
                      +"\t\"Term\": 2,\r\n" 
                      +"\t\"Title\": \"Mr.\",\r\n"
                      +"\t\"FirstName\": \"John\",\r\n"
                      +"\t\"LastName\": \"doe\",\r\n"
                      +"\t\"Mobile\": \"0422111333\",\r\n"
                      +"\t\"Email\": \"layton@flower.com.au\"\r\n"
                   +"}"
      };

      if (props.quote !== undefined) {
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
        this.setState({
          jsonData: JSON.parse(this.state.jsontext)
        });
        var data = {
          id:0,
          amount:this.state.jsonData.AmountRequired,
          rate:0,
          term:this.state.jsonData.Term,
          title:this.state.jsonData.Title,
          firstName:this.state.jsonData.FirstName,
          lastName:this.state.jsonData.LastName,
          emailAddress:this.state.jsonData.Email,
          mobileNo:this.state.jsonData.Mobile
        }
        if (this.state.isAddQuote) {
          axios.post(apiUrl + 'InsertQuoteDetails', data).then(result => {
         
            this.setState({
              response:result,
              data : result.data.result,  
              isAddQuote: false,
              isEditQuote: false
            });
            
            ReactDOM.render(<CalculatorPage data={this.state.data}/>, document.getElementById('root'));
          },
          (error) => {
            this.setState({ error });
          });
           
        } else {
       
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
        }
        // window.location.reload();
    }

    redirectToOwnerDetails = (history, jsonData) => {
        this.history.push('/quote-calculator/' + jsonData);
    }

    render() {
        
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
                                    <textarea id="jsontext" ref={(c) => this.state.jsontext } name="jsontext" cols="60" rows="10" defaultValue={this.state.jsontext}  onChange={this.handleChange} />
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
 