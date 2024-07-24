import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const Link = ({ page }) => {
  const navigate = useNavigate();
  const handlePage = (page) => {
    switch (page) {
      case "Cardápio":
        navigate("/cardapio");
        break;
      case " Pratos da estação":
        navigate("/pratos");
        break;
      case "O espaço":
        navigate("/espaco");
        break;
      case "FAQ de delivery":
        navigate("/faq");
        break;
      case "Sobre nós":
        navigate("/sobre");
        break;
      
    }
  };

  return <button onClick={() => handlePage(page)}>{page}</button>;
};

export { Link };
