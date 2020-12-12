import React from "react";
import web from "../../src/images/hero-img.png";
import Common from "./Common";


function About () {
  return (
    <>
      <Common
        name="Thank you for showing interest in "
        imgsrc={web}
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
};

export default About;
