import React from 'react';
import { Button } from 'react-bootstrap'
import { OldPurchase, Wishlist } from '../elements';
import { useSelector } from 'react-redux';
import {Redirect} from 'react-router-dom';

function ProfilePage() {

    const [toggle, setToggle] = React.useState(null);
    const handletoggle = (event) => setToggle(event);
    const {isLogin, user} = useSelector(
        (state) => ({
            isLogin: state.session.isLogin,
            user: state.session.access.user._doc
        })
    );

    if(!isLogin) return <Redirect to="/" /> 

    return (
        <div style={{margin: "120px auto", minHeight: "100vh"}}>
            <div>
                <p>Name: <span>{'name'}</span></p>
                <p>Email: <span>{'email'}</span></p>
                <div>
                    <Button variant="info" className="mx-2 p-2 my-2" onClick={() => handletoggle('wishlist')}>Wishlist</Button>
                    <Button variant="info" className="mx-2 p-2 my-2" onClick={() => handletoggle('oldPurchases')}>Old Purchases</Button>
                </div>
                {
                    toggle === 'wishlist' ?
                        <Wishlist />
                    :
                        <OldPurchase />
                }
            </div>

        </div>
    )
}

export default ProfilePage;