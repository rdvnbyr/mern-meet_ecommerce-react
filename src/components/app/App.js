import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../layout/Footer/Footer';
import Header from '../layout/Header/Header';
import Home from '../pages/Home';
import Shopping from '../pages/Shopping';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Page404 from '../pages/Page404';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import DetailProduct from '../pages/DetailProduct';


function App() {
  return (
    <Router>
      <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/shopping" component={Shopping} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/details/:productId" component={DetailProduct} />
          <Route path="/login" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route component={Page404} />
        </Switch>
      <Footer />

    </Router>

  );
}

export default App;
