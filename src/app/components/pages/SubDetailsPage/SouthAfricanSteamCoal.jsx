import { useEffect } from "react";
// import FastImage from "../../../globals/elements/fastimg";
// import { loadScript, route } from "../../../globals/constants";
import { NavLink } from "react-router-dom";
import { loadScript, route } from "../../../../globals/constants";
import FastImage from "../../../../globals/elements/fastimg";

function SouthAfricanSteamCoal() {

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
                                    <h2 className="m-t0">South African Steam Coal </h2>
                            
                                    <p>
                                    South African Steam Coal is renowned for its high calorific value, low ash content, and consistent quality, making it a preferred choice for power generation and industrial applications. Sourced from the rich coal fields of South Africa, this steam coal is known for its excellent combustion properties and efficiency.
                                    </p>
                                    <p>At Chemilex Industries, we provide premium-grade South African Steam Coal that meets stringent industry standards. Its primary uses include fueling power plants, industrial boilers, and cement manufacturing, where it provides reliable and efficient energy. With its robust performance and energy efficiency, South African Steam Coal is an ideal choice for industries seeking high-quality and cost-effective fuel solutions.
 
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
                                    <NavLink to={route.Products.PrimeHardCookingCoal}><div className="owl-carousel service-detail-carousel owl-btn-vertical-center owl-dots-bottom-center m-b20">
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
                    </div></NavLink>
                                </div>
                                <div className="mt-icon-box-wraper  p-a30 left bg-white">
                                    <div className="icon-content">
                                        <h4 className="mt-tilte m-t0">Prime Hard Cooking Coal</h4>
                                        
                                        <NavLink to={route.Products.PrimeHardCookingCoal} className="site-button">Read More</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="mt-box bdr-1 bdr-solid bdr-gray-light m-b30 mt-service-2">
                                <div className="mt-media">
                                    <NavLink to={route.Products.IndonesianSteamCoal}><div className="owl-carousel service-detail-carousel owl-btn-vertical-center owl-dots-bottom-center m-b20">
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
                    </div></NavLink>
                                </div>
                                <div className="mt-icon-box-wraper  p-a30 left bg-white">
                                    <div className="icon-content">
                                        <h4 className="mt-tilte m-t0">Indonesian Steam Coal</h4>
                                       
                                        <NavLink to={route.Products.IndonesianSteamCoal} className="site-button">Read More</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="mt-box bdr-1 bdr-solid bdr-gray-light m-b30 mt-service-2">
                                <div className="mt-media">
                                    <NavLink to={route.Products.PCICoal}><div className="owl-carousel service-detail-carousel owl-btn-vertical-center owl-dots-bottom-center m-b20">
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
                    </div></NavLink>
                                </div>
                                <div className="mt-icon-box-wraper  p-a30 left bg-white">
                                    <div className="icon-content">
                                        <h4 className="mt-tilte m-t0">PCI Coal</h4>
                                       
                                        <NavLink to={route.Products.PCICoal} className="site-button">Read More</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="mt-box bdr-1 bdr-solid bdr-gray-light m-b30 mt-service-2">
                                <div className="mt-media">
                                    <NavLink to={route.Products.AnthraciteCoal}><div className="owl-carousel service-detail-carousel owl-btn-vertical-center owl-dots-bottom-center m-b20">
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
                    </div></NavLink>
                                </div>
                                <div className="mt-icon-box-wraper  p-a30 left bg-white">
                                    <div className="icon-content">
                                        <h4 className="mt-tilte m-t0">Anthracite Coal</h4>
                                         
                                        <NavLink to={route.Products.AnthraciteCoal} className="site-button">Read More</NavLink>
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
                                    <h2>Need any help!</h2>
                                    <p className="m-b15"><b> Find answers to frequently asked questions about Bizipress, contacts and general galley of type and scrambled it to make a type specimen book.</b></p>
                                    <p> been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                                    <ul className="list-check-circle primary m-b15">
                                        <li>Simply dummy text of the Lorem Ipsum is printing and type setting. </li>
                                        <li>Dummy text of the printing and typesetting industry. Text of the printing.</li>
                                    </ul>
                                    <NavLink to={route.pages.contact.CONTACT1} className="site-button-link">Contact Us</NavLink>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                {/* Quick Contact */}
                                <div className="widget">
                                    <h2>Quick Contact</h2>
                                    <div className="widget-quick-form">
                                        <form>
                                            <div className="form-group">
                                                <input placeholder="Name" className="form-control" type="text" />
                                            </div>
                                            <div className="form-group">
                                                <input placeholder="Email" className="form-control" type="text" />
                                            </div>
                                            <div className="form-group">
                                                <textarea placeholder="Message" className="form-control" rows={3} defaultValue={""} />
                                            </div>
                                            <div className="form-group">
                                                <button type="submit" className="site-button text-uppercase font-weight-600">Submit</button>
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
export default SouthAfricanSteamCoal;