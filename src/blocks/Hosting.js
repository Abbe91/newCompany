import React, { useEffect, useState } from "react";
import MainComp from "../components/MainComp/MainComp";
import { BsHouseDoor } from "react-icons/bs";
import { getCustomerData } from "../redux-toolkit/customer/customerSlice";
import { useSelector } from "react-redux";
import AboutUs from "../components/AboutUs/AboutUs";
import Tips from "../components/Tips/Tips";
import Nav from "../components/Nav/Nav";
import Erbjuder from "../components/Erbjuder/Erbjuder";
import { getElement } from "../redux-toolkit/scrollElement/scrollElementSlice";
import Kostnadsfri from "../components/Kostnadsfri/Kostnadsfri";
import { Helmet } from "react-helmet-async";
import { getNewsData, getBingNews } from "../redux-toolkit/news/newsSlice";
import LottieBooking from "../LottieAnimation/LottieBooking";
import booking from "../utils/animation/Booking-time.json";
import BookingModal from "../components/BookingModal";

const Hosting = ({ videoText }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const mainquery = "hosting";
  const newsData = useSelector(getNewsData);
  const bingNews = useSelector(getBingNews);
  const [content, setContent] = useState({
    metaTitle: "Hosting - Pålitlig och snabb webbhotellstjänst",
    metaContent:
      "Vill du ha en pålitlig och snabb webbhotellstjänst? Våra hosting-experter hjälper dig att säkerställa att din webbplats alltid är tillgänglig och presterar på topp.",
    query: "hosting",
    formTitle: "Få en kostnadsfri hosting-analys",
    subTitle2: "Förbättra din webbplats prestanda och tillgänglighet.",
    subTitle3: `Behöver du professionell hjälp med ${mainquery}?`,
  });
  const customerData = useSelector(getCustomerData);

  const services =
    "Webbdesign, SEO-tjänster, Digital Marknadsföring, Innehållsskapande, PPC-annonsering, E-handel, och UX-design";
  const element = useSelector(getElement);
  useEffect(() => {
    document
      .querySelector(`.${element}`)
      .scrollIntoView({ behavior: "smooth" });
  }, [element]);
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{content.metaTitle}</title>
        <meta name="description" content={content.metaContent} />
        <link
          hrefLang="sv"
          rel="canonical"
          href="https://centrumforalla.se/hosting"
        />
      </Helmet>
      <div className="Nav">
        <Nav />
      </div>
      <div className="Hem">
        <MainComp
          query={content.query}
          formTitle={content.formTitle}
          icon={<BsHouseDoor />}
          subTitle={`Välkommen till ${customerData.business}`}
          subTitle2={content.subTitle2}
          subTitle3={content.subTitle3}
          text={`Låt oss ta hand om din ${mainquery}. Med vår expertis och erfarenhet kan du känna dig trygg med att din webbplats är i goda händer. Vi erbjuder en helhetslösning som inkluderar allt från serverhantering till säkerhetsövervakning. Vårt mål är att säkerställa att din webbplats alltid är tillgänglig och presterar på topp.`}
          subTitle4={`Experter på ${mainquery}`}
          text1={`Varför välja oss?`}
          text2={`* Djupgående kunskap om hosting`}
          text3={`* Personlig service och support`}
          text4={`* Mätbara resultat`}
          subTitle5={"Våra tjänster"}
          text5={`Vi erbjuder följande tjänster: ${services}`}
        />
      </div>

      <div className="Om">
        <AboutUs
          query={mainquery.toUpperCase()}
          oss={`Vem är vi? Vi är ett team av erfarna hosting-specialister med en passion för att hjälpa företag att nå sina digitala mål.`}
          om={`Med över 20 års erfarenhet inom branschen har vi hjälpt hundratals företag att förbättra sin webbplats prestanda och tillgänglighet genom pålitliga hosting-tjänster.`}
        />
      </div>
      {newsData && (
        <div className="Tips">
          <Tips query={mainquery.toUpperCase()} newsData={newsData} />
        </div>
      )}
      <div className="Tjänster">
        <Erbjuder />
      </div>

      <div className="booking-lottie">
        <div className="booking-content">
          <h2>Vill du locka fler besökare till din webbplats?</h2>
          <h4>
            Boka en kostnadsfri hosting-analys och upptäck hur du kan förbättra
            din online-närvaro och generera mer trafik.
          </h4>
          {/* **This is the button that is commented out ( I have to fix it to go to my booking system**
          <button
            type="button"
            onClick={() => setModalOpen(!modalOpen)}
            style={{ display: modalOpen ? "none" : "block" }}
          >
            BOKA
          </button>
          */}
        </div>
        <LottieBooking lotti={booking} height={400} width={400} />
        {modalOpen && (
          <BookingModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
        )}
      </div>

      <div className="Kostnadsfri">
        <Kostnadsfri
          vad={"Värdering"}
          mainquery={mainquery}
          text={`${videoText}${mainquery}.`}
        />
      </div>
    </div>
  );
};

export default Hosting;
