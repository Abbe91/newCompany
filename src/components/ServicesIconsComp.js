import React from "react";
import { makeStyles } from "@material-ui/core";

const services = [
  { title: "Webbdesign", path: "/webbdesign" },
  { title: "SEO-tjänster", path: "/seo-tjanster" },
  { title: "Digital Marknadsföring", path: "/digital-marknadsforing" },
  { title: "Innehållsskapande", path: "/innehallsskapande" },
  { title: "PPC-annonsering", path: "/ppc-annonsering" },
  { title: "E-handel", path: "/e-handel" },
  { title: "UX-design", path: "/ux-design" },
];

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center", // Center horizontally
    alignItems: "center",
    width: "100%",
    margin: "0 auto", // Center the container horizontally
  },
  textSection: {
    paddingRight: "2rem",
    maxWidth: "60%",
  },
  servicesSection: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    maxWidth: "40%",
  },
  btn: {
    background: "#00a7ac",
    color: "white",
    border: "none",
    fontSize: "0.7rem",
    width: "6.5rem",
    height: "2rem",
    borderRadius: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    marginBottom: "0.5rem",
    "&:hover": {
      opacity: 0.9,
    },
  },
  btnContainer: {
    textAlign: "center",
  },
  title: {
    marginBottom: "1rem",
    fontSize: "1.5rem", // Adjusted for better readability
    fontWeight: "bold",
  },
  description: {
    marginBottom: "1rem",
    fontSize: "0.9rem", // Adjusted for better readability
    lineHeight: "1.5",
  },
});

const ServicesIconsComp = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <section className={classes.container}>
        <div className={classes.textSection}>
          <h2 className={classes.title}>Vilka tjänster erbjuder vi?</h2>
          <p className={classes.description}>
            På Centrum för Alla erbjuder vi en rad tjänster som hjälper dig att
            lyckas i den digitala världen. Från webbdesign och SEO-tjänster till
            PPC-annonsering och e-handel, vi ser till att din online-närvaro
            blir optimerad och effektiv.
          </p>
        </div>
        <div className={classes.servicesSection}>
          {services.map((service, i) => (
            <div key={i} className={classes.btnContainer}>
              <button className={classes.btn}>
                <a
                  href={service.path}
                  title={service.title}
                  className={classes.btn}
                  style={{ color: "white", textDecoration: "none" }}
                >
                  {service.title}
                </a>
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServicesIconsComp;
