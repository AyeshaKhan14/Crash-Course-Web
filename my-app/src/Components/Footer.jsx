import React from "react";
import { FaTwitter } from "react-icons/fa";
import { BsLinkedin, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#f2f2f2", padding: "30px 40px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap"
        }}
      >
        <div style={{ width: "100%", maxWidth: "200px", marginBottom: "20px" }}>
          <img
            style={{ width: "100%" }}
            src="https://lwfiles.mycourse.app/warikoo-public/493b0c29c3995efaa13a6ae0a0ca765e.png"
          />
        </div>
        <div style={{ width: "100%", maxWidth: "200px", marginBottom: "20px" }}>
          <h4>Crash Course</h4>
          <p>
          Crash Course Company is an entrepreneur, teacher, content creator, public
            speaker and mentor, based out of India.
          </p>
        </div>
        <div style={{ width: "100%", maxWidth: "200px", marginBottom: "20px" }}>
          <h4>Popular courses</h4>
          <ul style={{ listStyle: "none", paddingLeft: 0 }}>
            <li>How to Youtube</li>
            <li>Complete guide to</li>
            <li>Starting up</li>
            <li>Take charge</li>
            <li>of your time</li>
          </ul>
        </div>
        <div style={{ width: "100%", maxWidth: "200px", marginBottom: "20px" }}>
          <h4>Get in Touch</h4>
          <div >
            <div style={{display:"flex",alignItems:"center"}} >
            Twitter <FaTwitter style={{fontSize:"20px",color:"blue",marginLeft:"10px"}} />
             
            </div>
            <div style={{display:"flex"}}>
            Linkdin<BsLinkedin style={{fontSize:"20px",color:"blue",marginLeft:"10px"}}/>
           
            </div>
            <div style={{display:"flex"}}>
            Instagram <BsInstagram style={{fontSize:"20px",color:"red",marginLeft:"10px"}} />
            
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;