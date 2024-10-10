import React from "react";
import "./Erbjuder.css";

const Erbjuder = ({ city }) => {
  return (
    <div className="erbjuder" id="erbjuder-cont">
      <div id="webbutveckling">
        <h4>Webbutveckling {city ? `i ${city}` : ""}</h4>
        <p>
          Behöver du hjälp med att bygga en hemsida {city ? `i ${city}` : ""}?
          Hos Centrum för Alla erbjuder vi professionella
          webbutvecklingstjänster som skräddarsys efter dina behov. Vi tar hand
          om allt från design och utveckling till optimering av din webbplats.
          Oavsett om du behöver en enkel informationssida eller en mer komplex
          e-handelslösning, så har vi kunskapen och verktygen för att hjälpa
          dig. Kontakta oss idag för en kostnadsfri konsultation och se hur vi
          kan förverkliga din vision på webben.
        </p>
      </div>
      <div id="seo">
        <h4>SEO - Sökmotoroptimering {city ? `i ${city}` : ""}</h4>
        <p>
          Vill du att din hemsida ska ranka högre på Google? Vår SEO-tjänst
          hjälper dig att förbättra din synlighet online{" "}
          {city ? `i ${city}` : ""}. Vi genomför en grundlig analys av din
          webbplats och optimerar både innehåll och tekniska aspekter för att
          säkerställa att sökmotorer lätt kan hitta och indexera din sida. Genom
          att använda de bästa metoderna inom SEO kan vi hjälpa dig att driva
          mer trafik till din webbplats och öka dina konverteringar. Kontakta
          oss idag för att ta reda på hur vi kan hjälpa dig att lyckas på nätet.
        </p>
      </div>
      <div id="digital-marknadsforing">
        <h4>Digital Marknadsföring {city ? `i ${city}` : ""}</h4>
        <p>
          Vill du nå ut till fler kunder via digitala kanaler? Vi på Centrum för
          Alla erbjuder digitala marknadsföringstjänster{" "}
          {city ? `i ${city}` : ""} för att hjälpa ditt företag att växa. Från
          Google Ads till sociala medier, vi kan skapa och hantera kampanjer som
          engagerar din målgrupp och driver resultat. Vi skräddarsyr varje
          kampanj för att passa dina mål och budget, och analyserar
          kontinuerligt resultatet för att optimera strategin. Hör av dig till
          oss idag för att komma igång med en effektiv digital
          marknadsföringsplan.
        </p>
      </div>
      <div id="grafisk-design">
        <h4>Grafisk Design {city ? `i ${city}` : ""}</h4>
        <p>
          Behöver du en professionell grafisk profil eller logotyp? Vi erbjuder
          skräddarsydda grafiska designlösningar {city ? `i ${city}` : ""} som
          hjälper ditt företag att sticka ut. Oavsett om du behöver en logotyp,
          broschyr, visitkort eller digitala annonser, kan vårt erfarna
          designteam skapa visuellt tilltalande material som representerar ditt
          varumärke. Kontakta oss för att diskutera dina designbehov och låt oss
          skapa något unikt för ditt företag.
        </p>
      </div>
      <div id="underhall-av-webbplatser">
        <h4>Underhåll av webbplatser {city ? `i ${city}` : ""}</h4>
        <p>
          Att hålla en webbplats uppdaterad och säker är avgörande för framgång
          online. Vi erbjuder tjänster för löpande underhåll och support{" "}
          {city ? `i ${city}` : ""}, vilket inkluderar uppdateringar av
          innehåll, säkerhetsövervakning och teknisk support. Vi ser till att
          din webbplats alltid fungerar optimalt och att den är skyddad mot
          potentiella hot. Kontakta oss för att diskutera våra underhållspaket
          och hur vi kan hjälpa dig att hålla din webbplats uppdaterad och
          säker.
        </p>
      </div>
    </div>
  );
};

export default Erbjuder;
