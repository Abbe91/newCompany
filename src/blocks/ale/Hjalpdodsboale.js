import React from "react";
import BlocksTemplate from "../Template/BlocksTemplate";


const Hjalpdodsboale = () => { 

  const serviceData = ({
    mainquery: "Hjälp dödsbo Ale",
    metaTitle: "Hjälp dödsbo Ale. Snabb & smidig hjälp med dödsbon.",
    metaContent: "Hjälp dödsbo Ale. Snabb & smidig hjälp med dödsbon.",
    query: "Hjälp dödsbo Ale",
    city: "Ale",
    formTitle: "Hjälp dödsbo Ale",
    subTitle2: "Din auktoriserade hanterare av dödsbo, bohag, uppköp, försäljning, tömning, bortforsling, sanering, flytt och städ i Ale",
    subTitle3: "Behöver du professionell hjälp med hjälp dödsbo Ale",
    services : "uppköp, tömning, bortforsling, sanering, luktsanering, flytt, städ, försäljning av dödsbo och bohag",
    pageUrl: "https://centrumforalla.se/hjalp-dodsbo-ale"
  });

  return <div> <BlocksTemplate serviceData={serviceData}/> </div>
};

export default Hjalpdodsboale;
