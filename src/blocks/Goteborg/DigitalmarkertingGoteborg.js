import React from "react";
import BlocksTemplate from "../Template/BlocksTemplate";

const DigitalmarkeringGoteborg = () => {

  const serviceData = ({
    mainquery: "Digital marknadsföring Göteborg",
    metaTitle: "Effektiv digital marknadsföring i Göteborg - Bli synlig online med vår hjälp",
    metaContent: "Behöver du hjälp med digital marknadsföring i Göteborg? Kontakta oss för att öka din synlighet online och få fler kunder genom optimerade marknadsföringsstrategier.",
    query: "Digital marknadsföring Göteborg",
    city: "Göteborg",
    formTitle: "Digital marknadsföring Göteborg",
    subTitle2: "Vi är din expert på digital marknadsföring i Göteborg, inklusive SEO, PPC, sociala medier och innehållsmarknadsföring.",
    subTitle3: "Behöver du professionell hjälp med digital marknadsföring i Göteborg?",
    services: "SEO, PPC (Google Ads), sociala medier, innehållsmarknadsföring, e-postmarknadsföring och konverteringsoptimering i Göteborg",
    pageUrl: "https://centrumforalla.se/digital-marknadsforing-goteborg",
    text1: "Vårt företag har mångårig erfarenhet av digital marknadsföring och hjälper företag att nå sin målgrupp online genom anpassade strategier.",
    OmaboutUs: "är det självklara valet för digital marknadsföring i Göteborg med många års erfarenhet och framgångsrika kampanjer.",
    costFreeService: "Kostnadsfri digital marknadsföringsanalys"
  });

  return (
    <div>
      <BlocksTemplate serviceData={serviceData} />
    </div>
  );
};

export default DigitalmarkeringGoteborg;
