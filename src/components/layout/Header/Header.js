import React, { useState, useEffect} from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../../../styles/header.scss';
import logo from '../../../assets/logo-ecm.jpg';
import SignedInLinks from './SignedInLinks';
import CartBadge from './CartBadge';
import Search from './Search';
import SearchDialog from './SearchDialog';
import ResponsiveIcon from './ResponsiveIcon';
import { useSelector, useDispatch } from 'react-redux';
import { SessionActions } from '../../../actions';



function Header() {

    const isLogin = useSelector(state => state.session.isLogin);
    const dispatch = useDispatch();

    const [scrollClass, setScrollClass] = useState('');
    const [open, setOpen] = useState(false);
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

    // search input dialog
    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // logout
    const logout = () => {
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
                <ResponsiveIcon
                    className="responsive_navIcon"
                    onClick={responsiveHandler}
                />
                <div className="nav_logo">
                    <img src={logo} alt=""/>
                    <h4 to="/" >meetHUB</h4>
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
                        <Search
                            onClick={ handleClickOpen }
                            className="search_navIcon"
                        />
                        {
                            isLogin
                            ?
                            <SignedInLinks
                                onClick={logout}
                            /> 
                            : 
                            <div>
                                <Link className="button_nav mx-2" to="/login">Login</Link>
                                <Link className="button_nav mx-2" to="/signup">Sign Up</Link>
                            </div>
                        }
                        <CartBadge
                            cartQty={3}
                            color="secondary"
                            onClick={ () => console.log('Say Hello from cartBadge') }
                            className="cartBadge_navIcon"
                        />
                </div>
            </nav>
            <SearchDialog
                open={open}
                onClose={handleClose}
            />

        </div>
    )
}

export default Header;
