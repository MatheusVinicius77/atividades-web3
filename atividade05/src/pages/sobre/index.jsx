import { CCol, CContainer, CRow } from "@coreui/react";
import React from "react";
// import HeroLogo from "../../assets/hero-image.png";
import HeroLogo from "../../assets/hero-image2.png";

import "./index.css";
const SobreNos = () => {
  return (
    <main>
      <div className="hero-container">
        <CContainer>
          <CRow>
            <h1>Pratos da Estação</h1>
          </CRow>
          <CRow>
            <CCol className="">
              <div className="logo-container ">
                <img className="hero-logo" src={HeroLogo} alt="" />
              </div>
            </CCol>
          </CRow>
        </CContainer>
      </div>
    </main>
  );
};

export { SobreNos };
