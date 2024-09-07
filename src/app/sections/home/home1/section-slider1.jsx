import FastImage from "../../../../globals/elements/fastimg";
import { NavLink } from "react-router-dom";
import { route } from "../../../../globals/constants";
import { publicUrlFor, loadScript } from "../../../../globals/constants";
import { useEffect } from "react";

function SectionSlider1() {
  useEffect(() => {
    loadScript("js/rev-script-3.js");
  });

  return (
    <>
      <div className="main-slider style-two default-banner">
        <div className="tp-banner-container">
          <div className="tp-banner">
            {/* START REVOLUTION SLIDER 5.4.1 */}
            <div
              id="rev_slider_1077_1_wrapper"
              className="rev_slider_wrapper fullscreen-container"
              data-alias="scroll-effect136"
              data-source="gallery"
              style={{ backgroundColor: "#111111", padding: 0 }}
            >
              {/* START REVOLUTION SLIDER 5.4.1 fullscreen mode */}
              <div
                id="rev_slider_1077_1"
                className="rev_slider fullscreenbanner"
                style={{ display: "none" }}
                data-version="5.4.1"
              >
                <ul>
                
                 
                  {/* SLIDE  */}
                  <li
                    data-index="rs-200"
                    data-transition="fade"
                    data-slotamount={7}
                    data-hideafterloop={0}
                    data-hideslideonmobile="off"
                    data-easein="default"
                    data-easeout="default"
                    data-masterspeed={1000}
                    data-thumb={publicUrlFor(
                      "images/main-slider/slider1/2.png"
                    )}
                    data-rotate={0}
                    data-fstransition="fade"
                    data-fsmasterspeed={1000}
                    data-fsslotamount={7}
                    data-saveperformance="off"
                    data-title=" World Class
                      Logistics"
                    data-param1
                    data-param2
                    data-param3
                    data-param4
                    data-param5
                    data-param6
                    data-param7
                    data-param8
                    data-param9
                    data-param10
                    data-description
                  >
                    {/* MAIN IMAGE */}
                    <FastImage
                      src=" images/main-slider/slider1/2.png"
                      alt=""
                      data-lazyload={publicUrlFor(
                        "images/main-slider/slider1/2.png"
                      )}
                      data-bgposition="center center"
                      data-kenburns="on"
                      // data-duration={20000}
                      data-ease="Power1.easeOut"
                      data-scalestart={110}
                      data-scaleend={100}
                      data-rotatestart={0}
                      data-rotateend={0}
                      data-offsetstart="0 0"
                      data-offsetend="0 0"
                      className="rev-slidebg"
                      data-no-retina
                    />
                    {/* LAYER NR. 1 */}
                    <div
                      className="tp-caption tp-shape tp-shapewrapper  "
                      id="slide-200-layer-1"
                      data-x="['center','center','center','center']"
                      data-hoffset="['0','0','0','0']"
                      data-y="['top','top','top','top']"
                      data-voffset="['0','0','0','0']"
                      data-width="full"
                      data-height="['400','400','400','550']"
                      data-whitespace="nowrap"
                      data-type="shape"
                      data-basealign="slide"
                      data-responsive_offset="off"
                      data-responsive="off"
                      data-frames='[{"from":"opacity:0;","speed":100,"to":"o:1;","delay":0,"ease":"Power2.easeInOut"},{"delay":"wait","speed":0,"to":"opacity:0;","ease":"nothing"}]'
                      data-textalign="['left','left','left','left']"
                      data-paddingtop="[0,0,0,0]"
                      data-paddingright="[0,0,0,0]"
                      data-paddingbottom="[0,0,0,0]"
                      data-paddingleft="[0,0,0,0]"
                      style={{
                        zIndex: 5,
                        backgroundColor: "rgba(0, 0, 0, 0.50)",
                        borderColor: "rgba(0, 0, 0, 0)",
                        borderWidth: 0,
                        background:
                          "linear-gradient(to top,  rgba(0,0,0,0) 0%,rgba(0,0,0,0.4) 100%)",
                        cursor: "default",
                      }}
                    ></div>
                    {/* LAYER NR. 2 */}
                    <div
                      className="tp-caption tp-shape tp-shapewrapper  "
                      id="slide-200-layer-2"
                      data-x="['center','center','center','center']"
                      data-hoffset="['0','0','0','0']"
                      data-y="['bottom','bottom','bottom','bottom']"
                      data-voffset="['0','0','0','0']"
                      data-width="full"
                      data-height="['400','400','400','550']"
                      data-whitespace="nowrap"
                      data-type="shape"
                      data-basealign="slide"
                      data-responsive_offset="off"
                      data-responsive="off"
                      data-frames='[{"from":"opacity:0;","speed":1500,"to":"o:1;","delay":0,"ease":"Power2.easeInOut"},{"delay":"wait","speed":1000,"to":"opacity:0;","ease":"nothing"}]'
                      data-textalign="['left','left','left','left']"
                      data-paddingtop="[0,0,0,0]"
                      data-paddingright="[0,0,0,0]"
                      data-paddingbottom="[0,0,0,0]"
                      data-paddingleft="[0,0,0,0]"
                      style={{
                        zIndex: 5,
                        backgroundColor: "rgba(0, 0, 0, 0.50)",
                        borderColor: "rgba(0, 0, 0, 0)",
                        borderWidth: 0,
                        background:
                          "linear-gradient(to bottom,  rgba(0,0,0,0) 0%,rgba(0,0,0,1) 100%)",
                        cursor: "default",
                      }}
                    ></div>
                    {/* LAYER NR. 3 */}
                    {/* <div
                      className="tp-caption BigBold-Title   tp-resizeme"
                      id="slide-200-layer-3"
                      data-x="['left','left','left','left']"
                      data-hoffset="['50','50','30','17']"
                      data-y="['bottom','bottom','bottom','bottom']"
                      data-voffset="['110','110','180','180']"
                      data-fontsize="['90','70','50','30']"
                      data-lineheight="['100','90','60','60']"
                      data-fontweight="['900','900','900','900']"
                      data-width="['none','none','none','400']"
                      data-height="none"
                      data-whitespace="['nowrap','nowrap','nowrap','normal']"
                      data-type="text"
                      data-basealign="slide"
                      data-responsive_offset="off"
                      data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];","speed":1500,"to":"o:1;","delay":500,"ease":"Power3.easeInOut"},
                                         {"delay":"wait","speed":1000,"to":"y:[100%];","mask":"x:inherit;y:inherit;","ease":"Power2.easeInOut"}]'
                      data-textalign="['left','left','left','left']"
                      data-paddingtop="[10,10,10,10]"
                      data-paddingright="[0,0,0,0]"
                      data-paddingbottom="[10,10,10,10]"
                      data-paddingleft="[0,0,0,0]"
                      style={{
                        zIndex: 6,
                        textTransform: "uppercase",
                        color: "#fff",
                        fontFamily: '"Roboto", sans-serif',
                      }}
                    >
                      <span className="site-text-primary"> World Class</span>{" "}
                      Logistics{" "}
                    </div> */}
                    {/* LAYER NR. 4 */}
                    {/* <div
                      className="tp-caption BigBold-SubTitle  "
                      id="slide-200-layer-4"
                      data-x="['left','left','left','left']"
                      data-hoffset="['55','55','33','20']"
                      data-y="['bottom','bottom','bottom','bottom']"
                      data-voffset="['40','1','74','78']"
                      data-fontsize="['15','15','15','13']"
                      data-lineheight="['24','24','24','20']"
                      data-width="['410','410','410','280']"
                      data-height="['60','100','100','100']"
                      data-whitespace="normal"
                      data-type="text"
                      data-basealign="slide"
                      data-responsive_offset="off"
                      data-responsive="off"
                      data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","speed":1500,"to":"o:1;","delay":650,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"y:50px;opacity:0;","ease":"Power2.easeInOut"}]'
                      data-textalign="['left','left','left','left']"
                      data-paddingtop="[0,0,0,0]"
                      data-paddingright="[0,0,0,0]"
                      data-paddingbottom="[0,0,0,0]"
                      data-paddingleft="[0,0,0,0]"
                      style={{ zIndex: 7, color: "#fff" }}
                    >
                      Chemilex Industries Streamlines Supply Chains with
                      Advanced Logistics for Efficient Mineral Delivery
                    </div> */}
                    {/* LAYER NR. 5 */}
                    {/* <div
                      className="tp-caption BigBold-Button rev-btn "
                      id="slide-200-layer-5"
                      data-x="['left','left','left','left']"
                      data-hoffset="['480','480','30','20']"
                      data-y="['bottom','bottom','bottom','bottom']"
                      data-voffset="['20','20','20','20']"
                      data-width="none"
                      data-height="none"
                      data-whitespace="nowrap"
                      data-type="button"
                      data-actions='[{"event":"click","action":"scrollbelow","offset":"px","delay":""}]'
                      data-basealign="slide"
                      data-responsive_offset="off"
                      data-responsive="off"
                      data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","speed":1500,"to":"o:1;","delay":650,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"y:50px;opacity:0;","ease":"Power2.easeInOut"},{"frame":"hover","speed":"300","ease":"Power1.easeInOut","to":"o:1;rX:0;rY:0;rZ:0;z:0;","style":"c:rgba(255, 255, 255, 1.00);bc:rgba(255, 255, 255, 1.00);bw:1px 1px 1px 1px;"}]'
                      data-textalign="['left','left','left','left']"
                      data-paddingtop="[15,15,15,15]"
                      data-paddingright="[50,50,50,50]"
                      data-paddingbottom="[15,15,15,15]"
                      data-paddingleft="[50,50,0,0]"
                      style={{ zIndex: 8 }}
                    >
                      <NavLink to={route.pages.ABOUT} className="site-button">
                        READ MORE
                      </NavLink>
                    </div> */}
                  </li>
                  {/* SLIDE  */}
                  <li
                    data-index="rs-300"
                    data-transition="fade"
                    data-slotamount={7}
                    data-hideafterloop={0}
                    data-hideslideonmobile="off"
                    data-easein="default"
                    data-easeout="default"
                    data-masterspeed={1000}
                    data-thumb={publicUrlFor(
                      "images/main-slider/slider1/3.png"
                    )}
                    data-rotate={0}
                    data-fstransition="fade"
                    data-fsmasterspeed={1000}
                    data-fsslotamount={7}
                    data-saveperformance="off"
                    data-title=" Fueling  
                      Growth"
                    data-param1
                    data-param2
                    data-param3
                    data-param4
                    data-param5
                    data-param6
                    data-param7
                    data-param8
                    data-param9
                    data-param10
                    data-description
                  >
                    {/* MAIN IMAGE */}
                    <FastImage
                      src="images/main-slider/slider1/3.png"
                      alt=""
                      data-lazyload={publicUrlFor(
                        "images/main-slider/slider1/3.png"
                      )}
                      data-bgposition="center center"
                      data-kenburns="on"
                      //data-duration={20000}
                      data-ease="Power1.easeOut"
                      data-scalestart={110}
                      data-scaleend={100}
                      data-rotatestart={0}
                      data-rotateend={0}
                      data-offsetstart="0 0"
                      data-offsetend="0 0"
                      className="rev-slidebg"
                      data-no-retina
                    />
                    {/* LAYER NR. 1 */}
                    <div
                      className="tp-caption tp-shape tp-shapewrapper  "
                      id="slide-300-layer-1"
                      data-x="['center','center','center','center']"
                      data-hoffset="['0','0','0','0']"
                      data-y="['top','top','top','top']"
                      data-voffset="['0','0','0','0']"
                      data-width="full"
                      data-height="['400','400','400','550']"
                      data-whitespace="nowrap"
                      data-type="shape"
                      data-basealign="slide"
                      data-responsive_offset="off"
                      data-responsive="off"
                      data-frames='[{"from":"opacity:0;","speed":100,"to":"o:1;","delay":0,"ease":"Power2.easeInOut"},{"delay":"wait","speed":0,"to":"opacity:0;","ease":"nothing"}]'
                      data-textalign="['left','left','left','left']"
                      data-paddingtop="[0,0,0,0]"
                      data-paddingright="[0,0,0,0]"
                      data-paddingbottom="[0,0,0,0]"
                      data-paddingleft="[0,0,0,0]"
                      style={{
                        zIndex: 5,
                        backgroundColor: "rgba(0, 0, 0, 0.50)",
                        borderColor: "rgba(0, 0, 0, 0)",
                        borderWidth: 0,
                        background:
                          "linear-gradient(to top,  rgba(0,0,0,0) 0%,rgba(0,0,0,0.4) 100%)",
                        cursor: "default",
                      }}
                    ></div>
                    {/* LAYER NR. 2 */}
                    <div
                      className="tp-caption tp-shape tp-shapewrapper  "
                      id="slide-300-layer-2"
                      data-x="['center','center','center','center']"
                      data-hoffset="['0','0','0','0']"
                      data-y="['bottom','bottom','bottom','bottom']"
                      data-voffset="['0','0','0','0']"
                      data-width="full"
                      data-height="['400','400','400','550']"
                      data-whitespace="nowrap"
                      data-type="shape"
                      data-basealign="slide"
                      data-responsive_offset="off"
                      data-responsive="off"
                      data-frames='[{"from":"opacity:0;","speed":1500,"to":"o:1;","delay":0,"ease":"Power2.easeInOut"},{"delay":"wait","speed":1000,"to":"opacity:0;","ease":"nothing"}]'
                      data-textalign="['left','left','left','left']"
                      data-paddingtop="[0,0,0,0]"
                      data-paddingright="[0,0,0,0]"
                      data-paddingbottom="[0,0,0,0]"
                      data-paddingleft="[0,0,0,0]"
                      style={{
                        zIndex: 5,
                        backgroundColor: "rgba(0, 0, 0, 0.50)",
                        borderColor: "rgba(0, 0, 0, 0)",
                        borderWidth: 0,
                        background:
                          "linear-gradient(to bottom,  rgba(0,0,0,0) 0%,rgba(0,0,0,1) 100%)",
                        cursor: "default",
                      }}
                    ></div>
                    {/* LAYER NR. 3 */}
                    {/* <div
                      className="tp-caption BigBold-Title   tp-resizeme"
                      id="slide-300-layer-3"
                      data-x="['left','left','left','left']"
                      data-hoffset="['50','50','30','17']"
                      data-y="['bottom','bottom','bottom','bottom']"
                      data-voffset="['110','110','180','180']"
                      data-fontsize="['90','70','50','30']"
                      data-lineheight="['100','90','60','60']"
                      data-fontweight="['900','900','900','900']"
                      data-width="['none','none','none','400']"
                      data-height="none"
                      data-whitespace="['nowrap','nowrap','nowrap','normal']"
                      data-type="text"
                      data-basealign="slide"
                      data-responsive_offset="off"
                      data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];","speed":1500,"to":"o:1;","delay":500,"ease":"Power3.easeInOut"},
                                         {"delay":"wait","speed":1000,"to":"y:[100%];","mask":"x:inherit;y:inherit;","ease":"Power2.easeInOut"}]'
                      data-textalign="['left','left','left','left']"
                      data-paddingtop="[10,10,10,10]"
                      data-paddingright="[0,0,0,0]"
                      data-paddingbottom="[10,10,10,10]"
                      data-paddingleft="[0,0,0,0]"
                      style={{
                        zIndex: 6,
                        textTransform: "uppercase",
                        color: "#fff",
                        fontFamily: '"Roboto", sans-serif',
                      }}
                    >
                      <span className="site-text-primary"> Fueling </span>{" "}
                      Growth
                    </div> */}
                    {/* LAYER NR. 4 */}
                    {/* <div
                      className="tp-caption BigBold-SubTitle  "
                      id="slide-300-layer-4"
                      data-x="['left','left','left','left']"
                      data-hoffset="['55','55','33','20']"
                      data-y="['bottom','bottom','bottom','bottom']"
                      data-voffset="['40','1','74','78']"
                      data-fontsize="['15','15','15','13']"
                      data-lineheight="['24','24','24','20']"
                      data-width="['410','410','410','280']"
                      data-height="['60','100','100','100']"
                      data-whitespace="normal"
                      data-type="text"
                      data-basealign="slide"
                      data-responsive_offset="off"
                      data-responsive="off"
                      data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","speed":1500,"to":"o:1;","delay":650,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"y:50px;opacity:0;","ease":"Power2.easeInOut"}]'
                      data-textalign="['left','left','left','left']"
                      data-paddingtop="[0,0,0,0]"
                      data-paddingright="[0,0,0,0]"
                      data-paddingbottom="[0,0,0,0]"
                      data-paddingleft="[0,0,0,0]"
                      style={{ zIndex: 7, color: "#fff" }}
                    >
                      Chemilex Industries Taps into Rajasthan's Premier
                      Limestone Reserves, Pioneering High-Quality Mineral
                      Extraction and Processing
                    </div> */}
                    {/* LAYER NR. 5 */}
                    {/* <div
                      className="tp-caption BigBold-Button rev-btn "
                      id="slide-300-layer-5"
                      data-x="['left','left','left','left']"
                      data-hoffset="['480','480','30','20']"
                      data-y="['bottom','bottom','bottom','bottom']"
                      data-voffset="['20','20','20','20']"
                      data-width="none"
                      data-height="none"
                      data-whitespace="nowrap"
                      data-type="button"
                      data-actions='[{"event":"click","action":"scrollbelow","offset":"px","delay":""}]'
                      data-basealign="slide"
                      data-responsive_offset="off"
                      data-responsive="off"
                      data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","speed":1500,"to":"o:1;","delay":650,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"y:50px;opacity:0;","ease":"Power2.easeInOut"},{"frame":"hover","speed":"300","ease":"Power1.easeInOut","to":"o:1;rX:0;rY:0;rZ:0;z:0;","style":"c:rgba(255, 255, 255, 1.00);bc:rgba(255, 255, 255, 1.00);bw:1px 1px 1px 1px;"}]'
                      data-textalign="['left','left','left','left']"
                      data-paddingtop="[15,15,15,15]"
                      data-paddingright="[50,50,50,50]"
                      data-paddingbottom="[15,15,15,15]"
                      data-paddingleft="[50,50,0,0]"
                      style={{ zIndex: 8 }}
                    >
                      <NavLink to={route.pages.ABOUT} className="site-button">
                        READ MORE
                      </NavLink>{" "}
                    </div> */}
                  </li>
                </ul>
                {/* <div
                  className="tp-bannertimer tp-bottom"
                  style={{ visibility: "hidden !important" }}
                /> */}
              </div>
            </div>
            {/* END REVOLUTION SLIDER */}
          </div>
        </div>
      </div>
    </>
  );
}
export default SectionSlider1;
