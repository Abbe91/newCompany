import React from "react";
import BlocksTemplate from "../Template/BlocksTemplate";

const InnehallsmarknadsforingService = () => {
  const serviceData = {
    mainquery: "innehållsmarknadsföring",
    metaTitle: "Innehållsmarknadsföring - Skapa engagerande innehåll",
    metaContent:
      "Vill du öka din webbplats trafik och konverteringar? Våra experter på innehållsmarknadsföring hjälper dig att skapa engagerande innehåll som når din målgrupp.",
    query: "innehållsmarknadsföring",
    city: "",
    h1: "Innehållsmarknadsföring för företag",
    formTitle: "Få en kostnadsfri analys av din innehållsstrategi",
    subTitle2: "Förbättra din webbplats synlighet och engagemang.",
    subTitle3: "Behöver du professionell hjälp med innehållsmarknadsföring?",
    services:
      "Webbdesign, SEO-tjänster, Digital Marknadsföring, Innehållsskapande, PPC-annonsering, E-handel, och UX-design",
    pageUrl: "https://centrumforalla.se/innehallsmarknadsforing",
    text1:
      "Låt oss ta hand om din innehållsmarknadsföring. Med vår expertis och erfarenhet kan du känna dig trygg med att din webbplats är i goda händer. Vi erbjuder en helhetslösning som inkluderar allt från content creation till distribution. Vårt mål är att hjälpa dig att skapa engagerande innehåll som når din målgrupp och ökar din synlighet.",
    aboutUsText:
      "Vi är ett team av erfarna innehållsmarknadsföringsspecialister med en passion för att hjälpa företag att nå sina digitala mål.",
    ourSerivce: "Innehållsmarknadsföring",
  };

  return (
    <div>
      {" "}
      <BlocksTemplate serviceData={serviceData} />{" "}
    </div>
  );
};

export default InnehallsmarknadsforingService;
