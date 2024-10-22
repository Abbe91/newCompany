import React from "react";
import BlocksTemplate from "../Template/BlocksTemplate";


const InnehallsskapandeGoteborg = () => {
  const serviceData = ({
    mainquery: "innehållsskapande Göteborg",
    metaTitle: "Professionellt innehållsskapande i Göteborg - Bygg ditt varumärke online",
    metaContent: "Behöver du hjälp med innehållsskapande i Göteborg? Vi erbjuder professionell innehållsskapande för att förbättra din online-närvaro. Kontakta oss idag för att få hjälp med innehållsskapande.",
    query: "Innehållsskapande Göteborg",
    city: "Göteborg",
    formTitle: "Innehållsskapande Göteborg",
    subTitle2: "Vi skapar engagerande och relevant innehåll för din verksamhet i Göteborg, inklusive blogginlägg, SEO-optimering, sociala medier och mer",
    subTitle3: "Behöver du professionell hjälp med innehållsskapande i Göteborg?",
    services: "Webbdesign, SEO-tjänster, Digital Marknadsföring, Innehållsskapande, PPC-annonsering, E-handel, och UX-design",
    pageUrl: "https://centrumforalla.se/innehallsskapande-goteborg",
    text1: "Med vår långa erfarenhet inom innehållsskapande ser vi till att skapa engagerande och relevant innehåll som hjälper ditt företag att synas online och locka rätt målgrupp.",
    OmaboutUs: "är experter på innehållsskapande med fokus på kvalitet och kundnöjdhet",
    ourSerivce: "Innehållsstrategi och skapande"
  });

  
  return <div>  <BlocksTemplate serviceData={serviceData}/> </div>;
};



export default InnehallsskapandeGoteborg;
