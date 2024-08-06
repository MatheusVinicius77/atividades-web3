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

import React, { useState } from "react";
import SideImager from "../../assets/image.png";
import "./index.css";
import { CadastrarUsuario } from "../../services/auth";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../services/auth/user";

const Cadastro = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      nome: nome,
      email: email,
      senha: senha,
      phone: phone,
      contacts: []
    };
    const res = await CadastrarUsuario(body);
    if (res.status === 201) {
      setUser({ nome: nome, email: email });
      navigate(`/`);
      console.log("Cadastrado com sucesso");
    } else {
      console.log("Erro ao cadastrar");
    }
  };

  return (
    <CContainer fluid className="main-container">
      <CRow className="main-row">
        <CCol className="image-content" lg="7">
          <CImage fluid src={SideImager} />
        </CCol>
        <CCol className="form-container">
          <CForm onSubmit={handleSubmit} className="d-grid gap-4 auth-form" style={{ margin: "0 auto" }}>
            <CRow>
              <h1>Cadastro</h1>
            </CRow>

            <CRow>
            <CFormLabel htmlFor="Nome" style={{ textAlign: 'start', display: 'block' }}>Nome</CFormLabel>
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
            <CFormLabel htmlFor="phone" style={{ textAlign: 'start', display: 'block' }}>Email</CFormLabel>

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
              <CFormLabel htmlFor="phone" style={{ textAlign: 'start', display: 'block' }}>Senha</CFormLabel>
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
              <CButton type="submit" color="danger" role="button">
                Cadastrar
              </CButton>
            </CRow>
            <CRow className="d-grid gap-3 mt-4 ">
              <CButton onClick={() => navigate('/')} type="submit" color="primary" role="button">
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
