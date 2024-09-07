// import { loadScript, publicUrlFor,   } from "../../../../globals/constants";
// import { NavLink } from "react-router-dom";
// import { useEffect } from "react";

// function AboutSlider() {
//   useEffect(() => {
//     loadScript("js/rev-script-1.js");
//   }, []);

//   return (
//     <div className="main-slider style-two default-banner">
//       <div className="tp-banner-container">
//         <div className="tp-banner">
//           {/* START REVOLUTION SLIDER 5.4.1 */}
//           <div
//             className="rev_slider_wrapper fullscreen-container"
//             data-alias="typewriter-effect"
//             data-source="gallery"
//             style={{ background: "#212427",   }}
//           >
//             <div
//               id="rev_slider_1014_1"
//               className="rev_slider fullscreenbanner"
//               style={{ display: "none" ,  }}
//               data-version="5.4.1"
//             >
//               <ul>
//                 {/* SLIDE 1 */}
//                 <li
//                   data-index="rs-1000"
//                   data-transition="fadethroughdark"
//                   data-slotamount="default"
//                   data-hideafterloop={0}
//                   data-hideslideonmobile="off"
//                   data-easein="default"
//                   data-easeout="default"
//                   data-masterspeed={2000}
//                   data-rotate={0}
//                   data-saveperformance="off"
//                   data-title="Creative"
//                   data-description=""
//                 >
//                   {/* MAIN IMAGE */}
//                   {/* <FastImage
//       src="media/images/construct-video1.jpg"
//       alt=""
//       data-bgposition="center center"
//       data-bgfit="cover"
//       className="rev-slidebg"
//       data-no-retina
//     /> */}

//                   {/* LAYERS */}
//                   {/* LAYER NR. 1 [ Overlay ] */}
//                   <div
//                     className="tp-caption tp-shape tp-shapewrapper"
//                     data-x="['left','left','left','left']"
//                     data-hoffset="['0','0','0','0']"
//                     data-y="['top','top','top','top']"
//                     data-voffset="['0','0','0','0']"
//                     data-width="full"
//                     data-height="full"
//                     data-type="shape"
//                     data-basealign="slide"
//                     data-responsive_offset="off"
//                     data-frames='[
//         {"from":"opacity:0;","speed":1000,"to":"o:1;","delay":0,"ease":"Power4.easeOut"},
//         {"delay":"wait","speed":1000,"to":"opacity:0;","ease":"Power4.easeOut"}
//       ]'
//                     style={{
//                       zIndex: 12,
//                       backgroundColor: "rgba(0, 0, 0, 0.6)",
//                       borderWidth: 0,
//                     }}
//                   ></div>

//                   {/* LAYER NR. 2 [ Video Background ] */}
//                   <div
//                     className="rs-background-video-layer"
//                     data-forcerewind="on"
//                     data-volume="mute"
//                     data-videowidth="100%"
//                     data-videoheight="100%"
//                     data-videomp4={publicUrlFor("media/video/CompanyVideo.mp4")}
//                     data-videopreload="auto"
//                     data-videoloop="loop"
//                     data-aspectratio="16:9"
//                     data-autoplay="true"
//                     data-autoplayonlyfirsttime="false"
//                   />

//                   {/* LAYER NR. 3 [ Title ] */}
//                   <div
//                     className="tp-caption tp-resizeme"
//                     data-x="['left','left','left','left']"
//                     data-hoffset="['30','30','30','30']"
//                     data-y="['top','top','top','top']"
//                     data-voffset="['120','120','120','80']"
//                     data-width="none"
//                     data-height="none"
//                     data-fontsize="['60','60','40','24']"
//                     data-lineheight="['70','70','70','60']"
//                     data-type="text"
//                     data-responsive_offset="on"
//                     data-frames='[
//         {"from":"y:100px;opacity:0;","speed":2000,"to":"o:1;","delay":500,"ease":"Power4.easeOut"},
//         {"delay":"wait","speed":1000,"to":"y:0;opacity:1;","ease":"Power2.easeInOut"}
//       ]'
//                     style={{
//                       zIndex: 13,
//                       fontWeight: 700,
//                       color: "rgba(255, 255, 255, 1.00)",
//                       marginTop: "80px",
//                     }}
//                   >
//                     <span style={{ fontFamily: '"Roboto", sans-serif' }}>
//                       <span className="site-text-primary text-uppercase">
//                         About
//                       </span>
//                     </span>
//                   </div>

