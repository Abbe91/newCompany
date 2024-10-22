import React from "react";
import BlocksTemplate from "../Template/BlocksTemplate";


const WebbdesignGoteborg = () => {
  const serviceData = ({
    mainquery: "webbdesign Göteborg",
    metaTitle: "Professionell webbdesign i Göteborg - Skapa din perfekta webbplats",
    metaContent: "Letar du efter webbdesign i Göteborg? Vi erbjuder professionell webbdesign som hjälper ditt företag att växa online. Kontakta oss för mer information.",
    query: "Webbdesign Göteborg",
    city: "Göteborg",
    formTitle: "Webbdesign Göteborg",
    subTitle2: "Vi skapar moderna, responsiva och användarvänliga webbplatser för företag i Göteborg",
    subTitle3: "Behöver du professionell hjälp med webbdesign i Göteborg?",
    services: "webbdesign, UX/UI design, responsiv design, SEO-optimering, utveckling av hemsidor och webbtjänster i Göteborg",
    pageUrl: "https://centrumforalla.se/webb-design-goteborg",
    text1: "Med över 10 års erfarenhet inom webbdesign och utveckling, erbjuder vi skräddarsydda lösningar för ditt företag. Vi ser till att din webbplats inte bara ser bra ut utan också fungerar optimalt på alla enheter.",
    OmaboutUs: "är din pålitliga partner för webbdesign i Göteborg med fokus på kvalitet och kundnöjdhet",
    ourSerivce: "Webbutveckling och design"
  });

  return <div>  <BlocksTemplate serviceData={serviceData}/> </div>;
};

export default WebbdesignGoteborg;