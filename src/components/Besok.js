import React from "react";
import image2 from "../utils/images/seoimages/dödsboanmälan.jpg";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    padding: "2rem",
    background: "#00a7ac",
    justifyContent: "space-around",
    color: "white",
    alignItems: "center",
    textAlign: "center",
    "@media screen and (max-width: 800px)": {
      flexDirection: "column",
      padding: "1rem",
    },
  },
  para: {
    margin: "1rem 0",
    letterSpacing: "1px",
    lineHeight: "1.6",
    maxWidth: "500px",
    fontSize: "1rem",
    "@media screen and (max-width: 800px)": {
      fontSize: "0.9rem",
    },
  },
  divider: {
    margin: "1rem auto",
    width: "50%",
    background: "#0369a1",
    height: "2px",
  },
  imageContainer: {
    margin: "1rem 0",
    borderRadius: "50%",
    overflow: "hidden",
  },
  image: {
    height: "auto",
    borderRadius: "50%",
  },
});
const Besok = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <section>
        <h2>Våra Tjänster</h2>
        <div className={classes.divider}></div>
        <p className={classes.para}>
          <strong>Centrum för Alla</strong> erbjuder en rad digitala tjänster
          för att hjälpa ditt företag att växa och lyckas online. Här är några
          av våra specialiteter:
          <br />
          <br />
          <strong>Webbdesign</strong> – Vi skapar professionella och
          användarvänliga hemsidor som speglar ditt företags varumärke och
          vision.
          <br />
          <br />
          <strong>SEO-tjänster</strong> – Genom att optimera din hemsida för
          sökmotorer, hjälper vi dig att ranka högre och nå fler potentiella
          kunder.
          <br />
          <br />
          <strong>Digital Marknadsföring</strong> – Vi bygger strategier för att
          maximera din synlighet online genom sociala medier,
          e-postmarknadsföring och mycket mer.
          <br />
          <br />
          <strong>Innehållsskapande</strong> – Skapa engagerande och relevant
          innehåll för att locka och behålla kunder. Vi hjälper dig med allt
          från bloggande till videoproduktion.
          <br />
          <br />
          <strong>PPC-annonsering</strong> – Öka din webbplatstrafik och
          försäljning genom kostnadseffektiva betal-per-klick-kampanjer på
          Google, Facebook och andra plattformar.
          <br />
          <br />
          <strong>E-handel</strong> – Bygg och optimera din onlinebutik med vårt
          erfarna team som kan hjälpa till med allt från design till
          integrationer och betalningslösningar.
          <br />
          <br />
          <strong>UX-design</strong> – Vi fokuserar på att skapa en fantastisk
          användarupplevelse som förbättrar engagemang och konverteringar på din
          webbplats.
        </p>
      </section>
      <section className={classes.imageContainer}>
        <img
          src={image2}
          className={classes.image}
          loading="lazy"
          alt="Centrum för Alla Tjänster"
        />
      </section>
    </div>
  );
};

export default Besok;
