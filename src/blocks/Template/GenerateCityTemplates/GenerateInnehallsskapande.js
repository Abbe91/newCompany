const GenerateInnehallsskapande = (innehallsskapandeData, cityName) => {
  const normalizeCityName = cityName
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9]/g, "")
    .toLowerCase();

  return `
import React from "react";
import BlocksTemplate from "../../Template/BlocksTemplate";

const InnehallsskapandeService${normalizeCityName} = () => {
  const serviceData = {
    mainquery: "innehållsskapande i ${cityName}",
    metaTitle: "${innehallsskapandeData.meta_title}",
    metaContent: "${innehallsskapandeData.meta_description}",
    query: "innehållsskapande i ${cityName}",
    city: "${cityName}",
    h1: "${innehallsskapandeData.h1}",
    formTitle: "Få en kostnadsfri analys av din innehållsstrategi i ${cityName}",
    subTitle2: "Förbättra din webbplats med kvalitetsinnehåll i ${cityName}.",
    subTitle3: "Behöver du professionell hjälp med innehållsskapande i ${cityName}?",
    services: "Webbdesign, SEO-tjänster, Digital Marknadsföring, Innehållsskapande, PPC-annonsering, E-handel, och UX-design",
    pageUrl: "https://centrumforalla.se/innehallsskapande-${normalizeCityName}",
    text1: "${innehallsskapandeData.body_text}",
    aboutUsText: "${innehallsskapandeData.testimonial}",
    ourService: "Innehållsskapande"
  };

  return <BlocksTemplate serviceData={serviceData} />;
};

export default InnehallsskapandeService${normalizeCityName};
`;
};

module.exports = GenerateInnehallsskapande;
