import React from "react";
import BlocksTemplate from "../Template/BlocksTemplate";

const MarknadsforeingService = () => {
  const serviceData = {
    mainquery: "marknadsföring",
    metaTitle: "Marknadsföring - Bli synlig på Google",
    metaContent:
      "Vill du öka din webbplats trafik och konverteringar? Våra marknadsföringsexperter hjälper dig att nå toppen på sökmotorerna.",
    query: "marknadsföring",
    city: "", 
    formTitle: "Få en kostnadsfri marknadsföringsanalys",
    subTitle2: "Förbättra din webbplats ranking och synlighet.",
    subTitle3: "Behöver du professionell hjälp med marknadsföring?",
    services:
      "Webbdesign, SEO-tjänster, Digital Marknadsföring, Innehållsskapande, PPC-annonsering, E-handel, och UX-design",
    pageUrl: "https://centrumforalla.se/marknadsforeing",
    text1:
      "Låt oss ta hand om din marknadsföring. Med vår expertis och erfarenhet kan du känna dig trygg med att din webbplats är i goda händer. Vi erbjuder en helhetslösning som inkluderar allt från keyword research till teknisk SEO. Vårt mål är att hjälpa dig att nå toppen på sökmotorerna.",
    aboutUsText:
      "Vi är ett team av erfarna marknadsföringsexperter med en passion för att hjälpa företag att nå sina digitala mål.",
    ourSerivce: "Marknadsföring"
  };

  return <div> <BlocksTemplate serviceData={serviceData}/> </div>;
};

export default MarknadsforeingService;
