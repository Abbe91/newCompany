import React from "react";
import BlocksTemplate from "../Template/BlocksTemplate";

const PPCService = () => {
  const serviceData = {
    mainquery: "PPC",
    metaTitle: "PPC - Bli synlig på Google med betalda annonser",
    metaContent:
      "Vill du öka din webbplats trafik och konverteringar? Våra PPC-experter hjälper dig att nå toppen på sökmotorerna med betalda annonser.",
    query: "PPC",
    city: "",
    h1: "PPC för företag",
    formTitle: "Få en kostnadsfri PPC-analys",
    subTitle2: "Förbättra din webbplats synlighet och konverteringar.",
    subTitle3: "Behöver du professionell hjälp med PPC?",
    services:
      "Webbdesign, SEO-tjänster, Digital Marknadsföring, Innehållsskapande, PPC-annonsering, E-handel, och UX-design",
    pageUrl: "https://centrumforalla.se/ppc",
    text1:
      "Låt oss ta hand om din PPC-strategi. Med vår expertis och erfarenhet kan du känna dig trygg med att din webbplats är i goda händer. Vi erbjuder en helhetslösning som inkluderar allt från keyword research till kampanjhantering. Vårt mål är att hjälpa dig att nå toppen på sökmotorerna med effektiva PPC-kampanjer.",
    aboutUsText:
      "Vi är ett team av erfarna PPC-specialister med en passion för att hjälpa företag att nå sina digitala mål.",
    ourSerivce: "PPC-annonsering",
  };

  return (
    <div>
      {" "}
      <BlocksTemplate serviceData={serviceData} />{" "}
    </div>
  );
};

export default PPCService;
