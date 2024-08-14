import {
  CButton,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CFormLabel,
  CImage,
  CRow,
} from "@coreui/react";

import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SideImager from "../../assets/image.png";
import "../../firebase";
import { setUser } from "../../services/auth/user";
import "./index.css";
const Cadastro = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    console.log(email, senha);
    const auth = getAuth();
    e.preventDefault();

    try {
      const authRes = await createUserWithEmailAndPassword(auth, email, senha);
      const user = authRes.user;
      setUser({ nome: nome, email: user.email });
      if (authRes) navigate("/home");
    } catch (error) {
      console.log(error);
    }
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
              <h1>Cadastro</h1>
            </CRow>

            <CRow>
              <CFormLabel
                htmlFor="Nome"
                style={{ textAlign: "start", display: "block" }}
              >
                Nome
              </CFormLabel>
              <CFormInput
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                id="exampleFormControlInput1"
                placeholder="Nome"
                aria-describedby="exampleFormControlInputHelpInline"
              />
            </CRow>
            <CRow>
              <CFormLabel
                htmlFor="phone"
                style={{ textAlign: "start", display: "block" }}
              >
                Email
              </CFormLabel>

              <CFormInput
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="exampleFormControlInput1"
                placeholder="name@example.com"
                aria-describedby="exampleFormControlInputHelpInline"
              />
            </CRow>
            <CRow>
              <CFormLabel
                htmlFor="phone"
                style={{ textAlign: "start", display: "block" }}
              >
                Senha
              </CFormLabel>
              <CFormInput
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                id="exampleFormControlInput1"
                placeholder="Senha"
                aria-describedby="exampleFormControlInputHelpInline"
              />
            </CRow>
            <CRow className="d-grid gap-3 mt-4 ">
              <CButton
                type="submit"
                color="danger"
                onClick={handleSubmit}
                role="button"
              >
                Cadastrar
              </CButton>
            </CRow>
            <CRow className="d-grid gap-3 mt-4 ">
              <CButton type="submit" color="primary" role="button">
                Voltar
              </CButton>
            </CRow>
          </CForm>
        </CCol>
      </CRow>
    </CContainer>
  );
};

export { Cadastro };
