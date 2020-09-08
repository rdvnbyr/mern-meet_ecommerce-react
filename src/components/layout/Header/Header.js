import React, { useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import '../../../styles/header.scss';
import logo from '../../../assets/logo-ecm.jpg';
import SignedOutLinks from './SignedOutLinks';
import SignedInLinks from './SignedInLinks';
import CartBadge from './CartBadge';
import Search from './Search';
import SearchDialog from './SearchDialog';
import ResponsiveIcon from './ResponsiveIcon';

function Header() {

    const [scrollClass, setScrollClass] = useState('');
    const [open, setOpen] = useState(false);
    const [ respToggle, setRespToggle] = useState(true);

    const [ loggedIn, ] = useState(false);// bu kisim Authanticate kisminda duzeltilecek

    useEffect( () => {
        window.addEventListener('scroll', () => {
            if (window.scrollY === 0) {
                setScrollClass('');
            } else {
                setScrollClass('scrolling');
            }
        })
    }, []);

    // search input dialog
    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // responsive navbar
    const responsiveHandler = () => {
        setRespToggle(!respToggle);
    }

    const toggleClass = respToggle ? '' : 'mobileActive';

    return (
        <nav className={scrollClass + ' ' + toggleClass}>
            <ResponsiveIcon
                className="responsive_navIcon"
                onClick={responsiveHandler}
            />
            <div className="nav_logo">
                <img src={logo} alt=""/>
                <h4>meetHUB</h4>
            </div>
            <div className="header_links_left">
                <ul>
                    <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
                    <li><NavLink activeClassName="active" to="/shoping">Shoping</NavLink></li>
                    <li><NavLink activeClassName="active" to="/about">About</NavLink></li>
                    <li><NavLink activeClassName="active" to="/contact">Contact</NavLink></li>
                </ul>
            </div>

            <div className="header_links_right">
                    <Search
                        onClick={ handleClickOpen }
                        className="search_navIcon"
                    />
                    {
                        loggedIn ? <SignedInLinks /> : <SignedOutLinks />
                    }
                    <CartBadge
                        cartQty={3}
                        color="secondary"
                        onClick={ () => console.log('Say Hello from cartBadge') }
                        className="cartBadge_navIcon"
                    />
            </div>
            
            <SearchDialog
                    open={open}
                    onClose={handleClose}
            />
        </nav>
    )
}

export default Header;
