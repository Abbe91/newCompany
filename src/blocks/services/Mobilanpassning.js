import React from "react";
import BlocksTemplate from "../Template/BlocksTemplate";

const MobilanpassningService = () => {
  const serviceData = {
    mainquery: "mobilanpassning",
    metaTitle: "Mobilanpassning - Optimera din webbplats för mobila enheter",
    metaContent:
      "Vill du optimera din webbplats för mobila enheter? Våra experter på mobilanpassning hjälper dig att säkerställa att din webbplats fungerar perfekt på alla enheter.",
    query: "mobilanpassning",
    city: "",
    h1: "Mobilanpassning för företag",
    formTitle: "Få en kostnadsfri mobilanpassningsanalys",
    subTitle2:
      "Förbättra din webbplats prestanda och användarupplevelse på mobila enheter.",
    subTitle3: "Behöver du professionell hjälp med mobilanpassning?",
    services:
      "Webbdesign, SEO-tjänster, Digital Marknadsföring, Innehållsskapande, PPC-annonsering, E-handel, och UX-design",
    pageUrl: "https://centrumforalla.se/mobilanpassning",
    text1:
      "Låt oss ta hand om din mobilanpassning. Med vår expertis och erfarenhet kan du känna dig trygg med att din webbplats är i goda händer. Vi erbjuder en helhetslösning som inkluderar allt från design till utveckling. Vårt mål är att säkerställa att din webbplats fungerar perfekt på alla enheter.",
    aboutUsText:
      "Vi är ett team av erfarna mobilanpassningsspecialister med en passion för att hjälpa företag att nå sina digitala mål.",
    ourSerivce: "Mobilanpassning",
  };

  return (
    <div>
      {" "}
      <BlocksTemplate serviceData={serviceData} />{" "}
    </div>
  );
};

export default MobilanpassningService;
