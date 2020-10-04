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
import Cart from '../pages/Cart/Cart';
import Modal  from '../pages/Modal';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic'

// optional configuration
const options = {
  // you can also just use 'bottom center'
  position: positions.TOP_LEFT,
  offset: '100px',
  type: 'error', 
  // you can also just use 'scale'
  transition: transitions.SCALE
}

function App() {
  return (
    <AlertProvider template={AlertTemplate} {...options}>
      <Router>
        <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/shopping" component={Shopping} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/details/:_id" component={DetailProduct} />
            <Route path="/login" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/cart" component={Cart} />
            <Route component={Page404} />
          </Switch>
          <Modal />
        <Footer />
      </Router>
    </AlertProvider>
  );
}


export default App;
