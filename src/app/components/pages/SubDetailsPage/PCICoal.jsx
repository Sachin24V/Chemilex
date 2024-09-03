import { useEffect } from "react";
// import FastImage from "../../../globals/elements/fastimg";
// import { loadScript, route } from "../../../globals/constants";
import { NavLink } from "react-router-dom";
import { loadScript, route } from "../../../../globals/constants";
import FastImage from "../../../../globals/elements/fastimg";

function PCICoal() {
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
                  <h2 className="m-t0"> PCI Coal</h2>

                  <p>
                    PCI Coal, or Pulverized Coal Injection Coal, is a type of
                    high-quality coal used primarily in steelmaking processes.
                    It is injected directly into the blast furnace to replace a
                    portion of the coke required for ironmaking, reducing
                    production costs and increasing efficiency. At Chemilex
                    Industries, our PCI Coal is sourced from trusted suppliers
                    and processed to ensure low impurities and high energy
                    content, providing optimal performance in metallurgical
                    applications.
                  </p>
                  <p>
                    PCI Coal is essential for enhancing the efficiency of steel
                    production by improving the thermal efficiency of blast
                    furnaces and reducing the consumption of coke. Its high
                    carbon content and superior combustibility make it an ideal
                    choice for steel manufacturers seeking to optimize their
                    operations while maintaining product quality.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="owl-carousel service-detail-carousel owl-btn-vertical-center owl-dots-bottom-center m-b20">
                  <div className="item">
                    <div className="aon-thum-bx">
                      <FastImage src="images/our-work/pic1.jpg" alt="" />
                    </div>
                  </div>
                  <div className="item">
                    <div className="aon-thum-bx">
                      <FastImage src="images/our-work/pic2.jpg" alt="" />
                    </div>
                  </div>
                  <div className="item">
                    <div className="aon-thum-bx">
                      <FastImage src="images/our-work/pic3.jpg" alt="" />
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
            <h2 data-title="Services">Other Services</h2>
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
                          <FastImage src="images/gallery/pic5.jpg" alt="" />
                        </div>
                      </div>
                      <div className="item">
                        <div className="aon-thum-bx">
                          <FastImage src="images/gallery/pic5.jpg" alt="" />
                        </div>
                      </div>
                      <div className="item">
                        <div className="aon-thum-bx">
                          <FastImage src="images/gallery/pic5.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                  </NavLink>
                </div>
                <div className="mt-icon-box-wraper  p-a30 left bg-white">
                  <div className="icon-content">
                    <h4 className="mt-tilte m-t0">Prime Hard Cooking Coal</h4>

                    <NavLink
                      to={route.Products.PrimeHardCookingCoal}
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
                  <NavLink to={route.Products.IndonesianSteamCoal}>
                    <div className="owl-carousel service-detail-carousel owl-btn-vertical-center owl-dots-bottom-center m-b20">
                      <div className="item">
                        <div className="aon-thum-bx">
                          <FastImage src="images/gallery/pic5.jpg" alt="" />
                        </div>
                      </div>
                      <div className="item">
                        <div className="aon-thum-bx">
                          <FastImage src="images/gallery/pic5.jpg" alt="" />
                        </div>
                      </div>
                      <div className="item">
                        <div className="aon-thum-bx">
                          <FastImage src="images/gallery/pic5.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                  </NavLink>
                </div>
                <div className="mt-icon-box-wraper  p-a30 left bg-white">
                  <div className="icon-content">
                    <h4 className="mt-tilte m-t0">Indonesian Steam Coal</h4>

                    <NavLink
                      to={route.Products.IndonesianSteamCoal}
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
                  <NavLink to={route.Products.SouthAfricanSteamCoal}>
                    <div className="owl-carousel service-detail-carousel owl-btn-vertical-center owl-dots-bottom-center m-b20">
                      <div className="item">
                        <div className="aon-thum-bx">
                          <FastImage src="images/gallery/pic5.jpg" alt="" />
                        </div>
                      </div>
                      <div className="item">
                        <div className="aon-thum-bx">
                          <FastImage src="images/gallery/pic5.jpg" alt="" />
                        </div>
                      </div>
                      <div className="item">
                        <div className="aon-thum-bx">
                          <FastImage src="images/gallery/pic5.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                  </NavLink>
                </div>
                <div className="mt-icon-box-wraper  p-a30 left bg-white">
                  <div className="icon-content">
                    <h4 className="mt-tilte m-t0">South African Steam Coal</h4>

                    <NavLink
                      to={route.Products.SouthAfricanSteamCoal}
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
                  <NavLink to={route.Products.AnthraciteCoal}>
                    <div className="owl-carousel service-detail-carousel owl-btn-vertical-center owl-dots-bottom-center m-b20">
                      <div className="item">
                        <div className="aon-thum-bx">
                          <FastImage src="images/gallery/pic5.jpg" alt="" />
                        </div>
                      </div>
                      <div className="item">
                        <div className="aon-thum-bx">
                          <FastImage src="images/gallery/pic5.jpg" alt="" />
                        </div>
                      </div>
                      <div className="item">
                        <div className="aon-thum-bx">
                          <FastImage src="images/gallery/pic5.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                  </NavLink>
                </div>
                <div className="mt-icon-box-wraper  p-a30 left bg-white">
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
export default PCICoal;
