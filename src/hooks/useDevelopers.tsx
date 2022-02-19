import { createContext, ReactNode, useContext, useState } from "react";

interface Developer {
  id: number;
  name: string;
  avatar: string;
  cargo: string;
  github: string;
  linkedin: string;
};

interface DeveloperContextData {
  developers: Developer[];
  createDeveloper: (developer: Developer) => void;
  updateDeveloper: (developer: Developer) => void;
  deleteDeveloper: (developer: Developer) => void;
};

interface DeveloperProviderProps {
  children: ReactNode;
};

const DeveloperContext = createContext<DeveloperContextData>({} as DeveloperContextData);

export function DevelopersProvider({children}: DeveloperProviderProps) {
  const [developers, setDevelopers] = useState<Developer[]>([]);

  function createDeveloper(developer: Developer) {
    const newDevelopers = [...developers, developer];

    setDevelopers(newDevelopers);
  }

  function updateDeveloper(developer: Developer) {
    const updateDeveloper = developers.filter(dev => dev.id !== developer.id);

    const newDevelopers = [...updateDeveloper, developer];

    setDevelopers(newDevelopers);
  }

  function deleteDeveloper(developer: Developer) {
    const newDevelopers = developers.filter(dev => dev.id !== developer.id);

    setDevelopers(newDevelopers);
  } 

  return(
    <DeveloperContext.Provider value={{
      developers, 
      createDeveloper, 
      updateDeveloper, 
      deleteDeveloper
    }}>
      {children}
    </DeveloperContext.Provider>
  );
}

export default function useDevelopers() {
  const context = useContext(DeveloperContext);
  return context;
}