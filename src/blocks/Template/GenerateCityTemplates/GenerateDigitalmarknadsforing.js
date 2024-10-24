const GenerateDigitalMarknadsforing = (digitalMarknadsforingData, cityName) => {
  const normalizeCityName = cityName
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9]/g, "")
    .toLowerCase();

  return `
import React from "react";
import BlocksTemplate from "../../Template/BlocksTemplate";

const DigitalMarknadsforingService${normalizeCityName} = () => {
  const serviceData = {
    mainquery: "digital marknadsföring i ${cityName}",
    metaTitle: "${digitalMarknadsforingData.meta_title}",
    metaContent: "${digitalMarknadsforingData.meta_description}",
    query: "digital marknadsföring i ${cityName}",
    city: "${cityName}",
    h1: "${digitalMarknadsforingData.h1}",
    formTitle: "Få en kostnadsfri analys av din digitala marknadsföring i ${cityName}",
    subTitle2: "Förbättra din online-närvaro och nå fler kunder i ${cityName}.",
    subTitle3: "Behöver du professionell hjälp med digital marknadsföring i ${cityName}?",
    services: "Webbdesign, SEO-tjänster, Digital Marknadsföring, Innehållsskapande, PPC-annonsering, E-handel, och UX-design",
    pageUrl: "https://centrumforalla.se/digitalmarknadsforing-${normalizeCityName}",
    text1: "${digitalMarknadsforingData.body_text}",
    aboutUsText: "${digitalMarknadsforingData.testimonial}",
    ourService: "Digital Marknadsföring"
  };

  return <BlocksTemplate serviceData={serviceData} />;
};

export default DigitalMarknadsforingService${normalizeCityName};
`;
};
console.log("test", digitalMarknadsforingData.h1);
module.exports = GenerateDigitalMarknadsforing;
