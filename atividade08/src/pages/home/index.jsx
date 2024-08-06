import { CCol, CContainer, CImage, CRow } from "@coreui/react";
import React from "react";
import SideImager from "../../assets/image.webp";
import Users from "../../assets/users.png";
import Plus from "../../assets/icons8-plus.svg";
import "./index.css";
const Home = () => {
  return (
    <CContainer fluid className="main-container">
      <CRow className="main-row">
        <CCol xs={{ cols: "auto" }}>
          <CImage fluid src={SideImager} style={{ height: "100%" }} />
        </CCol>
        <CCol>
          <CRow>
            <CCol>
              <CImage src={Users} style={{ height: "20px", width: "40px" }} />
            </CCol>
            <CCol>
              <p>User</p>
            </CCol>

            <CCol>

            <CImage src={Plus} style={{ height: "20px", width: "40px" }} />

            </CCol>
          </CRow>
        </CCol>
      </CRow>
    </CContainer>
  );
};

export { Home };
