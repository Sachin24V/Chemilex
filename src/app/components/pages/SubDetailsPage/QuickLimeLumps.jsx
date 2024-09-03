import { useEffect } from "react";
// import FastImage from "../../../globals/elements/fastimg";
// import { loadScript, route } from "../../../globals/constants";
import { NavLink } from "react-router-dom";
import { loadScript, route } from "../../../../globals/constants";
import FastImage from "../../../../globals/elements/fastimg";

function QuickLimeLumps() {
  useEffect(() => {
    loadScript("js/custom.js");
  });

  return (
    <>
      {/* Service Detail */}
      <div className="section-full  p-t80 p-b50  ">
        <div className="container  bg-white ">
          <div className="section-content ">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="mt-box">
                  <h2 className="m-t0">Quick Lime Lumps</h2>

                  <p>
                    Quick Lime Lumps, also known as calcium oxide (CaO), are
                    produced by calcining high-quality limestone at high
                    temperatures to drive off carbon dioxide. At Chemilex
                    Industries, we ensure our Quick Lime Lumps are carefully
                    processed to maintain consistent size, high purity, and
                    excellent reactivity, making them ideal for a variety of
                    industrial applications.
                  </p>
                  <p>
                    Quick Lime Lumps are widely used in numerous sectors,
                    including steel manufacturing, chemical production,
                    construction, and environmental management. They are crucial
                    for applications such as pH control, soil stabilization,
                    wastewater treatment, and as a fluxing agent in steel
                    production. The robust and reliable performance of Quick
                    Lime Lumps makes them an essential component for improving
                    industrial processes and achieving superior results.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="owl-carousel service-detail-carousel owl-btn-vertical-center owl-dots-bottom-center m-b20">
                  <div className="item">
                    <div className="aon-thum-bx">
                    <FastImage src="images/Products/QuickLimeLumps.jpg" alt="" />
                    </div>
                  </div>
                  <div className="item">
                    <div className="aon-thum-bx">
                    <FastImage src="images/Products/QuickLimeLumps(2).jpg" alt="" />
                    </div>
                  </div>
                  <div className="item">
                    <div className="aon-thum-bx">
                    <FastImage src="images/Products/QuickLimeLumps(3).jpg" alt="" />
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
            <h2 data-title="Services">Other Products</h2>
            <div className="mt-separator-outer">
              <div className="mt-separator site-bg-primary" />
            </div>
          </div>
          {/* TITLE END*/}
          <div className="row d-flex justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="mt-box bdr-1 bdr-solid bdr-gray-light m-b30 mt-service-2">
                <div className="mt-media">
                  <NavLink to={route.Products.HydratedLimePowder}>
                    <div className="owl-carousel service-detail-carousel owl-btn-vertical-center owl-dots-bottom-center m-b20">
                      <div className="item">
                        <div className="aon-thum-bx">
                        <FastImage src="images/Products/HydratedLimePowder.jpg" alt="" />
                        </div>
                      </div>
                      <div className="item">
                        <div className="aon-thum-bx">
                        <FastImage src="images/Products/HydratedLimePowder(2).jpg" alt="" />
                        </div>
                      </div>
                      <div className="item">
                        <div className="aon-thum-bx">
                        <FastImage src="images/Products/HydratedLimePowder(4).jpg" alt="" />
                        </div>
                      </div>
                    </div>
                  </NavLink>
                </div>
                <div className="mt-icon-box-wraper  p-a30 left bg-white">
                  <div className="icon-content">
                    <h4 className="mt-tilte m-t0">Hydrated Lime Powder</h4>

                    <NavLink
                      to={route.Products.HydratedLimePowder}
                      className="site-button"
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
                  <NavLink to={route.Products.QuickLimeStone}>
                    <div className="owl-carousel service-detail-carousel owl-btn-vertical-center owl-dots-bottom-center m-b20">
                      <div className="item">
                        <div className="aon-thum-bx">
                        <FastImage src="images/Products/QuickLimeStone.jpg" alt="" />
                        </div>
                      </div>
                      <div className="item">
                        <div className="aon-thum-bx">
                        <FastImage src="images/Products/QuickLimeStone(2).jpg" alt="" />
                        </div>
                      </div>
                      <div className="item">
                        <div className="aon-thum-bx">
                        <FastImage src="images/Products/QuickLimeStone(3).jpg" alt="" />
                        </div>
                      </div>
                    </div>
                  </NavLink>
                </div>
                <div className="mt-icon-box-wraper  p-a30 left bg-white">
                  <div className="icon-content">
                    <h4 className="mt-tilte m-t0"> Lime Stone</h4>

                    <NavLink
                      to={route.Products.QuickLimeStone}
                      className="site-button"
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
                  <NavLink to={route.Products.QuickLimePowder}>
                    <div className="owl-carousel service-detail-carousel owl-btn-vertical-center owl-dots-bottom-center m-b20">
                      <div className="item">
                        <div className="aon-thum-bx">
                        <FastImage src="images/Products/QuickLimePowder.jpg" alt="" />
                        </div>
                      </div>
                      <div className="item">
                        <div className="aon-thum-bx">
                        <FastImage src="images/Products/QuickLimePowder(2).jpg" alt="" />
                        </div>
                      </div>
                      <div className="item">
                        <div className="aon-thum-bx">
                        <FastImage src="images/Products/QuickLimePowder(3).jpg" alt="" />
                        </div>
                      </div>
                    </div>
                  </NavLink>
                </div>
                <div className="mt-icon-box-wraper  p-a30 left bg-white">
                  <div className="icon-content">
                    <h4 className="mt-tilte m-t0">Quick Lime Powder</h4>

                    <NavLink
                      to={route.Products.QuickLimePowder}
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
            <div className="row">
              <div className="col-lg-6 col-md-12">
                {/* Need to help */}
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
              </div>
              <div className="col-lg-6 col-md-12">
                {/* Quick Contact */}
                <div className="widget">
                  <h2>Quick Contact</h2>
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
export default QuickLimeLumps;
