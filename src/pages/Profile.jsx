import React from "react";
import TwoSectionGrid from "../components/profile/sectionContent";
import Footer from "../components/primary/Footer";

export default function Profile() {
 
  return (
    <>
      <div className=" relative"
      // style={{ height: "calc(100vh - 60px)" }}
      >
        
         <TwoSectionGrid/>
      </div>
      {/* <Footer/> */}
    </>
  );
}
