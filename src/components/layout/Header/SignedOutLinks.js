import React from 'react';

function SignedOutLinks({onClick, onClickSignUp}) {
    return (
        <div>
            <button className="button_nav" onClick={onClick}>Login</button>
            <button className="button_nav" onClick={onClickSignUp}>Sign Up</button>
        </div>
    )
}


export default SignedOutLinks