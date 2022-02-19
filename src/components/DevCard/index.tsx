import { useState } from "react";
import { Popup } from "../Popup";

import "./styles.css";

interface Developer {
  id: number;
  name: string;
  avatar: string;
  cargo: string;
  github: string;
  linkedin: string;
};

interface DevProps {
  developer: Developer;
}

export function DevCard({ developer }: DevProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [typeForm, setIsTypeForm] = useState("");

  function openModal(typeModalForm: string) {
    setIsTypeForm(typeModalForm);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="containerDevCard">
      <div className="contentDevCard">
        <div className="imageDevCard">
          <img src={developer.avatar} alt="Random user" />
        </div>
        <div className="lineDevCard">
        </div>
        <div className="infoDevCard">
          <h1>{developer.name}</h1>
          <p>{developer.cargo}</p>
        </div>
        <div className="contactDevCard">
          <img src="/images/icone_github.svg" alt="Github Icon" />
          <img src="/images/icone_linkedin.svg" alt="Linkedin Icon" />
          <button>Ver mais</button>
        </div>
      </div>
      <div className="buttonSectionDevCard">
        <button onClick={() => openModal("UPDATE")}>Editar</button>
        <button onClick={() => openModal("DELETE")}>Deletar</button>
      </div>
      <Popup modalIsOpen={isOpen} onCloseModal={closeModal} typeForm={typeForm} developer={developer}/>
    </div>
  );
}