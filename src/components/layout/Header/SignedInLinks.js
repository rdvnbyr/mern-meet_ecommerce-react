import React from 'react';

function SignedInLinks({onClick}) {
    return (
        <button className="button_nav" onClick={onClick}>Logout</button>
    )
}

export default SignedInLinks
