import React from "react";
import BlocksTemplate from "../Template/BlocksTemplate";

const SocialMediaService = () => {
  const serviceData = {
    mainquery: "social media",
    metaTitle: "Social Media - Bli synlig på sociala medier",
    metaContent:
      "Vill du öka din webbplats trafik och konverteringar? Våra social media-experter hjälper dig att nå toppen på sociala medier.",
    query: "social media",
    city: "",
    formTitle: "Få en kostnadsfri social media-analys",
    subTitle2: "Förbättra din webbplats synlighet och engagemang.",
    subTitle3: "Behöver du professionell hjälp med social media?",
    services:
      "Webbdesign, SEO-tjänster, Digital Marknadsföring, Innehållsskapande, PPC-annonsering, E-handel, och UX-design",
    pageUrl: "https://centrumforalla.se/social-media",
    text1:
      "Låt oss ta hand om din social media-strategi. Med vår expertis och erfarenhet kan du känna dig trygg med att din närvaro på sociala medier är i goda händer. Vi erbjuder en helhetslösning som inkluderar allt från content creation till campaign management. Vårt mål är att hjälpa dig att nå toppen på sociala medier med effektiva strategier.",
    aboutUsText:
      "Vi är ett team av erfarna social media-specialister med en passion för att hjälpa företag att nå sina digitala mål.",
    ourSerivce: "Social Media"
  };

  return <div> <BlocksTemplate serviceData={serviceData}/> </div>;
};

export default SocialMediaService;
