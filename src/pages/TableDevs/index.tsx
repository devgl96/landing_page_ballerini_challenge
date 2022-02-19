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

  const [rightMoveCard, setRightMoveCard] = useState(3);
  const [leftMoveCard, setLeftMoveCard] = useState(0);

  const lengthDevelopers = developers.length;

  function leftDevCard() {
    console.log("LeftDevCard");
    if(leftMoveCard > 0) {
      let nowLeftMoveCard = leftMoveCard - 1;
      let nowRightMoveCard = rightMoveCard - 1;

      setRightMoveCard(nowRightMoveCard);
      setLeftMoveCard(nowLeftMoveCard);
    }
  }

  function rightDevCard() {
    console.log("RightDevCard");
    if(rightMoveCard < lengthDevelopers) {
      let nowLeftMoveCard = leftMoveCard + 1;
      let nowRightMoveCard = rightMoveCard + 1;

      setLeftMoveCard(nowLeftMoveCard);
      setRightMoveCard(nowRightMoveCard);
    }
  }
  
  return(
    <div className="containerMain">
      <Header isTableDev={true} />
      <div className="contentMainDev">
        <img 
          src="/images/botaoLeft.svg" 
          alt="right button to change" 
          style={(developers.length > 3 && leftMoveCard > 0) ? {
              cursor: "pointer",
              filter: "brightness(1)"
            }:{
              cursor: "not-allowed",
              filter: "brightness(0.3)"
            }
          }
          onClick={leftDevCard}
        />
        <div className="sectionDev">
          {developers.length > 0 ? 
            <>
                {developers.map((developer, index) => {
                  // if(developer.id >= leftMoveCard + 1 && developer.id < rightMoveCard + 1) {
                  console.log("Value index: ", index);
                  if(index >= leftMoveCard && index < rightMoveCard) {
                    console.log("Rendering Developer...");
                    return(
                      <DevCard key={developer.id} developer={developer}/>
                    );
                  }
                })}
            </>
            :
            <h1>Sem desenvolvedores no momento!</h1>
          }
          </div>
          <img 
            src="/images/botaoRight.svg"
             alt="left button to change" 
             style={(developers.length > 3 && rightMoveCard < lengthDevelopers) ? {
                cursor: "pointer",
                filter: "brightness(1)"
              }:{
                cursor: "not-allowed",
                filter: "brightness(0.3)"
              }
            }
            onClick={rightDevCard}
            />
      </div>
    </div>
  );
}