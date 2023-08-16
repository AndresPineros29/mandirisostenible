/* eslint-disable react/prop-types */
// Import pages
import {
  Home,
  Contact,
  EstudiosAmbientales,
  SaneamientoBasico,
  Ecoturismo,
  Hidrico,
  Forestal,
  EnergiasRenobables,
  Atmosferico,
  Biodiversidad,
} from "./pages";

// Import routes
import { Routes, Route, useLocation } from "react-router-dom";

const PagesRutes = () => {
  const location = useLocation();
  return (
    <Routes key={location.pathname} location={location}>
      <Route path="/" element={<Home />} />
      <Route path="/contacto" element={<Contact />} />
      <Route path="/estudios_ambientales" element={<EstudiosAmbientales />} />
      <Route path="/saneamiento_basico" element={<SaneamientoBasico />} />
      <Route path="/ecoturismo" element={<Ecoturismo />} />
      <Route path="/hidrico" element={<Hidrico />} />
      <Route path="/forestal" element={<Forestal />} />
      <Route path="/energias_renobables" element={<EnergiasRenobables />} />
      <Route path="/atmosferico" element={<Atmosferico />} />
      <Route path="/biodiversidad" element={<Biodiversidad />} />
    </Routes>
  );
};

export default PagesRutes;
