import {
    CButton,
    CCol,
    CContainer,
    CForm,
    CFormInput,
    CImage,
    CRow,
} from "@coreui/react";

import React, { useState } from "react";
import SideImager from "../../assets/image.png";
import "./index.css";
import { useNavigate, useParams } from "react-router-dom";

const CadastrarContato = () => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [nome, setNome] = useState("");
    const [error, setError] = useState("");

    const params = useParams();
    const navigate = useNavigate();
    const userID = params.id;

    const handleSubmit = async () => {

        const response = await fetch(`http://localhost:3000/users`);
        const users = await response.json();

        const formatDate = (date) => {
            return new Date(date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            });
        };


        const realUser = users.find(u => u.nome === nome);
        if (!realUser) {
            console.log("Usuário não encontrado");
            return;
        }

        const newContact = {
            nome: realUser.nome || realUser.name,
            email: realUser.email,
            senha: realUser.senha,
            registeredAt: formatDate(new Date()),
            id: realUser.id
        };
        try {


            const response = await fetch(`http://localhost:3000/users/${userID}`);
            const user = await response.json();

            if (user) {
                const updatedContacts = Array.isArray(user.contacts) ? [...user.contacts, newContact] : [newContact];
                const updatedUser = { ...user, contacts: updatedContacts };

                const updateResponse = await fetch(`http://localhost:3000/users/${userID}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(updatedUser),
                });

                if (updateResponse.ok) {
                    navigate(`/userlist/${userID}`);
                    console.log("Contato cadastrado com sucesso");
                } else {
                    console.log("Erro ao cadastrar contato");
                }
            } else {
                console.log("Usuário não encontrado");
            }
        } catch (error) {
            console.error("Erro ao cadastrar contato:", error);
        }
    };

    return (
        <CContainer fluid className="main-container">
            <CRow className="main-row">
                <CCol className="image-container" xs={{ cols: "auto" }}>
                    <CImage className="image-content" fluid src={SideImager} />
                </CCol>
                <CCol className="mt-">
                    <CForm onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} style={{ height: "100%" }}>
                        <CContainer
                            className="d-grid gap-4 text-center "
                            style={{ height: "100%" }}
                        >
                            <CRow>
                                <h1>Cadastro</h1>
                            </CRow>
                            <CRow>
                                <CFormInput
                                    type="text"
                                    label="Nome"
                                    onChange={(e) => setNome(e.target.value)}
                                    id="exampleFormControlInput1"
                                    placeholder="Nome"
                                    aria-describedby="exampleFormControlInputHelpInline"
                                />
                            </CRow>
                            <CRow>
                                <CFormInput
                                    type="email"
                                    label="Email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    id="exampleFormControlInput1"
                                    placeholder="name@example.com"
                                    aria-describedby="exampleFormControlInputHelpInline"
                                />
                            </CRow>
                            <CRow>
                                <CFormInput
                                    onChange={(e) => setSenha(e.target.value)}
                                    type="text"
                                    label="Telefone"
                                    id="exampleFormControlInput1"
                                    placeholder="telefone"
                                    aria-describedby="exampleFormControlInputHelpInline"
                                />
                            </CRow>
                            <CRow className="d-grid gap-3 mt-4">
                                <CButton type="submit" color="danger" role="button">
                                    Cadastrar
                                </CButton>
                                <CButton onClick={() => navigate('/')} color="primary" role="button">
                                    Voltar
                                </CButton>
                            </CRow>
                        </CContainer>
                    </CForm>
                </CCol>
            </CRow>
        </CContainer>
    );
};

export { CadastrarContato };
