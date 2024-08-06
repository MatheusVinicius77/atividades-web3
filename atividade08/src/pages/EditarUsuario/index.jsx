import {
    CButton,
    CCol,
    CContainer,
    CForm,
    CFormInput,
    CImage,
    CRow,
} from "@coreui/react";

import React, { useEffect, useState } from "react";
import SideImager from "../../assets/image.png";
import "./index.css";
import { useNavigate, useParams } from "react-router-dom";
import { getUser } from "../../services/auth/user"; 

const EditarUsuario = () => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [nome, setNome] = useState("");
    const [registeredAt, setRegisteredAt] = useState("");

    const params = useParams();
    const navigate = useNavigate();
    const userId = params.id;
    const [userOwner, setUserOwner] = useState(getUser());

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(`http://localhost:3000/users/${userId}`);
                const user = await response.json();

                const responseTwo = await fetch(`http://localhost:3000/users/${userOwner.id}`);
                const owner = await responseTwo.json();
                setUserOwner(owner);
                
                if (user) {
                    setNome(user.nome || user.name);
                    setEmail(user.email);
                    setSenha(user.senha);
                    setRegisteredAt(user.registeredAt);
                }
            } catch (error) {
                console.error("Erro ao buscar usuário:", error);
            }
        };

        fetchUser();
    }, [userId, userOwner.id]);

    const handleUpdate = async () => {
        const updatedContact = {
            nome,
            email,
            senha,
            registeredAt,
        };

        try {
            const responseTwo = await fetch(`http://localhost:3000/users/${userOwner.id}`);
            const owner = await responseTwo.json();

            if (owner) {
                const updatedContacts = owner.contacts.map(c => 
                    c.email === email ? updatedContact : c
                );
                const updatedUser = { ...owner, contacts: updatedContacts };

                const updateResponse = await fetch(`http://localhost:3000/users/${userOwner.id}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(updatedUser),
                });

                if (updateResponse.ok) {
                    navigate(`/userlist/${userOwner.id}`);
                    console.log("Contato atualizado com sucesso");
                } else {
                    console.log("Erro ao atualizar contato");
                }
            } else {
                console.log("Usuário não encontrado");
            }
        } catch (error) {
            console.error("Erro ao atualizar contato:", error);
        }
    };

    const handleDelete = async () => {
        try {
            const responseTwo = await fetch(`http://localhost:3000/users/${userOwner.id}`);
            const owner = await responseTwo.json();

            if (owner) {
                const updatedContacts = owner.contacts.filter(c => c.email !== email);
                const updatedUser = { ...owner, contacts: updatedContacts };

                const deleteResponse = await fetch(`http://localhost:3000/users/${userOwner.id}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(updatedUser),
                });

                if (deleteResponse.ok) {
                    navigate(`/userlist/${userOwner.id}`);
                    console.log("Contato excluído com sucesso");
                } else {
                    console.log("Erro ao excluir contato");
                }
            } else {
                console.log("Usuário não encontrado");
            }
        } catch (error) {
            console.error("Erro ao excluir contato:", error);
        }
    };

    return (
        <CContainer fluid className="main-container">
            <CRow className="main-row">
                <CCol lg="6" className="image-container">
                    <CImage fluid src={SideImager} className="image-content" />
                </CCol>
                <CCol>
                    <CForm onSubmit={(e) => { e.preventDefault(); handleUpdate(); }} style={{ height: "100%" }}>
                        <CContainer
                            className="d-grid gap-4 text-center "
                            style={{ height: "100%" }}
                        >
                            <CRow>
                                <h1>Editar Contato</h1>
                            </CRow>
                            <CRow>
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
                                <CFormInput
                                    type="password"
                                    value={senha}
                                    onChange={(e) => setSenha(e.target.value)}
                                    id="exampleFormControlInput1"
                                    placeholder="Senha"
                                    aria-describedby="exampleFormControlInputHelpInline"
                                />
                            </CRow>
                            <CRow className="d-grid gap-3 mt-4">
                                <CButton color="primary" onClick={handleUpdate} role="button">
                                    Alterar
                                </CButton>
                                <CButton color="danger" onClick={handleDelete} role="button">
                                    Excluir
                                </CButton>
                            </CRow>
                        </CContainer>
                    </CForm>
                </CCol>
            </CRow>
        </CContainer>
    );
};

export { EditarUsuario };
