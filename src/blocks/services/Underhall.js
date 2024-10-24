import React from "react";
import BlocksTemplate from "../Template/BlocksTemplate";

const UnderhallService = () => {
  const serviceData = {
    mainquery: "underhåll",
    metaTitle: "Underhåll - Pålitlig och effektiv webbplatsunderhåll",
    metaContent:
      "Vill du ha en pålitlig och effektiv webbplatsunderhållstjänst? Våra underhållsexperter hjälper dig att säkerställa att din webbplats alltid är uppdaterad och presterar på topp.",
    query: "underhåll",
    city: "",
    h1: "Underhållstjänster för företag",
    formTitle: "Få en kostnadsfri underhållsanalys",
    subTitle2: "Förbättra din webbplats prestanda och tillgänglighet.",
    subTitle3: "Behöver du professionell hjälp med underhåll?",
    services:
      "Webbdesign, SEO-tjänster, Digital Marknadsföring, Innehållsskapande, PPC-annonsering, E-handel, och UX-design",
    pageUrl: "https://centrumforalla.se/underhall",
    text1:
      "Låt oss ta hand om ditt underhåll. Med vår expertis och erfarenhet kan du känna dig trygg med att din webbplats är i goda händer. Vi erbjuder en helhetslösning som inkluderar allt från uppdateringar till säkerhetsövervakning. Vårt mål är att säkerställa att din webbplats alltid är uppdaterad och presterar på topp.",
    aboutUsText:
      "Vi är ett team av erfarna underhållsspecialister med en passion för att hjälpa företag att nå sina digitala mål.",
    ourSerivce: "Underhåll",
  };

  return (
    <div>
      {" "}
      <BlocksTemplate serviceData={serviceData} />{" "}
    </div>
  );
};

export default UnderhallService;
