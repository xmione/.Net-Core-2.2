import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import './data-service/QuoteAction';
//import UserActionApp from './UserCRUD/UserAction';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
       <Container>
        
          <QuoteActionApp />
        </Container>
    </div>
  );
}

export default App;