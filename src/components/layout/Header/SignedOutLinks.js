import React from 'react';

function SignedOutLinks({onClick}) {
    return (
        <li><button className="button_nav" onClick={onClick}>Login</button></li>
    )
}


export default SignedOutLinks