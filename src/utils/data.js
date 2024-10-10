import React from "react";
import { BiCodeAlt } from "react-icons/bi"; // Changed to a more fitting icon
import { AiOutlineSearch } from "react-icons/ai";
import { MdOutlineCampaign } from "react-icons/md";
import { BsFillPencilFill } from "react-icons/bs";
import { MdAds } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";

export const navlinks = [
  {
    id: 2,
    label: "Webbdesign",
    path: "/webbdesign",
  },
  {
    id: 3,
    label: "SEO",
    path: "/seo",
  },
  {
    id: 4,
    label: "Digital Marknadsföring",
    path: "/digital-marknadsforing",
  },
  {
    id: 5,
    label: "Innehållsskapande",
    path: "/innehallsskapande",
  },
  {
    id: 6,
    label: "PPC-annonsering",
    path: "/ppc-annonsering",
  },
  {
    id: 7,
    label: "E-handel",
    path: "/e-handel",
  },
  {
    id: 8,
    label: "UX-design",
    path: "/ux-design",
  },
];

export const erbjuder = [
  {
    id: 22,
    title: "Professionell Webbdesign",
    icon: <BiCodeAlt />,
  },
  {
    id: 55,
    title: "SEO-optimering för Högre Ranking",
    icon: <AiOutlineSearch />,
  },
  {
    id: 33,
    title: "Effektiv Digital Marknadsföring",
    icon: <MdOutlineCampaign />,
  },
  {
    id: 43,
    title: "Engagerande Innehållsskapande",
    icon: <BsFillPencilFill />,
  },
];
export const customerReviews = [
  {
    id: 1,
    service: "Webbdesign",
    kund: "Anna Svensson",
    path: "/webbdesign",
    comment:
      "Centrum för alla har skapat en fantastisk webbplats för vårt företag. Den är både snygg och responsiv, och vi får massor av positiva kommentarer från våra kunder.",
  },
  {
    id: 2,
    service: "SEO",
    kund: "Erik Nilsson",
    path: "/seo",
    comment:
      "Tack vare Centrum för alla har vår webbplats klättrat flera placeringar på Google. Vi får nu mycket mer organisk trafik och fler leads.",
  },
  {
    id: 3,
    service: "Digital marknadsföring",
    kund: "Sofia Larsson",
    comment:
      "Centrum för alla har hjälpt oss att nå ut till vår målgrupp på ett helt nytt sätt. Våra sociala medier-kampanjer har varit mycket framgångsrika.",
  },
  {
    id: 4,
    service: "Innehållsskapande",
    kund: "Magnus Svensson",
    comment:
      "Centrum för alla levererar alltid högkvalitativa och engagerande texter. De förstår verkligen vårt varumärke och vår målgrupp.",
  },
  {
    id: 5,
    service: "PPC-annonsering",
    kund: "Elin Karlsson",
    comment:
      "Våra PPC-kampanjer har gett fantastiska resultat tack vare Centrum för alla. Vi har fått många nya kunder och en hög avkastning på investeringen.",
  },
  {
    id: 6,
    service: "E-handel",
    kund: "Johan Eriksson",
    comment:
      "Centrum för alla hjälpte oss att bygga en professionell e-handelsbutik. Deras kunskap om användarupplevelse har gjort stor skillnad.",
  },
  {
    id: 7,
    service: "UX-design",
    kund: "Linda Andersson",
    comment:
      "Vår webbplats är nu mycket mer användarvänlig tack vare Centrum för alla. Besökarna stannar längre och konverterar bättre.",
  },
  {
    id: 8,
    service: "SEO och Webbdesign",
    kund: "Oskar Johansson",
    comment:
      "Centrum för alla har hjälpt oss att skapa en webbplats som både ser bra ut och rankar högt på Google. Vi är mycket nöjda med resultatet.",
  },
  {
    id: 9,
    service: "Digital marknadsföring och Innehållsskapande",
    kund: "Elisabeth Nilsson",
    comment:
      "Centrum för alla har en helhetslösning för vår digitala marknadsföring. De skapar engagerande innehåll och driver trafik till vår webbplats.",
  },
  {
    id: 10,
    service: "PPC och E-handel",
    kund: "Fredrik Larsson",
    comment:
      "Tack vare Centrum för alla har vår e-handelsbutik ökat sin försäljning avsevärt. Deras PPC-kampanjer genererar många nya kunder.",
  },
];
