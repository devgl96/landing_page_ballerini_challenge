import React from 'react';
import './App.css';
import { Header } from "./components/Header";

function App() {
  return (
    <div className="containerMain">
      <Header />
      
      <div className="contentMain">
        <div className="left">
          <h2>O maior banco de devs do Brasil</h2>
          <p>Nao importa se front ou back end,  fazer networking e muito importante. Faça parte da maior comunidade de desenvolvedores brasileiros.</p>
          <div className="buttonArea">
            <button>Entre agora</button>
            <hr />
          </div>
        </div>
        <div className="right">
          <img src="/images/Programador_main.svg" alt="Programador feliz sentado no puffy" />
        </div>
      </div>
    </div>
  );
}

export default App;
