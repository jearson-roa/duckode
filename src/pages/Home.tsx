import Hero from "../components/hero/Hero";
import CardService from "../components/cardService/CardService";
import NosotrosHome from "../components/nosotros/NosotrosHome";
import ContactoHome from "../components/contacto/ContactoHome";


function Home(){
    return (
        <>
        <Hero />
        <NosotrosHome />
        <CardService />
        <ContactoHome />
        </>

    );
}

export default Home;