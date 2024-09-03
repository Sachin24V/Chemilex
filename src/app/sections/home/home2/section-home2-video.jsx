import { publicUrlFor, route } from "../../../../globals/constants";
import { NavLink } from "react-router-dom";

function SectionHome2Video() {
    return (
        <div className="section-full  about-video p-t130 p-b80 overlay-wraper" data-stellar-background-ratio="0.5" style={{ backgroundImage: `url(${publicUrlFor("images/background/bgimage2.png")})` }}>
            <div className="overlay-main  opacity-09" />
            <div className="container text-center ">
                <a href="https://player.vimeo.com/video/66491481" className="mfp-video play-now">
                    <i className="icon fa fa-play" />
                    <span className="ripple" />
                </a>
                 
                <div className="text-white help-section">
                    <h2 className="m-b30">Watch How We Work</h2>
                    <h4 className="m-b30"><strong>Get an inside look at Chemilex’s commitment to quality and innovation. Watch our process in action.</strong></h4>
                    <NavLink to={route.pages.contact.CONTACT1} className="site-button">Contact Us</NavLink>
                </div>
            </div>
        </div>
    )
}

export default SectionHome2Video;