//                   {/* LAYER NR. 4 [ Main Title ] */}
//                   <div
//                     className="tp-caption RotatingWords-TitleWhite tp-resizeme tounblur"
//                     data-x="['left','left','left','left']"
//                     data-hoffset="['30','30','30','30']"
//                     data-y="['top','top','top','top']"
//                     data-voffset="['200','200','200','140']"
//                     data-width="none"
//                     data-height="none"
//                     data-fontsize="['60','60','40','24']"
//                     data-lineheight="['70','70','70','60']"
//                     data-type="text"
//                     data-responsive_offset="on"
//                     data-frames='[
//         {"delay":1000,"split":"chars","splitdelay":0.1,"speed":500,"frame":"0","from":"sX:0.8;sY:0.8;opacity:0;","to":"sX:1;sY:1;opacity:1;","ease":"Power4.easeOut"},
//         { "speed":500,"frame":"999","to":"sX:0.8;sY:0.8;opacity:0;","ease":"Power4.easeInOut","loop":true}
//       ]'
//                     style={{
//                       zIndex: 13,
//                       fontWeight: 700,
//                       color: "rgba(255, 255, 255, 1.00)",
//                       marginTop: "80px",
//                     }}
//                   >
//                     <span
//                       className="text-uppercase"
//                       style={{ fontFamily: '"Roboto", sans-serif' }}
//                     >
//                       Chemilex Industries
//                     </span>
//                   </div>

//                   {/* LAYER NR. 6 [ Button ] */}
//                   {/* <div
//                     className="tp-caption RotatingWords-TitleWhite tp-resizeme tounblur"
//                     id="slide-100-layer-8"
//                     data-x="['left','left','left','left']"
//                     data-hoffset="['0','0','0','0']"
//                     data-y="['top','top','top','top']"
//                     data-voffset="['350','350','350','270']"
//                     data-fontsize="['18','18','16','14']"
//                     data-lineheight="['30','30','30','24']"
//                     data-width="['800','800','600','300']"
//                     data-height="['none','none','none','none']"
//                     data-whitespace="['normal','normal','normal','normal']"
//                     data-type="text"
//                     data-responsive_offset="on"
//                     data-frames='[
//         {"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":1000,"ease":"Power4.easeOut"},
//         {"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
//       ]'
//                     data-textalign="['left','left','left','left']"
//                     data-paddingtop="[0,0,0,0]"
//                     data-paddingright="[0,0,0,0]"
//                     data-paddingbottom="[0,0,0,0]"
//                     data-paddingleft="[35,35,35,35]"
//                     style={{
//                       zIndex: 13,
//                       fontWeight: 500,
//                       color: "rgba(255, 255, 255, 0.85)",
//                       borderWidth: 0,
//                     }}
//                   >
//                     <span style={{ fontFamily: '"Poppins", sans-serif' }}>
//                       Chemilex Industries: Delivering Superior Industrial
//                       Minerals and Coal Solutions for a Sustainable Future
//                       Through Innovation and Quality
//                     </span>
//                   </div> */}

//                   {/* LAYER NR. 9 [ Read More Button ] */}
//                   {/* <div
//                     className="tp-caption tp-resizeme"
//                     id="slide-100-layer-9"
//                     data-x="['left','left','left','left']"
//                     data-hoffset="['0','0','0','0']"
//                     data-y="['top','top','top','top']"
//                     data-voffset="['450','450','450','370']"
//                     data-lineheight="['none','none','none','none']"
//                     data-width="['300','300','300','300']"
//                     data-height="['none','none','none','none']"
//                     data-whitespace="['normal','normal','normal','normal']"
//                     data-type="text"
//                     data-responsive_offset="on"
//                     data-frames='[
//         {"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":1500,"ease":"Power4.easeOut"},
//         {"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
//       ]'
//                     data-textalign="['left','left','left','left']"
//                     data-paddingtop="[0,0,0,0]"
//                     data-paddingright="[0,0,0,0]"
//                     data-paddingbottom="[0,0,0,0]"
//                     data-paddingleft="[35,35,35,35]"
//                     style={{
//                       zIndex: 13,
//                       textTransform: "uppercase",
//                       fontWeight: 700,
//                     }}
//                   >
//                     <NavLink
//                       to={route.pages.ABOUT}
//                       className="site-button button-lg m-r15"
//                     >
//                       Read more
//                     </NavLink>
//                   </div> */}
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AboutSlider;

