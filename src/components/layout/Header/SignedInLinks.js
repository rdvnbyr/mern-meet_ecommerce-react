import React from 'react';

function SignedInLinks({onClick}) {
    return (
        <li><button className="button_nav" onClick={onClick}>Logout</button></li>
    )
}

export default SignedInLinks
