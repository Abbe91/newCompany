import React from "react";
import { makeStyles } from "@material-ui/core";
import webDesign from "../utils/images/seoimages/webDevelopment.jpg";
import seoServices from "../utils/images/seoimages/seoOptimization.webp";
import digitalMarketing from "../utils/images/seoimages/digitalMarketing.webp";
import contentCreation from "../utils/images/seoimages/contentCreation.webp";
import ppcAdvertising from "../utils/images/seoimages/ppcAdvertising.webp";
import eCommerce from "../utils/images/seoimages/emailMarketing.webp";
import uxDesign from "../utils/images/seoimages/digitalMarketing.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";

const useStyles = makeStyles({
  root: {
    background: "white",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "2rem",
    padding: "2rem",
    justifyItems: "center",
    alignItems: "center",
  },
  imageContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "1.5rem",
    boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.15)",
    borderRadius: "10px",
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
      transform: "translateY(-10px)",
    },
  },
  images: {
    width: "100%",
    height: "220px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  btn: {
    width: "100%",
    height: "2.8rem",
    backgroundColor: "#00a7ac",
    color: "white",
    fontWeight: "bold",
    border: "none",
    borderRadius: "5px",
    marginTop: "1.5rem",
    cursor: "pointer",
    transition: "background-color 0.3s ease-in-out",
    "&:hover": {
      backgroundColor: "#008b8f",
    },
  },
  pargraph: {
    textAlign: "center",
    color: "#333",
    marginTop: "1rem",
    fontSize: "1rem",
    lineHeight: "1.5",
  },
  link: {
    textDecoration: "none",
    width: "100%",
  },
});

const images = [
  {
    url: webDesign,
    text: "Webbdesign",
    pargraph:
      "Vi skapar moderna och responsiva webbplatser som speglar ditt varumärke och maximerar användarupplevelsen.",
    path: "/webbdesign",
  },
  {
    url: seoServices,
    text: "SEO-tjänster",
    pargraph:
      "Våra SEO-experter hjälper dig att ranka högre på Google och öka din organiska trafik.",
    path: "/seo-tjanster",
  },
  {
    url: digitalMarketing,
    text: "Digital Marknadsföring",
    pargraph:
      "Vi utvecklar skräddarsydda digitala marknadsföringsstrategier som driver konverteringar och ökar din räckvidd.",
    path: "/digital-marknadsforing",
  },
  {
    url: contentCreation,
    text: "Innehållsskapande",
    pargraph:
      "Vårt team hjälper dig att skapa engagerande och relevant innehåll för din målgrupp.",
    path: "/innehallsskapande",
  },
  {
    url: ppcAdvertising,
    text: "PPC-annonsering",
    pargraph:
      "Maximera din synlighet med PPC-kampanjer som levererar resultat och genererar leads.",
    path: "/ppc-annonsering",
  },
  {
    url: eCommerce,
    text: "E-handel",
    pargraph:
      "Vi bygger kraftfulla e-handelslösningar som gör det enkelt för dig att sälja online.",
    path: "/e-handel",
  },
  {
    url: uxDesign,
    text: "UX-design",
    pargraph:
      "Våra UX-designers skapar användarvänliga gränssnitt som förbättrar konverteringsfrekvensen och användarupplevelsen.",
    path: "/ux-design",
  },
];

const ImagesServicesComponent = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {images?.map((image, i) => (
        <div key={i} className={classes.imageContainer}>
          <LazyLoadImage
            src={image.url}
            alt={image.text}
            height={"220px"}
            className={classes.images}
          />
          <p className={classes.pargraph}>{image.pargraph}</p>
          <a href={image.path} className={classes.link} title={image.text}>
            <button className={classes.btn}>{image.text}</button>
          </a>
        </div>
      ))}
    </div>
  );
};

export default ImagesServicesComponent;
