import React, { lazy } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./MainComp.css";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useDispatch } from "react-redux";
import Faq from "../faq/Faq";
import { MdArrowForwardIos } from "react-icons/md";
import { setServices } from "../../redux-toolkit/snabbkollenSlice";
import HeroImage from "../../utils/images/seoimages/hero-img.png";

const MainComp = ({ subTitle5, text2, city, formTitle }) => {
  const Divider = lazy(() => import("./Divider"));
  const Arbetsprocessen = lazy(() => import("../Arbetsprocessen"));
  const MainUseComp = lazy(() => import("./MainUseComp"));
  const LogoAnimation = lazy(() => import("./LogoAnimation"));
  const Helhetslosning = lazy(() => import("../HelhetslosningMarketing"));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const handleSearchChange = (e, value) => {
    e.preventDefault();
    dispatch(setServices(value));
    const currentUrl = location.pathname + location.search;
    navigate(
      `/forfragan?tjanst=${encodeURIComponent(value)}&path=${encodeURIComponent(currentUrl)}`
    );
  };
  return (
    <section className="root">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Vi hjälper dig att nå dina mål</h1>
          <div className="hero-points">
            <p>. Skräddarsydd strategi</p>
            <p>. Optimerad marknadsföring</p>
            <p>. Kontinuerlig support</p>
          </div>
          <div className="search-bar">
            <Autocomplete
              onChange={handleSearchChange}
              background="white"
              freeSolo
              id="free-solo-2-demo"
              disableClearable
              options={servicesArray.map((option) => option.title)}
              renderInput={(params) => (
                <TextField
                  className="search-input"
                  {...params}
                  placeholder="Hur kan vi hjälpa dig"
                  margin="normal"
                  variant="standard"
                  InputProps={{
                    ...params.InputProps,
                    type: "search",
                    disableUnderline: true,
                  }}
                />
              )}
            />
            <button onClick={() => navigate("/forfragan")}>
              <MdArrowForwardIos style={{ fontSize: "1rem" }} />
            </button>
          </div>
        </div>
        <div className="hero-image">
          <img src={HeroImage} alt="Hero" />
        </div>
      </div>
      <LogoAnimation />
      <MainUseComp formTitle={formTitle} />
      <Divider />
      <Arbetsprocessen />
      <Faq city={city} />
      <section className="content-new-container">
        <div>
          <h4>{subTitle5}</h4>
          <p>
            {text2} Behöver du hjälp med att{" "}
            <a href="/analys" title="analys" style={{ color: "inherit" }}>
              Analys och Strategi
            </a>{" "}
            och Kontinuerlig Uppföljning och Support{" "}
            <a
              href="/kontinuerlig"
              title="kontinuerlig"
              style={{ color: "inherit" }}
            >
              vi erbjuda våra kunder en oslagbar fördel när det gäller
              sökmotoroptimering (SEO) och online-marknadsföring.
            </a>{" "}
            (SEO) och online-marknadsföring.
          </p>
        </div>

        <div>
          <h4>Skapande av Hemsida</h4>
          <p>
            {/* {text1} */}
            Att ta hand om ett{" "}
            <a href="/hemsida" title="Hemsida" style={{ color: "inherit" }}>
              Hemsida
            </a>{" "}
            Vi skapar en anpassad hemsida för ditt företag som speglar din
            företagsidentitet och inkluderar all nödvändig information om dina
            tjänster.
          </p>
        </div>

        <div id="wecando">
          <h4>Varför Välja Oss?</h4>
          <p>
            {/* {text1} */}
            Unikt Nätverk av Domäner: Med vårt omfattande nätverk av över 200
            centrumdomäner får ditt företag en betydande SEO-fördel.{" "}
            <a
              href="/skraddarsydda-losningar"
              title="Skräddarsydda Lösningar"
              style={{ color: "inherit" }}
            >
              Skräddarsydda Lösningar: Vi anpassar våra tjänster efter dina
              specifika behov och mål.
            </a>{" "}
            <a
              href="/expertis-och-erfarenhet"
              title="Expertis och Erfarenhet"
              style={{ color: "inherit" }}
            >
              Expertis och Erfarenhet: Vårt team har den erfarenhet och kunskap
              som krävs för att hjälpa ditt företag att lyckas online.
            </a>{" "}
            <a
              href="/kontinuerlig-support"
              title="kontinuerlig-support"
              style={{ color: "inherit" }}
            >
              Kontinuerlig Support: Vi erbjuder långsiktig support och
              uppföljning för att säkerställa att din digitala närvaro
              fortsätter att växa och utvecklas.
            </a>
          </p>
        </div>

        <div>
          <h4>Vår Vision</h4>
          <p>
            {/* {text1} */}
            Vår vision är att stärka lokala företag genom att ge dem de verktyg
            och resurser de behöver för att nå sin fulla potential online. Vi
            tror att varje företag, oavsett storlek eller bransch, förtjänar att
            synas och höras i den digitala världen. Genom att skapa anpassade
            hemsidor och publicera dem på våra centrumdomäner, hjälper vi våra
            kunder att bli mer synliga för sina potentiella kunder och att växa
            sin verksamhet.
          </p>
        </div>
      </section>
      <Helhetslosning />
    </section>
  );
};

export default MainComp;
const servicesArray = [
  {
    title: "Webbdesign",
  },
  {
    title: "Sökmotoroptimering (SEO)",
  },
  {
    title: "Digital marknadsföring",
  },
  {
    title: "Sociala medier hantering",
  },
  {
    title: "E-postmarknadsföring",
  },
  {
    title: "PPC-annonsering (Pay-per-click)",
  },
  {
    title: "Innehållsstrategi",
  },
  {
    title: "Webbanalys",
  },
];
