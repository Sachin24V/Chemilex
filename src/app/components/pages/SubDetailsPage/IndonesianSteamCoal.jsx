import { useEffect } from "react";
// import FastImage from "../../../globals/elements/fastimg";
// import { loadScript, route } from "../../../globals/constants";
import { NavLink } from "react-router-dom";
import { loadScript, route } from "../../../../globals/constants";
import FastImage from "../../../../globals/elements/fastimg";

function IndonesianSteamCoal() {
  useEffect(() => {
    loadScript("js/custom.js");
  });

  return (
    <>
      {/* Service Detail */}
      <div className="section-full p-t80 p-b50 ">
        <div className="container bg-white ">
          <div className="section-content ">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="mt-box">
                  <h2 className="m-t0">Indonesian Steam Coal</h2>

                  <p>
                    Indonesian Steam Coal is a high-quality, energy-efficient
                    coal that is widely used for power generation and industrial
                    applications. Known for its consistent calorific value and
                    low ash content, this coal is sourced from some of the best
                    mines in Indonesia and is recognized for its reliability and
                    performance.
                  </p>
                  <p>
                    The Indonesian Steam Coal is meticulously selected and
                    processed to meet the stringent requirements of various
                    industries. It is commonly used in power plants, cement
                    manufacturing, and as a fuel in industrial boilers. With its
                    excellent combustion properties and cost-effectiveness,
                    Indonesian Steam Coal is a preferred choice for achieving
                    efficient and sustainable energy production across diverse
                    sectors.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="owl-carousel service-detail-carousel owl-btn-vertical-center owl-dots-bottom-center m-b20">
                  <div className="item">
                    <div className="aon-thum-bx">
                      <FastImage src="images/products/indonesian steam coal.png" alt="" />
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
            <h2 data-title="Services">  Services</h2>
            <div className="mt-separator-outer">
              <div className="mt-separator site-bg-primary" />
            </div>
          </div>
          {/* TITLE END*/}
          <div className="row d-flex justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="mt-box bdr-1 bdr-solid bdr-gray-light m-b30 mt-service-2">
                <div className="mt-media">
                  <NavLink to={route.Products.PrimeHardCookingCoal}>
                    <div className="owl-carousel service-detail-carousel owl-btn-vertical-center owl-dots-bottom-center m-b20">
                      <div className="item">
                        <div className="aon-thum-bx">
                          <FastImage src="images/products/Prime Hard Cooking Coal.jpg"  alt="" />
                        </div>
                      </div>
                     
                    </div>
                  </NavLink>
                </div>
                <div className="mt-icon-box-wraper p-a30 left bg-white">
                  <div className="icon-content">
                    <h4 className="mt-tilte m-t0">Prime Hard Coking Coal </h4>

                    <NavLink
                      to={route.Products.IndonesianSteamCoal}
                     className="site-button-link site-text-primary font-weight-600"
                    >
                      Read More
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="mt-box bdr-1 bdr-solid bdr-gray-light m-b30 mt-service-2">
                <div className="mt-media">
                  <NavLink to={route.Products.SouthAfricanSteamCoal}>
                    <div className="owl-carousel service-detail-carousel owl-btn-vertical-center owl-dots-bottom-center m-b20">
                      <div className="item">
                        <div className="aon-thum-bx">
                          <FastImage src="images/products/South African Steam Coal.jpg" alt="" />
                        </div>
                      </div>
                     
                     
                    </div>
                  </NavLink>
                </div>
                <div className="mt-icon-box-wraper p-a30 left bg-white">
                  <div className="icon-content">
                    <h4 className="mt-tilte m-t0">South African Steam Coal</h4>

                    <NavLink
                      to={route.Products.SouthAfricanSteamCoal}
                     className="site-button-link site-text-primary font-weight-600"
                    >
                      Read More
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="mt-box bdr-1 bdr-solid bdr-gray-light m-b30 mt-service-2">
                <div className="mt-media">
                  <NavLink to={route.Products.PCICoal}>
                    <div className="owl-carousel service-detail-carousel owl-btn-vertical-center owl-dots-bottom-center m-b20">
                      <div className="item">
                        <div className="aon-thum-bx">
                          <FastImage src="images/products/PCI Coal.jpg" alt="" />
                        </div>
                      </div>
                      
                    </div>
                  </NavLink>
                </div>
                <div className="mt-icon-box-wraper p-a30 left bg-white">
                  <div className="icon-content">
                    <h4 className="mt-tilte m-t0">PCI Coal</h4>

                    <NavLink
                      to={route.Products.PCICoal}
                     className="site-button-link site-text-primary font-weight-600"
                    >
                      Read More
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="mt-box bdr-1 bdr-solid bdr-gray-light m-b30 mt-service-2">
                <div className="mt-media">
                  <NavLink to={route.Products.AnthraciteCoal}>
                    <div className="owl-carousel service-detail-carousel owl-btn-vertical-center owl-dots-bottom-center m-b20">
                      <div className="item">
                        <div className="aon-thum-bx">
                          <FastImage src="images/products/Anthracite Coal.jpg" alt="" />
                        </div>
                      </div>
                      
                    </div>
                  </NavLink>
                </div>
                <div className="mt-icon-box-wraper p-a30 left bg-white">
                  <div className="icon-content">
                    <h4 className="mt-tilte m-t0">Anthracite Coal</h4>

                    <NavLink
                      to={route.Products.AnthraciteCoal}
                      className="site-button"
                    >
                      Read More
                    </NavLink>
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
  );
}
export default IndonesianSteamCoal;
