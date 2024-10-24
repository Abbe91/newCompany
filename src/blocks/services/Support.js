import React from "react";
import BlocksTemplate from "../Template/BlocksTemplate";

const SupportService = () => {
  const serviceData = {
    mainquery: "support",
    metaTitle: "Support - Pålitlig och snabb teknisk support",
    metaContent:
      "Vill du ha pålitlig och snabb teknisk support? Våra support-experter hjälper dig att säkerställa att din webbplats alltid är tillgänglig och presterar på topp.",
    query: "support",
    city: "",
    h1: "Support-tjänster för företag",
    formTitle: "Få en kostnadsfri support-analys",
    subTitle2: "Förbättra din webbplats prestanda och tillgänglighet.",
    subTitle3: "Behöver du professionell hjälp med support?",
    services:
      "Webbdesign, SEO-tjänster, Digital Marknadsföring, Innehållsskapande, PPC-annonsering, E-handel, och UX-design",
    pageUrl: "https://centrumforalla.se/support",
    text1:
      "Låt oss ta hand om din tekniska support. Med vår expertis och erfarenhet kan du känna dig trygg med att din webbplats är i goda händer. Vi erbjuder en helhetslösning som inkluderar allt från teknisk support till säkerhetsövervakning. Vårt mål är att säkerställa att din webbplats alltid är tillgänglig och presterar på topp.",
    aboutUsText:
      "Vi är ett team av erfarna support-specialister med en passion för att hjälpa företag att nå sina digitala mål.",
    ourSerivce: "Support",
  };

  return (
    <div>
      {" "}
      <BlocksTemplate serviceData={serviceData} />{" "}
    </div>
  );
};

export default SupportService;
