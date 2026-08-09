import Hero from "../components/hero/Hero";
import CardService from "../components/cardService/CardService";
import Nosotros from "../components/nosotros/Nosotros";
import Contacto2 from "../components/contacto/Contacto2";


function Home(){
    return (
        <>
        <Hero />
        <Nosotros />
        <CardService />
        <Contacto2 />
        </>

    );
}

export default Home;