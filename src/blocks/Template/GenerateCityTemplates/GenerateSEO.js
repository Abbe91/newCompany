const GenerateSEO = (seoData, cityName) => {
  const normalizeCityName = cityName
    .normalize('NFD') 
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9]/g, '') 
    .toLowerCase(); 

  return `
import React from "react";
import BlocksTemplate from "../../Template/BlocksTemplate";

const SeoService${normalizeCityName} = () => {
  const serviceData = {
    mainquery: "SEO tjänster ${cityName}",
    metaTitle: "${seoData.meta_title}",
    metaContent: "${seoData.meta_description}",
    query: "SEO tjänster i ${cityName}",
    city: "${cityName}",
    formTitle: "Få en kostnadsfri SEO-analys i ${cityName}",
    subTitle2: "Förbättra din webbplats ranking och synlighet.",
    subTitle3: "Behöver du professionell hjälp med SEO i ${cityName}?",
    services: "Webbdesign, SEO-tjänster, Digital Marknadsföring, Innehållsskapande, PPC-annonsering, E-handel, och UX-design",
    pageUrl: "https://centrumforalla.se/seo-${normalizeCityName}",
    text1: "${seoData.body_text}",
    aboutUsText: "${seoData.testimonial}",
    ourSerivce: "SEO optimering"
  };

  return <BlocksTemplate serviceData={serviceData} />;
};

export default SeoService${normalizeCityName};
`;

};

module.exports = GenerateSEO;
