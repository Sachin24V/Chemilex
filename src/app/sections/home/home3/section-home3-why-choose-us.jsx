// import { route } from "../../../../globals/constants";
// import { NavLink } from "react-router-dom";

// function SectionHome3WhyChooseUs() {
//   return (
//     <div className="section-full bg-gray    p-b50">
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-12 col-md-12">
//             {/* TITLE START*/}
//             <div className="section-head text-left">
//               <h2>Why Choose us</h2>
//               <div className="mt-separator-outer">
//                 <div className="mt-separator site-bg-primary" />
//               </div>
//             </div>
//             {/* TITLE END*/}
//             <div className="section-content sx-why-choose">
//               <div className="row">
//                 <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
//                   <div className="mt-box">
//                     <div className="mt-info bg-white text-left p-a20 m-b30">
//                       <h4>Our Vision</h4>
//                       <p>
//                       At Chemilex Industries , we are committed to broadening our horizons and diversifying our operations to create a dynamic and resilient business. Our vision is to harness our full potential and leverage innovative practices to establish ourselves as a leading industry producer. We strive to set new standards of excellence through continuous improvement, technological advancement, and a relentless focus on quality. By embracing opportunities for growth and expansion, we aim to build a sustainable future that not only meets but exceeds the expectations of our stakeholders and customers. Our goal is to be recognized globally for our exceptional products, services, and contributions to the industry.
 
//                       </p>
//                       <NavLink
//                         to={route.pages.ABOUT}
//                         className="site-button-link site-text-primary font-weight-600"
//                       >
//                         Read More
//                       </NavLink>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
//                   <div className="mt-box m-b30">
//                     <div className="mt-info bg-white text-left p-a20">
//                       <h4>Our Values </h4>
//                       <p>
//                       At Chemilex Industries, our approach is deeply rooted in fostering a collaborative and inclusive work environment. We believe in nurturing talent and promoting from within, creating a culture where ideas and merit drive growth and advancement. Our commitment to a meritocratic structure ensures that every team member has the opportunity to contribute and be recognized for their achievements. By empowering our employees and encouraging cross-functional collaboration, we aim to build a dynamic and innovative organization where everyone can thrive. This approach not only enhances individual and team performance but also propels our company towards achieving its strategic goals and sustaining long-term success.

 
//                       </p>
//                       <NavLink
//                         to={route.pages.ABOUT}
//                         className="site-button-link site-text-primary font-weight-600"
//                       >
//                         Read More
//                       </NavLink>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
//                   <div className="mt-box m-b30">
//                     <div className="mt-info bg-white text-left p-a20">
//                       <h4>Our Mission </h4>
//                       <p>
//                       At  Chemilex Industries, our mission is to deliver exceptional services that consistently surpass customer expectations. We are dedicated to providing the highest quality solutions through a blend of innovation, expertise, and unwavering commitment to excellence. Our focus is on understanding the unique needs of each client and tailoring our services to meet and exceed those needs. By prioritizing customer satisfaction and fostering a culture of continuous improvement, we aim to build lasting relationships and deliver results that make a meaningful impact. Our mission is to be recognized as a leader in our industry, renowned for our reliability, professionalism, and exceptional service delivery.
//                       </p>
//                       <NavLink
//                         to={route.pages.ABOUT}
//                         className="site-button-link site-text-primary font-weight-600"
//                       >
//                         Read More
//                       </NavLink>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* <div className="col-lg-6 col-md-12">
                       
//                         <div className="section-head text-left">
//                             <h2>Our Skills</h2>
//                             <div className="mt-separator-outer">
//                                 <div className="mt-separator site-bg-primary" />
//                             </div>
//                         </div>
                        
