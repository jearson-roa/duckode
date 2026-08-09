import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useEffect, useState} from "react";

import Loading from "./components/Loading";

import MainLayouts from "./layouts/MainLayouts";
import Home from "./pages/Home";
import Contacto from "./components/contacto/Contacto";
import Nosotros from "./components/nosotros/Nosotros2";
import Portafolio from "./components/portafolio/Portafolio";


function App(){
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCargando(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (cargando) {
    return <Loading />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayouts />}>
          <Route index element={<Home />} />
          <Route path="nosotros" element={<Nosotros />}/>
          < Route path="portafolio" element={<Portafolio />}/>
          <Route path="contacto" element={<Contacto />} />
        </Route>
      </Routes>

    </BrowserRouter>

  );
}

export default App;