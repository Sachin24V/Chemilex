import { route, publicUrlFor } from "../../../../globals/constants";
import FastImage from "../../../../globals/elements/fastimg";
import { NavLink } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function SectionFooter1(props) {
  return (
    <>
      <footer className={"site-footer " + props.theme}>
        {/* Footer Top Part */}
        <div className="footer-top overlay-wraper">
          <div className="overlay-main" />
          <div className="container">
            <div className="row">
              {/* About */}
              <div className="col-lg-3 col-md-6">
                <div className="widget widget_about">
                  <div className="logo-footer clearfix p-b15">
                    <NavLink to={route.INITIAL}>
                      <FastImage
                        src="images/Chemilex-BGR-Logo.png "
                        width={171}
                        height={49}
                        alt=""
                      />
                    </NavLink>
                  </div>
                  <p>
                    Chemilex Industries is dedicated to delivering top-quality
                    industrial minerals and coal with a focus on sustainability
                    and innovation. For inquiries or support, feel free to reach
                    out to us. We’re here to serve you and ensure the best for
                    your business.
                  </p>
                  {/* <ul>
<li>
<i className="fa fa-phone site-text-primary" />{" "}
<b className="p-lr5 text-uppercase">Mobile Number :</b>
<a href="tell:+912617961531"> +91 99091 07770</a>
<br />
<a className="myanchore" href="tell:+919879879925">+91 98798 79925</a>
</li>

<li>
<a href="mailto:info@chemilex.com">
<i className="fa fa-envelope site-text-primary" />{" "}
<b className="p-lr5 text-uppercase">Email Address : </b>
info@chemilex.com
</a>
</li>
</ul> */}
                </div>
              </div>
              {/* Useful Links */}
              <div className="col-lg-3 col-md-6">
                <div className="widget widget_services">
                  <h4 className="widget-title">Useful links</h4>
                  <ul>
                    <li>
                      <NavLink to={route.pages.ABOUT}>About</NavLink>
                    </li>
                    <li>
                      <NavLink to={route.Products.PRODUCT}>Products</NavLink>
                    </li>
                    <li>
                      <NavLink to={route.pages.contact.Inquiry}>
                        Inquiry
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={route.pages.contact.CONTACT1}>
                        Contact Us
                      </NavLink>
                    </li>
                    {/* <li>
<NavLink to={route.pages.gallery.GALLERY1}>
Gallery
</NavLink>
</li>
<li>
<NavLink to={route.shop.PRODUCTS}>Shop</NavLink>
</li>
<li>
<NavLink to={route.blog.GRID}>Blog</NavLink>
</li> */}
                  </ul>
                </div>
              </div>
              {/* Resent Post */}
              <div className="col-lg-3 col-md-6">
                <div className="widget recent-posts-entry-date">
                  <h4 className="widget-title">Office Locations</h4>
                  <div className="widget-post-bx">
                    <div className="widget-post clearfix">
                      <div className="mt-post-info">
                        <div className="mt-post-header">
                          <div className="post-title">
                            <p>
                              {" "}
                              <span className="footertitle">
                                {" "}
                                <i className="iconmoon-travel" />
                              </span>{" "}
                              Factory Address
                            </p>
                          </div>
                        </div>
                        <div className="mt-post-meta">
                          <ul>
                            <li className="post-author">
                              Khasra No-172/3, Manakpur Industrial Area, Post
                              Basni Hari Singh, Tehsil Bhopalgarh, Jodhpur,
                              Rajasthan - 342901, India
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="widget-post clearfix">
                      <div className="mt-post-info">
                        <div className="mt-post-header">
                          <div className="post-title">
                            <p>
                              <span className="footertitle">
                                {" "}
                                <i className="iconmoon-travel" />
                              </span>
                              Office Address
                            </p>
                          </div>
                        </div>
                        <div className="mt-post-meta">
                          <ul>
                            <li className="post-author">
                              Office No-12, Ashwamegh Palace,
                              <br />
                              Opp-Shreenathji Gardenia, Kosad,
                              <br />
                              Surat, Gujarat - 394107, India
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Instagram Feed */}
              <div className="col-lg-3 col-md-6 ">
                <div className="widget widget_newsletter f-news-letter">
                  <h4 className="widget-title">Contact Us</h4>
                  <div className="newsletter-bx m-b30">
                    {/* <form role="search" method="post">
<div className="input-group">
<input
name="news-letter"
className="form-control"
placeholder="ENTER YOUR EMAIL"
type="text"
/>
<span className="input-group-btn">
<button
type="submit"
className="site-button btn font-weight-600"
>
<i className="fa fa-paper-plane" />
</button>
</span>
</div>
</form> */}
                    <ul>
                      <li>
                        <i className="fa fa-phone site-text-primary" />{" "}
                        <b className="p-lr5 text-uppercase">Mobile Number :</b>
                        <a href="tell:+912617961531"> +91 99091 07770</a>
                        <br />
                        <a className="myanchore" href="tell:+919879879925">
                          +91 98798 79925
                        </a>
                      </li>

                      <li>
                        <a href="mailto:info@chemilex.com">
                          <i className="fa fa-envelope site-text-primary" />{" "}
                          <b className="p-lr5 text-uppercase">
                            Email Address :{" "}
                          </b>
                          info@chemilex.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="widget widget_gallery mfp-gallery clearfix">
                  <h4 className="widget-title">Social Feed</h4>
                  <ul className="clearfix">
                    <li>
                      <NavLink to={route.INITIAL}>
                        <InstagramIcon />
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={route.INITIAL}>
                        <FacebookIcon />
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={route.INITIAL}>
                        <XIcon />
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={route.INITIAL}>
                        <LinkedInIcon />
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer Copyright Part */}
        <div className="footer-bottom overlay-wraper">
          <div className="overlay-main" />
          <div className="container p-t30">
            <div className="mt-footer-bot-center">
              <span className="copyrights-text">
                © 2024 Chemilex Industries. All Rights Reserved. Developed By{" "}
                <a
                  href="https://www.veravalonline.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  VO
                </a>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default SectionFooter1;
