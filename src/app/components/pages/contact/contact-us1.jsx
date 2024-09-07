function ContactUs1Page() {
  return (
    <>
      {/* CONTACT DETAIL BLOCK */}
      <div className="section-full p-t80">
        <div className="container">
          {/* Google Map BLock */}
          <div className="section-content">
            {/* Location BLock */}
            <div className="mt-box">
              <div className="gmap-outline">
                <div className="google-map" style={{ width: "100%" }}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d611.2680239810283!2d73.51806766802699!3d26.866118466351324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396a7fc209085ec5%3A0xde72d3e585856fd8!2sChemilex%20industries!5e0!3m2!1sen!2sin!4v1725429882551!5m2!1sen!2sin"
                    width="600"
                    height="450"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>



                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-full p-t80">
        <div className="container">
          <div className="section-head">
            <h2>Contact Us </h2>
            <div className="mt-separator-outer m-b30">
              <div className="mt-separator site-bg-primary" />
            </div>
          </div>
          <div className="section-content m-b30">
            <div className="row">
              <div className="col-md-6 col-sm-12 m-b30">
                <div className="mt-icon-box-wraper center p-a30 bg-gray">
                  <div className="icon-sm m-b10">
                    <i className="iconmoon-smartphone-1" />
                  </div>
                  <div className="icon-content">
                    <h4 className="site-text-primary">Phone number</h4>
                    <a href="tel:+912617961531">
                      <p>
                        {" "}
                        <span>Office No:</span>+91-261-7961531
                      </p>
                    </a>
                    <a href="tel:+919909107770">
                      <p>
                        {" "}
                        <span>Mobile No:</span>+91 99091 07770
                      </p>
                    </a>
                    <a href="tel:+919879879925">
                      <p>
                        <span>Mobile No:</span>+91 98798 79925
                      </p>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 m-b30">
                <div className="mt-icon-box-wraper center p-a30 bg-gray">
                  <div className="icon-sm m-b10">
                    <i className="iconmoon-email" />
                  </div>
                  <div className="icon-content">
                    <h4 className="site-text-primary">Email address</h4>
                    <a href="mailto:tejas.afrikawala@chemilex.com">
                      <p>tejas.afrikawala@chemilex.com</p>
                    </a>
                    <a href="mailto:info@chemilex.com">
                      <p>info@chemilex.com</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-content m-b30">
            <div className="section-head">
              <h2>Our Locations </h2>
              <div className="mt-separator-outer m-b30">
                <div className="mt-separator site-bg-primary" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-sm-12 m-b30">
                <div className="mt-icon-box-wraper center p-a30 bg-gray">
                  <div className="icon-sm m-b10">
                    <i className="iconmoon-travel" />
                  </div>
                  <div className="icon-content">
                    <h4 className="site-text-primary">Factory Address</h4>
                    <a href>
                      <p>
                        {" "}
                        Khasra No-172/3, Manakpur Industrial Area,
                        <br />
                        Post Basni Hari Singh, Tehsil Bhopalgarh,
                        <br />
                        Jodhpur, Rajasthan - 342901, India
                      </p>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 m-b30">
                <div className="mt-icon-box-wraper center p-a30 bg-gray">
                  <div className="icon-sm m-b10">
                    <i className="iconmoon-travel" />
                  </div>
                  <div className="icon-content">
                    <h4 className="site-text-primary">Office Address</h4>
                    <a href>
                      <p>
                        {" "}
                        Office No-12, Ashwamegh Palace,
                        <br />
                        Opp-Shreenathji Gardenia, Kosad,
                        <br />
                        Surat, Gujarat - 394107, India
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-full">
        <div className="container">
          <div className="section-head">
            <h2>Contact Form </h2>
            <div className="mt-separator-outer m-b30">
              <div className="mt-separator site-bg-primary" />
            </div>
          </div>
          {/* GOOGLE MAP & CONTACT FORM */}
          <div className="section-content m-b50">
            {/* CONTACT FORM*/}
            <div className="mt-box">
              <div className="p-a30 bg-gray radius-10 cons-contact-form-wrap">
                <form
                  className="cons-contact-form contact-style-1"
                  method="post"
                  action="form-handler.php"
                >
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          name="username"
                          type="text"
                          required
                          className="form-control"
                          placeholder="Name"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          name="email"
                          type="text"
                          className="form-control"
                          required
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          name="number"
                          type="number"
                          className="form-control"
                          required
                          placeholder="Number"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <textarea
                          name="message"
                          rows={5}
                          className="form-control "
                          required
                          placeholder="Message"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <button
                        name="Resat"
                        type="reset"
                        value="Reset"
                        className="site-button m-r10"
                      >
                        Reset
                      </button>
                      <button
                        name="submit"
                        type="submit"
                        value="Submit"
                        className="site-button-secondry"
                      >
                        Submit{" "}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ContactUs1Page;
