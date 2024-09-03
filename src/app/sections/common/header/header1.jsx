import { useEffect, useState } from "react";
import { loadScript, route } from "../../../../globals/constants";
import FastImage from "../../../../globals/elements/fastimg";
import { NavLink } from "react-router-dom";

function SectionHeader1() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    loadScript("js/sticky-header.js");
  });

  const handleToggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <header
      className={
        "site-header header-style-3 mobile-sider-drawer-menu " +
        (isActive ? "active" : "")
      }
    >
      {/* Search Link */}
      <div className="main-bar header-middle bg-white">
        <div className="container">
          <div className="logo-header hide-skew-section">
            <NavLink to={route.INITIAL}>
              <FastImage
                src="images/ChemilexLogo.png"
                width={216}
                height={37}
                alt=""
              />
            </NavLink>
          </div>
          <div className="header-info">
            <ul>
              <li >
                <div>
                  <div className="icon-sm">
                    <span className="icon-cell  site-text-primary">
                      <i className="iconmoon-smartphone" />
                    </span>
                  </div>
                  <div className="icon-content">
                    <strong>Call Us </strong>
                    <a href="tel:+919909107770">
                      <span>+91 99091 07770</span>
                    </a>
                   
                  <br />
                  <a href="tel:+919879879925"  >
                    <span>+91 98798 79925</span>
                    </a>
                  </div>
                </div>
              </li>
              <li  >
                <div>
                  <div className="icon-sm">
                    <span className="icon-cell  site-text-primary">
                      <i className="iconmoon-envelope" />
                    </span>
                  </div>
                  <div className="icon-content">
                    <strong>Email Us</strong>
                    <a href="mailto:info@chemilex.com">
                      <span>info@chemilex.com</span>
                    </a>
                  
                    
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="sticky-header main-bar-wraper">
        <div className="main-bar header-botton nav-bg-primary">
          <div className="container">
            {/* NAV Toggle Button */}
            <button
              id="mobile-side-drawer"
              data-target=".header-nav"
              data-toggle="collapse"
              type="button"
              className="navbar-toggler collapsed"
              onClick={handleToggleMenu}
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar icon-bar-first" />
              <span className="icon-bar icon-bar-two" />
              <span className="icon-bar icon-bar-three" />
            </button>
            {/* ETRA Nav */}
            {/* <div className="extra-nav"> */}
              {/* <div className="extra-cell">
                            <a href="#" className="mt-cart cart-btn dropdown-toggle" title="Your Cart" id="ID-MSG_dropdown" data-bs-toggle="dropdown">
                                <span className="link-inner">
                                    <span className="woo-cart-total"> </span>
                                    <span className="woo-cart-count">
                                        <i className="fa fa-shopping-cart" />
                                        <span className="shopping-bag wcmenucart-count ">2</span>
                                    </span>
                                </span>
                            </a>
                            <div className="dropdown-menu cart-dropdown-item-wraper " aria-labelledby="ID-MSG_dropdown">
                                <div className="clearfix">
                                    <div className="nav-cart-content">
                                        <div className="nav-cart-items p-a10">
                                            <div className="nav-cart-item clearfix">
                                                <div className="nav-cart-item-image">
                                                    <NavLink to={route.shop.DETAIL}><FastImage src="images/cart/pic-1.jpg" alt="p-1" /></NavLink>
                                                </div>
                                                <div className="nav-cart-item-desc">
                                                    <NavLink to={route.shop.DETAIL}>Air Fright</NavLink>
                                                    <span className="nav-cart-item-price"><strong>2</strong> x $9.50</span>
                                                    <a href="#" className="nav-cart-item-quantity">x</a>
                                                </div>
                                            </div>
                                            <div className="nav-cart-item clearfix">
                                                <div className="nav-cart-item-image">
                                                    <NavLink to={route.shop.DETAIL}><FastImage src="images/cart/pic-2.jpg" alt="p-2" /></NavLink>
                                                </div>
                                                <div className="nav-cart-item-desc">
                                                    <NavLink to={route.shop.DETAIL}>Transport Item</NavLink>
                                                    <span className="nav-cart-item-price"><strong>1</strong> x $24.50</span>
                                                    <a href="#" className="nav-cart-item-quantity">x</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="nav-cart-title p-a15 clearfix">
                                            <h4 className="pull-left m-a0">Subtotal:</h4>
                                            <h5 className="pull-right m-a0">$43.50</h5>
                                        </div>
                                        <div className="nav-cart-action">
                                            <button className="site-button" type="button">View Cart</button>
                                            <button className="site-button-secondry center-block" type="button">Checkout </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
              {/* <div className="extra-cell">
                <a href="#search" className="site-search-btn">
                  <i className="fa fa-search" />
                </a>
              </div> */}
            {/* </div> */}
            {/* SITE Search */}
            {/* <div id="search">
              <span className="close" />
              <form
                role="search"
                id="searchform"
                action="/search"
                method="get"
                className="radius-xl"
              >
                <div className="input-group">
                  <input
                    defaultValue=""
                    name="q"
                    type="search"
                    placeholder="Type to search"
                  />
                  <span className="input-group-btn">
                    <button type="button" className="search-btn">
                      <i className="fa fa-search" />
                    </button>
                  </span>
                </div>
              </form>
            </div> */}
            <div className="logo-show-in-mobile">
              <NavLink to={route.INITIAL}>
                <FastImage
                  src="images/ChemilexLogo.png"
                  width={216}
                  height={37}
                  alt=""
                />
              </NavLink>
            </div>
            {/* MAIN Vav */}
            <div className="header-nav navbar-collapse collapse ">
              <ul className=" nav navbar-nav">
                <li className="active">
                  <NavLink to={route.INITIAL}>Home </NavLink>
                  {/* <ul className="sub-menu">
                                    <li><NavLink to={route.home.HOME1}>Home-1</NavLink></li>
                                    <li><NavLink to={route.home.HOME2}>Home-2</NavLink></li>
                                    <li><NavLink to={route.home.HOME3}>Home-3</NavLink></li>
                                </ul> */}
                </li>
                <li>
                  {/* <a href="#">Pages<i className="fa fa-chevron-down" /></a> */}
                  <NavLink to={route.pages.ABOUT}>About us</NavLink>
                  {/* <ul className="sub-menu">
                                   
                                    <li><NavLink to={route.pages.FAQ}>FAQ</NavLink></li>
                                    <li><a href="#">Our Team</a>
                                        <ul className="sub-menu">
                                            <li><NavLink to={route.pages.team.TEAM}>Our Team</NavLink></li>
                                            <li><NavLink to={route.pages.team.DETAIL}>Our Team Detail</NavLink></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Contact</a>
                                        <ul className="sub-menu">
                                            <li><NavLink to={route.pages.contact.CONTACT1}>Contact us 1</NavLink></li>
                                            <li><NavLink to={route.pages.contact.CONTACT2}>Contact us 2</NavLink></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Galley</a>
                                        <ul className="sub-menu">
                                            <li><NavLink to={route.pages.gallery.GALLERY1}>Galley 1</NavLink></li>
                                            <li><NavLink to={route.pages.gallery.GALLERY2}>Galley 2</NavLink></li>
                                        </ul>
                                    </li>
                                    <li><NavLink to={route.pages.ERROR404}>Error 404</NavLink></li>
                                    <li><a href="#">Features</a>
                                        <ul className="sub-menu">
                                            <li><NavLink to={route.pages.features.footer.FIXED}>Fixed Footer</NavLink></li>
                                            <li><NavLink to={route.pages.features.footer.LIGHT}>Light Footer</NavLink></li>
                                            <li><NavLink to={route.pages.features.footer.DARK}>Dark Footer</NavLink></li>
                                        </ul>
                                    </li>
                                </ul> */}
                </li>
                <li>
                  <NavLink to={route.Products.PRODUCT}>
                    Products <i class="fa fa-chevron-down"></i>
                  </NavLink>
                  <ul className="sub-menu">
                    


                    <li>
                      <NavLink to={route.Products.LimeProduct}>
                        {" "}
                        Lime Products
                      </NavLink>
                      <ul className="sub-menu">
                      <li>
                          <NavLink to={route.Products.QuickLimeStone}>
                         
                           Lime Stone
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to={route.Products.HydratedLimePowder}>
                      
                          Hydrated/Calcined Lime
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to={route.Products.QuickLimePowder}>
                         
                          Quick Lime
                          </NavLink>
                        </li>
                       
                        <li>
                          <NavLink to={route.Products.QuickLimeLumps}>
                          
                          Quick Lime Powder
                          </NavLink>
                        </li>
                      </ul>
                    </li>


                    <li>
                      <NavLink to={route.Products.ImportedIndianCoalCokes}>
                        Imported & Indian Coal & Cokes {" "}
                      </NavLink>
                      <ul className="sub-menu">
                        <li>
                          <NavLink to={route.Products.IndianImportedCoal}>
                            Coal - Imported / Indian Coal
                          </NavLink>
                          <ul className="sub-menu">
                            <li>
                              <NavLink to={ route.Products.ImportedCoal}>
                                Imported Coal
                              </NavLink>
                              <ul className="sub-menu">
                                <li>
                                  <NavLink
                                    to={route.Products.PrimeHardCookingCoal}
                                  >
                                    Prime Hard Cooking Coal
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    to={route.Products.IndonesianSteamCoal}
                                  >
                                    Indonesian Steam Coal
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    to={route.Products.SouthAfricanSteamCoal}
                                  >
                                    South African Steam Coal
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    to={route.Products.PCICoal}
                                  >
                                    PCI Coal
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    to={route.Products.AnthraciteCoal}
                                  >
                                    Anthracite Coal
                                  </NavLink>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <NavLink to={route.Products.IndianCoalGrade}>
                                Indian Coal – Grade 1 to Grade 17
                              </NavLink>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <NavLink to={route.Products.IndianImportedCoke}>
                            Coke – Imported / Indian Coke
                          </NavLink>
                          <ul className="sub-menu">
                            <li>
                              <NavLink to={route.Products.IndonesianMetCoke}>
                                Indonesian MET Coke
                              </NavLink>
                            </li>
                            <li>
                              <NavLink to={route.Products.ChinaMetCoke}>
                                China MET Coke
                              </NavLink>
                            </li>
                            <li>
                              <NavLink to={route.Products.ColombianMetCoke}>
                                Colombian MET Coke
                              </NavLink>
                            </li>
                            <li>
                              <NavLink to={route.Products.ColombianULP}>
                                Colombian (ULP)
                              </NavLink>
                            </li>
                            <li>
                              <NavLink to={route.Products.IndianLAMCoke}>
                                Indian LAM Coke
                              </NavLink>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <NavLink to={route.Products.OtherMiningProducts}>
                        Other Mining Products{" "}
                      </NavLink>
                      <ul className="sub-menu">
                        <li>
                          <NavLink to={route.Products.ChromeConcentrate}>
                            Chrome Concentrate
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to={route.Products.Gypsum}>
                            Gypsum
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to={route.Products.ImportedMagnesesOre}>
                            {" "}
                            Imported Mangenese Ore (East Africa){" "}
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <NavLink to={route.Products.LogisticTransport}>
                        {" "}
                        Logistics & Transport
                      </NavLink>
                      <ul className="sub-menu">
                        <li>
                          <NavLink to={route.Products.RoadTransport}>
                            Road Transport
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to={route.Products.RailTransport}>
                            Rail Transport
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink to={route.pages.contact.Inquiry}>Inquiry</NavLink>
                  {/* <ul className="sub-menu">
                                    <li></li>
                                    <li><NavLink to={route.blog.LIST_SIDEBAR}>Blog-List-Sidebar</NavLink></li>
                                    <li><NavLink to={route.blog.GRID}>Blog-Grid</NavLink></li>
                                    <li><NavLink to={route.blog.GRID_SIDEBAR}>Blog-Grid-Sidebar</NavLink></li>
                                    <li><NavLink to={route.blog.POST_SINGLE}>Blog-Post-single</NavLink></li>
                                </ul> */}
                </li>
                {/* <li>
                            <NavLink  path={route.pages.contact.CONTACT1}>Contact US</NavLink>
                                <ul className="sub-menu">
                                    <li><NavLink to={route.shop.PRODUCTS}>Product</NavLink></li>
                                    <li><NavLink to={route.shop.DETAIL}>Product Detail</NavLink></li>
                                    <li><NavLink to={route.shop.CART}>Shopping cart</NavLink></li>
                                    <li><NavLink to={route.shop.WISHLIST}>Wishlist</NavLink></li>
                                    <li><NavLink to={route.shop.CHECKOUT}>Checkout</NavLink></li>
                                </ul>
                            </li> */}
                <li>
                  <NavLink to={route.pages.contact.CONTACT1}>
                    Contact US
                  </NavLink>
                </li>
                <li>
                  <NavLink to={route.Career.CAREER}>
                  Career 
                  </NavLink>
                </li>
                <li>
                  <NavLink to={route.Career.Clients}>
                  Our Clients 
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
export default SectionHeader1;

 