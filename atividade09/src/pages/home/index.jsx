import { CButton, CCol, CContainer, CRow } from "@coreui/react";
import { getAuth, signOut } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUser, setUser } from "../../services/auth/user";
import "./index.css";
const Home = () => {
  const [authUser, setAuthUser] = useState(getUser());
  const navigate = useNavigate();
  const auth = getAuth();
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUser(null);
        setAuthUser(null);
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <CContainer fluid className="main-container">
      <CRow className="main-row">
        <CCol>
          <CRow>
            <CCol>
              <p>Olá, {authUser.nome || authUser.email} </p>
            </CCol>
          </CRow>
          <CRow>
            <CButton onClick={handleLogout} color="danger">
              Deslogar
            </CButton>
          </CRow>
        </CCol>
      </CRow>
    </CContainer>
  );
};

export { Home };
