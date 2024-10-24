const GenerateEhandel = (ehandelData, cityName) => {
  const normalizeCityName = cityName
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9]/g, "")
    .toLowerCase();

  return `
import React from "react";
import BlocksTemplate from "../../Template/BlocksTemplate";

const EhandelService${normalizeCityName} = () => {
  const serviceData = {
    mainquery: "e-handel tjänster ${cityName}",
    metaTitle: "${ehandelData.meta_title}",
    metaContent: "${ehandelData.meta_description}",
    query: "e-handel tjänster i ${cityName}",
    city: "${cityName}",
    h1: "${ehandelData.h1}",
    formTitle: "Få en kostnadsfri analys av din e-handelsplattform i ${cityName}",
    subTitle2: "Förbättra din onlinebutiks design och funktionalitet.",
    subTitle3: "Behöver du professionell hjälp med e-handel i ${cityName}?",
    services: "Webbdesign, SEO-tjänster, Digital Marknadsföring, Innehållsskapande, PPC-annonsering, E-handel, och UX-design",
    pageUrl: "https://centrumforalla.se/ehandel-${normalizeCityName}",
    text1: "${ehandelData.body_text}",
    aboutUsText: "${ehandelData.testimonial}",
    ourService: "E-handel"
  };

  return <BlocksTemplate serviceData={serviceData} />;
};

export default EhandelService${normalizeCityName};
`;
};

module.exports = GenerateEhandel;
