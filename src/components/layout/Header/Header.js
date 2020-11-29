import React, { useState, useEffect} from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import '../../../styles/header.scss';
import logo from '../../../assets/logo_transparent.png';
import CartBadge from './CartBadge';
import ResponsiveIcon from './ResponsiveIcon';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import {  SessionActions } from '../../../actions';
import {Dropdown} from 'react-bootstrap';


function Header() {

    const {isLogin, user} = useSelector(
        (state) => ({
            isLogin: state.session.isLogin,
            user: state.session.access.user
        }),
        shallowEqual
    );

    const dispatch = useDispatch();
    const history = useHistory()

    const [scrollClass, setScrollClass] = useState('');
    const [ respToggle, setRespToggle] = useState(true);


    useEffect( () => {
        window.addEventListener('scroll', () => {
            if (window.scrollY === 0) {
                setScrollClass('');
            } else {
                setScrollClass('scrolling');
            }
        })
    }, []);

    // logout
    const handleLogout = () => {
        dispatch(SessionActions.logout());
    }; 

    // responsive navbar
    const responsiveHandler = () => {
        setRespToggle(!respToggle);
    }

    const toggleClass = respToggle ? '' : 'mobileActive';

    return (
        <div>
            <nav className={scrollClass + ' ' + toggleClass}>
                <div className="nav_logo">
                    <img src={logo} alt="logo"  className="m-0"/>
                    <h4><a className="navbar-brand" href="/">MeetHub</a></h4>
                </div>
                <div className="header_links_left">
                    <ul>
                        <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
                        <li><NavLink activeClassName="active" to="/shopping">Shopping</NavLink></li>
                        <li><NavLink activeClassName="active" to="/about">About</NavLink></li>
                        <li><NavLink activeClassName="active" to="/contact">Contact</NavLink></li>
                    </ul>
                </div>
                <div className="header_links_right">
                        {
                            isLogin
                            ?
                                <Dropdown className="header-user-dropdown">
                                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                        {user.username}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="/purchased">Purchased</Dropdown.Item>
                                        <Dropdown.Item href="/wishlist">Wishlist</Dropdown.Item>
                                        <Dropdown.Item onClick={handleLogout}>Sign out</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            : 
                                <div>
                                    <Link className="button_nav mx-2" to="/login">Login</Link>
                                    <Link className="button_nav mx-2" to="/signup">Sign Up</Link>
                                </div>
                        }
                            <CartBadge
                                color="secondary"
                                onClick={ () => history.push('/cart') }
                                className="cartBadge_navIcon"
                            />
                </div>
                <ResponsiveIcon
                    className="responsive_navIcon"
                    onClick={responsiveHandler}
                />
            </nav>
        </div>
    )
}

export default Header;

// <button className="button_nav" onClick={logout}>Logout</button>