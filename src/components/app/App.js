import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../layout/Footer/Footer';
import Header from '../layout/Header/Header';
import Home from '../pages/Home';
import Shoping from '../pages/Shoping';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Page404 from '../pages/Page404';


function App() {
  return (
    <Router>
      <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/shoping" component={Shoping} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={Page404} />
        </Switch>
      <Footer />

    </Router>

  );
}

export default App;