//                         <div className="section-content  clearfix ">
//                             <div className="p-b0">
//                                 <div className="mt-box">
//                                     <h2 className="m-t0"><span className="site-text-primary"> 25 years</span> of experience in Logistics services</h2>
//                                 </div>
//                                 <div className="our-exp">
//                                     <span className="progressText text-black"><b>Ground Transport</b></span>
//                                     <div className="progress m-b30 m-t10">
//                                         <div className="progress-bar site-bg-primary progress-bar-striped progress-bar-animated text-black" role="progressbar" style={{ width: '85%' }} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}>85%</div>
//                                     </div>
//                                     <span className="progressText text-black"><b>Cargo</b></span>
//                                     <div className="progress m-b30 m-t10">
//                                         <div className="progress-bar site-bg-primary progress-bar-striped progress-bar-animated text-black" role="progressbar" style={{ width: '78%' }} aria-valuenow={78} aria-valuemin={0} aria-valuemax={100}>78%</div>
//                                     </div>
//                                     <span className="progressText text-black"><b>Logistic Services</b></span>
//                                     <div className="progress m-b30 m-t10">
//                                         <div className="progress-bar site-bg-primary progress-bar-striped progress-bar-animated text-black" role="progressbar" style={{ width: '65%' }} aria-valuenow={65} aria-valuemin={0} aria-valuemax={100}>65%</div>
//                                     </div>
//                                     <span className="progressText text-black"><b>Warehousing</b></span>
//                                     <div className="progress m-b30 m-t10">
//                                         <div className="progress-bar site-bg-primary progress-bar-striped progress-bar-animated text-black" role="progressbar" style={{ width: '40%' }} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100}>40%</div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div> */}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SectionHome3WhyChooseUs;

import { useState } from "react";
import { route } from "../../../../globals/constants";
import { NavLink } from "react-router-dom";

const truncateContent = (content, limit) => {
  return content.length > limit ? content.substring(0, limit) + "..." : content;
};

function SectionHome3WhyChooseUs() {
  const [expanded, setExpanded] = useState({
    vision: false,
    values: false,
    mission: false
  });

  const handleToggle = (section) => {
    setExpanded((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const visionContent = `
  At Chemilex Industries, we are dedicated to expanding and diversifying our business to become a leading industry producer. Our vision is to leverage innovation and excellence to set new standards, focusing on continuous improvement and quality. By pursuing growth opportunities, we aim to build a sustainable future that exceeds the expectations of our stakeholders and customers. Our goal is to be globally recognized for our exceptional products, services, and industry contributions.
  `;

  const valuesContent = `
At Chemilex Industries, we prioritize a collaborative and inclusive work environment, where talent is nurtured and promotion is based on merit. We empower our employees and encourage cross-functional collaboration to create a dynamic, innovative organization that fosters creativity, excellence, and professional growth. This proactive approach enhances individual and team performance, helping us achieve our strategic goals and sustain long-term success.




  `;

  const missionContent = `
    At Chemilex Industries, our mission is to deliver exceptional services that consistently exceed customer expectations. We provide high-quality solutions through innovation, expertise, and a commitment to excellence. By understanding each client's unique needs and focusing on continuous improvement, we aim to build lasting relationships and achieve impactful results. We strive to be a recognized leader in our industry, known for reliability, professionalism, and outstanding service.
  `;

  return (
    <div className="section-full bg-gray p-b50">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            {/* TITLE START*/}
            <div className="section-head text-left">
              <h2>Why Choose Us</h2>
              <div className="mt-separator-outer">
                <div className="mt-separator site-bg-primary" />
              </div>
            </div>
            {/* TITLE END*/}
            <div className="section-content sx-why-choose">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                  <div className="mt-box">
                    <div className="mt-info bg-white text-left p-a20 m-b30">
                      <h4>Our Vision</h4>
                      <p>
                        {expanded.vision
                          ? visionContent
                          : truncateContent(visionContent, 200)}
                      </p>
                      <NavLink
                        to="#"
                        className="site-button-link site-text-primary font-weight-600"
                        onClick={() => handleToggle("vision")}
                      >
                        {expanded.vision ? "Read Less" : "Read More"}
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                  <div className="mt-box m-b30">
                    <div className="mt-info bg-white text-left p-a20">
                      <h4>Our Values</h4>
                      <p>
                        {expanded.values
                          ? valuesContent
                          : truncateContent(valuesContent, 200)}
                      </p>
                      <NavLink
                        to="#"
                        className="site-button-link site-text-primary font-weight-600"
                        onClick={() => handleToggle("values")}
                      >
                        {expanded.values ? "Read Less" : "Read More"}
                      </NavLink>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                  <div className="mt-box m-b30">
                    <div className="mt-info bg-white text-left p-a20">
                      <h4>Our Mission</h4>
                      <p>
                        {expanded.mission
                          ? missionContent
                          : truncateContent(missionContent, 200)}
                      </p>
                      <NavLink
                        to="#"
                        className="site-button-link site-text-primary font-weight-600"
                        onClick={() => handleToggle("mission")}
                      >
                        {expanded.mission ? "Read Less" : "Read More"}
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionHome3WhyChooseUs;

