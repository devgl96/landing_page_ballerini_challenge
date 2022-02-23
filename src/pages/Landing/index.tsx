import React from 'react';
import './styles.css';
import { Header } from '../../components/Header';

import { useNavigate } from "react-router-dom";

export function Landing() {
  const navigate = useNavigate();

  function nextPage() {
    navigate("/landing_page_ballerini_challenge/tabledevs");
  }
  return (
    <div className="containerMain">
      <Header isTableDev={false} />
      
      <div className="contentMain">
        <div className="left">
          <h2>O maior banco de devs do Brasil</h2>
          <p>Nao importa se front ou back end,  fazer networking e muito importante. Faça parte da maior comunidade de desenvolvedores brasileiros.</p>
          <div className="buttonArea">
            <button onClick={nextPage}>Entre agora</button>
            <hr />
          </div>
        </div>
        <div className="right">
          <img src="images/Programador_main.svg" alt="Programador feliz sentado no puffy" />
        </div>
      </div>
    </div>
  );
};
