import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Contacto from './components/Contacto';
import Servicios from './components/Servicios';
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