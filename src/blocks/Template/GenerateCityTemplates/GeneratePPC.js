const GeneratePPC = (ppcData, cityName) => {
  const normalizeCityName = cityName
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9]/g, "")
    .toLowerCase();

  return `
import React from "react";
import BlocksTemplate from "../../Template/BlocksTemplate";

const PpcannonseringService${normalizeCityName} = () => {
  const serviceData = {
    mainquery: "PPC-annonsering i ${cityName}",
    metaTitle: "${ppcData.meta_title}",
    metaContent: "${ppcData.meta_description}",
    query: "PPC-annonsering i ${cityName}",
    city: "${cityName}",
    h1: "${ppcData.h1}",
    formTitle: "Få en kostnadsfri analys av din PPC-annonsering i ${cityName}",
    subTitle2: "Förbättra din annonseringsstrategi och nå fler kunder.",
    subTitle3: "Behöver du professionell hjälp med PPC-annonsering i ${cityName}?",
    services: "Webbdesign, SEO-tjänster, Digital Marknadsföring, Innehållsskapande, PPC-annonsering, E-handel, och UX-design",
    pageUrl: "https://centrumforalla.se/ppc-${normalizeCityName}",
    text1: "${ppcData.body_text}",
    aboutUsText: "${ppcData.testimonial}",
    ourSerivce: "PPC-annonsering"
  };

  return <BlocksTemplate serviceData={serviceData} />;
};

export default PpcannonseringService${normalizeCityName};
`;
};

module.exports = GeneratePPC;
