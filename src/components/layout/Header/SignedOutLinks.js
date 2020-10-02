import React from 'react';
import { Link } from 'react-router-dom';

function SignedOutLinks({toLogin, toSignUp}) {
    return (
        <div>
            <Link className="button_nav" to={toLogin} >Login</Link>
            <Link className="button_nav" to={toSignUp} >Sign Up</Link>
        </div>
    )
}


export default SignedOutLinks