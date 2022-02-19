import React from 'react';
import './App.css';

import { Routes, Route} from "react-router-dom";

import { Landing } from './pages/Landing';
import { TableDevs } from './pages/TableDevs';
import { DevelopersProvider } from './hooks/useDevelopers';

function App() {
  return (
    <>
      <DevelopersProvider>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="tabledevs" element={<TableDevs />} />
        </Routes>
      </DevelopersProvider>
    </>
  );
}

export default App;
