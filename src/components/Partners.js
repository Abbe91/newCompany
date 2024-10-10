import React from "react";
import LottieBooking from "../LottieAnimation/LottieBooking";
import partners from "../utils/animation/partners.json";
import "./Partners.css";

const Partners = () => {
  return (
    <div className="partners">
      <section>
        <h2 style={{ color: "black" }}>Professionella Digitala Tjänster</h2>
        <h4 style={{ margin: "0.5rem 0" }}>- Våra Samarbetspartners -</h4>
        <p style={{ margin: "1rem 0" }}>
          Vi erbjuder en heltäckande lösning för dina digitala behov, från
          webbutveckling till SEO-optimering. Genom att samarbeta med noggrant
          utvalda partners, säkerställer vi att varje projekt levereras med
          högsta kvalitet och noggrannhet. Våra samarbeten inkluderar:
        </p>
        <ul>
          <li
            style={{ color: "#00a7ac", fontWeight: "bold", margin: "0.5rem 0" }}
          >
            Digitala marknadsföringsbyråer – Vi samarbetar med ledande
            marknadsföringsbyråer för att säkerställa bästa möjliga
            online-synlighet.
          </li>
          <li
            style={{ color: "#00a7ac", fontWeight: "bold", margin: "0.5rem 0" }}
          >
            SEO-experter – Våra SEO-partners hjälper till att maximera din
            webbplats synlighet och driva organisk trafik.
          </li>
          <li
            style={{ color: "#00a7ac", fontWeight: "bold", margin: "0.5rem 0" }}
          >
            Designstudios – Vi samarbetar med kreativa studios för att ge din
            webbplats en modern och användarvänlig design.
          </li>
          <li
            style={{ color: "#00a7ac", fontWeight: "bold", margin: "0.5rem 0" }}
          >
            Webbutvecklare – Genom våra pålitliga utvecklingspartners erbjuder
            vi lösningar för allt från e-handel till avancerade
            webbapplikationer.
          </li>
        </ul>
        <p style={{ margin: "1rem 0" }}>
          Kontakta oss idag för en kostnadsfri konsultation och ta reda på hur
          vi kan hjälpa dig att förverkliga ditt digitala projekt.
        </p>
      </section>
      <section>
        <LottieBooking lotti={partners} height={300} width={400} />
      </section>
    </div>
  );
};

export default Partners;
