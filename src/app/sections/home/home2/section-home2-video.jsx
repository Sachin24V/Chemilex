import { publicUrlFor, route } from "../../../../globals/constants";
import { NavLink } from "react-router-dom";

function SectionHome2Video() {
    return (
        <div className="section-full  about-video p-t130 p-b80 overlay-wraper" data-stellar-background-ratio="0.5" style={{ 
            backgroundImage: `url(${publicUrlFor("images/background/LEADINGIBG.png")})`,
            backgroundRepeat:"no-repeat",
            backgroundSize:" cover " ,
           }}>
            <div className="overlay-main  opacity-09" />
            <div className="container text-center ">
                {/* <a href="https://player.vimeo.com/video/66491481" className="mfp-video play-now">
                    <i className="icon fa fa-play" />
                    <span className="ripple" />
                </a> */}
                 
                <div className="text-white help-section">
                    <h2 className="m-b30">Leading the Way in Industrial Excellence</h2>
                    <h4 className="m-b30"><strong>With a strong commitment to quality and innovation, we are a premier provider of industrial minerals and coal. Our dedication to superior products and sustainable practices positions us as a trusted partner for businesses across various sectors. From cutting-edge manufacturing techniques to exceptional customer service, we are dedicated to delivering solutions that drive efficiency and growth in an ever-evolving industry.</strong></h4>
                    <NavLink to={route.pages.contact.CONTACT1} className="site-button">Contact Us</NavLink>
                </div>
            </div>
        </div>
    )
}

export default SectionHome2Video;