import FastImage from "../../../../globals/elements/fastimg";
import { loadScript, publicUrlFor, route } from "../../../../globals/constants";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

function AboutSlider() {
  useEffect(() => {
    loadScript("js/rev-script-1.js");
  }, []);

  return (
    <div className="main-slider style-two default-banner">
      <div className="tp-banner-container">
        <div className="tp-banner">
          {/* START REVOLUTION SLIDER 5.4.1 */}
          <div
            className="rev_slider_wrapper fullscreen-container"
            data-alias="typewriter-effect"
            data-source="gallery"
            style={{ background: "#212427", height: "650px !important" }}
          >
            <div
              id="rev_slider_1014_1"
              className="rev_slider fullscreenbanner"
              style={{ display: "none",height:"650px !important" }}
              data-version="5.4.1"
            >
              <ul style={{height:"650px !important"}}>
                {/* SLIDE 1 */}
                <li
                  data-index="rs-1000"
                  data-transition="fadethroughdark"
                  data-slotamount="default"
                  data-hideafterloop={0}
                  data-hideslideonmobile="off"
                  data-easein="default"
                  data-easeout="default"
                  data-masterspeed={2000}
                  data-rotate={0}
                  data-saveperformance="off"
                  data-title="Creative"
                  data-description=""
                  style={{height:"650px"}}
                >
                  {/* MAIN IMAGE */}
                  {/* <FastImage
      src="media/images/construct-video1.jpg"
      alt=""
      data-bgposition="center center"
      data-bgfit="cover"
      className="rev-slidebg"
      data-no-retina
    /> */}

                  {/* LAYERS */}
                  {/* LAYER NR. 1 [ Overlay ] */}
                  <div
                    className="tp-caption tp-shape tp-shapewrapper"
                    data-x="['left','left','left','left']"
                    data-hoffset="['0','0','0','0']"
                    data-y="['top','top','top','top']"
                    data-voffset="['0','0','0','0']"
                    data-width="full"
                    data-height="full"
                    data-type="shape"
                    data-basealign="slide"
                    data-responsive_offset="off"
                    data-frames='[
        {"from":"opacity:0;","speed":1000,"to":"o:1;","delay":0,"ease":"Power4.easeOut"},
        {"delay":"wait","speed":1000,"to":"opacity:0;","ease":"Power4.easeOut"}
      ]'
                    style={{
                      zIndex: 12,
                      backgroundColor: "rgba(0, 0, 0, 0.6)",
                      borderWidth: 0,
                    }}
                  ></div>

                  {/* LAYER NR. 2 [ Video Background ] */}
                  <div
                    className="rs-background-video-layer"
                    data-forcerewind="on"
                    data-volume="mute"
                    data-videowidth="100%"
                    data-videoheight="100%"
                    data-videomp4={publicUrlFor(
                      "media/video/Copy of Chemilex website home page banner (4).mp4"
                    )}
                    data-videopreload="auto"
                    data-videoloop="loop"
                    data-aspectratio="16:9"
                    data-autoplay="true"
                    data-autoplayonlyfirsttime="false"
                    style={{ height: "650px" }}
                  />

                  {/* LAYER NR. 3 [ Title ] */}
                  <div
                    className="tp-caption tp-resizeme"
                    data-x="['left','left','left','left']"
                    data-hoffset="['30','30','30','30']"
                    data-y="['top','top','top','top']"
                    data-voffset="['120','120','120','80']"
                    data-width="none"
                    data-height="none"
                    data-fontsize="['60','60','40','24']"
                    data-lineheight="['70','70','70','60']"
                    data-type="text"
                    data-responsive_offset="on"
                    data-frames='[
        {"from":"y:100px;opacity:0;","speed":2000,"to":"o:1;","delay":500,"ease":"Power4.easeOut"},
        {"delay":"wait","speed":1000,"to":"y:0;opacity:1;","ease":"Power2.easeInOut"}
      ]'
                    style={{
                      zIndex: 13,
                      fontWeight: 700,
                      color: "rgba(255, 255, 255, 1.00)",
                    }}
                  >
                    <span style={{ fontFamily: '"Roboto", sans-serif' }}>
                      <span className="site-text-primary text-uppercase">
                        About
                      </span>
                    </span>
                  </div>

                  {/* LAYER NR. 4 [ Main Title ] */}
                  <div
                    className="tp-caption RotatingWords-TitleWhite tp-resizeme tounblur"
                    data-x="['left','left','left','left']"
                    data-hoffset="['30','30','30','30']"
                    data-y="['top','top','top','top']"
                    data-voffset="['200','200','200','140']"
                    data-width="none"
                    data-height="none"
                    data-fontsize="['60','60','40','24']"
                    data-lineheight="['70','70','70','60']"
                    data-type="text"
                    data-responsive_offset="on"
                    data-frames='[
        {"delay":1000,"split":"chars","splitdelay":0.1,"speed":500,"frame":"0","from":"sX:0.8;sY:0.8;opacity:0;","to":"sX:1;sY:1;opacity:1;","ease":"Power4.easeOut"},
        {"speed":500,"frame":"999","to":"sX:0.8;sY:0.8;opacity:0;","ease":"Power4.easeInOut","loop":true}
      ]'
                    style={{
                      zIndex: 13,
                      fontWeight: 700,
                      color: "rgba(255, 255, 255, 1.00)",
                    }}
                  >
                    <span
                      className="text-uppercase"
                      style={{ fontFamily: '"Roboto", sans-serif' }}
                    >
                      Chemilex Industries
                    </span>
                  </div>

                  {/* LAYER NR. 6 [ Button ] */}
                  <div
                    className="tp-caption RotatingWords-TitleWhite tp-resizeme tounblur"
                    id="slide-100-layer-8"
                    data-x="['left','left','left','left']"
                    data-hoffset="['0','0','0','0']"
                    data-y="['top','top','top','top']"
                    data-voffset="['350','350','350','270']"
                    data-fontsize="['18','18','16','14']"
                    data-lineheight="['30','30','30','24']"
                    data-width="['800','800','600','300']"
                    data-height="['none','none','none','none']"
                    data-whitespace="['normal','normal','normal','normal']"
                    data-type="text"
                    data-responsive_offset="on"
                    data-frames='[
        {"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":1000,"ease":"Power4.easeOut"},
        {"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
      ]'
                    data-textalign="['left','left','left','left']"
                    data-paddingtop="[0,0,0,0]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingbottom="[0,0,0,0]"
                    data-paddingleft="[35,35,35,35]"
                    style={{
                      zIndex: 13,
                      fontWeight: 500,
                      color: "rgba(255, 255, 255, 0.85)",
                      borderWidth: 0,
                      marginTop: "-40px",
                    }}
                  >
                    <span style={{ fontFamily: '"Poppins", sans-serif' }}>
                    At Chemilex Industries, we are dedicated to fostering long-term relationships with our clients by consistently delivering products and services that exceed expectations.
                    </span>
                  </div>

                  {/* LAYER NR. 9 [ Read More Button ] */}
                  <div
                    className="tp-caption tp-resizeme"
                    id="slide-100-layer-9"
                    data-x="['left','left','left','left']"
                    data-hoffset="['0','0','0','0']"
                    data-y="['top','top','top','top']"
                    data-voffset="['450','450','450','370']"
                    data-lineheight="['none','none','none','none']"
                    data-width="['300','300','300','300']"
                    data-height="['none','none','none','none']"
                    data-whitespace="['normal','normal','normal','normal']"
                    data-type="text"
                    data-responsive_offset="on"
                    data-frames='[
        {"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":1500,"ease":"Power4.easeOut"},
        {"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
      ]'
                    data-textalign="['left','left','left','left']"
                    data-paddingtop="[0,0,0,0]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingbottom="[0,0,0,0]"
                    data-paddingleft="[35,35,35,35]"
                    style={{
                      zIndex: 13,
                      textTransform: "uppercase",
                      fontWeight: 700,
                      marginTop: "30px",
                    }}
                  >
                    <NavLink
                      to={route.pages.contact.CONTACT1}
                      className="site-button button-lg m-r15"
                    >
                      Contact Us
                    </NavLink>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSlider;

