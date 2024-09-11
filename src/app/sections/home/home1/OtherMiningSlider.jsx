
// import FastImage from "../../../../globals/elements/fastimg";
// import { useEffect } from "react";
// import { publicUrlFor, loadScript } from "../../../../globals/constants";

// function OtherminingSlider() {
//   useEffect(() => {
//     loadScript("js/rev-script-3.js");
//   }, []);

//   return (
//     <>
//       <div className="main-slider style-two default-banner">
//         <div className="tp-banner-container">
//           <div className="tp-banner">
//             <div
//               id="rev_slider_1077_1_wrapper"
//               className="rev_slider_wrapper fullscreen-container no-dots"
//               data-alias="scroll-effect136"
//               data-source="gallery"
//               style={{ backgroundColor: "#111111", padding: 0, position: 'relative' }}
//             >
//               {/* Common Heading */}
               

//               <div
//                 id="rev_slider_1077_1"
//                 className="rev_slider fullscreenbanner"
//                 style={{ display: "none" }}
//                 data-version="5.4.1"
//               >
//                 <ul>
//                   {/* SLIDE 1 */}
//                   <li
//                     data-index="rs-200"
//                     data-transition="slide"
//                     data-slotamount={1}
//                     data-hideafterloop={0}
//                     data-hideslideonmobile="off"
//                     data-masterspeed={500}
//                     data-saveperformance="off"
//                     data-description=""
//                   >
//                     <FastImage
//                       src="images/main-slider/slider1/other minig products.jpg"
//                       alt=""
//                       data-lazyload={publicUrlFor(
//                         "images/main-slider/slider1/other minig products.jpg"
//                       )}
//                       data-bgposition="center center"
//                       data-kenburns="on"
//                       data-ease="Power1.easeOut"
//                       data-scalestart={110}
//                       data-scaleend={100}
//                       data-rotatestart={0}
//                       data-rotateend={0}
//                       data-offsetstart="0 0"
//                       data-offsetend="0 0"
//                       className="rev-slidebg"
//                       data-no-retina
//                     />
//                   </li>

//                   {/* SLIDE 2 */}
//                   <li
//                     data-index="rs-300"
//                     data-transition="slide"
//                     data-slotamount={1}
//                     data-hideafterloop={0}
//                     data-hideslideonmobile="off"
//                     data-masterspeed={500}
//                     data-saveperformance="off"
//                     data-description=""
//                   >
//                     <FastImage
//                       src="images/main-slider/slider1/other mining products (2).jpg"
//                       alt=""
//                       data-lazyload={publicUrlFor(
//                         "images/main-slider/slider1/other mining products (2).jpg"
//                       )}
//                       data-bgposition="center center"
//                       data-kenburns="on"
//                       data-ease="Power1.easeOut"
//                       data-scalestart={110}
//                       data-scaleend={100}
//                       data-rotatestart={0}
//                       data-rotateend={0}
//                       data-offsetstart="0 0"
//                       data-offsetend="0 0"
//                       className="rev-slidebg"
//                       data-no-retina
//                     />
//                   </li>

//                   {/* SLIDE 3 */}
//                   <li
//                     data-index="rs-300"
//                     data-transition="slide"
//                     data-slotamount={1}
//                     data-hideafterloop={0}
//                     data-hideslideonmobile="off"
//                     data-masterspeed={500}
//                     data-saveperformance="off"
//                     data-description=""
//                   >
//                     <FastImage
//                       src="images/main-slider/slider1/other mining products.jpg"
//                       alt=""
//                       data-lazyload={publicUrlFor(
//                         "images/main-slider/slider1/other mining products.jpg"
//                       )}
//                       data-bgposition="center center"
//                       data-kenburns="on"
//                       data-ease="Power1.easeOut"
//                       data-scalestart={110}
//                       data-scaleend={100}
//                       data-rotatestart={0}
//                       data-rotateend={0}
//                       data-offsetstart="0 0"
//                       data-offsetend="0 0"
//                       className="rev-slidebg"
//                       data-no-retina
//                     />
//                   </li>
                 
                 
                  
//                 </ul>
                
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//     </>
//   );
// }

// export default OtherminingSlider;


import FastImage from "../../../../globals/elements/fastimg";
import { useEffect } from "react";
import { publicUrlFor, loadScript, route } from "../../../../globals/constants";
import { NavLink } from "react-router-dom";

function OtherminingSlider() {
  useEffect(() => {
    loadScript("js/rev-script-3.js");
  }, []);

  return (
    <>
      <div className="main-slider style-two default-banner">
        <div className="breadcrumb-container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
              
                <NavLink to={route.INITIAL }>
                    Home
                </NavLink>
                </li>
               
              <li className="breadcrumb-item active" aria-current="page">Other Mining Products</li>
            </ol>
          </nav>
        </div>
        <div className="tp-banner-container">
          <div className="tp-banner">
            <div
              id="rev_slider_1077_1_wrapper"
              className="rev_slider_wrapper fullscreen-container no-dots"
              data-alias="scroll-effect136"
              data-source="gallery"
              style={{ backgroundColor: "#111111", padding: 0, position: 'relative' }}
            >
              <div
                id="rev_slider_1077_1"
                className="rev_slider fullscreenbanner"
                style={{ display: "none" }}
                data-version="5.4.1"
              >
                <ul>
                  {/* SLIDE 1 */}
                  <li
                    data-index="rs-200"
                    data-transition="slide"
                    data-slotamount={1}
                    data-hideafterloop={0}
                    data-hideslideonmobile="off"
                    data-masterspeed={500}
                    data-saveperformance="off"
                    data-description=""
                  >
                    <FastImage
                      src="images/main-slider/slider1/other minig products.jpg"
                      alt=""
                      data-lazyload={publicUrlFor(
                        "images/main-slider/slider1/other minig products.jpg"
                      )}
                      data-bgposition="center center"
                      data-kenburns="on"
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
                  </li>

                  {/* SLIDE 2 */}
                  <li
                    data-index="rs-300"
                    data-transition="slide"
                    data-slotamount={1}
                    data-hideafterloop={0}
                    data-hideslideonmobile="off"
                    data-masterspeed={500}
                    data-saveperformance="off"
                    data-description=""
                  >
                    <FastImage
                      src="images/main-slider/slider1/other mining products (2).jpg"
                      alt=""
                      data-lazyload={publicUrlFor(
                        "images/main-slider/slider1/other mining products (2).jpg"
                      )}
                      data-bgposition="center center"
                      data-kenburns="on"
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
                  </li>

                  {/* SLIDE 3 */}
                  <li
                    data-index="rs-300"
                    data-transition="slide"
                    data-slotamount={1}
                    data-hideafterloop={0}
                    data-hideslideonmobile="off"
                    data-masterspeed={500}
                    data-saveperformance="off"
                    data-description=""
                  >
                    <FastImage
                      src="images/main-slider/slider1/other mining products.jpg"
                      alt=""
                      data-lazyload={publicUrlFor(
                        "images/main-slider/slider1/other mining products.jpg"
                      )}
                      data-bgposition="center center"
                      data-kenburns="on"
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
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OtherminingSlider;
