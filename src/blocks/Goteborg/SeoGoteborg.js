import React from "react";
import BlocksTemplate from "../Template/BlocksTemplate";

const Seogoteborg = () => {

  const serviceData = ({
    mainquery: "SEO Göteborg",
    metaTitle: "Effektiv SEO i Göteborg - Bli synlig på sökmotorer till exempel Google med vår hjälp",
    metaContent: "Behöver du hjälp med SEO i Göteborg? Kontakta oss för att öka din synlighet online och få fler kunder genom optimerad sökmotoroptimering (SEO).",
    query: "SEO Göteborg",
    city: "Göteborg",
    formTitle: "SEO Göteborg",
    subTitle2: "Vi är din expert på SEO i Göteborg, optimering av hemsidor, sökordsanalys och strategier för att förbättra din synlighet online.",
    subTitle3: "Behöver du professionell hjälp med SEO i Göteborg?",
    services: "sökordsanalys, on-page optimering, off-page optimering, teknisk SEO, lokal SEO, content marketing och länkbygge i Göteborg",
    pageUrl: "",
    text1: "Vårt företag har arbetat med SEO i många år. Vi har strategier för alla aspekter av SEO, inklusive teknisk SEO, sökordsanalys och optimering.",
    OmaboutUs: "är det självklara valet för SEO-tjänster i Göteborg med många års erfarenhet och framgångsrika projekt.",
    costFreeService: "Kostnadsfri SEO-analys"
  });

  return <div> <BlocksTemplate serviceData={serviceData}/> </div>;
};

export default Seogoteborg;
