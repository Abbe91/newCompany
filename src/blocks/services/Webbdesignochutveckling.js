import React from "react";
import BlocksTemplate from "../Template/BlocksTemplate";

const WebbdesignochutvecklingService = () => {
  const serviceData = {
    mainquery: "webbdesign och utveckling",
    metaTitle: "Webbdesign och Utveckling - Skapa en imponerande webbplats",
    metaContent:
      "Vill du förbättra din webbplats och öka din online-närvaro? Våra experter på webbdesign och utveckling hjälper dig att skapa en imponerande webbplats.",
    query: "webbdesign och utveckling",
    city: "", 
    formTitle: "Få en kostnadsfri analys av din webbplats",
    subTitle2: "Förbättra din webbplats design och funktionalitet.",
    subTitle3: "Behöver du professionell hjälp med webbdesign och utveckling?",
    services:
      "Webbdesign, SEO-tjänster, Digital Marknadsföring, Innehållsskapande, PPC-annonsering, E-handel, och UX-design",
    pageUrl: "https://centrumforalla.se/webbdesign-och-utveckling",
    text1:
      "Låt oss ta hand om din webbdesign och utveckling. Med vår expertis och erfarenhet kan du känna dig trygg med att din webbplats är i goda händer. Vi erbjuder en helhetslösning som inkluderar allt från design till utveckling. Vårt mål är att hjälpa dig att skapa en imponerande webbplats som ökar din online-närvaro.",
    aboutUsText:
      "Vi är ett team av erfarna webbdesign- och utvecklingsspecialister med en passion för att hjälpa företag att nå sina digitala mål.",
    ourSerivce: "Webbdesign och utveckling",
  };

  return <div> <BlocksTemplate serviceData={serviceData}/> </div>;
};

export default WebbdesignochutvecklingService;
