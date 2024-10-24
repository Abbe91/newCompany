import React from "react";
import BlocksTemplate from "../Template/BlocksTemplate";

const CmsService = () => {
  const serviceData = {
    mainquery: "CMS",
    metaTitle: "CMS - Hantera ditt innehåll enkelt och effektivt",
    metaContent:
      "Vill du ha ett pålitligt och användarvänligt CMS? Våra CMS-experter hjälper dig att hantera ditt innehåll enkelt och effektivt.",
    query: "CMS",
    city: "",
    formTitle: "Få en kostnadsfri CMS-analys",
    subTitle2: "Förbättra din webbplats hantering och användarupplevelse.",
    subTitle3: "Behöver du professionell hjälp med CMS?",
    services:
      "Webbdesign, SEO-tjänster, Digital Marknadsföring, Innehållsskapande, PPC-annonsering, E-handel, och UX-design",
    pageUrl: "https://centrumforalla.se/cms",
    text1:
      "Låt oss ta hand om din CMS. Med vår expertis och erfarenhet kan du känna dig trygg med att din webbplats är i goda händer. Vi erbjuder en helhetslösning som inkluderar allt från installation till anpassning. Vårt mål är att hjälpa dig att hantera ditt innehåll enkelt och effektivt.",
    aboutUsText:
      "Vi är ett team av erfarna CMS-specialister med över 20 års erfarenhet, och vi hjälper företag att nå sina digitala mål.",
    ourSerivce: "CMS"
  };

  return <div> <BlocksTemplate serviceData={serviceData}/> </div>;
};

export default CmsService;
