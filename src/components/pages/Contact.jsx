import React from 'react'


function Contact() {
    return (
        <div style={{minHeight:"100vh", marginTop:"120px"}}>
                <div className="site-blocks-cover inner-page aos-init aos-animate"  data-aos="fade">
                    <div className="container">
                        <div className="row" style={{margin: 'auto', maxHeight: '100vh'}}>
                            <img src="https://cdn.shopify.com/s/files/1/0052/7043/7978/t/4/assets/contact_us_banner_long2.jpg?14881" alt="" className="img-fluid"/>
                        </div>
                    </div>
                </div>
        <div>
        <div className="container">
            <div className="row">
                <div className="col-md-12 ">

                </div>
                 <div className="col-md-7">
                    <form action="#" method="post">
                        <div className="mt-5 p-3 p-lg-5 border">
                            <div className="form-group row">
                                <div className="col-md-6">
                                    <label htmlFor="c_fname" className="text-black">First Name <span className="text-danger">*</span></label>
                                    <input type="text" className="form-control" id="c_fname" name="c_fname" />
                                </div>
                            <div className="col-md-6">
                                <label htmlFor="c_lname" className="text-black">Last Name <span className="text-danger">*</span></label>
                                <input type="text" className="form-control" id="c_lname" name="c_lname" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-md-12">
                                <label htmlFor="c_email" className="text-black">Email <span className="text-danger">*</span></label>
                                <input type="email" className="form-control" id="c_email" name="c_email" placeholder="" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-md-12">
                                <label htmlFor="c_subject" className="text-black">Subject </label>
                                <input type="text" className="form-control" id="c_subject" name="c_subject" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-md-12">
                                <label htmlFor="c_message" className="text-black">Message </label>
                                <textarea name="c_message" id="c_message" cols="30" rows="7" className="form-control"></textarea>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-lg-12">
                                <input type="submit" className="btn btn-dark btn-lg btn-block" value="Send Message" />
                            </div>
                        </div>
                    </div>
                </form>
        </div>
        <div className="col-md-5 mt-5 ml-auto">
            <div className="p-4 border mb-3">
                <span className="d-block text-primary h6 text-uppercase">New York</span>
                <p className="mb-0">203 Fake St. Mountain View, San Francisco, California, USA</p>
            </div>
            <div className="p-4 border mb-3">
                <span className="d-block text-primary h6 text-uppercase">London</span>
                <p className="mb-0">203 Fake St. Mountain View, San Francisco, California, USA</p>
            </div>
            <div className="p-4 border mb-3">
                <span className="d-block text-primary h6 text-uppercase">Canada</span>
                <p className="mb-0">203 Fake St. Mountain View, San Francisco, California, USA</p>
            </div>
        </div>
        </div>
        </div>
        </div>
        </div>
    )
}

export default Contact