// import FastImage from "../../../../globals/elements/fastimg";
// import { loadScript, publicUrlFor, route } from "../../../../globals/constants";
// import { NavLink } from "react-router-dom";
// import { useEffect } from "react";

// function SectionSlider3() {
//   useEffect(() => {
//     loadScript("js/rev-script-1.js");
//   }, []);

//   return (
//     <div className="main-slider style-two default-banner">
//       <div className="tp-banner-container">
//         <div className="tp-banner">
//           {/* START REVOLUTION SLIDER 5.4.1 */}
//           <div
//   className="rev_slider_wrapper fullscreen-container"
//   data-alias="typewriter-effect"
//   data-source="gallery"
//   style={{ background: "#212427", height: "650px" }}
// >
//             <div
//               id="rev_slider_1014_1"
//               className="rev_slider fullscreenbanner"
//                data-version="5.4.1"
//               style={{ display: "none" , }}

//             >
//               <ul>
//                 {/* SLIDE 1 */}
//                 <li
//                   data-index="rs-1000"
//                   data-transition="fadethroughdark"
//                   data-slotamount="default"
//                   data-hideafterloop={0}
//                   data-hideslideonmobile="off"
//                   data-easein="default"
//                   data-easeout="default"
//                   data-masterspeed={2000}
//                   data-rotate={0}
//                   data-saveperformance="off"
//                   data-title="Creative"
//                   data-description=""
//                 >
//                   {/* MAIN IMAGE */}
//                   {/* <FastImage
//                     src="media/images/construct-video1.jpg"
//                     alt=""
//                     data-bgposition="center center"
//                     data-bgfit="cover"
//                     className="rev-slidebg"
//                     data-no-retina
//                   /> */}

