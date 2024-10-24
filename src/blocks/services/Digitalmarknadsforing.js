import React from "react";
import BlocksTemplate from "../Template/BlocksTemplate";

const Digitalmarknadsforing = () => {
  const serviceData = {
    mainquery: "digital marknadsföring",
    metaTitle: "Digital Marknadsföring - Öka din online-närvaro",
    metaContent:
      "Vill du förbättra din online-närvaro och nå fler kunder? Våra experter på digital marknadsföring hjälper dig att skapa effektiva strategier för att öka din synlighet online.",
    query: "digital marknadsföring",
    city: "",
    formTitle: "Få en kostnadsfri analys av din digitala marknadsföring",
    subTitle2: "Förbättra din online-närvaro och nå fler kunder.",
    subTitle3: "Behöver du professionell hjälp med digital marknadsföring?",
    services:
      "Webbdesign, SEO-tjänster, Digital Marknadsföring, Innehållsskapande, PPC-annonsering, E-handel, och UX-design",
    pageUrl: "https://centrumforalla.se/digital-marknadsforing",
    text1:
      "Låt oss ta hand om din digitala marknadsföring. Med vår expertis och erfarenhet kan du känna dig trygg med att din online-närvaro är i goda händer. Vi erbjuder en helhetslösning som inkluderar strategiutveckling och genomförande för att öka din synlighet och nå fler kunder.",
    aboutUsText:
      "Vi är ett team av erfarna digitala marknadsföringsspecialister med en passion för att hjälpa företag att nå sina digitala mål.",
    ourSerivce: "Digital Marknadsföring"
  };

  return <div> <BlocksTemplate serviceData={serviceData} /> </div>;
};

export default Digitalmarknadsforing;
