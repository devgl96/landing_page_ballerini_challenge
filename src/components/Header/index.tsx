import "./styles.css";

export function Header() {
  const pageTable = false; 

  return (
    <div className="container">
      <div className="socialMedias">
        <img src="/images/linkedin.svg" alt="Linkedin icon" />
        <img src="/images/facebook.svg" alt="Facebook icon" />
        <img src="/images/discord.svg" alt="Discord icon" />
      </div>
      <div className="logo">
        <img src="/images/Logo.svg" alt="Logo ballerini devs" />
      </div>
      <div className="searchAddSection">
      {pageTable && 
        <>
          <div className="inputSearch">
            <img src="/images/feather_search.svg" alt="icon feather search" />
            <input 
              type="text" 
              placeholder="Buscar"
            />
          </div>
          <button>Adicionar Desenvolvedor</button>
        </>
      }
      </div>
    </div>
  );
}