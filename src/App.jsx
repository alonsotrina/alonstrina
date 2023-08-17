/* eslint-disable react/prop-types */
import { useContext } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthContext } from "./context/AuthContextProvider";
import { ProtectedRoute } from "./components/Route/Index";
import { CharacterContextProvider } from './context/CharacterContext'; // Importa el proveedor del contexto

import Login from "./module/login/index";
import Register from "./module/Register/index";
import Dashboard from './module/Dashboard/Index';
import Character from './module/Character/index';
import CharacterDetail from './module/CharacterDetail/index';
import Location from './module/Location/index';
import LocationDetail from './module/LocationDetail/index';
import Episode from './module/Episode/index';
import EpisodeDetail from './module/EpisodeDetail/Index';
import NotFound from './module/NotFound/index'
import DashboardContent from './components/DashboardContent/Index';


function App() {
  const { Auth } = useContext(AuthContext);

  return (
    <BrowserRouter>
    <CharacterContextProvider>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<ProtectedRoute isAllowed={Auth} />}>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<DashboardContent />} />
            <Route path="character" element={<Character />} />
            <Route path="character/:id" element={<CharacterDetail />} />
            <Route path="location" element={<Location />} />
            <Route path="location/:id" element={<LocationDetail />} />
            <Route path="episode" element={<Episode />} />
            <Route path="episode/:id" element={<EpisodeDetail />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      </CharacterContextProvider>
    </BrowserRouter>
  );
}

export default App;