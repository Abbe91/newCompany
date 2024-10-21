import React from "react";
import BlocksTemplate from "../Template/BlocksTemplate";

const SeoStockholm = () => {
  const serviceData = {
    mainquery: "SEO Stockholm",
    metaTitle: "SEO Stockholm. Professionell SEO-tjänster i Stockholm.",
    metaContent: "SEO Stockholm. Professionell SEO-tjänster i Stockholm.",
    query: "SEO Stockholm",
    city: "Stockholm",
    formTitle: "SEO Stockholm",
    subTitle2:
      "Din auktoriserade leverantör av SEO-tjänster, optimering, sökmotoroptimering, och digital marknadsföring i Stockholm",
    subTitle3: "Behöver du professionell hjälp med SEO i Stockholm?",
    services:
      "sökmotoroptimering, digital marknadsföring, webbplatsoptimering, innehållsstrategi, länkbyggande",
    pageUrl: "https://centrumforalla.se/seo-stockholm",
  };

  return (
    <div>
      <BlocksTemplate serviceData={serviceData} />
    </div>
  );
};

export default SeoStockholm;