//                   {/* LAYERS */}
//                   {/* LAYER NR. 1 [ Overlay ] */}
//                   <div
//                     className="tp-caption tp-shape tp-shapewrapper"
//                     data-x="['left','left','left','left']"
//                     data-hoffset="['0','0','0','0']"
//                     data-y="['top','top','top','top']"
//                     data-voffset="['0','0','0','0']"
//                     data-width="full"
//                     data-height="full"
//                     data-type="shape"
//                     data-basealign="slide"
//                     data-responsive_offset="off"
//                     data-frames='[
//                       {"from":"opacity:0;","speed":1000,"to":"o:1;","delay":0,"ease":"Power4.easeOut"},
//                       {"delay":"wait","speed":1000,"to":"opacity:0;","ease":"Power4.easeOut"}
//                     ]'
//                     style={{
//                       zIndex: 12,
//                       backgroundColor: "rgba(0, 0, 0, 0.6)",
//                       borderWidth: 0,
//                     }}
//                   ></div>

//                   {/* LAYER NR. 2 [ Video Background ] */}
//                   <div
//                     className="rs-background-video-layer"
//                     data-forcerewind="on"
//                     data-volume="mute"
//                     data-videowidth="100%"
//                     data-videoheight="100%"
//                     data-videomp4={publicUrlFor("media/video/Copy of Chemilex website home page banner (4).mp4")}
//                     data-videopreload="auto"
//                     data-videoloop="loop"
//                     data-aspectratio="16:9"
//                     data-autoplay="true"
//                     data-autoplayonlyfirsttime="false"
//                   />

//                   {/* LAYER NR. 3 [ Title ] */}
//                   <div
//                     className="tp-caption tp-resizeme"
//                     data-x="['left','left','left','left']"
//                     data-hoffset="['30','30','30','30']"
//                     data-y="['top','top','top','top']"
//                     data-voffset="['120','120','120','80']"
//                     data-width="none"
//                     data-height="none"
//                     data-fontsize="['60','60','40','24']"
//                     data-lineheight="['70','70','70','60']"
//                     data-type="text"
//                     data-responsive_offset="on"
//                     data-frames='[
//                       {"from":"y:100px;opacity:0;","speed":2000,"to":"o:1;","delay":500,"ease":"Power4.easeOut"},
//                       {"delay":"wait","speed":1000,"to":"y:0;opacity:1;","ease":"Power2.easeInOut"}
//                     ]'
//                     style={{
//                       zIndex: 13,
//                       fontWeight: 700,
//                       color: "rgba(255, 255, 255, 1.00)",
//                     }}
//                   >
//                     <span style={{ fontFamily: '"Roboto", sans-serif' }}>
//                       <span className="site-text-primary text-uppercase">
//                         Welcome To{" "}
//                       </span>
//                     </span>
//                   </div>

