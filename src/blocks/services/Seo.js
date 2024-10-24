import React from "react";
import BlocksTemplate from "../Template/BlocksTemplate";

const SeoService = () => {
  const serviceData = {
    mainquery: `SEO tjänster`,
    metaTitle: `SEO - Bli synlig på Google`,
    metaContent:
      "Vill du öka din webbplats trafik och konverteringar? Våra SEO-experter hjälper dig att nå toppen på sökmotorerna.",
    query: `SEO tjänster`,
    city: "",
    h1: `SEO för företag`,
    formTitle: `Få en kostnadsfri SEO-analys`,
    subTitle2: "Förbättra din webbplats ranking och synlighet.",
    subTitle3: `Behöver du professionell hjälp med SEO ?`,
    services:
      "Webbdesign, SEO-tjänster, Digital Marknadsföring, Innehållsskapande, PPC-annonsering, E-handel, och UX-design",
    pageUrl: "https://centrumforalla.se/seo",
    text1:
      "Låt oss ta hand om din SEO. Med vår expertis och erfarenhet kan du känna dig trygg med att din webbplats är i goda händer. Vi erbjuder en helhetslösning som inkluderar allt från keyword research till teknisk SEO. Vårt mål är att hjälpa dig att nå toppen på sökmotorerna.",
    aboutUsText: `Vi är ledande inom SEO och har hjälpt många företag att förbättra sin synlighet online och öka sin försäljning.`,
    ourSerivce: "SEO optimering",
  };

  return (
    <div>
      {" "}
      <BlocksTemplate serviceData={serviceData} />{" "}
    </div>
  );
};

export default SeoService;
