import React, { useState } from "react";
import "./AboutUs.css";
import { getCustomerData } from "../../redux-toolkit/customer/customerSlice";
import { useSelector } from "react-redux";

const AboutUs = ({ query, oss, om }) => {
  const customerData = useSelector(getCustomerData);
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="aboutUs">
      <div className="aboutUs-info">
        <h2 className="aboutUs-title">{query}</h2>
        <p className="aboutUs-intro">
          Hos <strong>{customerData.business}</strong> erbjuder vi {om}.
        </p>
        <h5 className="aboutUs-services">
          Vi tillhandahåller professionella webbtjänster för företag och privatpersoner.
        </h5>
        <p className="aboutUs-details">
          Behöver du hjälp med att skapa en ny webbplats eller optimera din befintliga webbplats? Vi erbjuder en mängd tjänster som{" "}
          <a href="/webbutveckling" className="aboutUs-link" title="webbutveckling">
            webbutveckling
          </a>,{" "}
          <a href="/seo" className="aboutUs-link" title="SEO">
            SEO
          </a>,{" "}
          <a href="/digital-marknadsforing" className="aboutUs-link" title="digital marknadsföring">
            digital marknadsföring
          </a> och mycket mer. Våra lösningar är skräddarsydda för att möta dina specifika behov, oavsett om du behöver en enkel hemsida eller en avancerad e-handelsplattform.
        </p>
        <p className="aboutUs-details">
          Vi erbjuder även{" "}
          <a href="/konsultation" title="konsultation" className="aboutUs-link">
            kostnadsfri konsultation
          </a> för att hjälpa dig att avgöra vilket paket som bäst passar ditt företag. Låt oss ta hand om tekniken så att du kan fokusera på det som är viktigast för ditt företag.
        </p>

        <div className="aboutUs-contact">
          <div className="aboutUs-address">
            <h4>Adress</h4>
            <div>
              <p>{customerData.adress}</p>
              <p>
                {customerData.zip} {customerData.city}
              </p>
            </div>
          </div>
          <div className="aboutUs-contact-info">
            <h4>Kontakt</h4>
            <p>{customerData.phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
