import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useEffect, useState} from "react";

import Loading from "./components/Loading";

import MainLayouts from "./layouts/MainLayouts";
import Home from "./pages/Home";

function App(){
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCargando(false);
    }, 2000);

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
        </Route>
      </Routes>

    </BrowserRouter>

  );
}

export default App;