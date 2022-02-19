import { useState } from "react";
import { DevCard } from "../../components/DevCard";
import { Header } from "../../components/Header";
import useDevelopers from "../../hooks/useDevelopers";

import "./styles.css";

interface DevProps {
  name: string;
  avatar: string;
  cargo: string;
  github: string;
  linkedin: string;
}

export function TableDevs() {
  const { developers } = useDevelopers();
  
  return(
    <div className="containerMain">
      <Header isTableDev={true} />
      <div className="contentMainDev">
        <img src="/images/botaoLeft.svg" alt="right button to change" />
        <div className="sectionDev">
          {developers.length > 0 ? 
            <>
                {developers.map((developer) => (
                  <DevCard key={developer.id} developer={developer}/>
                  ))}
            </>
            :
            <h1>Sem desenvolvedores no momento!</h1>
          }
          </div>
          <img src="/images/botaoRight.svg" alt="left button to change" />
      </div>
    </div>
  );
}