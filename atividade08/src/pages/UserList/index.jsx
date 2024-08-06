import {
    CCol,
    CContainer,
    CImage,
    CRow,
    CListGroup,
    CListGroupItem,
    CBadge
} from "@coreui/react";
import React, { useEffect, useState } from "react";
import { FaUserCircle, FaPlus } from 'react-icons/fa'; 
import SideImager from "../../assets/image.png"; 
import UsersIcon from "../../assets/users.png";
import "./index.css";
import { getUser } from "../../services/auth/user";
import { useNavigate } from "react-router-dom";

const UserList = () => {
    const [contacts, setContacts] = useState([]);
    const navigate = useNavigate()
    const user = getUser();
    console.log(user)
    useEffect(() => {
        const fetchUserByName = async (id) => {
            try {
                const response = await fetch(`http://localhost:3000/users?id=${id}`);
                const data = await response.json();
                if (data.length > 0) {
                    const foundUser = data[0].contacts;
                    setContacts(foundUser);
                }

            } catch (error) {
                console.error("Error fetching user:", error);
            }

        };

        fetchUserByName(user.id);
    }, []);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <CContainer fluid className="main-container">
            <CRow className="main-row">
                <CCol lg="6" className="image-container">
                    <CImage fluid src={SideImager} className="image-content" />
                </CCol>
                <CCol className="user-list-container d-grid">
                    <CRow className="table-head">
                        <CCol xs="auto">
                            <CImage src={UsersIcon} width={30} height={30} />
                        </CCol>
                        <CCol>
                            <h1>{user.nome}</h1>
                        </CCol>
                        <CCol
                        className="point-click"
                         onClick={() => navigate(`/cadastrarcontato/${user.id}`)}
                         xs="auto">
                            <FaPlus size={15} />
                        </CCol>
                    </CRow>
                    <CListGroup className="user-group">
                        {contacts.map((user, index) => (
                            <CListGroupItem 
                            onClick={() => navigate(`/editarusuario/${user.id}`)}
                            key={index} 
                            className="d-flex justify-content-between align-items-center point-click">
                                <CCol lg="1">
                                    <FaUserCircle size={30} />
                                </CCol>
                                <CCol className="">
                                    <CRow>
                                        <strong style={{ fontSize: "2.4rem" }}>{user.nome}</strong>

                                    </CRow>
                                    <CRow>
                                        <p style={{ fontSize: "1.8rem" }} className="small text-muted">
                                            {user.status} | Registered: {user.registeredAt}
                                        </p>
                                    </CRow>
                                </CCol>


                            </CListGroupItem>
                        ))}
                    </CListGroup>
                </CCol>
            </CRow>
        </CContainer>
    );
};

export { UserList };
