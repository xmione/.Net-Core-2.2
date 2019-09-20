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
                    quotes:result
                });
            },
            (error)=>{
                this.setState({error});
            }
        )
    }

    
    deleteQuote(ID) {
      const { quotes } = this.state;   
     axios.delete(apiUrl + '/DeleteQuoteDetails/' + ID).then(result=>{
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
                        <tr key={quote.ID}>
                          <td>{quote.Amount}</td>
                          <td>{quote.Term}</td>
                          <td>{quote.TermType}</td>
                          <td>{quote.Rate}</td>
                          <td>{quote.RepaymentMonthly}</td>
                          <td>{quote.RepaymentWeekly}</td>
                          <td>{quote.Title}</td>
                          <td>{quote.FirstName}</td>
                          <td>{quote.LastName}</td>
                          <td>{quote.EmailAddress}</td>
                          <td>{quote.MobileNo}</td>
                          <td><Button variant="info" onClick={() => this.props.ediQuote(quote.ID)}>Edit</Button>  &nbsp;&nbsp;&nbsp;
                          <Button variant="danger" onClick={() => this.deleteQuote(quote.ID)}>Delete</Button>
                        
                          </td>
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