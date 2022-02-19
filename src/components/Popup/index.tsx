import Modal from "react-modal";
import useDevelopers from "../../hooks/useDevelopers";
import { FormDev } from "../FormDev";

import "./styles.css";

interface Developer {
  name: string;
  avatar: string;
  cargo: string;
  github: string;
  linkedin: string;
};

interface PopupProps {
  modalIsOpen: boolean;
  onCloseModal: () => void;
  typeForm: string;
  developer?: Developer | any;
};

const customStyles = {
  overlay: {
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(52, 51, 51, 0.7)",
  },
  content: {
    width: "463px",
    height: "650px",
    background: "#343333",
    borderRadius: '10px',
    border: "none",
    margin: "3rem auto"
  }, 
};

// Para informar qual o elemento raiz que o Modal deve ser inserido
Modal.setAppElement("#root");

export function Popup({modalIsOpen, onCloseModal, typeForm, developer}: PopupProps) {
  const { deleteDeveloper } = useDevelopers();

  function removeDeveloper() {
    deleteDeveloper(developer);
    onCloseModal();
  }

  return (
    <Modal
        isOpen={modalIsOpen}
        onRequestClose={onCloseModal}
        style={customStyles}
        contentLabel="Adicionar Desenvolvedor | Ballerini Devs"
        className={typeForm === "DELETE" ? "modalMainProps" : ""}
      >
        {typeForm === "POST" || typeForm === "UPDATE" ? 
          typeForm === "UPDATE" ?
          <FormDev closeModal={onCloseModal} typeForm={typeForm} dev={developer}/>
          :
          <FormDev closeModal={onCloseModal} typeForm={typeForm}/>
        :
        <div className="deletePopup">
          <h1>Deletar Desenvolvedor</h1>
          <p>Tem certeza que deseja deletar este desenvolvedor?</p>
          <div className="deleteButtonsPopup">
            <button onClick={onCloseModal}>Cancelar</button>
            <button style={{background: "#F42626"}} onClick={() => removeDeveloper()}>Deletar</button> 
          </div>
        </div>
        }
      </Modal>
    );
}