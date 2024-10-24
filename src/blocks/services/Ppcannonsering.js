import React from "react";
import BlocksTemplate from "../Template/BlocksTemplate";

const PpcannonseringService = () => {
  const serviceData = {
    mainquery: "PPC-annonsering",
    metaTitle: "PPC-annonsering - Maximera din annonseringsbudget",
    metaContent:
      "Vill du maximera din annonseringsbudget och nå fler kunder? Våra experter på PPC-annonsering hjälper dig att skapa effektiva kampanjer som ger resultat.",
    query: "PPC-annonsering",
    city: "",
    h1: "PPC-annonsering för företag",
    formTitle: "Få en kostnadsfri analys av din PPC-annonsering",
    subTitle2: "Förbättra din annonseringsstrategi och nå fler kunder.",
    subTitle3: "Behöver du professionell hjälp med PPC-annonsering?",
    services:
      "Webbdesign, SEO-tjänster, Digital Marknadsföring, Innehållsskapande, PPC-annonsering, E-handel, och UX-design",
    pageUrl: "https://centrumforalla.se/ppc-annonsering",
    text1:
      "Låt oss ta hand om din PPC-annonsering. Med vår expertis och erfarenhet kan du känna dig trygg med att din annonsering är i goda händer. Vi erbjuder en helhetslösning som inkluderar allt från strategiutveckling till kampanjhantering. Vårt mål är att hjälpa dig att maximera din annonseringsbudget och nå fler kunder.",
    aboutUsText:
      "Vi är ett team av erfarna PPC-annonsering-specialister med en passion för att hjälpa företag att nå sina digitala mål.",
    ourSerivce: "PPC-annonsering",
  };

  return (
    <div>
      {" "}
      <BlocksTemplate serviceData={serviceData} />{" "}
    </div>
  );
};

export default PpcannonseringService;
