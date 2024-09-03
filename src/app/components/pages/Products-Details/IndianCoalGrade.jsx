import { useEffect } from "react";
// import FastImage from "../../../globals/elements/fastimg";
// import { loadScript, route } from "../../../globals/constants";
import { NavLink } from "react-router-dom";
import { loadScript, route } from "../../../../globals/constants";
import FastImage from "../../../../globals/elements/fastimg";

function IndianCoalGrade() {
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
                  <h2 className="m-t0">Indian Coal - Grade 1 to 17</h2>

                  <p>
                    Indian Coal, categorized from Grade 1 to Grade 17, covers a
                    wide range of coal qualities tailored for various industrial
                    applications. These grades reflect the coal’s calorific
                    value, ash content, and overall quality, ensuring that there
                    is a suitable option for diverse needs.
                  </p>
                  <ul className="list-check-circle primary m-b15">
                    <li>
                      <b>Grade 1 to Grade 4:</b>Typically includes high-grade
                      coals with high calorific values and low ash content,
                      ideal for power generation and industrial processes
                      requiring efficient combustion.
                    </li>
                    <li>
                      <b>Grade 5 to Grade 8: </b>Features medium-quality coals,
                      providing a balance between energy output and ash
                      production, suitable for a range of industrial uses.
                    </li>
                    <li>
                      <b>Grade 9 to Grade 17:</b>Consists of lower-grade coals
                      with varying levels of calorific value and ash content,
                      often used for applications where cost-effectiveness is
                      prioritized.
                    </li>
                  </ul>
                  <p>
                    At Chemilex Industries, our Indian Coal grades are carefully
                    selected to meet the specific needs of our clients, ensuring
                    high performance and reliability across different
                    applications, from power generation to industrial heating
                    and manufacturing processes.
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
      {/* <div className="section-full p-t80 p-b50 bg-gray">
                <div className="container">
               
                    <div className="section-head text-center">
                        <h2 data-title="Services">Other  </h2>
                        <div className="mt-separator-outer">
                            <div className="mt-separator site-bg-primary" />
                        </div>
                    </div>
                  
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="mt-box bdr-1 bdr-solid bdr-gray-light m-b30 mt-service-2">
                                <div className="mt-media">
                                    <NavLink to={route.services.SERVICES}><FastImage src="images/gallery/pic5.jpg" alt="" /></NavLink>
                                </div>
                                <div className="mt-icon-box-wraper  p-a30 left bg-white">
                                    <div className="icon-content">
                                        <h4 className="mt-tilte m-t0">Cargo</h4>
                                        <p>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet.</p>
                                        <NavLink to={route.services.SERVICES} className="site-button">Read More</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="mt-box bdr-1 bdr-solid bdr-gray-light m-b30 mt-service-2">
                                <div className="mt-media">
                                    <NavLink to={route.services.SERVICES}><FastImage src="images/gallery/pic7.jpg" alt="" /></NavLink>
                                </div>
                                <div className="mt-icon-box-wraper  p-a30 left bg-white">
                                    <div className="icon-content">
                                        <h4 className="mt-tilte m-t0">Logistic</h4>
                                        <p>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet.</p>
                                        <NavLink to={route.services.SERVICES} className="site-button">Read More</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="mt-box bdr-1 bdr-solid bdr-gray-light m-b30 mt-service-2">
                                <div className="mt-media">
                                    <NavLink to={route.services.SERVICES}><FastImage src="images/gallery/pic5.jpg" alt="" /></NavLink>
                                </div>
                                <div className="mt-icon-box-wraper  p-a30 left bg-white">
                                    <div className="icon-content">
                                        <h4 className="mt-tilte m-t0">Warehousing</h4>
                                        <p>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet.</p>
                                        <NavLink to={route.services.SERVICES} className="site-button">Read More</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
      <div className="section-full p-t80 p-b50 bg-white ">
        <div className="container  bg-white ">
          <div className="section-content ">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                {/* Need to help */}
                <div className="mt-box  need-help m-b40">
                  <h2>Need any help!</h2>
                  <p className="m-b15">
                    <b>
                      {" "}
                      Find answers to frequently asked questions about
                      Bizipress, contacts and general galley of type and
                      scrambled it to make a type specimen book.
                    </b>
                  </p>
                  <p>
                    {" "}
                    been the industry's standard dummy text ever since the when
                    an unknown printer took a galley of type and scrambled it to
                    make a type specimen book. It has survived not only five an
                    unknown printer took a galley of type and scrambled it to
                    make a type specimen book
                  </p>
                  <ul className="list-check-circle primary m-b15">
                    <li>
                      Simply dummy text of the Lorem Ipsum is printing and type
                      setting.{" "}
                    </li>
                    <li>
                      Dummy text of the printing and typesetting industry. Text
                      of the printing.
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
export default IndianCoalGrade;
