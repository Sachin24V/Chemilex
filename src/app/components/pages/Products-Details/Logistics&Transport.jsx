import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { loadScript, publicUrlFor } from "../../../../globals/constants";
import FastImage from "../../../../globals/elements/fastimg";
import _data from "../../../../globals/data/data.json";

export const LogisticTransport = () => {
  const { LogisticTransport } = _data.services;

  useEffect(() => {
    loadScript("js/custom.js");
  });

  return (
    <>
      {/* <div className="section-full  bg-gray p-t80 p-b50">
                <div className="container">
                   
                    <div className="section-head text-center">
                        <h2 data-title="Explore">Explore further</h2>
                        <div className="mt-separator-outer">
                            <div className="mt-separator site-bg-primary" />
                        </div>
                    </div>
                 
                    <div className="section-content">
                        <div className="row d-flex justify-content-center">

                            {
                                explore.map((_item, index) => {
                                    return <div key={index} className="col-lg-4 col-md-6">
                                        <div className="mt-icon-box-wraper m-b30  p-a30 center bg-white">
                                            <div className="mt-icon-box-sm site-bg-primary m-b20 radius-10">
                                                <span className="icon-cell text-white"><i className={_item.icon} /></span>
                                            </div>
                                            <div className="icon-content">
                                                <h4 className="mt-tilte">{_item.title}</h4>
                                                <p>{_item.desc_short}</p>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }

                        </div>
                    </div>
                </div>
            </div> */}
      {/* Our Services */}
      <div className="section-full bg-white p-t80 p-b50">
        <div className="container">
          {/* TITLE START*/}
          <div className="section-head text-center">
            <h2 data-title="Services">Our Products</h2>
            <div className="mt-separator-outer">
              <div className="mt-separator site-bg-primary" />
            </div>
          </div>
          {/* TITLE END*/}
          <div className="mfp-gallery clearfix">
            <div className="row d-flex justify-content-center">
              {LogisticTransport.map((_item, index) => {
                return (
                  <div key={index} className="col-lg-6 col-md-6 m-b30">
                    <div className="mt-box bg-white bdr-1 bdr-solid bdr-gray-light mt-service-1">
                      <div className="mt-thum-bx mt-img-overlay3 mt-img-effect">
                        <div className="owl-carousel service-detail-carousel owl-btn-vertical-center owl-dots-bottom-center m-b20">
                          <div className="item">
                            <div className="aon-thum-bx">
                              <FastImage src={_item.image1} alt="" />
                            </div>
                          </div>
                          <div className="item">
                            <div className="aon-thum-bx">
                              <FastImage src={_item.image2} alt="" />
                            </div>
                          </div>
                          
                        </div>
                        <div className="overlay-bx">
                          <div className="overlay-icon">
                            <NavLink to={_item.path}>
                              <i className="fa fa-external-link-square mt-icon-box-xs" />
                            </NavLink>
                            <a
                              className="mfp-link"
                              href={publicUrlFor(_item.image_preview)}
                            >
                              <i className="fa fa-search-plus mt-icon-box-xs" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="mt-info p-a20">
                        <h4 className="m-t0">{_item.title}</h4>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="section-full bg-gray">
                <div className="container">
                    <div className="section-content">
                        <div className="owl-carousel client-logo-carousel owl-btn-vertical-center">

                            {
                                clients.map((_item, index) => {
                                    return <div key={index} className="item">
                                        <div className="ow-client-logo">
                                            <div className="client-logo mt-img-effect on-color">
                                                <NavLink to={route.pages.ABOUT}><FastImage src={_item} alt="" /></NavLink>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }
                            
                        </div>
                    </div>
                </div>
            </div> */}
    </>
  );
};
