import React from "react";
import BlocksTemplate from "../Template/BlocksTemplate";

const UxdesignService = () => {
  const serviceData = {
    mainquery: "UX-design",
    metaTitle: "UX-design - Förbättra användarupplevelsen på din webbplats",
    metaContent:
      "Vill du förbättra användarupplevelsen på din webbplats? Våra experter på UX-design hjälper dig att skapa en användarvänlig och engagerande webbplats.",
    query: "UX-design",
    city: "", 
    formTitle: "Få en kostnadsfri analys av din UX-design",
    subTitle2: "Förbättra användarupplevelsen och öka konverteringarna.",
    subTitle3: "Behöver du professionell hjälp med UX-design?",
    services:
      "Webbdesign, SEO-tjänster, Digital Marknadsföring, Innehållsskapande, PPC-annonsering, E-handel, och UX-design",
    pageUrl: "https://centrumforalla.se/ux-design",
    text1:
      "Låt oss ta hand om din UX-design. Med vår expertis och erfarenhet kan du känna dig trygg med att din webbplats är i goda händer. Vi erbjuder en helhetslösning som inkluderar allt från användarundersökningar till design och testning. Vårt mål är att hjälpa dig att skapa en användarvänlig och engagerande webbplats som ökar konverteringarna.",
    aboutUsText:
      "Vi är ett team av erfarna UX-design-specialister med en passion för att hjälpa företag att nå sina digitala mål.",
    ourSerivce: "UX-design"
  };

  return <div> <BlocksTemplate serviceData={serviceData}/> </div>;
};

export default UxdesignService;
