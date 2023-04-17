import "./FooterStyles.css";
import React from "react";
import {FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter} from "react-icons/fa";

const Footer =()=>{
    return(
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                        <div>
                            <p>+90 Türkiye Bilecik</p>
                            <p>Söğüt</p>
                        </div>
                    </div>
                    <div className="phone">
                        <h4>
                            <FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}} />
                            1-234-567-89
                        </h4>
                    </div>
                    <div className="email">
                        <h4>
                            <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            batuhansalkim11@gmail.com
                        </h4>
                    </div>
                </div>
                <div className="right">
                    <h4>About the company</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam dolorem dicta atque ab dolore blanditiis id iusto commodi assumenda incidunt.</p>
                    <div className="social">
                        <FaFacebook size={20} style={{ color: "#fff", marginRight: "1rem" }} />

                        <FaTwitter size={20} style={{ color: "#fff", marginRight: "1rem" }} />

                        <FaLinkedin size={20} style={{ color: "#fff", marginRight: "1rem" }} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;