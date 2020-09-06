import React, { useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import '../../../styles/header.scss';
import logo from '../../../assets/logo-ecm.jpg';
import SignedOutLinks from './SignedOutLinks';
import SignedInLinks from './SignedInLinks';
import CartBadge from './CartBadge';
import Search from './Search';
import SearchDialog from './SearchDialog';

function Header() {

    const [scrollClass, setScrollClass] = useState('');
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    const [ loggedIn, ] = useState(false);// bu kisim Authanticate kisminda duzeltilecek.

    useEffect( () => {
        window.addEventListener('scroll', () => {
            if (window.scrollY === 0) {
                setScrollClass('');
            } else {
                setScrollClass('scrolling');
            }
        })
    }, []);

    return (
        <nav className={scrollClass}>

            <div className="header_links">
                <ul>
                    <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
                    <li><NavLink activeClassName="active" to="/about">About</NavLink></li>
                    <li><NavLink activeClassName="active" to="/my-works">My Works</NavLink></li>
                    <li><NavLink activeClassName="active" to="/contact">Contact</NavLink></li>
                </ul>
            </div>
            <div className="nav_logo">
            <img src={logo} alt=""/>
            <h4>meetHUB</h4>
        </div>
            <div className="header_links">
                <ul>
                    <Search 
                        onClick={ handleClickOpen }
                    />
                    {
                        loggedIn ? <SignedInLinks /> : <SignedOutLinks />
                    }
                    <CartBadge
                        cartQty={3}
                        color="secondary"
                        onClick={ () => console.log('Say Hello from cartBadge') }
                    />
                </ul>
            </div>
            <SearchDialog
                    open={open}
                    onClose={handleClose}
            />
        </nav>
    )
}

export default Header;
