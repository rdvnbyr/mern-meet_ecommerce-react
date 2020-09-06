import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../layout/Footer/Footer';
import Header from '../layout/Header/Header';
import Home from '../pages/Home';


function App() {
  return (
    <Router>
      <Header />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      <Footer />
    </Router>


  );
}

export default App;
