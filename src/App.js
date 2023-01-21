import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/layouts/Navbar.jsx';
import Footer from './components/layouts/Footer.jsx';
import { Switch, Route } from 'react-router-dom';
import Home from './components/layouts/pages/Home.jsx';
import Contact from './components/layouts/pages/Contact.jsx';
import NotFound from './components/layouts/pages/NotFound.jsx';

class App extends Component {
  render(){
    
const myStyle={
  backgroundImage: 
  "url('https://images.unsplash.com/photo-1558295033-2e98b0e9e4c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2067&q=80')",
     
         backgroundSize: 'auto',
         backgroundRepeat: 'no-repeat',

};

    return(
      <div style={myStyle}>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/kontakt" component={Contact}/>
          <Route component={NotFound}/>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
