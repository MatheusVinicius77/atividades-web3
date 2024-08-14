import {
  CButton,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CImage,
  CRow,
} from "@coreui/react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SideImager from "../../assets/image.png";
import { setUser } from "../../services/auth/user";
import "./index.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        console.log(userCredential);
        const user = userCredential.user;
        setUser({ email: user.email });
        navigate("/home");
        // ...
      })
      .catch((error) => {
        console.log("senha incorreta");
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <CContainer fluid className="main-container">
      <CRow className="main-row">
        <CCol className="image-content" lg="7">
          <CImage fluid src={SideImager} />
        </CCol>
        <CCol className="form-container">
          <CForm
            className="d-grid gap-4 auth-form"
            style={{ margin: "0 auto" }}
          >
            <CRow>
              <h1>Login</h1>
            </CRow>
            {error && (
              <CRow>
                <p style={{ color: "red" }}>{error}</p>
              </CRow>
            )}
            <CRow>
              <CFormInput
                type="text"
                id="email"
                placeholder="email"
                aria-describedby="exampleFormControlInputHelpInline"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </CRow>
            <CRow>
              <CFormInput
                type="password"
                id="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </CRow>
            <CRow className="d-grid gap-3">
              <CButton color="primary" onClick={handleLogin}>
                Acessar
              </CButton>
            </CRow>
            <CRow>
              <CButton onClick={() => navigate("/cadastro")} color="danger">
                Cadastre-se
              </CButton>
            </CRow>
          </CForm>
        </CCol>
      </CRow>
    </CContainer>
  );
};

export { Login };
