import { useEffect } from "react";
// import FastImage from "../../../globals/elements/fastimg";
// import { loadScript, route } from "../../../globals/constants";
import { NavLink } from "react-router-dom";
import { loadScript, route } from "../../../../globals/constants";
import FastImage from "../../../../globals/elements/fastimg";

function RoadTransport() {

    useEffect(()=>{
        loadScript("js/custom.js")
    })

    return (
        <>
            {/* Service Detail */}
            <div className="section-full  p-t80 p-b50  ">
                <div className="container  bg-white ">
                    <div className="section-content ">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <div className="mt-box">
                                    <h2 className="m-t0">
                                    Road Transport</h2>
                                   
                                    <p>
                                    Road Transport is a vital part of the logistics chain, enabling the efficient movement of goods across various locations. It offers flexibility and accessibility, making it ideal for transporting goods over short to medium distances. From delivering raw materials to factories to distributing finished products to markets, road transport plays a crucial role in ensuring supply chain continuity and timely delivery.
                                    </p>
                                    <p>At Chemilex Industries, we provide reliable and efficient road transport services to meet the diverse needs of our clients. Our fleet of well-maintained vehicles and professional drivers ensures safe and timely delivery of products, regardless of the destination. With a focus on reliability, cost-effectiveness, and customer satisfaction, our road transport solutions are designed to support the smooth operation of your business and ensure your goods reach their destination safely.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="owl-carousel service-detail-carousel owl-btn-vertical-center owl-dots-bottom-center m-b20">
                                    <div className="item">
                                        <div className="aon-thum-bx">
                                            <FastImage src="images/products/RoadTransport.jpg" alt="" />
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-full p-t80 p-b50 bg-gray">
                <div className="container">
                    {/* TITLE START*/}
                    <div className="section-head text-center">
                        <h2 data-title="Services">Services </h2>
                        <div className="mt-separator-outer">
                            <div className="mt-separator site-bg-primary" />
                        </div>
                    </div>
                    {/* TITLE END*/}
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="mt-box bdr-1 bdr-solid bdr-gray-light m-b30 mt-service-2">
                                <div className="mt-media">
                                    <NavLink to={route.Products.RailTransport}><FastImage src="images/products/RailTransport.jpg" alt="" /></NavLink>
                                </div>
                                <div className="mt-icon-box-wraper  p-a30 left bg-white">
                                    <div className="icon-content">
                                        <h4 className="mt-tilte m-t0">Rail Transport</h4>
                                        
                                        <NavLink to={route.Products.RailTransport} className="site-button">Read More</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
            <div className="section-full p-t80 p-b50 bg-white ">
        <div className="container  bg-white ">
          <div className="section-content ">
            <div className="row text-center">
              {/* <div className="col-lg-6 col-md-12">
              
                <div className="mt-box  need-help m-b40">
                  <h2>Need Assistance?</h2>
                  <p className="m-b15">
                    <b>
                      {" "}
                      Find answers to common questions about Chemilex, our products, and services. If you need further help, our team is always ready to assist.
                    </b>
                  </p>
                  <p>
                    {" "}
                    For decades, Chemilex has set the standard in quality and reliability. Our commitment to excellence ensures that every interaction you have with us meets your highest expectations. Whether you’re looking for detailed product information or have specific inquiries, we’re here to provide the support you need.
                  </p>
                  <ul className="list-check-circle primary m-b15">
                    <li>
                    Reach out to us for any questions or assistance related to our offerings. Your satisfaction is our top priority, and we’re dedicated to providing prompt and helpful responses to all your inquiries.
                    </li>
                    <li>
                    Simply contact us, and experience the Chemilex difference.
                    </li>
                  </ul>
                  <NavLink
                    to={route.pages.contact.CONTACT1}
                    className="site-button-link"
                  >
                    Contact Us
                  </NavLink>
                </div>
              </div> */}
              <div className="col-lg-12 col-md-12">
                {/* Quick Contact */}
                <div className="widget">
                  <h2>  Contact Us</h2>
                  <div className="widget-quick-form">
                    <form>
                      <div className="form-group">
                        <input
                          placeholder="Name"
                          className="form-control"
                          type="text"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          placeholder="Email"
                          className="form-control"
                          type="text"
                        />
                      </div>
                      <div className="form-group">
                        <textarea
                          placeholder="Message"
                          className="form-control"
                          rows={3}
                          defaultValue={""}
                        />
                      </div>
                      <div className="form-group">
                        <button
                          type="submit"
                          className="site-button text-uppercase font-weight-600"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}
export default RoadTransport;