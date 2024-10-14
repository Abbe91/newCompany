import React from "react";
import BlocksTemplate from "../Template/BlocksTemplate";


const Saljadosboale = () => {

  const serviceData = ({
    mainquery: "sälja dödsbo Ale",
    metaTitle: "Sälj dödsbo i Ale smidigt och enkelt - Få högsta möjliga pris med våra erfarna köpare",
    metaContent: "Sälj dödsbo i Ale till högsta möjliga pris med hjälp av våra professionella och pålitliga tjänst för försäljning av dödsbon.",
    query: "Sälja dödsbo Ale",
    city: "Ale",
    formTitle: "Sälja dödsbo Ale",
    subTitle2: "Din auktoriserade hanterare av dödsbo, bohag, uppköp, försäljning, tömning, bortforsling, sanering, flytt och städning av dödsbo i Ale",
    subTitle3: "Behöver du professionell hjälp med sälja dödsbo Ale",
    services:  "uppköp, tömning, bortforsling, sanering, luktsanering, flytt, städ, försäljning av dödsbo och bohag",
    pageUrl: "https://centrumforalla.se/salja-dodsbo-ale"
  });

  return <div> <BlocksTemplate serviceData={serviceData}/> </div>
};

export default Saljadosboale;
