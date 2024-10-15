import React from "react";
import BlocksTemplate from "../Template/BlocksTemplate";

const Uppkopdodsboale = () => {
  const serviceData = ({
    mainquery: "uppköp dödsbo Ale",
    metaTitle: "Få rättvist betalt för dödsboet. Vi köper dödsbon i Ale. Kontakta oss för en gratis värdering idag!",
    metaContent: "Köper dödsbon i Ale - Få snabbt och enkelt betalt för dödsboet - Vi köper upp dödsbon i Ale på ett tryggt sätt",
    query: "Uppköp dödsbo Ale",
    city: "Ale",
    formTitle: "Uppköp dödsbo Ale",
    subTitle2: "Din auktoriserade hanterare av dödsbo, bohag, uppköp, försäljning, tömning, bortforsling, sanering, flytt, städning och uppköp av dödsbo i Ale",
    subTitle3: "Behöver du professionell hjälp med uppköp dödsbo Ale",
    services: " uppköp, tömning, bortforsling, sanering, luktsanering, flytt, städ, försäljning och uppköp av dödsbo i Ale",
    pageUrl: "https://centrumforalla.se/uppkop-dodsbo-ale"
  });
  return <div> <BlocksTemplate serviceData={serviceData}/> </div>
};

export default Uppkopdodsboale;
