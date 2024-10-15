import React from "react";
import BlocksTemplate from "../Template/BlocksTemplate";

const Varderadodsboale = () => {

  const serviceData = ({
    mainquery: "värdera dödsbo Ale",
    metaTitle: "Vi värderar dödsbo i Ale: Professionell och pålitlig service",
    metaContent: "Värdera dödsbo Ale - Behöver du hjälp med att värdera dödsbo i Ale? Vi erbjuder professionell och pålitlig service för en rättvis värdering.",
    query: "Värdera dödsbo Ale",
    city: "Ale",
    formTitle: "Värdera dödsbo Ale",
    subTitle2: "Din auktoriserade hanterare av dödsbo, bohag, uppköp, försäljning, tömning, bortforsling, sanering, flytt, städning och värdering av dödsbo i Ale",
    subTitle3: "Behöver du professionell hjälp med värdera dödsbo Ale",
    services: "uppköp, tömning, bortforsling, sanering, luktsanering, flytt, städ, försäljning och värdering av dödsbo i Ale",
    pageUrl: "https://centrumforalla.se/vardera-dodsbo-ale"
  });

  return <div> <BlocksTemplate serviceData={serviceData}/> </div>
};

export default Varderadodsboale;
