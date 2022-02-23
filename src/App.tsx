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
          <Route path="/landing_page_ballerini_challenge" element={<Landing />} />
          <Route path="/landing_page_ballerini_challenge/tabledevs" element={<TableDevs />} />
        </Routes>
      </DevelopersProvider>
    </>
  );
}

export default App;
