import React, { useState } from "react";
import MainComp from "../../components/MainComp/MainComp";
import { BsLaptop } from "react-icons/bs";
import { getCustomerData } from "../../redux-toolkit/customer/customerSlice";
import { useSelector } from "react-redux";
import AboutUs from "../../components/AboutUs/AboutUs";
import Tips from "../../components/Tips/Tips";
import Nav from "../../components/Nav/Nav";
import Erbjuder from "../../components/Erbjuder/Erbjuder";
import Kostnadsfri from "../../components/Kostnadsfri/Kostnadsfri";
import { Helmet } from "react-helmet-async";
import { getNewsData } from "../../redux-toolkit/news/newsSlice";
import LottieBooking from "../../LottieAnimation/LottieBooking";
import booking from "../../utils/animation/Booking-time.json";
import BookingModal from "../../components/BookingModal";

const Home = ({ videoText }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const mainquery = "webbdesign eller utveckling";
  const newsData = useSelector(getNewsData);
  const [content, setContent] = useState({
    metaTitle: "Få professionell hjälp med webbdesign och utveckling.",
    metaContent:
      "Vi erbjuder skräddarsydda lösningar inom webbdesign och webbutveckling - från design till implementering och digital marknadsföring.",
    query: "webbdesign eller utveckling",
    formTitle: "Webbyråtjänster",
    subTitle2:
      "Din expert inom webbdesign och utveckling - allt från SEO till digital marknadsföring.",
    subTitle3: `Behöver du hjälp med ${mainquery}?`,
  });
  const customerData = useSelector(getCustomerData);
  const services =
    "webbdesign, webbutveckling, SEO, digital marknadsföring och underhåll av webbplatser.";

  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebDesignAgency",
    name: "Centrum för Alla",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Hisingsgatan 10",
      addressLocality: "Göteborg",
      addressRegion: "Sweden",
      postalCode: "41702",
      addressCountry: "SE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "57.71659765082482",
      longitude: "11.94740491088092",
    },
    url: "www.centrumforalla.se",
    telephone: "+46317539060",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    priceRange: "5000kr-50000kr",
    image: [
      "https://images.pexels.com/photos/3651376/pexels-photo-3651376.jpeg?auto=compress&cs=tinysrgb&w=1300",
    ],
  };

  return (
    <div>
      <script type="application/ld+json">
        {JSON.stringify(articleStructuredData)}
      </script>

      <Helmet>
        <meta charSet="utf-8" />
        <title>{content.metaTitle}</title>
        <meta name="description" content={content.metaContent} />
        <meta property="og:url" content="https://centrumforalla.se" />
        <meta property="og:description" content={content.metaContent} />
        <meta
          property="og:image"
          content="https://images.pexels.com/photos/3651376/pexels-photo-3651376.jpeg?auto=compress&cs=tinysrgb&w=1300"
        />
        <link hrefLang="sv" rel="canonical" href="https://centrumforalla.se" />
      </Helmet>

      <div className="Nav">
        <Nav />
      </div>

      <div className="Hem">
        <MainComp
          query={content.query}
          formTitle={content.formTitle}
          icon={<BsLaptop />}
          subTitle={`Välkommen till ${customerData.business}`}
          subTitle2={content.subTitle2}
          subTitle3={content.subTitle3}
          text={`Vi är en webbyrå som kan allt kring ${mainquery}. Vi erbjuder ${services}. Vi erbjuder en helhetslösning som passar dig och din verksamhet.`}
          subTitle4={`Helhetslösning för ${mainquery}`}
          text1={`Vårt företag har över 20 års erfarenhet inom webbdesign och utveckling. Vi samarbetar med marknadsledande plattformar och erbjuder toppmoderna digitala lösningar.`}
          subTitle5={"Våra tjänster"}
          text2={` ${services} - allt detta kan vi hjälpa dig med.`}
        />
      </div>

      <div className="Om">
        <AboutUs
          query={mainquery.toUpperCase()}
          oss={`Vilka är vi? Och hur hjälper vi dig med ${mainquery}?`}
          om={`Vi är ditt självklara val för ${mainquery} med över 20 års erfarenhet.`}
        />
      </div>

      <div className="Tjänster">
        <Erbjuder />
      </div>

      {newsData && (
        <div className="Tips">
          <Tips query={mainquery.toUpperCase()} newsData={newsData} />
        </div>
      )}

      <div className="booking-lottie">
        <div className="booking-content">
          <h2>Behöver du hjälp med {mainquery}?</h2>
          <h4>
            Vi erbjuder en kostnadsfri konsultation för att diskutera hur vi kan
            hjälpa dig med ditt {mainquery}. Konsultationen tar cirka 45 minuter
            och du får en skräddarsydd offert på plats.
          </h4>
        </div>
        <LottieBooking lotti={booking} height={400} width={400} />
      </div>

      <div className="Kostnadsfri">
        <Kostnadsfri
          vad={"konsultation"}
          mainquery={mainquery}
          text={`${videoText}${mainquery}.`}
        />
      </div>
    </div>
  );
};

export default Home;
