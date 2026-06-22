import Navbar from './components/Navbar';
import Hero from './components/hero';
import Contacto from './components/Contacto';
import Servicios from './components/servicios';
import QuienSoy from './components/QuienSoy';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      < Servicios />
      < QuienSoy />
      <Contacto />

    </div>
  );
}

export default App;