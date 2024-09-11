import { useEffect } from "react";
import { loadScript, route, publicUrlFor } from "../../../globals/constants";
import FastImage from "../../../globals/elements/fastimg";
// import CountUp from "react-countup";

import { NavLink } from "react-router-dom";

import SectionSlider3 from "../../sections/home/home3/section-slider3";
// import SectionHome1Team from "../../sections/home/home1/section-home1-team";
// import SectionHome1Plans from "../../sections/home/home1/section-home1-plans";
// import SectionHome1Blogs from "../../sections/home/home1/section-home1-blogs";
// import SectionHome1Testimonials from "../../sections/home/home1/section-home1-testimonials";

function Home1Page() {
  useEffect(() => {
    loadScript("js/custom.js");
  });

  return (
    <>
      {/* Slider */}

      <SectionSlider3 />

      {/* How it Work */}
      <div
        className="section-full p-t80 p-b50 bg-gray bg-no-repeat bg-cover bg-white"
        style={{
          backgroundImage: `url(${publicUrlFor("images/background/bg15.jpg")})`,
        }}
      >
        <div className="container">
          {/* TITLE START*/}
          <div className="section-head text-center">
            <h2 data-title="  Industries">CHEMILEX </h2>
            <div className="mt-separator-outer">
              <div className="mt-separator site-bg-primary" />
            </div>
          </div>
          {/* TITLE END*/}
          <div className="section-content sx-how-it-work">
            <div className="row">
              {/* block 1 */}
              <div className="col-lg-6 col-md-6">
                <div className="mt-box m-b30">
                  <div className="mt-icon-box-wraper p-a30 left bg-white hover-border-outer hover-border">
                    <div className="icon-md radius m-b15">
                      <span className="icon-cell site-text-primary">
                        <FastImage src="images/LimeProduct.png" alt="" />
                      </span>
                    </div>
                    <div className="icon-content">
                      <h4 className="mt-tilte m-b15">
                        <NavLink to={route.Products.LimeProduct}>
                          Lime Products
                        </NavLink>
                      </h4>
                      <p>
                        Premium Lime Products(Lime Stone, Hydrated/Calcined
                        Lime, Quick Lime, Quick Lime Powder) for Diverse
                        Industrial Applications
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-box m-b30">
                  <div className="mt-icon-box-wraper p-a30 left bg-white hover-border-outer hover-border">
                    <div className="icon-md radius m-b15">
                      <span className="icon-cell site-text-primary">
                        <FastImage
                          src="images/Imported & Indian Coal & Cokes .png"
                          alt=""
                        />
                      </span>
                    </div>
                    <div className="icon-content">
                      <h4 className="mt-tilte m-b15">
                        <NavLink to={route.Products.ImportedIndianCoalCokes}>
                          Imported & Indian Coal & Coke
                        </NavLink>
                      </h4>
                      <p>Imported and Indian Coal & Coke for Industrial Use</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* block 2 */}
              {/* <div className="col-lg-4 col-md-6">
<div className="mt-box m-b30">
<div className="mt-media mid-img-verticle">
<FastImage src="images/truck.png" alt="" />
</div>
</div>
</div> */}
              {/* block 3 */}
              <div className="col-lg-6 col-md-12">
                <div className="mt-box m-b30">
                  <div className="mt-icon-box-wraper p-a30 left bg-white hover-border-outer hover-border">
                    <div className="icon-md radius m-b15">
                      <span className="icon-cell site-text-primary">
                        <FastImage
                          src="images/Other Mining Products.png"
                          alt=""
                        />
                      </span>
                    </div>
                    <div className="icon-content">
                      <h4 className="mt-tilte m-b15">
                        <NavLink to={route.Products.OtherMiningProducts}>
                          {" "}
                          Other Mining Products{" "}
                        </NavLink>
                      </h4>
                      <p>
                        Diverse Mining Products for Varied Industrial Needs Such
                        As Chrome Concentrate, Gypsum, Imported Manganese Ore.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-box m-b30">
                  <div className="mt-icon-box-wraper p-a30 left bg-white hover-border-outer hover-border">
                    <div className="icon-md radius m-b15">
                      <span className="icon-cell site-text-primary">
                        <i className="flaticon-forklift-1" />
                      </span>
                    </div>
                    <div className="icon-content">
                      <h4 className="mt-tilte m-b15">
                        <NavLink to={route.Products.LogisticTransport}>
                          Logistics & Transport
                        </NavLink>
                      </h4>
                      <p>
                        Advanced Logistics and Transport Solutions By Roadways
                        And Railways for Optimal Efficiency
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Shipment Solution*/}
      <div
        className="section-full p-t80 p-b50 bg-no-repeat bg-center bg-white"
        style={{
          backgroundImage: `url(${publicUrlFor(
            "images/background/bg-map.png"
          )})`,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-12">
              <div className="mt-box m-b30">
                {/* <div className="mt-thum-bx mt-img-effect mt-img-overlay2">
<FastImage
src="images/background/About Us 458 x 624.png"
alt=""
/>
<a
href="https://player.vimeo.com/video/66491481"
className="mfp-video play-now"
>
<i className="icon fa fa-play" />
<span className="ripple" />
</a>
</div>
*/}
                <div className="owl-carousel service-detail-carousel owl-btn-vertical-center owl-dots-bottom-center m-b20">
                  <div className="item">
                    <div className="aon-thum-bx">
                      <FastImage src="images/background/15.png" alt="" />
                    </div>
                  </div>
                  <div className="item">
                    <div className="aon-thum-bx">
                      <FastImage
                        src="images/background/Calcined Lime.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="item">
                    <div className="aon-thum-bx">
                      <FastImage
                        src="images/background/Quick Lime.png"
                        alt=""
                      />
                    </div>
                  </div>


                  <div className="item">
                    <div className="aon-thum-bx">
                      <FastImage
                        src="images/background/17.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="item">
                    <div className="aon-thum-bx">
                      <FastImage
                        src="images/background/18.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="item">
                    <div className="aon-thum-bx">
                      <FastImage
                        src="images/background/19.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="item">
                    <div className="aon-thum-bx">
                      <FastImage
                        src="images/background/20.jpg"
                        alt=""
                      />
                    </div>
                  </div>


                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-12">
              <div className="sx-shipment-wrap">
                <div className="mt-box m-b25">
                  <h2 className="display-block m-b15 m-t0">About Us</h2>
                  <p className="m-b15">
                    Welcome to Chemilex Industries, a leader in the lime
                    manufacturing industry and a trusted partner in the trade of
                    imported coal and coke. With years of expertise and a
                    commitment to excellence, we pride ourselves on delivering
                    high-quality lime products that meet the diverse needs of
                    our clients across various industries.
                  </p>
                  <p className="m-b15">
                    Our state-of-the-art manufacturing facilities are equipped
                    with the latest technology, enabling us to produce lime
                    products that are both environmentally friendly and superior
                    in quality. We serve a wide range of sectors, including
                    steel, construction, chemical, and agriculture, offering
                    tailored solutions to enhance productivity and efficiency.
                  </p>

                  <h2 className="display-block m-b5 m-t30">Why Choose Us</h2>
                  <ul className="list-check-circle primary m-b20">
                    <li>
                      <strong>Quality Assurance :</strong> We source all our
                      commodities from the finest quarries and implement
                      rigorous quality control measures to ensure our products
                      are consistently superior.
                    </li>
                    <li>
                      {" "}
                      <strong> Sustainability:</strong> We are committed to
                      sustainable practices, focusing on responsible quarrying
                      and eco-friendly processing methods to reduce our
                      environmental footprint.
                    </li>
                    <li>
                      {" "}
                      <strong> Innovation:</strong> Our expert team consistently
                      seeks out new technologies and methods to enhance our
                      products and services, keeping us at the cutting edge of
                      the industry.
                    </li>
                    <li>
                      <strong>Customer Service:</strong>We take pride in
                      delivering exceptional customer service, providing the
                      best solutions and support from the start of your order to
                      its completion.
                    </li>
                  </ul>
                  <NavLink to={route.pages.ABOUT} className="site-button">
                    Read more
                  </NavLink>
                </div>
                {/* <div className="row">
<div className="col-md-6 col-sm-6">
<div className="m-b30 text-black mt-icon-box-wraper center bdr-1 bdr-solid bdr-gray-light bg-white p-a20">
<div className="counter font-42 font-weight-800 m-b15 site-text-primary">
<CountUp end={450} duration={10} />
</div>
<h4 className="m-tb0">Delivered Packages</h4>
</div>
</div>
<div className="col-md-6 col-sm-6">
<div className="m-b30 text-black mt-icon-box-wraper center bdr-1 bdr-solid bdr-gray-light bg-white p-a20">
<div className="counter font-42 font-weight-800 m-b15 site-text-primary">
<CountUp end={45} duration={10} />
</div>
<h4 className="m-tb0">Countries Covered</h4>
</div>
</div>
<div className="col-md-6 col-sm-6">
<div className="m-b30 text-black mt-icon-box-wraper center bdr-1 bdr-solid bdr-gray-light bg-white p-a20">
<div className="counter font-42 font-weight-800 m-b15 site-text-primary">
<CountUp end={670} duration={10} />
</div>
<h4 className="m-tb0">Satisfied Clients</h4>
</div>
</div>
<div className="col-md-6 col-sm-6">
<div className="m-b30 text-black mt-icon-box-wraper center bdr-1 bdr-solid bdr-gray-light bg-white p-a20">
<div className="counter font-42 font-weight-800 m-b15 site-text-primary">
<CountUp end={1500} duration={10} />
</div>
<h4 className="m-tb0">Tons of Goods</h4>
</div>
</div>
</div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Latest Project */}
      <div
        className="section-full p-tb80 bg-full-height bg-secondry bg-repeat-x city-slide-image"
        style={{
          backgroundImage: `url(${publicUrlFor(
            "images/background/bg-trans-1.png"
          )})`,
        }}
      >
        <div className="container-fluid">
          <div className="fillter-left-content">
            <div className="filter-left-part shake_image">
              <FastImage src="images/truck-2.png" alt="" />
              <span className="tyre-position">
                <FastImage
                  src="images/rotate-tyer.png"
                  alt=""
                  className="spin-tyres"
                />
              </span>
              <FastImage
                className="blink-image"
                src="images/light-blink.png"
                alt=""
              />
            </div>
            <div className="container">
              <div className="section-head text-center sx-title-mid-area">
                <div className="mt-box text-white m-b30">
                  <h2 className="m-tb0">Business & Services </h2>
                  <p className="m-b15">
                    Chemilex Industries manufactures multiple Lime products from
                    the topnotch lime stones & operates as a comprehensive coal
                    company across India. We have a deep understanding of Lime
                    stone, coal, and other mining products not only as a product
                    but as a raw material, a fuel, and a source of energy. We
                    provide industry-specific, 100% authentic, and trusted
                    services tailored to the needs and usage of our consumers.
                  </p>
                </div>
              </div>
              <div className="filter-carousal-1-outer">
                <div className="filter-carousal-1">
                  {/* IMAGE CAROUSEL START */}
                  <div className="section-content">
                    <div className="owl-carousel owl-carousel-filter owl-btn-vertical-center fillter-nav-left">
                      {/* Block 1 */}
                      <div className="item overflow-hide">
                        <div className="mt-box">
                          <div className="mt-img-effect overlay-2">
                            <FastImage
                              src="images/gallery/portrait/transports.jpg"
                              alt=""
                              style={{
                                height: "695px",
                              }}
                            />
                            <div className="overlay-2-bg bg-black" />
                            <div className="overlay-2-content">
                              <div className="p-a30 p-b20">
                                <h4 className="m-t0 m-b15 site-text-primary">
                                  Manufacturer
                                </h4>
                                <p className="m-b20 text-white">
                                  We excel in manufacturing top-quality
                                  Hydrated/Calcined Lime, Quick Lime, Lime
                                  Powder & more Lime products usingadvanced
                                  manufacturing technology. Our rigorous
                                  standards and innovative processes ensure
                                  superior materials that meet diverse client
                                  needs.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Block 2 */}
                      <div className="item overflow-hide">
                        <div className="mt-box">
                          <div className="mt-img-effect overlay-2">
                            <FastImage
                              src="images/gallery/portrait/trader.jpg"
                              alt=""
                              style={{
                                height: "695px",
                              }}
                            />
                            <div className="overlay-2-bg bg-black" />
                            <div className="overlay-2-content">
                              <div className="p-a30 p-b20">
                                <h4 className="m-t0 m-b15 site-text-primary">
                                  Trader
                                </h4>
                                <p className="m-b20 text-white">
                                  Our company specializes in the trade of
                                  high-quality minerals, both imported and
                                  sourced locally from India. We offer a range
                                  of essential raw materials for various
                                  industries. With reliable sourcing and
                                  consistent supply, we ensure timely delivery
                                  to meet your industrial needs efficiently
                                  <ul className="list-check-circle primary m-b20">
                                    <li>
                                      <strong>Coal & Coke :</strong>{" "}
                                      Energy-efficient fuel for power plants,
                                      steel manufacturing, and other industrial
                                      processes.
                                    </li>
                                    <li>
                                      <strong>Gypsum :</strong> Widely used in
                                      cement, construction, and agriculture for
                                      soil conditioning.
                                    </li>
                                    <li>
                                      <strong>Manganese Ore :</strong> A key
                                      component in steel production, improving
                                      strength and durability.
                                    </li>
                                    <li>
                                      <strong>Chrome Concentrate :</strong>{" "}
                                      Vital for producing stainless steel and
                                      other alloy products.
                                    </li>
                                  </ul>
                                  With reliable sourcing and consistent supply,
                                  we ensure timely delivery to meet your
                                  industrial needs efficiently.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Block 3 */}
                      <div className="item overflow-hide">
                        <div className="mt-box">
                          <div className="mt-img-effect overlay-2">
                            <FastImage
                              src="images/gallery/portrait/manufacturer.jpg"
                              alt=""
                              style={{
                                height: "695px",
                              }}
                            />
                            <div className="overlay-2-bg bg-black" />
                            <div className="overlay-2-content">
                              <div className="p-a30 p-b20">
                                <h4 className="m-t0 m-b15 site-text-primary">
                                  Logistics & Transportation
                                </h4>
                                <p className="m-b20 text-white">
                                  We provide comprehensive road and rail
                                  logistics solutions to ensure the smooth and
                                  timely transportation of goods across India.
                                  With a focus on safety and on-time delivery,
                                  we help businesses streamline their supply
                                  chain and optimize transport costs.
                                  <ul className="list-check-circle primary m-b20">
                                    <li>
                                      <strong>Road Transport :</strong>{" "}
                                      Efficient, flexible, and secure delivery
                                      with a fleet of modern trucks.
                                    </li>
                                    <li>
                                      <strong>Rail Transport :</strong>{" "}
                                      Cost-effective bulk freight solutions for
                                      long-distance hauls.
                                    </li>
                                    <li>
                                      <strong>End-to-End Service :</strong> From
                                      planning to execution, we handle all
                                      logistics needs with precision and
                                      reliability.
                                    </li>
                                    With a focus on safety and on-time delivery,
                                    we help businesses streamline their supply
                                    chain and optimize transport costs.
                                  </ul>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Block 4 */}
                      <div className="item overflow-hide">
                        <div className="mt-box">
                          <div className="mt-img-effect overlay-2">
                            <FastImage
                              src="images/gallery/portrait/Mining.png"
                              alt=""
                              style={{
                                height: "695px",
                              }}
                            />
                            <div className="overlay-2-bg bg-black" />
                            <div className="overlay-2-content">
                              <div className="p-a30 p-b20">
                                <h4 className="m-t0 m-b15 site-text-primary">
                                  Mining
                                </h4>
                                <p className="m-b20 text-white">
                                  To support our trading activities, Chemilex
                                  Industries has invested in a global portfolio
                                  of mining assets across Indonesia, India, and
                                  South Africa.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Block 5 */}
                      <div className="item overflow-hide">
                        <div className="mt-box">
                          <div className="mt-img-effect overlay-2">
                            <FastImage
                              src="images/gallery/portrait/Quality (3).png"
                              alt=""
                              style={{
                                height: "695px",
                              }}
                            />
                            <div className="overlay-2-bg bg-black" />
                            <div className="overlay-2-content">
                              <div className="p-a30 p-b20">
                                <h4 className="m-t0 m-b15 site-text-primary">
                                  Quality
                                </h4>
                                <p className="m-b20 text-white">
                                  Our deep understanding of commodity value
                                  chains allows us to strategically position
                                  ourselves at key intersections within the
                                  market.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Our Team */}
      {/* <SectionHome1Team /> */}

      {/* MY BLOG */}
      {/* <SectionHome1Blogs /> */}
      {/* Testimonials
<SectionHome1Testimonials /> */}
      <div className="gap"></div>

      {/* Why Choose */}
      <div
        className="section-full bg-change-section overlay-wraper
