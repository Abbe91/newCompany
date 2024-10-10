import React from "react";
import Slider from "react-slick";
import { Paper, Button, makeStyles } from "@material-ui/core";
import HomeWorkIcon from "@material-ui/icons/HomeWork";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import DeleteIcon from "@material-ui/icons/Delete";
import WarningIcon from "@material-ui/icons/Warning";
import AllInboxIcon from "@material-ui/icons/AllInbox";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import FindInPageIcon from "@material-ui/icons/FindInPage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const useStyles = makeStyles({
  carouselContainer: {
    width: "100%", // Full width container
    position: "relative",
  },
  carouselItem: {
    height: "400px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center", // Vertically centers the content
    alignItems: "center", // Horizontally centers the content
    textAlign: "center",
    borderRadius: "10px",
    padding: "2rem",
    boxShadow:
      "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
    backgroundColor: "#f9f9f9",
    transition: "transform 0.3s ease-in-out",
  },
  icon: {
    fontSize: "3rem",
    marginBottom: "1rem",
    color: "#00a7ac",
  },
  title: {
    fontSize: "1.5rem",
    color: "#333",
    marginBottom: "0.5rem",
  },
  text: {
    fontSize: "1rem",
    lineHeight: "1.5",
    marginBottom: "1rem",
    textAlign: "center", // Make sure text aligns in the center
  },
  button: {
    marginTop: "1rem",
    backgroundColor: "#00a7ac",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#007d7e",
    },
  },
  slickDots: {
    display: "flex !important",
    justifyContent: "center", // Center the dots
    position: "relative !important", // Ensure the dots are positioned relative to their container
    bottom: "0px", // Adjust position if needed
    marginTop: "20px", // Add margin to separate dots from slides
    "& li button:before": {
      color: "#00a7ac", // Custom dot color
    },
  },
});

const services = [
  {
    title: "Webbdesign",
    path: "webbdesign",
    text: "Vi skapar professionella, användarvänliga och responsiva hemsidor som speglar ditt företags varumärke och vision. Vårt team säkerställer att din webbplats fungerar sömlöst på alla enheter.",
    icon: <HomeWorkIcon />,
  },
  {
    title: "SEO-tjänster",
    path: "seo-tjanster",
    text: "Genom att optimera din webbplats för sökmotorer hjälper vi dig att förbättra din synlighet på Google och andra sökmotorer, vilket leder till ökad trafik och fler kunder.",
    icon: <LocalShippingIcon />,
  },
  {
    title: "Digital Marknadsföring",
    path: "digital-marknadsforing",
    text: "Vi erbjuder kompletta digitala marknadsföringstjänster inklusive sociala medier-strategier, e-postmarknadsföring och digital annonsering för att öka ditt företags synlighet och engagemang.",
    icon: <DeleteIcon />,
  },
  {
    title: "Innehållsskapande",
    path: "innehallsskapande",
    icon: <WarningIcon />,
    text: "Vi skapar engagerande och relevant innehåll för din webbplats, sociala medier och kampanjer som hjälper till att locka och behålla kunder. Vårt team arbetar med allt från text till videoproduktion.",
  },
  {
    title: "PPC-annonsering",
    path: "ppc-annonsering",
    icon: <MonetizationOnIcon />,
    text: "Vi hjälper dig att nå fler kunder genom kostnadseffektiv betal-per-klick-annonsering (PPC) på Google, Facebook och andra plattformar. Våra kampanjer är optimerade för att maximera din ROI.",
  },
  {
    title: "E-handel",
    path: "e-handel",
    icon: <AllInboxIcon />,
    text: "Vi bygger och optimerar e-handelslösningar som ger dina kunder en sömlös shoppingupplevelse. Oavsett om du behöver en helt ny butik eller förbättring av en befintlig, så har vi lösningen.",
  },
  {
    title: "UX-design",
    icon: <FindInPageIcon />,
    path: "ux-design",
    text: "Vi skapar användarupplevelser som engagerar dina besökare och gör det enkelt för dem att navigera och utföra handlingar på din webbplats. God UX-design leder till högre konverteringar.",
  },
];

const SeoServiceComponent = () => {
  const classes = useStyles();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => <ul className={classes.slickDots}> {dots} </ul>, // Custom position for dots
  };

  return (
    <div className={classes.carouselContainer}>
      <Slider {...settings}>
        {services.map((service, index) => (
          <div key={index} className={classes.carouselItem}>
            <div className={classes.icon}>{service.icon}</div>
            <h2 className={classes.title}>{service.title}</h2>
            <p className={classes.text}>{service.text}</p>
            <Button
              href={service.path}
              variant="contained"
              className={classes.button}
            >
              Läs mer
            </Button>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SeoServiceComponent;
