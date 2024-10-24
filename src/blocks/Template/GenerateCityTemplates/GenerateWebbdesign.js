const GenerateWebbdesign = (webbdesignData, cityName) => {
    const normalizeCityName = cityName
      .normalize('NFD') 
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-zA-Z0-9]/g, '') 
      .toLowerCase(); 
  
    return `
  import React from "react";
  import BlocksTemplate from "../../Template/BlocksTemplate";
  
  const WebbdesignService${normalizeCityName} = () => {
    const serviceData = {
      mainquery: "Webbdesign i ${cityName}",
      metaTitle: "${webbdesignData.meta_title}",
      metaContent: "${webbdesignData.meta_description}",
      query: "Webbdesign i ${cityName}",
      city: "${cityName}",
      formTitle: "Få en kostnadsfri analys av din webbplats i ${cityName}",
      subTitle2: "Förbättra din webbplats design och funktionalitet.",
      subTitle3: "Behöver du professionell hjälp med webbdesign i ${cityName}?",
      services: "Webbdesign, SEO-tjänster, Digital Marknadsföring, Innehållsskapande, PPC-annonsering, E-handel, och UX-design",
      pageUrl: "https://centrumforalla.se/webbdesign-${normalizeCityName}",
      text1: "${webbdesignData.body_text}",
      aboutUsText: "${webbdesignData.testimonial}",
      ourSerivce: "Webbdesign"
    };
  
    return <BlocksTemplate serviceData={serviceData} />;
  };
  
  export default WebbdesignService${normalizeCityName};
  `;
  
  };
  
  module.exports = GenerateWebbdesign;
  