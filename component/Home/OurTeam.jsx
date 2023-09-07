import "./OurTeam.css";
import Member1 from "../../Image/Cartoon-1.jpg";
import Member2 from "../../Image/Cartoon-2.jpg";
import Member3 from "../../Image/Cartoon-3.jpg";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
export default function OurTeam() {
  React.useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div id="model1">
      <div className="members">
        <div className="member" data-aos="flip-right">
          <img width={300} height={300} src={Member1} alt="ceo"/>
          <div className="description">
          <h1>PQR </h1>
            <h2>Writter</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Accusantium deserun
            </p>
            <div className="social-media">
              <InstagramIcon />
              <LinkedInIcon />
              <PinterestIcon />
            </div>
          </div>
        </div>
        <div className="member" data-aos="flip-right">
          <img width={300} src={Member2} alt="vc" />
          <div className="description">
            <h1>ABC </h1>
            <h2>CEO</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Accusantium deserun
            </p>
            <div className="social-media">
              <InstagramIcon />
              <LinkedInIcon />
              <PinterestIcon />
            </div>
          </div>
        </div>
        <div className="member" data-aos="flip-right">
          <img width={300} src={Member3} alt="writter" />
          <div className="description">
          <h1>XYZ </h1>
            <h2>Vice President</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Accusantium deserun
            </p>
            <div className="social-media">
              <InstagramIcon />
              <LinkedInIcon />
              <PinterestIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
