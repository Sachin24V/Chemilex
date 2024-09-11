import { useEffect } from "react";
// import FastImage from "../../../globals/elements/fastimg";
// import { loadScript, route } from "../../../globals/constants";
import { NavLink } from "react-router-dom";
import { loadScript, route } from "../../../../globals/constants";
import FastImage from "../../../../globals/elements/fastimg";
import OwlCarousel from 'react-owl-carousel';
function IndianLAMCoke() {
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
                  <h2 className="m-t0">Indian LAM Coke</h2>

                  <p>
                    Indian LAM (Low Ash Metallurgical) Coke is a high-quality
                    metallurgical coke derived from select grades of Indian
                    coking coal. Known for its low ash content, high carbon
                    concentration, and superior strength, Indian LAM Coke is
                    widely used in the steel industry as a key component in
                    blast furnace operations for ironmaking.
                  </p>
                  <p>
                    An Indian LAM Coke is carefully processed to maintain
                    consistent quality and performance. It provides excellent
                    thermal efficiency and acts as a critical reducing agent in
                    the smelting process, ensuring efficient production of
                    molten iron. Indian LAM Coke's reliable performance and
                    cost-effectiveness make it a preferred choice for steel
                    manufacturers looking for dependable and high-quality coke
                    solutions.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
              <OwlCarousel
                      className="owl-carousel service-detail-carousel owl-btn-vertical-center owl-dots-bottom-center m-b20"
                      items={1}
                      loop
                      nav
                      dots
                      mouseDrag={false} // Disable mouse dragging
                      touchDrag={false} // Disable touch dragging
                    > 
                  <div className="item">
                    <div className="aon-thum-bx">
                      <FastImage src="images/products/IndianLAMCoke.jpg" alt="" />
                    </div>
                  </div>
                  </OwlCarousel>
            
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-full p-t80 p-b50 bg-gray">
        <div className="container">
          {/* TITLE START*/}
          <div className="section-head text-center">
            <h2 data-title="Supplies">  Services</h2>
            <div className="mt-separator-outer">
              <div className="mt-separator site-bg-primary" />
            </div>
          </div>
          {/* TITLE END*/}
          <div className="row d-flex justify-content-center">
            <div className="col-lg-4 col-md-6">
             <div className="mt-box bg-white m-b30 mt-service-2">
                <div className="mt-media">
                  <NavLink to={route.Products.IndonesianMetCoke}>
                  <OwlCarousel
                      className="owl-carousel service-detail-carousel owl-btn-vertical-center owl-dots-bottom-center m-b20"
                      items={1}
                      loop
                      nav
                      dots
                      mouseDrag={false} // Disable mouse dragging
                      touchDrag={false} // Disable touch dragging
                    > 
                      <div className="item">
                        <div className="aon-thum-bx">
                          <FastImage src="images/products/IndonesianMETCoke.jpg" alt="" />
                        </div>
                      </div>
                      </OwlCarousel>

                
                  </NavLink>
                </div>
                <div className="mt-icon-box-wraper p-a30 left bg-white">
                  <div className="icon-content">
                    <h4 className="mt-tilte m-t0">Indonesian Met Coke</h4>

                    <NavLink
                      to={route.Products.IndonesianMetCoke}
                     className="site-button-link site-text-primary font-weight-600"
                    >
                      Read More
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
             <div className="mt-box bg-white m-b30 mt-service-2">
                <div className="mt-media">
                  <NavLink to={route.Products.ColombianMetCoke}>
                  <OwlCarousel
                      className="owl-carousel service-detail-carousel owl-btn-vertical-center owl-dots-bottom-center m-b20"
                      items={1}
                      loop
                      nav
                      dots
                      mouseDrag={false} // Disable mouse dragging
                      touchDrag={false} // Disable touch dragging
                    > 
                      <div className="item">
                        <div className="aon-thum-bx">
                          <FastImage src="images/products/Colombian MET COKE.jpg" alt="" />
                        </div>
                      </div>
                      
                      </OwlCarousel>
                  </NavLink>
                </div>
                <div className="mt-icon-box-wraper p-a30 left bg-white">
                  <div className="icon-content">
                    <h4 className="mt-tilte m-t0">Colombian MET Coke</h4>

                    <NavLink
                      to={route.Products.ColombianMetCoke}
                     className="site-button-link site-text-primary font-weight-600"
                    >
                      Read More
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
             <div className="mt-box bg-white m-b30 mt-service-2">
                <div className="mt-media">
                  <NavLink to={route.Products.ColombianULP}>
                  <OwlCarousel
                      className="owl-carousel service-detail-carousel owl-btn-vertical-center owl-dots-bottom-center m-b20"
                      items={1}
                      loop
                      nav
                      dots
                      mouseDrag={false} // Disable mouse dragging
                      touchDrag={false} // Disable touch dragging
                    > 
                      <div className="item">
                        <div className="aon-thum-bx">
                        <FastImage src="images/products/Colombian (ULP).png" alt="" />
                        </div>
                      </div>
                      </OwlCarousel>
                   
                  </NavLink>
                </div>
                <div className="mt-icon-box-wraper p-a30 left bg-white">
                  <div className="icon-content">
                    <h4 className="mt-tilte m-t0">Colombian (ULP)</h4>

                    <NavLink
                      to={route.Products.ColombianULP}
                     className="site-button-link site-text-primary font-weight-600"
                    >
                      Read More
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
             <div className="mt-box bg-white m-b30 mt-service-2">
                <div className="mt-media">
                  <NavLink to={route.Products.ChinaMetCoke}>
                  <OwlCarousel
                      className="owl-carousel service-detail-carousel owl-btn-vertical-center owl-dots-bottom-center m-b20"
                      items={1}
                      loop
                      nav
                      dots
                      mouseDrag={false} // Disable mouse dragging
                      touchDrag={false} // Disable touch dragging
                    > 
                      <div className="item">
                        <div className="aon-thum-bx">
                          <FastImage src="images/products/ChinaMETCoke.jpg" alt="" />
                        </div>
                      </div>
                     
                      </OwlCarousel>
                  </NavLink>
                </div>
                <div className="mt-icon-box-wraper p-a30 left bg-white">
                  <div className="icon-content">
                    <h4 className="mt-tilte m-t0"> China MET Coke</h4>

                    <NavLink
                      to={route.Products.ChinaMetCoke}
                     className="site-button-link site-text-primary font-weight-600"
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
export default IndianLAMCoke;
