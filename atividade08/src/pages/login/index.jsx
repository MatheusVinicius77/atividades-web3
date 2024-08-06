import {
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CImage,
  CRow,
  CButton,
} from "@coreui/react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SideImager from "../../assets/image.png";
import "./index.css";
import { setUser } from "../../services/auth/user";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:3000/users');
      const data = await response.json();

      const user = data.find(
        (user) => (user.name === username || user.nome === username) && user.senha === password
      );

      console.log(user)
      if (user) {
        setUser({ id: user.id, nome: user.nome, email: user.email })
        navigate(`/userlist/${user.nome}`);
      } else {
        // Autenticação falhou
        setError("Nome de usuário ou senha incorretos.");
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      setError("Ocorreu um erro ao tentar fazer login. Por favor, tente novamente.");
    }
  };

  return (
    <CContainer fluid className="main-container">
      <CRow className="main-row">
        <CCol className="image-content" lg="7">
          <CImage fluid src={SideImager} />
        </CCol>
        <CCol className="form-container">
          <CForm className="d-grid gap-4 auth-form" style={{ margin: "0 auto" }}>
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
                id="username"
                placeholder="name"
                aria-describedby="exampleFormControlInputHelpInline"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
              <CButton color="primary" onClick={handleLogin}>Acessar</CButton>
            </CRow>
            <CRow>
              <CButton onClick={() => navigate('/cadastro')} color="danger">Cadastre-se</CButton>
            </CRow>
          </CForm>
        </CCol>
      </CRow>
    </CContainer>
  );
};

export { Login };
