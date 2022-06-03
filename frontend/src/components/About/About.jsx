import { Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

import "./About.css";

const About = ({ about }) => {
  const { user } = useSelector((state) => state.user);

  return (
    <div className="about">
      <div className="aboutContainer">
        <Typography>{user.about.quote}</Typography>
      </div>
      <div className="aboutContainer2">
        <div>
          <img src={user.about.avatar.url} alt="" className="aboutAvatar" />
          <Typography
            variant="h4"
            style={{ margin: "1vmax 0", color: "black" }}
          >
            {user.about.name}
          </Typography>
          <Typography>{user.about.title}</Typography>
          <Typography style={{ margin: "1vmax 0", textAlign: "center" }}>
            {user.about.subtitle}
          </Typography>
        </div>
        <div>
          <Typography
            style={{
              wordSpacing: "5px",
              lineHeight: "50px",
              letterSpacing: "5px",
              textAlign: "right",
            }}
          >
            {user.about.description}
          </Typography>
        </div>
      </div>
    </div>
    // <div className="about">
    //   hi
    //   <div className="aboutContainer">
    //      <Typography>{about.quote}</Typography>
    //   </div>
    //   <div className="aboutContainer2">
    //     <div>
    //       <img src={about.avatar.url} alt="Abhi" className="aboutAvatar" />

    //       <Typography
    //         variant="h4"
    //         style={{ margin: "1vmax 0", color: "black" }}
    //       >
    //         {about.name}
    //       </Typography>

    //       <Typography>{about.title}</Typography>

    //       <Typography style={{ margin: "1vmax 0", textAlign: "center" }}>
    //         {about.subtitle}
    //       </Typography>
    //     </div>

    //     <div>
    //       <Typography
    //         style={{
    //           wordSpacing: "5px",
    //           lineHeight: "50px",
    //           letterSpacing: "5px",
    //           textAlign: "right",
    //         }}
    //       >
    //         {about.description}
    //       </Typography>
    //     </div>
    //   </div>
    // </div>
  );
};

export default About;
