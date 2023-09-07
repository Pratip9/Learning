import * as React from "react";
import Box from "@mui/material/Box";
import { Grid } from "@material-ui/core";
import AOS from "aos";
import "aos/dist/aos.css";
import GooglePlay from "../../Image/Footer/google-play-black.svg"
import '../Home/PlayApp.css';
export default function MediaControlCard() {
    React.useEffect(() => {
        AOS.init({ duration: 2000 });
      }, []);
  return (
    <Grid container spacing={2} style={{ width: "100%" }}>
         <Grid item xs={12} md={4}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
        {/* <CardMedia
            component="img"
            sx={{ width: 500, height: 500 }}
            image={appp}
          /> */}
        <img src={require("../../Image/appp.png")} alt="App" data-aos="fade-right"/></Box>
      </Grid>
      <Grid item xs={12} md={8}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
         <div className="educate">
         <h3 className="app_heading" data-aos="fade-left">Educate yourself</h3>
        
          <h5 className="app_subheading" data-aos="fade-left">Books and resources for better learning</h5>
          <p className="app_desc" data-aos="fade-left">
            Learning Needs is a pioneer organization dedicated and committed to
            bring out the best in you. We know all you need is an opportunity to
            prove yourself. However, without the right skills your possibilities
            are severely limited. If your life is not presently what you want it
            to be, you must consider education as a solution. You can change
            your life today! Fast, simple & Delightful.
          </p>
          <div className="app_links1">
                  <span className="googlePlayStore_link1">
                    <a href="/">
                      <img src={GooglePlay} alt="play Store svg" data-aos="fade-left"/>
                    </a>
                  </span>
                  
                </div>
         </div>
         
        </Box>
      </Grid>
     
    </Grid>
  );
}

// {/* <CardMedia
//           component="img"
//           sx={{ width: 500, height: 500 }}
//           image={appp}
//           alt="app"
//         /> */}
