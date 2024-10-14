import React from "react";
import BlocksTemplate from "../Template/BlocksTemplate";

const Tommadodsboale = () => {

  const serviceData = ({
    mainquery: "tömma dödsbo Ale",
    metaTitle: "Säker och smidig tömning av dödsbo i Ale - Professionell service för en stressfri process",
    metaContent: "Behöver du hjälp med att tömma ett dödsbo i Ale? Vår erfarna personal garanterar en prisvärd, smidig och säker process.",
    query: "Tömma dödsbo Ale",
    city: "Ale",
    formTitle: "Tömma dödsbo Ale",
    subTitle2: "Din auktoriserade hanterare av dödsbo, bohag, uppköp, försäljning, bortforsling, sanering, flytt, städning och tömning av dödsbo i Ale",
    subTitle3: "Behöver du professionell hjälp med tömma dödsbo Ale",
    services: "uppköp, tömning, bortforsling, sanering, luktsanering, flytt, städ, försäljning och tömning av dödsbo i Ale",
    pageUrl: "https://centrumforalla.se/tomma-dodsbo-ale"
  });

  return <div> <BlocksTemplate serviceData={serviceData}/> </div>
};

export default Tommadodsboale;
