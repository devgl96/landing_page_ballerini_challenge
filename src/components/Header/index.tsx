import { useState } from "react";
import { Link } from "react-router-dom";
import useDevelopers from "../../hooks/useDevelopers";

import { Popup } from "../Popup";

import "./styles.css";

interface HeaderProps {
  isTableDev: boolean;
}

export function Header({isTableDev}: HeaderProps) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [searchBar, setSearchBar] = useState("");
  const { searchDeveloper } = useDevelopers();

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="container">
      <div className="socialMedias">
        <a href="https://www.linkedin.com/company/comunidadeballerini/" target="_blank" rel="noreferrer"><img src="images/linkedin.svg" alt="Linkedin icon" /></a>
        <a href="https://www.facebook.com/rafaella.balleriniribeirogomes" target="_blank" rel="noreferrer"><img src="images/facebook.svg" alt="Facebook icon" /></a>
        <a href="https://discord.com/invite/wagxzStdcR" target="_blank" rel="noreferrer"><img src="images/discord.svg" alt="Discord icon" /></a>
      </div>
      <div className="logo">
        <Link to="/landing_page_ballerini_challenge/"><img src="images/Logo.svg" alt="Logo ballerini devs" /></Link>
      </div>
      <div className="searchAddSection">
      {isTableDev && 
        <>
          <div className="inputSearch">
            <img src="images/feather_search.svg" alt="icon feather search" />
            <input 
              type="text" 
              placeholder="Buscar"
              onChange={(e) => searchDeveloper(e.target.value)}
            />
          </div>
          <button onClick={openModal}>Adicionar Desenvolvedor</button>
        </>
      }
      </div>

      <Popup modalIsOpen={modalIsOpen} onCloseModal={closeModal} typeForm="POST" />
    </div>
  );
}