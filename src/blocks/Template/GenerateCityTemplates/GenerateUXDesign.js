const GenerateUXDesign = (uxDesignData, cityName) => {
  const normalizeCityName = cityName
    .normalize('NFD') 
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9]/g, '') 
    .toLowerCase(); 

  return `
import React from "react";
import BlocksTemplate from "../../Template/BlocksTemplate";

const UxdesignService${normalizeCityName} = () => {
  const serviceData = {
    mainquery: "UX-design i ${cityName}",
    metaTitle: "${uxDesignData.meta_title}",
    metaContent: "${uxDesignData.meta_description}",
    query: "UX-design i ${cityName}",
    city: "${cityName}",
    formTitle: "Få en kostnadsfri analys av din UX-design i ${cityName}",
    subTitle2: "Förbättra användarupplevelsen och öka konverteringarna.",
    subTitle3: "Behöver du professionell hjälp med UX-design i ${cityName}?",
    services: "Webbdesign, SEO-tjänster, Digital Marknadsföring, Innehållsskapande, PPC-annonsering, E-handel, och UX-design",
    pageUrl: "https://centrumforalla.se/uxdesign-${normalizeCityName}",
    text1: "${uxDesignData.body_text}",
    aboutUsText: "${uxDesignData.testimonial}",
    ourSerivce: "UX-design"
  };

  return <BlocksTemplate serviceData={serviceData} />;
};

export default UxdesignService${normalizeCityName};
`;

};

module.exports = GenerateUXDesign;
