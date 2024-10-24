import React from "react";
import BlocksTemplate from "../Template/BlocksTemplate";

const EhandelService = () => {
  const serviceData = {
    mainquery: "e-handel",
    metaTitle: "E-handel - Skapa en framgångsrik onlinebutik",
    metaContent:
      "Vill du förbättra din e-handelsplattform och öka din online-försäljning? Våra experter på e-handel hjälper dig att skapa en framgångsrik onlinebutik.",
    query: "e-handel",
    city: "",
    h1: "E-handel för företag",
    formTitle: "Få en kostnadsfri analys av din e-handelsplattform",
    subTitle2: "Förbättra din onlinebutiks design och funktionalitet.",
    subTitle3: "Behöver du professionell hjälp med e-handel?",
    services:
      "Webbdesign, SEO-tjänster, Digital Marknadsföring, Innehållsskapande, PPC-annonsering, E-handel, och UX-design",
    pageUrl: "https://centrumforalla.se/e-handel",
    text1:
      "Låt oss ta hand om din e-handel. Med vår expertis och erfarenhet kan du känna dig trygg med att din onlinebutik är i goda händer. Vi erbjuder en helhetslösning som inkluderar allt från design till utveckling. Vårt mål är att hjälpa dig att skapa en framgångsrik onlinebutik som ökar din online-försäljning.",
    aboutUsText:
      "Vi är ett team av erfarna e-handelsspecialister med en passion för att hjälpa företag att nå sina digitala mål.",
    ourSerivce: "E-handel",
  };

  return (
    <div>
      {" "}
      <BlocksTemplate serviceData={serviceData} />{" "}
    </div>
  );
};

export default EhandelService;
