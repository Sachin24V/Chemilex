import React from "react";

export const Inquiry = () => {
  return (
    <>
      <div className="section-full">
        <div className="container">
          <div className="section-head">
            <h2>Inquiry Form </h2>
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
                    <div className="col-md-6">
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
                    <div className="col-md-6">
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
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          name="number"
                          type="number"
                          className="form-control"
                          required
                          placeholder="Phone Number"
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          name="address"
                          type="text"
                          className="form-control"
                          required
                          placeholder="Address"
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          name="subject"
                          type="text"
                          className="form-control"
                          required
                          placeholder="Subject"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                       <select name="products" id="products"  className="form-control">
                        <option value="01" selected disabled>Select Product</option>
                        <option value="0">Hydrated Lime Powder</option>
                        <option value="1">Quick Lime Powder</option>
                        <option value="2">Lime Stone</option>
                        <option value="3">Quick Lime Lumps</option>
                        <option value="4">Prime Hard Cooking Coal</option>
                        <option value="5">Indonesian Steam Coal</option>
                        <option value="6">South African Steam Coal</option>
                        <option value="7">PIC Coal</option>
                        <option value="8">Anthracite Coal</option>
                        <option value="9">Chrome Concentrate</option>
                        <option value="10">Gypsum</option>
                        <option value="11">Imported Managenese Ore(East Africa)</option>
                        <option value="12">Indonesian MET Coke</option>
                        <option value="13">China MET Coke</option>
                        <option value="14">Colombian MET Coke</option>
                        <option value="15">Colombian(ULP)</option>
                        <option value="16">Indian LAM Coke</option>
                        <option value="17">Rail Transport</option>
                        <option value="18">Road Transport</option>
                       </select>
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
};
