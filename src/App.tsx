import Navbar from "./components/Navbar.tsx";
import Hero from "./components/hero.tsx";
import Contacto from "./components/Contacto.tsx";
import Servicios from "./components/servicios.tsx";
import QuienSoy from "./components/QuienSoy.tsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Servicios />
      <QuienSoy />
      <Contacto />
    </div>
  );
}

export default App;