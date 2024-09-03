import FastImage from "../../../../globals/elements/fastimg";

function SectionHome3WhatWeDo() {
  return (
    <div className="section-full  p-t80 p-b50">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            {/* <div className="mt-box m-b30">
              <div className="mt-thum-bx mt-img-effect">
                <FastImage src="images/gallery/pic4.jpg" alt="" />
              </div>
            </div> */}
            <div className="owl-carousel service-detail-carousel owl-btn-vertical-center owl-dots-bottom-center m-b20">
              <div className="item">
                <div className="aon-thum-bx">
                  <FastImage src="images/gallery/1.jpg" alt="" />
                </div>
              </div>
              <div className="item">
                <div className="aon-thum-bx">
                  <FastImage src="images/gallery/2.jpg" alt="" />
                </div>
              </div>
              <div className="item">
                <div className="aon-thum-bx">
                  <FastImage src="images/gallery/3.jpg" alt="" />
                </div>
              </div>
              <div className="item">
                <div className="aon-thum-bx">
                  <FastImage src="images/gallery/6.jpg" alt="" />
                </div>
              </div>
              <div className="item">
                <div className="aon-thum-bx">
                  <FastImage src="images/gallery/8.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="mt-box sx-what-wedo">
              <h2 className="m-t0"> About Us</h2>
              <p>
              Welcome to Chemilex Industries, a leader in the lime manufacturing industry and a trusted partner in the trade of imported coal and coke. With years of expertise and a commitment to excellence, we pride ourselves on delivering high-quality lime products that meet the diverse needs of our clients across various industries. 
              </p>

              <p>
              Our state-of-the-art manufacturing facilities are equipped with the latest technology, enabling us to produce lime products that are both environmentally friendly and superior in quality. We serve a wide range of sectors, including steel, construction, chemical, and agriculture, offering tailored solutions to enhance productivity and efficiency. 
              </p>

              {/* <NavLink to={route.pages.ABOUT} className="site-button">Read more</NavLink> */}
            </div>
          </div>
          <div className="col-lg-12 col-md-12">
            <div className="mt-box sx-what-wedo">
            
              <p>
              In addition to our lime manufacturing operations, we are also a prominent player in the international trading of imported coal and coke. Our extensive network of reliable suppliers and our deep understanding of the market dynamics allow us to provide our clients with premium-grade materials at competitive prices. 
              </p>

              <p>
             

At Chemilex Industries, we are dedicated to fostering long-term relationships with our clients by consistently delivering products and services that exceed expectations. Our focus on innovation, quality, and customer satisfaction drives everything we do, ensuring that we remain a preferred choice in the industry. 
              </p>

              {/* <NavLink to={route.pages.ABOUT} className="site-button">Read more</NavLink> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionHome3WhatWeDo;
