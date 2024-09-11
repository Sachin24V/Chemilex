import FastImage from "../../../../globals/elements/fastimg";
import { loadScript, publicUrlFor, route } from "../../../../globals/constants";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

function SectionSlider2() {
  useEffect(() => {
    loadScript("js/rev-script-2.js");
  });

  return (
    <>
      <div
        id="rev_slider_1059_1_wrapper"
        className="rev_slider_wrapper fullscreen-container"
        data-alias="concept121"
        data-source="gallery"
        style={{ backgroundColor: "#000000", padding: 0 }}
      >
        {/* START REVOLUTION SLIDER 5.4.1 fullscreen mode */}
        <div
          id="rev_slider_1059_1"
          className="rev_slider fullscreenbanner"
          style={{ display: "none" }}
          data-version="5.4.1"
        >
          <ul>
            {/* SLIDE  */}
            <li
              data-index="rs-2972"
              data-transition="boxfade"
              data-slotamount="default"
              data-hideafterloop={0}
              data-hideslideonmobile="off"
              data-easein="default"
              data-easeout="default"
              data-masterspeed="default"
              data-thumb={publicUrlFor("images/main-slider/slider2/slide1.jpg")}
              data-rotate={0}
              data-saveperformance="off"
              data-title="Web Show"
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
                src="images/main-slider/slider2/slide1.jpg"
                alt=""
                data-bgposition="center center"
                data-bgfit="cover"
                data-bgrepeat="no-repeat"
                data-bgparallax={5}
                className="rev-slidebg"
                data-no-retina
              />
              {/* LAYERS */}
              {/* LAYER NR. 1 */}
              <div
                className="tp-caption text-white Concept-SubTitle   tp-resizeme rs-parallaxlevel-2"
                id="slide-2972-layer-4"
                data-x="['center','center','center','center']"
                data-hoffset="['0','0','0','0']"
                data-y="['middle','middle','middle','middle']"
                data-voffset="['-65','-65','-57','-70']"
                data-fontsize="['25','25','20','20']"
                data-lineheight="['25','25','20','20']"
                data-width="none"
                data-height="none"
                data-whitespace="nowrap"
                data-type="text"
                data-responsive_offset="on"
                data-frames='[{"from":"z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;","speed":1500,"to":"o:1;","delay":1500,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"x:left(R);","ease":"Power3.easeIn"}]'
                data-textalign="['left','left','left','left']"
                data-paddingtop="[0,0,0,0]"
                data-paddingright="[0,0,0,0]"
                data-paddingbottom="[10,10,10,10]"
                data-paddingleft="[0,0,0,0]"
                style={{
                  zIndex: 6,
                  whiteSpace: "nowrap",
                  textTransform: "uppercase",
                  fontFamily: '"Roboto", sans-serif',
                }}
              >
                We are providing you{" "}
              </div>
              {/* LAYER NR. 2 */}
              <div
                className="tp-caption Concept-Title text-white   tp-resizeme rs-parallaxlevel-2"
                id="slide-2972-layer-2"
                data-x="['center','center','center','center']"
                data-hoffset="['0','0','0','0']"
                data-y="['middle','middle','middle','middle']"
                data-voffset="['0','0','0','0']"
                data-fontsize="['60','60','50','40']"
                data-lineheight="['70','70','50','40']"
                data-width="['none','none','none','400']"
                data-height="none"
                data-whitespace="['nowrap','nowrap','nowrap','normal']"
                data-type="text"
                data-responsive_offset="on"
                data-frames='[{"from":"z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;","speed":1500,"to":"o:1;","delay":1700,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"x:left(R);","ease":"Power3.easeIn"}]'
                data-textalign="['center','center','center','center']"
                data-paddingtop="[0,0,0,0]"
                data-paddingright="[0,0,0,0]"
                data-paddingbottom="[10,10,10,10]"
                data-paddingleft="[0,0,0,0]"
                style={{
                  zIndex: 7,
                  whiteSpace: "nowrap",
                  textTransform: "uppercase",
                  fontWeight: 900,
                  fontFamily: '"Roboto", sans-serif',
                }}
              >
                Fast delivery services
              </div>
              {/* LAYER NR. 3 */}
              <div
                className="tp-caption Concept-Notice  text-white rs-parallaxlevel-2"
                id="slide-2972-layer-12"
                data-x="['center','center','center','center']"
                data-hoffset="['1','1','1','1']"
                data-y="['top','top','top','top']"
                data-voffset="['560','450','550','440']"
                data-width="none"
                data-height="none"
                data-whitespace="nowrap"
                data-type="text"
                data-responsive_offset="on"
                data-responsive="off"
                data-frames='[{"from":"z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;","speed":1000,"to":"o:1;","delay":2300,"ease":"Power3.easeInOut"},{"delay":"bytrigger","speed":300,"to":"auto:auto;","ease":"nothing"}]'
                data-textalign="['center','center','center','center']"
                data-paddingtop="[0,0,0,0]"
                data-paddingright="[0,0,0,0]"
                data-paddingbottom="[0,0,0,0]"
                data-paddingleft="[0,0,0,0]"
                data-lasttriggerstate="reset"
                style={{ zIndex: 10, whiteSpace: "nowrap" }}
              >
                <div
                  className="rs-looped rs-slideloop"
                  data-easing="Power1.easeInOut"
                  data-speed={1}
                  data-xs={0}
                  data-xe={0}
                  data-ys={10}
                  data-ye={0}
                >
                  <NavLink to={route.pages.ABOUT} className="site-button">
                    {" "}
                    CLICK ME
                  </NavLink>
                </div>
              </div>
            </li>
            {/* SLIDE  */}
            <li
              data-index="rs-2973"
              data-transition="boxfade"
              data-slotamount="default"
              data-hideafterloop={0}
              data-hideslideonmobile="off"
              data-easein="default"
              data-easeout="default"
              data-masterspeed="default"
              data-thumb={publicUrlFor("images/main-slider/slider2/slide2.jpg")}
              data-rotate={0}
              data-saveperformance="off"
              data-title="Web Show"
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
                src="images/main-slider/slider2/slide2.jpg"
                alt=""
                data-bgposition="center center"
                data-bgfit="cover"
                data-bgrepeat="no-repeat"
                data-bgparallax={5}
                className="rev-slidebg"
                data-no-retina
              />
              {/* LAYERS */}
              {/* LAYER NR. 1 */}
              <div
                className="tp-caption text-white Concept-SubTitle   tp-resizeme rs-parallaxlevel-2"
                id="slide-2973-layer-4"
                data-x="['left','left','center','center']"
                data-hoffset="['30','30','0','0']"
                data-y="['middle','middle','middle','middle']"
                data-voffset="['-65','-65','-57','-70']"
                data-fontsize="['25','25','20','20']"
                data-lineheight="['25','25','20','20']"
                data-width="none"
                data-height="none"
                data-whitespace="nowrap"
                data-type="text"
                data-responsive_offset="on"
                data-frames='[{"from":"z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;","speed":1500,"to":"o:1;","delay":1500,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"x:left(R);","ease":"Power3.easeIn"}]'
                data-textalign="['left','left','left','left']"
                data-paddingtop="[0,0,0,0]"
                data-paddingright="[0,0,0,0]"
                data-paddingbottom="[10,10,10,10]"
                data-paddingleft="[0,0,0,0]"
                style={{
                  zIndex: 6,
                  whiteSpace: "nowrap",
                  textTransform: "uppercase",
                  fontFamily: '"Roboto", sans-serif',
                }}
              >
                We are providing you
              </div>
              {/* LAYER NR. 2 */}
              <div
                className="tp-caption Concept-Title text-white   tp-resizeme rs-parallaxlevel-2"
                id="slide-2973-layer-2"
                data-x="['left','left','center','center']"
                data-hoffset="['30','30','0','0']"
                data-y="['middle','middle','middle','middle']"
                data-voffset="['0','0','0','0']"
                data-fontsize="['60','60','50','40']"
                data-lineheight="['70','70','50','40']"
                data-width="['none','none','none','400']"
                data-height="none"
                data-whitespace="['nowrap','nowrap','nowrap','normal']"
                data-type="text"
                data-responsive_offset="on"
                data-frames='[{"from":"z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;","speed":1500,"to":"o:1;","delay":1700,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"x:left(R);","ease":"Power3.easeIn"}]'
                data-textalign="['center','center','center','center']"
                data-paddingtop="[0,0,0,0]"
                data-paddingright="[0,0,0,0]"
                data-paddingbottom="[10,10,10,10]"
                data-paddingleft="[0,0,0,0]"
                style={{
                  zIndex: 7,
                  whiteSpace: "nowrap",
                  textTransform: "uppercase",
                  fontWeight: 900,
                  fontFamily: '"Roboto", sans-serif',
                }}
              >
                World class logistics
              </div>
              {/* LAYER NR. 3 */}
              <div
                className="tp-caption Concept-Notice  text-white rs-parallaxlevel-2"
                id="slide-2973-layer-12"
                data-x="['left','left','center','center']"
                data-hoffset="['30','30','1','1']"
                data-y="['top','top','top','top']"
                data-voffset="['560','450','550','440']"
                data-width="none"
                data-height="none"
                data-whitespace="nowrap"
                data-type="text"
                data-responsive_offset="on"
                data-responsive="off"
                data-frames='[{"from":"z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;","speed":1000,"to":"o:1;","delay":2300,"ease":"Power3.easeInOut"},{"delay":"bytrigger","speed":300,"to":"auto:auto;","ease":"nothing"}]'
                data-textalign="['center','center','center','center']"
                data-paddingtop="[0,0,0,0]"
                data-paddingright="[0,0,0,0]"
                data-paddingbottom="[0,0,0,0]"
                data-paddingleft="[0,0,0,0]"
                data-lasttriggerstate="reset"
                style={{ zIndex: 10, whiteSpace: "nowrap" }}
              >
                <div
                  className="rs-looped rs-slideloop"
                  data-easing="Power1.easeInOut"
                  data-speed={1}
                  data-xs={0}
                  data-xe={0}
                  data-ys={10}
                  data-ye={0}
                >
                  <NavLink to={route.pages.ABOUT} className="site-button">
                    {" "}
                    CLICK ME
                  </NavLink>
                </div>
              </div>
            </li>
            {/* SLIDE  */}
            <li
              data-index="rs-2974"
              data-transition="boxfade"
              data-slotamount="default"
              data-hideafterloop={0}
              data-hideslideonmobile="off"
              data-easein="default"
              data-easeout="default"
              data-masterspeed="default"
              data-thumb={publicUrlFor("images/main-slider/slider2/slide3.jpg")}
              data-rotate={0}
              data-saveperformance="off"
              data-title="Web Show"
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
                src="images/main-slider/slider2/slide3.jpg"
                alt=""
                data-bgposition="center center"
                data-bgfit="cover"
                data-bgrepeat="no-repeat"
                data-bgparallax={5}
                className="rev-slidebg"
                data-no-retina
              />
              {/* LAYERS */}
              {/* LAYER NR. 1 */}
              <div
                className="tp-caption text-white Concept-SubTitle   tp-resizeme rs-parallaxlevel-2"
                id="slide-2974-layer-4"
                data-x="['center','center','center','center']"
                data-hoffset="['0','0','0','0']"
                data-y="['middle','middle','middle','middle']"
                data-voffset="['-65','-65','-57','-70']"
                data-fontsize="['25','25','20','20']"
                data-lineheight="['25','25','20','20']"
                data-width="none"
                data-height="none"
                data-whitespace="nowrap"
                data-type="text"
                data-responsive_offset="on"
                data-frames='[{"from":"z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;","speed":1500,"to":"o:1;","delay":1500,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"x:left(R);","ease":"Power3.easeIn"}]'
                data-textalign="['left','left','left','left']"
                data-paddingtop="[0,0,0,0]"
                data-paddingright="[0,0,0,0]"
                data-paddingbottom="[10,10,10,10]"
                data-paddingleft="[0,0,0,0]"
                style={{
                  zIndex: 6,
                  whiteSpace: "nowrap",
                  textTransform: "uppercase",
                  fontFamily: '"Roboto", sans-serif',
                }}
              >
                We are providing you
              </div>
              {/* LAYER NR. 2 */}
              <div
                className="tp-caption Concept-Title text-white   tp-resizeme rs-parallaxlevel-2"
                id="slide-2974-layer-2"
                data-x="['center','center','center','center']"
                data-hoffset="['0','0','0','0']"
                data-y="['middle','middle','middle','middle']"
                data-voffset="['0','0','0','0']"
                data-fontsize="['60','60','50','40']"
                data-lineheight="['70','70','50','40']"
                data-width="['none','none','none','400']"
                data-height="none"
                data-whitespace="['nowrap','nowrap','nowrap','normal']"
                data-type="text"
                data-responsive_offset="on"
                data-frames='[{"from":"z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;","speed":1500,"to":"o:1;","delay":1700,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"x:left(R);","ease":"Power3.easeIn"}]'
                data-textalign="['center','center','center','center']"
                data-paddingtop="[0,0,0,0]"
                data-paddingright="[0,0,0,0]"
                data-paddingbottom="[10,10,10,10]"
                data-paddingleft="[0,0,0,0]"
                style={{
                  zIndex: 7,
                  whiteSpace: "nowrap",
                  textTransform: "uppercase",
                  fontWeight: 900,
                  fontFamily: '"Roboto", sans-serif',
                }}
              >
                Fast airway delivery
              </div>
              {/* LAYER NR. 3 */}
              <div
                className="tp-caption Concept-Notice  text-white rs-parallaxlevel-2"
                id="slide-2974-layer-12"
                data-x="['center','center','center','center']"
                data-hoffset="['1','1','1','1']"
                data-y="['top','top','top','top']"
                data-voffset="['560','450','550','440']"
                data-width="none"
                data-height="none"
                data-whitespace="nowrap"
                data-type="text"
                data-responsive_offset="on"
                data-responsive="off"
                data-frames='[{"from":"z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;","speed":1000,"to":"o:1;","delay":2300,"ease":"Power3.easeInOut"},{"delay":"bytrigger","speed":300,"to":"auto:auto;","ease":"nothing"}]'
                data-textalign="['center','center','center','center']"
                data-paddingtop="[0,0,0,0]"
                data-paddingright="[0,0,0,0]"
                data-paddingbottom="[0,0,0,0]"
                data-paddingleft="[0,0,0,0]"
                data-lasttriggerstate="reset"
                style={{ zIndex: 10, whiteSpace: "nowrap" }}
              >
                <div
                  className="rs-looped rs-slideloop"
                  data-easing="Power1.easeInOut"
                  data-speed={1}
                  data-xs={0}
                  data-xe={0}
                  data-ys={10}
                  data-ye={0}
                >
                  <NavLink to={route.pages.ABOUT} className="site-button">
                    {" "}
                    CLICK ME
                  </NavLink>
                </div>
              </div>
            </li>
          </ul>
          <div
            className="tp-bannertimer tp-bottom"
            style={{ visibility: "hidden !important" }}
          ></div>
        </div>
      </div>
    </>
  );
}
export default SectionSlider2;
