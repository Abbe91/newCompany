import React from "react";
import BlocksTemplate from "../Template/BlocksTemplate";

const WebbdesignService = () => {
  const serviceData = {
    mainquery: "webbdesign",
    metaTitle: "Webbdesign - Skapa en imponerande webbplats",
    metaContent:
      "Vill du förbättra din webbplats och öka din online-närvaro? Våra experter på webbdesign hjälper dig att skapa en imponerande webbplats.",
    query: "webbdesign",
    city: "",
    h1: "Webbdesign för företag",
    formTitle: "Få en kostnadsfri analys av din webbplats",
    subTitle2: "Förbättra din webbplats design och funktionalitet.",
    subTitle3: "Behöver du professionell hjälp med webbdesign?",
    services:
      "Webbdesign, SEO-tjänster, Digital Marknadsföring, Innehållsskapande, PPC-annonsering, E-handel, och UX-design",
    pageUrl: "https://centrumforalla.se/webbdesign",
    text1:
      "Låt oss ta hand om din webbdesign. Med vår expertis och erfarenhet kan du känna dig trygg med att din webbplats är i goda händer. Vi erbjuder en helhetslösning som inkluderar allt från design till utveckling. Vårt mål är att hjälpa dig att skapa en imponerande webbplats som ökar din online-närvaro.",
    aboutUsText:
      "Vi är ett team av erfarna webbdesignspecialister med en passion för att hjälpa företag att nå sina digitala mål.",
    ourSerivce: "Webbdesign",
  };

  return (
    <div>
      {" "}
      <BlocksTemplate serviceData={serviceData} />{" "}
    </div>
  );
};

export default WebbdesignService;