//                   {/* LAYER NR. 4 [ Main Title ] */}
//                   <div
//                     className="tp-caption RotatingWords-TitleWhite tp-resizeme tounblur"
//                     data-x="['left','left','left','left']"
//                     data-hoffset="['30','30','30','30']"
//                     data-y="['top','top','top','top']"
//                     data-voffset="['200','200','200','140']"
//                     data-width="none"
//                     data-height="none"
//                     data-fontsize="['60','60','40','24']"
//                     data-lineheight="['70','70','70','60']"
//                     data-type="text"
//                     data-responsive_offset="on"
//                     data-frames='[
//                       {"delay":1000,"split":"chars","splitdelay":0.1,"speed":500,"frame":"0","from":"sX:0.8;sY:0.8;opacity:0;","to":"sX:1;sY:1;opacity:1;","ease":"Power4.easeOut"},
//                       {"speed":500,"frame":"999","to":"sX:0.8;sY:0.8;opacity:0;","ease":"Power4.easeInOut","loop":true}
//                     ]'
//                     style={{
//                       zIndex: 13,
//                       fontWeight: 700,
//                       color: "rgba(255, 255, 255, 1.00)",
//                     }}
//                   >
//                     <span
//                       className="text-uppercase"
//                       style={{ fontFamily: '"Roboto", sans-serif' }}
//                     >
//                       Chemilex Industries
//                     </span>
//                   </div>

//                   {/* LAYER NR. 6 [ Button ] */}
//                   <div
//                     className="tp-caption RotatingWords-TitleWhite tp-resizeme tounblur"
//                     id="slide-100-layer-8"
//                     data-x="['left','left','left','left']"
//                     data-hoffset="['0','0','0','0']"
//                     data-y="['top','top','top','top']"
//                     data-voffset="['350','350','350','270']"
//                     data-fontsize="['18','18','16','14']"
//                     data-lineheight="['30','30','30','24']"
//                     data-width="['800','800','600','300']"
//                     data-height="['none','none','none','none']"
//                     data-whitespace="['normal','normal','normal','normal']"
//                     data-type="text"
//                     data-responsive_offset="on"
//                     data-frames='[
//                       {"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":1000,"ease":"Power4.easeOut"},
//                       {"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
//                     ]'
//                     data-textalign="['left','left','left','left']"
//                     data-paddingtop="[0,0,0,0]"
//                     data-paddingright="[0,0,0,0]"
//                     data-paddingbottom="[0,0,0,0]"
//                     data-paddingleft="[35,35,35,35]"
//                     style={{
//                       zIndex: 13,
//                       fontWeight: 500,
//                       color: "rgba(255, 255, 255, 0.85)",
//                       borderWidth: 0,
//                       marginTop: "-40px",
//                     }}
//                   >
//                     <span style={{ fontFamily: '"Poppins", sans-serif' }}>
//                       Chemilex Industries: Delivering Superior Industrial
//                       Minerals and Coal Solutions for a Sustainable Future
//                       Through Innovation and Quality
//                     </span>
//                   </div>

//                   {/* LAYER NR. 9 [ Read More Button ] */}
//                   <div
//                     className="tp-caption tp-resizeme"
//                     id="slide-100-layer-9"
//                     data-x="['left','left','left','left']"
//                     data-hoffset="['0','0','0','0']"
//                     data-y="['top','top','top','top']"
//                     data-voffset="['450','450','450','370']"
//                     data-lineheight="['none','none','none','none']"
//                     data-width="['300','300','300','300']"
//                     data-height="['none','none','none','none']"
//                     data-whitespace="['normal','normal','normal','normal']"
//                     data-type="text"
//                     data-responsive_offset="on"
//                     data-frames='[
//                       {"from":"y:100px;opacity:0;","speed":1500,"to":"o:1;","delay":1200,"ease":"Power4.easeOut"},
//                       {"delay":"wait","speed":1000,"to":"y:50px;opacity:0;","ease":"Power2.easeInOut"}
//                     ]'
//                     style={{ zIndex: 12 }}
//                   >
//                     <NavLink
//                       to={route.pages.ABOUT}
//                       className="site-button button-lg skew-icon-btn m-r15"
//                       style={{ textTransform: "uppercase" }}
//                     >
//                       <i className="fa fa-angle-right" />
//                       Read More
//                     </NavLink>
//                   </div>
//                 </li>
//               </ul>
//               <div className="tp-bannertimer" style={{ height: "7px" }} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SectionSlider3;
