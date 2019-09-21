import React from 'react';
import { Table,Button } from 'react-bootstrap';
import axios from 'axios';

const apiUrl = 'http://localhost:26344/api/Calculator/';

class QuoteList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
           error:null, 
           quotes:[],
           response: {}
            
        }
    }

    componentDidMount(){
       axios.get(apiUrl + 'GetQuoteDetails').then(response => response.data).then(
            (result)=>{
                this.setState({
                    quotes:result.result
                });
            },
            (error)=>{
                this.setState({error});
            }
        )
    }

    
    deleteQuote(ID) {
      const { quotes } = this.state;   
     axios.delete(apiUrl + 'DeleteQuoteDetails', {"ID":ID}).then(result=>{
       alert(result.data);
        this.setState({
          response:result,
          quotes:quotes.filter(quote=>quote.ID !== ID)
        });
      });
    }

    render(){       
        const{error,quotes}=this.state;
        if(error){
            return(
                <div>Error:{error.message}</div>
            )
        }
        else
        {
            return(
         <div>
                  <Table>
                    <thead className="btn-primary">
                      <tr>
                        <th>Amount</th>
                        <th>Term</th>
                        <th>Term Type</th>
                        <th>Rate</th>
                        <th>Repayment Monthly</th>
                        <th>Repayment Weekly</th>
                        <th>Title</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email Address</th>
                        <th>Mobile No</th>
                      </tr>
                    </thead>
                    <tbody>
                      {quotes.map(quote => (
                        <tr key={quote.id}>
                          <td>{quote.amount}</td>
                          <td>{quote.term}</td>
                          <td>{quote.termType}</td>
                          <td>{quote.rate}</td>
                          <td>{quote.repaymentMonthly}</td>
                          <td>{quote.repaymentWeekly}</td>
                          <td>{quote.title}</td>
                          <td>{quote.firstName}</td>
                          <td>{quote.lastName}</td>
                          <td>{quote.emailAddress}</td>
                          <td>{quote.mobileNo}</td>
                          <td><Button variant="info" onClick={() => this.props.editQuote(quote.id)}>Edit</Button></td>
                          <td><Button variant="danger" onClick={() => this.deleteQuote(quote.id)}>Delete</Button></td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              )
        }
    }
}

export default QuoteList;