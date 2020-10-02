import React from 'react'


function Contact() {
    return (
        <div style={{minHeight:"100vh", marginTop:"120px"}}>
                <div class="site-blocks-cover inner-page aos-init aos-animate"  data-aos="fade">
                    <div class="container">
                        <div class="row" style={{margin: 'auto', maxHeight: '100vh'}}>
                            <img src="https://cdn.shopify.com/s/files/1/0052/7043/7978/t/4/assets/contact_us_banner_long2.jpg?14881" alt="" className="img-fluid"/>
                        </div>
                    </div>
                </div>
        <div>
        <div class="container">
            <div class="row">
                <div class="col-md-12 ">

                </div>
                 <div class="col-md-7">
                    <form action="#" method="post">
                        <div class="mt-5 p-3 p-lg-5 border">
                            <div class="form-group row">
                                <div class="col-md-6">
                                    <label for="c_fname" class="text-black">First Name <span class="text-danger">*</span></label>
                                    <input type="text" class="form-control" id="c_fname" name="c_fname" />
                                </div>
                            <div class="col-md-6">
                                <label for="c_lname" class="text-black">Last Name <span class="text-danger">*</span></label>
                                <input type="text" class="form-control" id="c_lname" name="c_lname" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-md-12">
                                <label for="c_email" class="text-black">Email <span class="text-danger">*</span></label>
                                <input type="email" class="form-control" id="c_email" name="c_email" placeholder="" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-md-12">
                                <label for="c_subject" class="text-black">Subject </label>
                                <input type="text" class="form-control" id="c_subject" name="c_subject" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-md-12">
                                <label for="c_message" class="text-black">Message </label>
                                <textarea name="c_message" id="c_message" cols="30" rows="7" class="form-control"></textarea>
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-lg-12">
                                <input type="submit" class="btn btn-dark btn-lg btn-block" value="Send Message" />
                            </div>
                        </div>
                    </div>
                </form>
        </div>
        <div class="col-md-5 mt-5 ml-auto">
            <div class="p-4 border mb-3">
                <span class="d-block text-primary h6 text-uppercase">New York</span>
                <p class="mb-0">203 Fake St. Mountain View, San Francisco, California, USA</p>
            </div>
            <div class="p-4 border mb-3">
                <span class="d-block text-primary h6 text-uppercase">London</span>
                <p class="mb-0">203 Fake St. Mountain View, San Francisco, California, USA</p>
            </div>
            <div class="p-4 border mb-3">
                <span class="d-block text-primary h6 text-uppercase">Canada</span>
                <p class="mb-0">203 Fake St. Mountain View, San Francisco, California, USA</p>
            </div>
        </div>
        </div>
        </div>
        </div>
        </div>
    )
}

export default Contact