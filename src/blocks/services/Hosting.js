import React from "react";
import BlocksTemplate from "../Template/BlocksTemplate";

const HostingService = () => {
  const serviceData = {
    mainquery: "hosting",
    metaTitle: "Hosting - Pålitlig och snabb webbhotellstjänst",
    metaContent:
      "Vill du ha en pålitlig och snabb webbhotellstjänst? Våra hosting-experter hjälper dig att säkerställa att din webbplats alltid är tillgänglig och presterar på topp.",
    query: "hosting",
    city: "",
    h1: "Hosting-tjänster för företag",
    formTitle: "Få en kostnadsfri hosting-analys",
    subTitle2: "Förbättra din webbplats prestanda och tillgänglighet.",
    subTitle3: "Behöver du professionell hjälp med hosting?",
    services:
      "Webbdesign, SEO-tjänster, Digital Marknadsföring, Innehållsskapande, PPC-annonsering, E-handel, och UX-design",
    pageUrl: "https://centrumforalla.se/hosting",
    text1:
      "Låt oss ta hand om din hosting. Med vår expertis och erfarenhet kan du känna dig trygg med att din webbplats är i goda händer. Vi erbjuder en helhetslösning som inkluderar allt från serverhantering till säkerhetsövervakning. Vårt mål är att säkerställa att din webbplats alltid är tillgänglig och presterar på topp.",
    aboutUsText:
      "Vi är ett team av erfarna hosting-specialister med en passion för att hjälpa företag att nå sina digitala mål.",
    ourSerivce: "Hosting",
  };

  return (
    <div>
      {" "}
      <BlocksTemplate serviceData={serviceData} />{" "}
    </div>
  );
};

export default HostingService;
