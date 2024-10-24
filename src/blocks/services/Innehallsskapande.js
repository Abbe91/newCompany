import React from "react";
import BlocksTemplate from "../Template/BlocksTemplate";

const InnehallsskapandeService = () => {
  const serviceData = {
    mainquery: "innehållsskapande",
    metaTitle: "Innehållsskapande - Skapa engagerande och relevant innehåll",
    metaContent:
      "Vill du skapa innehåll som engagerar din målgrupp? Våra innehållsskapande experter hjälper dig att producera innehåll som driver trafik och konverteringar.",
    query: "innehållsskapande",
    city: "",
    h1: "Innehållsskapande för företag",
    formTitle: "Få en kostnadsfri analys av din innehållsstrategi",
    subTitle2: "Förbättra din webbplats med kvalitetsinnehåll.",
    subTitle3: "Behöver du professionell hjälp med innehållsskapande?",
    services:
      "Webbdesign, SEO-tjänster, Digital Marknadsföring, Innehållsskapande, PPC-annonsering, E-handel, och UX-design",
    pageUrl: "https://centrumforalla.se/innehallsskapande",
    text1:
      "Låt oss ta hand om ditt innehållsskapande. Med vår expertis kan du skapa innehåll som engagerar din målgrupp och driver trafik. Vi erbjuder en helhetslösning som inkluderar allt från strategi till produktion och distribution.",
    aboutUsText:
      "Vi är ett team av erfarna innehållsskapare med en passion för att hjälpa företag att nå sina digitala mål.",
    ourSerivce: "Innehållsskapande",
  };

  return (
    <div>
      {" "}
      <BlocksTemplate serviceData={serviceData} />{" "}
    </div>
  );
};

export default InnehallsskapandeService;