p-t80 p-b50"
      >
        <div className="overlay-main opacity-09" />
        <div className="bg-changer">
          <div
            className="section-bg"
            style={{
              backgroundImage: `url(${publicUrlFor(
                "images/background/bgimage2.png"
              )})`,
            }}
          />
          <div
            className="section-bg"
            style={{
              backgroundImage: `url(${publicUrlFor(
                "images/background/bgimage3.png"
              )})`,
            }}
          />

          <div
            className="section-bg"
            style={{
              backgroundImage: `url(${publicUrlFor(
                "images/background/expertise-bg-1.png"
              )})`,
            }}
          />
          <div
            className="section-bg"
            style={{
              backgroundImage: `url(${publicUrlFor(
                "images/background/expertise-bg-3.png"
              )})`,
            }}
          />
        </div>
        <div className="container">
          {/* TITLE START*/}
          <div className="section-head text-center text-white ">
            <h2 data-title=" Our "> EXPERTIES </h2>
            <div className="mt-separator-outer">
              <div className="mt-separator site-bg-primary" />
            </div>
          </div>
          {/* TITLE END*/}
          <div className="section-content">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 m-b30">
                <div className="mt-icon-box-wraper p-a30 bgcall-block hover-shadow hover-border-outer hover-border m-b30">
                  <div className="icon-md radius m-b15">
                    <span className="icon-cell text-white">
                      <FastImage
                        src="images/SuperiorIndustrialMinerals.png"
                        alt=""
                      />
                    </span>
                  </div>
                  <div className="icon-content">
                    <h4 className="mt-tilte m-b15 text-white">
                      Superior Lime Products
                    </h4>
                    <p className="text-white">
                      We provide high-quality industrial minerals for various
                      applications, ensuring exceptional performance and
                      reliability.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 m-b30">
                <div className="mt-icon-box-wraper p-a30 bgcall-block hover-shadow hover-border-outer hover-border m-b30">
                  <div className="icon-md radius m-b15 text-white">
                    <span className="icon-cell text-white">
                      <FastImage src="images/PremiumCoalSupply.png" alt="" />
                    </span>
                  </div>
                  <div className="icon-content">
                    <h4 className="mt-tilte m-b15 text-white">
                      Premium Coal Supply
                    </h4>
                    <p className="text-white">
                      Our premium coal products offer high energy content and
                      low impurities for efficient and sustainable energy
                      production.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 m-b30">
                <div className="mt-icon-box-wraper p-a30 bgcall-block hover-shadow hover-border-outer hover-border m-b30">
                  <div className="icon-md radius m-b15">
                    <span className="icon-cell text-white">
                      <FastImage src="images/SustainableSourcing.png" alt="" />
                    </span>
                  </div>
                  <div className="icon-content">
                    <h4 className="mt-tilte m-b15 text-white">
                      Sustainable Sourcing
                    </h4>
                    <p className="text-white">
                      We prioritize responsible sourcing, working with suppliers
                      to minimize environmental impact and support local
                      communities.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 m-b30">
                <div className="mt-icon-box-wraper p-a30 bgcall-block hover-shadow hover-border-outer hover-border m-b30">
                  <div className="icon-md radius m-b15">
                    <span className="icon-cell text-white">
                      <FastImage src="images/InnovativeSolutions.png" alt="" />
                    </span>
                  </div>
                  <div className="icon-content">
                    <h4 className="mt-tilte m-b15 text-white">
                      Innovative Solutions
                    </h4>
                    <p className="text-white">
                      Our cutting-edge technology and innovative approaches
                      enhance productivity, reduce costs, and deliver
                      value-added benefits.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="gap"></div>
      {/* Contact Us */}
      <div
        className="section-full bg-white bg-right-center bg-no-repeat"
        style={{
          backgroundImage: `url(${publicUrlFor(
            "images/background/bg-trans-2.png"
          )})`,
        }}
      >
        <div className="container">
          <div className="row conntact-home">
            <div className="col-lg-12 col-md-5 col-sm-12">
              <div className="contact-home1-left bg-secondry">
                <div className="contact-tag-line bg-white site-text-primary ">
                  Contact us
                </div>
                <div className="section-content p-lr30 p-tb30">
                  <div
                    className="call-back-form"
                    style={{ zIndex: 1, position: "relative" }}
                  >
                    <h2 className="text-white m-t0 text-center">Contact Us</h2>
                    <form
                      className="cons-contact-form2 form-transparent"
                      method="post"
                      action="form-handler2.php"
                    >
                      <div className="form-group">
                        <input
                          name="username"
                          type="text"
                          required
                          className="form-control"
                          placeholder="Name"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          name="email"
                          type="text"
                          className="form-control"
                          required
                          placeholder="Email"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          name="phone"
                          type="text"
                          className="form-control"
                          required
                          placeholder="Phone"
                        />
                      </div>
                      <div className="form-group">
                        <textarea
                          name="message"
                          className="form-control"
                          rows={3}
                          placeholder="Message"
                          defaultValue={""}
                        />
                      </div>
                      <button type="submit" className="site-button ">
                        <span className="font-weight-700 inline-block p-lr15">
                          Submit
                        </span>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="section-content contact-home1-right">
<div className="mt-box">
<div className="mt-media">
<FastImage src="images/con-1.png" alt="" />
</div>
</div>
</div> */}
          </div>
        </div>
      </div>
      {/* Our Client Logo */}
      {/* <div className="section-full bg-white p-tb50">
<div className="container">
<div className="section-content">
<div className="owl-carousel home-client-logo owl-btn-vertical-center">
{clients.map((_item, index) => {
return (
<div key={index} className="item">
<div className="ow-client-logo">
<div className="client-logo mt-img-effect on-color">
<NavLink to={route.pages.team.TEAM}>
<FastImage src={_item} alt="" />
</NavLink>
</div>
</div>
</div>
);
})}
</div>
</div>
</div>
</div> */}
      <div className="gap"></div>
      {/* OUR PLANS */}
      {/* <SectionHome1Plans /> */}
    </>
  );
}
export default Home1Page;
