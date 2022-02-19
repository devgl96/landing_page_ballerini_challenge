import { useEffect, useState } from "react";
import useDevelopers from "../../hooks/useDevelopers";
import "./styles.css";

interface Developer {
  id: number;
  name: string;
  avatar: string;
  cargo: string;
  github: string;
  linkedin: string;
};

interface FormDevProps {
  closeModal: () => void;
  typeForm: string;
  dev?: Developer;
};

export function FormDev({closeModal, typeForm, dev}: FormDevProps) {
  const { createDeveloper, updateDeveloper, developers } = useDevelopers();

  const [name, setName] = useState(dev === undefined ? "" : dev.name);
  const [avatar, setAvatar] = useState(dev === undefined ? "" : dev.avatar);
  const [cargo, setCargo] = useState(dev === undefined ? "" : dev.cargo);
  const [github, setGithub] = useState(dev === undefined ? "" : dev.github);
  const [linkedin, setLinkedin] = useState(dev === undefined ? "" : dev.linkedin);

  function addDeveloper() {
    const newDeveloper: Developer = {
      id: developers[developers.length - 1].id + 1,
      name, 
      avatar, 
      cargo, 
      github, 
      linkedin
    };

    createDeveloper(newDeveloper);
    closeModal();
  }

  function changeDeveloper() {
    const newDeveloper: Developer = {
      id: (dev?.id !== undefined ? dev.id : 0),
      name, 
      avatar, 
      cargo, 
      github, 
      linkedin
    };

    updateDeveloper(newDeveloper);
    closeModal();
  }

  return (
    <div className="containerFormDev">
      {typeForm === "POST" ? <h1>Adicionar Desenvolvedor</h1> : <h1>Editar Desenvolvedor</h1>}
      <form className="formAddDev">
          <label htmlFor="#">Nome:</label>
          <input type="text" onChange={(e) => setName(e.target.value)} value={name}/>
          <label htmlFor="#">Avatar:</label>
          <input type="text" onChange={(e) => setAvatar(e.target.value)} value={avatar}/>
          <label htmlFor="#">Cargo:</label>
          <input type="text" onChange={(e) => setCargo(e.target.value)} value={cargo}/>
          <label htmlFor="#">GitHub:</label>
          <input type="text" onChange={(e) => setGithub(e.target.value)} value={github}/>
          <label htmlFor="#">LinkedIn:</label>
          <input type="text" onChange={(e) => setLinkedin(e.target.value)} value={linkedin}/>
        </form>
        <div className="buttonAreaFormDev">
          <button onClick={closeModal}>Cancelar</button>
          {typeForm === "POST" 
            ? 
            <button style={{background: "#27AE60"}} onClick={addDeveloper}>Adicionar</button>
            :
            <button style={{background: "#DBB801"}} onClick={changeDeveloper}>Editar</button> 
          }
        </div>
    </div>
  )
}