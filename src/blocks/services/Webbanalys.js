import React from "react";
import BlocksTemplate from "../Template/BlocksTemplate";

const WebanalysService = () => {
  const serviceData = {
    mainquery: "webbanalys",
    metaTitle: "Webbanalys - Förbättra din webbplats prestanda",
    metaContent:
      "Vill du förbättra din webbplats prestanda och användarupplevelse? Våra webbanalys-experter hjälper dig att analysera och optimera din webbplats.",
    query: "webbanalys",
    city: "",
    formTitle: "Få en kostnadsfri webbanalys",
    subTitle2: "Förbättra din webbplats prestanda och användarupplevelse.",
    subTitle3: "Behöver du professionell hjälp med webbanalys?",
    services:
      "Webbdesign, SEO-tjänster, Digital Marknadsföring, Innehållsskapande, PPC-annonsering, E-handel, och UX-design",
    pageUrl: "https://centrumforalla.se/webbanalys",
    text1:
      "Låt oss ta hand om din webbanalys. Med vår expertis och erfarenhet kan du känna dig trygg med att din webbplats är i goda händer. Vi erbjuder en helhetslösning som inkluderar allt från prestandaanalys till användarupplevelseoptimering. Vårt mål är att hjälpa dig att förbättra din webbplats prestanda och användarupplevelse.",
    aboutUsText:
      "Vi är ett team av erfarna webbanalys-specialister med en passion för att hjälpa företag att nå sina digitala mål.",
    ourSerivce: "Webbanalys"
  };

  return <div> <BlocksTemplate serviceData={serviceData}/> </div>;
};

export default WebanalysService;
