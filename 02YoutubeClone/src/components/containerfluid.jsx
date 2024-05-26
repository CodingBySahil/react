import React from "react";
import Navbar from "./Navbar";
import ButtonLinksVedioSection from "./ButtonLinksVedioSection";

function ContainerFluid() {
  return (
    <div className={"container-fluid"}>
      <Navbar />
      <ButtonLinksVedioSection/>
    </div>
  );
}

export default ContainerFluid;
