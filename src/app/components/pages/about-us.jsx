import FastImage from "../../../globals/elements/fastimg";

import SectionHome2Video from "../../sections/home/home2/section-home2-video";
import SectionHome3WhatWeDo from "../../sections/home/home3/section-home3-what-we-do";
import SectionHome3WhyChooseUs from "../../sections/home/home3/section-home3-why-choose-us";
import { loadScript, publicUrlFor, route } from "../../../globals/constants";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
 
 
 
import SectionSlider1 from "../../sections/home/home1/section-slider1";
import AboutSlider from "../../sections/home/home1/AboutSlider";
import SectionSlider2 from "../../sections/home/home2/section-slider2";

function AboutUsPage() {
  useEffect(() => {
    loadScript("js/custom.js");
  });
  return (
    <>

    {/* about slider */}
    {/* <AboutSlider /> */}
    <AboutSlider/>

      {/* Our Mission */}
      <SectionHome3WhatWeDo />

      {/*Video Section */}
      <SectionHome2Video />

      {/* Why Choose us */}
      <SectionHome3WhyChooseUs />
      {/* <div className="gap"></div> */}
      {/* Our Services */}
      <div className="section-full bg-change-section overlay-wraper p-t80 p-b50">
        <div className="overlay-main   opacity-09" />
        <div className="bg-changer">
          <div
            className="section-bg"
            style={{
              backgroundImage: `url(${publicUrlFor(
                "images/background/bgimage3.png"
              )})`,
            }}
          />
        </div>

        <div className="container">
          {/* TITLE START*/}
          <div className="section-head text-center text-white">
            <h2 data-title="Our"> Products & Services </h2>
            <div className="mt-separator-outer">
              <div className="mt-separator site-bg-primary" />
            </div>
          </div>
          {/* TITLE END*/}
          <div className="section-content">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-6 col-md-6 m-b30">
                <div className="mt-icon-box-wraper center  p-a30 bgcall-block  bdr-1 bdr-solid bdr-primary hover-shadow">
                  <div className="mt-icon-box-sm radius bdr-2 bdr-solid bdr-white m-b20">
                    <span className="icon-cell  site-text-primary">
                      <FastImage src="images/AboutIcon-1.png" alt="" />
                    </span>
                  </div>
                  <div className="icon-content">
                    <h4 className="mt-tilte  m-b15 text-white  ">
                      <NavLink
                        to={route.Products.LimeProduct}
                        className="mt-tilte  m-b15 text-white"
                      >
                        {" "}
                        Lime Products
                      </NavLink>
                        
                    </h4>
                    <p className="text-white">
                    Premium Lime Products(Lime Stone, Hydrated/Calcined Lime, Quick Lime, Quick Lime Powder) for Diverse Industrial Applications
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6  m-b30">
                <div className="mt-icon-box-wraper  center  p-a30 bgcall-block  bdr-1 bdr-solid bdr-primary  hover-shadow">
                  <div className="mt-icon-box-sm radius bdr-2 bdr-solid bdr-white m-b20">
                    <span className="icon-cell  site-text-primary">
                      <FastImage src="images/AboutIcon-2.png" alt="" />{" "}
                    </span>
                  </div>
                  <div className="icon-content">
                    <h4 className="mt-tilte  m-b15 text-white ">
                      <NavLink
                        to={route.Products.ImportedIndianCoalCokes}
                        className="mt-tilte  m-b15 text-white"
                      >
                        {" "}
                        Imported & Indian Coal & Coke
                      </NavLink>
                    </h4>
                    <p className="text-white">
                      Imported and Indian Coal & Coke for Industrial Use
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6   m-b30">
                <div className="mt-icon-box-wraper center p-a30 bgcall-block  bdr-1 bdr-solid bdr-primary hover-shadow ">
                  <div className="mt-icon-box-sm radius bdr-2 bdr-solid bdr-white m-b20">
                    <span className="icon-cell  site-text-primary">
                      <FastImage src="images/AboutIcon-3.png" alt="" />
                    </span>
                  </div>
                  <div className="icon-content">
                    <h4 className="mt-tilte  m-b15 text-white ">
                      <NavLink
                        to={route.Products.OtherMiningProducts}
                        className="mt-tilte  m-b15 text-white"
                      >
                        {" "}
                        Other Mining Products{" "}
                      </NavLink>
                    </h4>
                    <p className="text-white">
                    Diverse Mining Products for Varied Industrial Needs Such As Chrome Concentrate, Gypsum, Imported Manganese Ore.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6  m-b30">
                <div className="mt-icon-box-wraper center  p-a30 bgcall-block  bdr-1 bdr-solid bdr-primary hover-shadow ">
                  <div className="mt-icon-box-sm radius bdr-2 bdr-solid bdr-white m-b20">
                    <span className="icon-cell  site-text-primary">
                      <FastImage src="images/AboutIcon-4.png" alt="" />
                    </span>
                  </div>
                  <div className="icon-content">
                    <h4 className="mt-tilte  m-b15 text-white ">
                      <NavLink
                        to={route.Products.LogisticTransport}
                        className="mt-tilte  m-b15 text-white"
                      >
                        {" "}
                        Logistics & Transport
                      </NavLink>
                       
                    </h4>
                    <p className="text-white">
                    Advanced Logistics and Transport Solutions By Roadways And Railways for Optimal Efficiency
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="gap"></div>
      {/* Our Team */}
      {/* <SectionHome1Team /> */}

      {/* OUR PLANS  */}
      {/* <SectionHome1Plans /> */}
    </>
  );
}
export default AboutUsPage;
