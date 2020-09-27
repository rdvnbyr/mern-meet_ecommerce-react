import React, { useEffect } from 'react'


function Details(props) { 
    useEffect(() => {
        

    }, [])
    return (
        <div style={{minHeight:"100vh", marginTop:"100px"}}>
            <div className="container">
                <div className="row" >
                    <div className="col-12 my-5">
                        <div className="card">
                            <div style={{ display: "flex", flex: "1 1 auto"}}>
                                <div className="img-square-wrapper">
                                    <img className="col img-fluid my-5" src="https://i.pinimg.com/originals/98/df/62/98df627b202f976dccca1fabc01e336d.png" alt="about us"/>    
                                </div>   
                                <div class="card-body">    
                                    <h1 className="card-title p-2 m-0">WHO WE ARE</h1>
                                    <p className="card-text"> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                                    <a href="/" className="btn btn-dark"> Read More </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
        
    )
}

export default Details
