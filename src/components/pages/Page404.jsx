import React from 'react'
import '../../styles/Page404.scss'
// import { Link } from 'react-router-dom'


function Page404() {
    return (
        <div id="notfound" style={{minHeight:"100vh"}}>
		<div className="notfound">
			<div className="notfound-404">
				<h1>Oops!</h1>
				<h2>404 - The Page can't be found</h2>
			</div>
			<a href="/">Go TO Homepage</a>
		</div>
	</div>
    )
}

export default Page404