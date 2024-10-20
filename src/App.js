import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Partners from "./components/Partners";
import { getContentData } from "./redux-toolkit/content/contentSlice";
import { useSelector } from "react-redux";
import Links from "./internalLinks/Links";
import { Circles } from "react-loader-spinner";
import SeoServiceComponent from "./components/SeoServiceComponent";

const Seo = lazy(() => import("./blocks/Seo"));
const Marknadsforeing = lazy(() => import("./blocks/Marknadsforeing"));
const Ppc = lazy(() => import("./blocks/Ppc"));
const SocialMedia = lazy(() => import("./blocks/Socialmedia"));
const Innehallsmarknadsforing = lazy(
  () => import("./blocks/Innehallsmarknadsforing")
);
const Webbdesignochutveckling = lazy(
  () => import("./blocks/Webbdesignochutveckling")
);
const Webbutveckling = lazy(() => import("./blocks/Webbutveckling"));
const Ehandel = lazy(() => import("./blocks/ehandel"));
const Hosting = lazy(() => import("./blocks/Hosting"));
const Webbanalys = lazy(() => import("./blocks/Webbanalys"));
const Cms = lazy(() => import("./blocks/Cms"));
const Underhall = lazy(() => import("./blocks/Underhall"));
const Mobilanpassning = lazy(() => import("./blocks/Mobilanpassning"));
const Support = lazy(() => import("./blocks/Support"));
const Webbdesign = lazy(() => import("./blocks/Webbdesign"));
const Digitalmarknadsforing = lazy(
  () => import("./blocks/Digitalmarknadsforing")
);
const Innehallsskapande = lazy(() => import("./blocks/Innehallsskapande"));
const Ppcannonsering = lazy(() => import("./blocks/Ppcannonsering"));
const Uxdesign = lazy(() => import("./blocks/Uxdesign"));
const Seogoteborg = lazy(() => import("./blocks/Goteborg/SeoGoteborg"));

//I will delete this
const LeadsDetails = lazy(() => import("./pages/LeadsDetails"));
const PrivatRoute = lazy(() => import("./pages/PrivatRoute"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const DodsboKopesGoteborg = lazy(
  () => import("./blocks//Goteborg/DodsboKopesGoteborg")
);
const KoperDodsbonGoteborg = lazy(
  () => import("./blocks/Goteborg/KoperDodsbonGoteborg")
);
const AtervinningscentralGoteborg = lazy(
  () => import("./pages/InfoPages/AtervinningscentralGoteborg")
);
const Atervinningscentral = lazy(
  () => import("./pages/InfoPages/Atervinningscentral")
);
const Atervinningsstation = lazy(
  () => import("./pages/InfoPages/Atervinningsstation")
);
const Uppkopdodsbogoteborg = lazy(
  () => import("./components/uppkopdodsbogoteborg/Uppkopdodsbogoteborg")
);
const ForFragan = lazy(() => import("./components/ForFragan"));
const ServicesIconsComp = lazy(() => import("./components/ServicesIconsComp"));
const Error = lazy(() => import("./pages/Error/Error"));
const Home = lazy(() => import("./pages/Home/Home"));
const Footer = lazy(() => import("./components/Footer/Footer"));
const Tommadodsbogoteborg = lazy(
  () => import("./components/tommadodsbogoteborg/Tommadodsbogoteborg")
);
const Tommabohag = lazy(() => import("./components/Tommabohag"));

const Besok = lazy(() => import("./components/Besok"));
const BortforslingDodsboKungalv = lazy(
  () => import("./blocks/kungalv/BortforslingDodsboKungalv")
);
const HjalpDodsboKungalv = lazy(
  () => import("./blocks/kungalv/HjalpDodsboKungalv")
);
const SaljaDodsboKungalv = lazy(
  () => import("./blocks/kungalv/SaljaDodsboKungalv")
);
const TommaDodsboKungalv = lazy(
  () => import("./blocks/kungalv/TommaDodsboKungalv")
);
const VarderaDodsboKungalv = lazy(
  () => import("./blocks/kungalv/VarderaDodsboKungalv")
);
const UppkopDodsboKungalv = lazy(
  () => import("./blocks/kungalv/UppkopDodsboKungalv")
);
const Bortforslingdodsboale = lazy(
  () => import("./blocks/ale/Bortforslingdodsboale")
);
const Hjalpdodsboale = lazy(() => import("./blocks/ale/Hjalpdodsboale"));
const Saljadosboale = lazy(() => import("./blocks/ale/Saljadosboale"));
const Tommadodsboale = lazy(() => import("./blocks/ale/Tommadodsboale"));
const Uppkopdodsboale = lazy(() => import("./blocks/ale/Uppkopdodsboale"));
const Varderadodsboale = lazy(() => import("./blocks/ale/Varderadodsboale"));

const Bortforslingdodsbofrolunda = lazy(
  () => import("./blocks/frolunda/Bortforslingdodsbofrolunda")
);
const Saljadodsbofrolunda = lazy(
  () => import("./blocks/frolunda/Saljadodsbofrolunda")
);
const Tommadodsbofrolunda = lazy(
  () => import("./blocks/frolunda/Tommadodsbofrolunda")
);
const Uppkopdodsbofrolunda = lazy(
  () => import("./blocks/frolunda/Uppkopdodsbofrolunda")
);
const Varderadodsbofrolunda = lazy(
  () => import("./blocks/frolunda/Varderadodsbofrolunda")
);
const Bortforslinghisingen = lazy(
  () => import("./blocks/Hisingen/Bortforslinghisingen")
);
const Saljadodsbohisingen = lazy(
  () => import("./blocks/Hisingen/Saljadodsbohisingen")
);
const Tommadodsbohisingen = lazy(
  () => import("./blocks/Hisingen/Tommadodsbohisingen")
);
const Uppkopdodsbohisingen = lazy(
  () => import("./blocks/Hisingen/Uppkopdodsbohisingen")
);
const Varderadodsbohisingen = lazy(
  () => import("./blocks/Hisingen/Varderadodsbohisingen")
);
const ExternaLankar = lazy(
  () => import("./components/externalLinks/ExternaLankar")
);
const Dodsboanmalan = lazy(() => import("./pages/InfoPages/Dodsboanmalan"));
const Dodsbodelagare = lazy(() => import("./pages/InfoPages/Dodsbodelagare"));
const Dodsboet = lazy(() => import("./pages/InfoPages/Dodsboet"));
const SaljaDodsbo = lazy(() => import("./pages/InfoPages/SaljaDodsbo"));
//
const DodsboUppkopare = lazy(() => import("./blocks/Goteborg/DodsboUppkopare"));
const Dodsbouppkoparegoteborg = lazy(
  () => import("./blocks/Goteborg/Dodsbouppkoparegoteborg")
);
const Tommerdodsbo = lazy(() => import("./blocks/Goteborg/Tommerdodsbo"));
const Dodsbofirma = lazy(() => import("./blocks/Goteborg/Dodsbofirma"));
//
const Uppkopavbohag = lazy(() => import("./blocks/Goteborg/Uppkopavbohag"));
const Tommadodsbo = lazy(() => import("./blocks/Goteborg/Tommadodsbo"));
const Foretagsomkoperbohag = lazy(
  () => import("./blocks/Goteborg/Foretagsomkoperbohag")
);
//
const Oppetider = lazy(() => import("./components/Oppetider"));
const Recensioner = lazy(() => import("./components/Recensioner"));
const Arbetsprocessen = lazy(() => import("./components/Arbetsprocessen"));
const ImagesServicesComponent = lazy(
  () => import("./components/ImagesServicesComponent")
);
const Helhetslosningdodsbo = lazy(
  () => import("./components/Helhetslosningdodsbo")
);
const UppkopAvDodsbo = lazy(() => import("./blocks/Goteborg/UppkopAvDodsbo"));
const Bortforslingdodsbokungsbacka = lazy(
  () => import("./blocks/kungsbacka/Bortforslingdodsbokungsbacka")
);
const Dodsbofirmakungsbacka = lazy(
  () => import("./blocks/kungsbacka/Dodsbofirmakungsbacka")
);
const HamtardodsboKungsbacka = lazy(
  () => import("./blocks/kungsbacka/HamtardodsboKungsbacka")
);
const Koperdodsbokungsbacka = lazy(
  () => import("./blocks/kungsbacka/Koperdodsbokungsbacka")
);
const Saljadodsbokungsbacka = lazy(
  () => import("./blocks/kungsbacka/Saljadodsbokungsbacka")
);
const TommadodsboKungsbacka = lazy(
  () => import("./blocks/kungsbacka/TommadodsboKungsbacka")
);
const Tommerdodsbokungsbacka = lazy(
  () => import("./blocks/kungsbacka/Tommerdodsbokungsbacka")
);
const Bortforslingdodsbomolndal = lazy(
  () => import("./blocks/Molndal/Bortforslingdodsbomolndal")
);
const Dodsbofirmamolndal = lazy(
  () => import("./blocks/Molndal/Dodsbofirmamolndal")
);
const Kopadodsbomolndal = lazy(
  () => import("./blocks/Molndal/Kopadodsbomolndal")
);
const Rojadodsbomolndal = lazy(
  () => import("./blocks/Molndal/Rojadodsbomolndal")
);
const Saljadodsbomolndal = lazy(
  () => import("./blocks/Molndal/Saljadodsbomolndal")
);
const Stadadodsbomolndal = lazy(
  () => import("./blocks/Molndal/Stadadodsbomolndal")
);
const Tommadodsbomolndal = lazy(
  () => import("./blocks/Molndal/Tommadodsbomolndal")
);
const Rojadodsbogoteborg = lazy(
  () => import("./blocks/Goteborg/Rojadodsbogoteborg")
);
const Stadadodsbogoteborg = lazy(
  () => import("./blocks/Goteborg/Stadadodsbogoteborg")
);
const TommerDodsboPartille = lazy(
  () => import("./blocks/Partille/TommerDodsboPartille")
);
const Bortforslingdodsbopartille = lazy(
  () => import("./blocks/Partille/Bortforslingdodsbopartille")
);
const Kopadodsbopartille = lazy(
  () => import("./blocks/Partille/Kopadodsbopartille")
);
const Rojerdodsbopartille = lazy(
  () => import("./blocks/Partille/Rojerdodsbopartille")
);
const Saljadodsbopartille = lazy(
  () => import("./blocks/Partille/Saljadodsbopartille")
);
const Stadadodsbopartille = lazy(
  () => import("./blocks/Partille/Stadadodsbopartille")
);
const Uppkopdodsbopartille = lazy(
  () => import("./blocks/Partille/Uppkopdodsbopartille")
);
const Varderadodsbokungsbacka = lazy(
  () => import("./blocks/kungsbacka/Varderadodsbokungsbacka")
);
const Bortforslingdodsbostenungssund = lazy(
  () => import("./blocks/Stenungsund/Bortforslingdodsbostenungssund")
);
const Kopadodsbostenungssund = lazy(
  () => import("./blocks/Stenungsund/Kopadodsbostenungssund")
);
const Rojadodsbostenungsund = lazy(
  () => import("./blocks/Stenungsund/Rojadodsbostenungsund")
);
const Saljadodsbostenungssund = lazy(
  () => import("./blocks/Stenungsund/Saljadodsbostenungssund")
);
const Tommadodsbostenungssund = lazy(
  () => import("./blocks/Stenungsund/Tommadodsbostenungssund")
);
const Varderadodsbostenungssund = lazy(
  () => import("./blocks/Stenungsund/Varderadodsbostenungssund")
);
const Bortforslingdodsbotrollhattan = lazy(
  () => import("./blocks/Trollhattan/Bortforslingdodsbotrollhattan")
);
const Dodsbokopestrollhattan = lazy(
  () => import("./blocks/Trollhattan/Dodsbokopestrollhattan")
);
const Dodsbotrollhattan = lazy(
  () => import("./blocks/Trollhattan/Dodsbotrollhattan")
);
const Flyttstadningtrollhattan = lazy(
  () => import("./blocks/Trollhattan/Flyttstadningtrollhattan")
);
const Saljadodsbotrollhattan = lazy(
  () => import("./blocks/Trollhattan/Saljadodsbotrollhattan")
);
const Stadningavdodsbotrollhatttan = lazy(
  () => import("./blocks/Trollhattan/Stadningavdodsbotrollhatttan")
);
const Tommadodsbotrollhattan = lazy(
  () => import("./blocks/Trollhattan/Tommadodsbotrollhattan")
);
const Varderadodsbotrollhattan = lazy(
  () => import("./blocks/Trollhattan/Varderadodsbotrollhattan")
);

const Flyttstadningavbohag = lazy(
  () => import("./blocks/flyttstadning/Flyttstadningavbohag")
);
const Varderingavdodsbo = lazy(
  () => import("./pages/InfoPages/Varderingavdodsbo")
);
const Flyttstadning = lazy(
  () => import("./blocks/flyttstadning/Flyttstadning")
);
const Flyttstadninggoteborg = lazy(
  () => import("./blocks/flyttstadning/Flyttstadninggoteborg")
);
const Flyttstadningkungalv = lazy(
  () => import("./blocks/flyttstadning/Flyttstadningkungalv")
);
const Varderadodsbo = lazy(() => import("./components/Varderadodsbo"));
const Bortforslingdodsbo = lazy(
  () => import("./components/Bortforslingdodsbo")
);
const Saneradodsbo = lazy(() => import("./components/Saneradodsbo"));
const Koperdodsbogoteborg = lazy(
  () => import("./blocks/Goteborg/Koperdodsbogoteborg")
);
const Flytta = lazy(() => import("./components/Flytta"));
const SaljaDodsbon = lazy(() => import("./components/SaljaDodsbo"));
const BookingModal = lazy(() => import("./components/BookingModal"));
const Tommahusgoteborg = lazy(
  () => import("./blocks/Goteborg/Tommahusgoteborg")
);
const Tommalagenhetgoteborg = lazy(
  () => import("./blocks/Goteborg/Tommalagenhetgoteborg")
);
const TommaHusKungsbacka = lazy(
  () => import("./blocks/kungsbacka/TommaHusKungsbacka")
);

const Tommerhem = lazy(() => import("./blocks/Goteborg/Tommerhem"));
const TommerHushall = lazy(() => import("./blocks/Goteborg/TommerHushall"));
const Tommerhushallgoteborg = lazy(
  () => import("./blocks/Goteborg/Tommerhushallgoteborg")
);
const Tommerhemgoteborg = lazy(
  () => import("./blocks/Goteborg/Tommerhemgoteborg")
);
const Bortforsling = lazy(() => import("./blocks/Goteborg/Bortforsling"));
const Flyttfirmakungalv = lazy(
  () => import("./blocks/flytt/Flyttfirmakungalv")
);
const Flyttfirmaoffert = lazy(() => import("./blocks/flytt/Flyttfirmaoffert"));
const Flyttfirmagoteborg = lazy(
  () => import("./blocks/flytt/Flyttfirmagoteborg")
);
//
const Tommerdodsbonlerum = lazy(
  () => import("./blocks/lerum/Tommerdodsbonlerum")
);
const Koperdodsbonlerum = lazy(
  () => import("./blocks/lerum/Koperdodsbonlerum")
);
const Koperdodsbouddevalla = lazy(
  () => import("./blocks/uddevalla/Koperdodsbouddevalla")
);
const Tommerdodsbouddevalla = lazy(
  () => import("./blocks/uddevalla/Tommerdodsbouddevalla")
);
const TommerDodsboGoteborg = lazy(
  () => import("./blocks/Goteborg/TommerDodsboGoteborg")
);
const TommaDodsboKortedala = lazy(
  () => import("./blocks/kortedala//TommaDodsboKortedala")
);
// new info pages
const Atervinning = lazy(() => import("./pages/InfoPages/Atervinning"));
const Avfallshantering = lazy(
  () => import("./pages/InfoPages/Avfallshantering")
);
const App = () => {
  const contentData = useSelector(getContentData);
  return (
    <div className="App">
      <Suspense
        fallback={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
              width: "100vw",
            }}
          >
            <Circles height="80" width="80" color="#00a7ac" />
          </div>
        }
      >
        <Router>
          <Routes>
            <Route
              path="/"
              element={<Home videoText={contentData?.videoText} />}
            />
            <Route
              path="/seo"
              element={<Seo videoText={contentData?.videoText} />}
            />
            <Route
              path="/marknadsforeing"
              element={<Marknadsforeing videoText={contentData?.videoText} />}
            />
            <Route
              path="/ppc"
              element={<Ppc videoText={contentData?.videoText} />}
            />
            <Route
              path="/social-media"
              element={<SocialMedia videoText={contentData?.videoText} />}
            />
            <Route
              path="/innehallsmarknadsforing"
              element={
                <Innehallsmarknadsforing videoText={contentData?.videoText} />
              }
            />
            <Route
              path="/Webbdesignochutveckling"
              element={
                <Webbdesignochutveckling videoText={contentData?.videoText} />
              }
            />
            <Route
              path="/Webbutveckling"
              element={<Webbutveckling videoText={contentData?.videoText} />}
            />
            <Route
              path="/e-handel"
              element={<Ehandel videoText={contentData?.videoText} />}
            />
            <Route
              path="/hosting"
              element={<Hosting videoText={contentData?.videoText} />}
            />
            <Route
              path="/webbanalys"
              element={<Webbanalys videoText={contentData?.videoText} />}
            />
            <Route
              path="/cms"
              element={<Cms videoText={contentData?.videoText} />}
            />
            <Route
              path="/underhall"
              element={<Underhall videoText={contentData?.videoText} />}
            />
            <Route
              path="/mobilanpassning"
              element={<Mobilanpassning videoText={contentData?.videoText} />}
            />
            <Route
              path="/support"
              element={<Support videoText={contentData?.videoText} />}
            />
            <Route
              path="/webbdesign"
              element={<Webbdesign videoText={contentData?.videoText} />}
            />
            <Route
              path="/digital-marknadsforing"
              element={
                <Digitalmarknadsforing videoText={contentData?.videoText} />
              }
            />
            <Route
              path="/innehallsskapande"
              element={<Innehallsskapande videoText={contentData?.videoText} />}
            />
            <Route
              path="/ppc-annonsering"
              element={<Ppcannonsering videoText={contentData?.videoText} />}
            />
            <Route
              path="/ux-design"
              element={<Uxdesign videoText={contentData?.videoText} />}
            />
            <Route
              path="/seo-goteborg"
              element={<Seogoteborg videoText={contentData?.videoText} />}
            />
            {/*I will delete this*/}
            <Route path="/atervinning" element={<Atervinning />} />
            <Route
              path="/atervinningscentral"
              element={<Atervinningscentral />}
            />
            <Route
              path="/atervinningscentral-goteborg"
              element={<AtervinningscentralGoteborg />}
            />
            <Route
              path="/atervinningsstation"
              element={<Atervinningsstation />}
            />
            <Route path="/forfragan" element={<ForFragan />} />
            <Route path="/avfallshantering" element={<Avfallshantering />} />
            <Route path="/boka" element={<BookingModal />} />
            <Route
              path="flyttfirma/flyttfirma-kungalv"
              element={<Flyttfirmakungalv videoText={contentData?.videoText} />}
            />

            <Route
              path="flyttfirma/flyttfirma-goteborg"
              element={
                <Flyttfirmagoteborg videoText={contentData?.videoText} />
              }
            />
            <Route
              path="flyttfirma/flyttfirma-offert"
              element={<Flyttfirmaoffert videoText={contentData?.videoText} />}
            />
            <Route
              path="/salja-dodsbo/salja-dodsbo"
              element={<SaljaDodsbon videoText={contentData?.videoText} />}
            />
            <Route
              path="/tomma-hus/tomma-hus-kungsbacka"
              element={
                <TommaHusKungsbacka videoText={contentData?.videoText} />
              }
            />
            <Route
              path="/tomma-bohag"
              element={<Tommabohag videoText={contentData?.videoText} />}
            />
            <Route
              path="/bortforsling"
              element={<Bortforsling videoText={contentData?.videoText} />}
            />
            <Route
              path="/tommer-hem"
              element={<Tommerhem videoText={contentData?.videoText} />}
            />
            <Route
              path="/tommer-hem-goteborg"
              element={<Tommerhemgoteborg videoText={contentData?.videoText} />}
            />
            <Route
              path="/koper-dodsbon-goteborg"
              element={
                <KoperDodsbonGoteborg videoText={contentData?.videoText} />
              }
            />
            <Route
              path="/dodsbo-kopes-goteborg"
              element={
                <DodsboKopesGoteborg videoText={contentData?.videoText} />
              }
            />
            <Route
              path="/tommer-hushall"
              element={<TommerHushall videoText={contentData?.videoText} />}
            />
            <Route
              path="/tommer-hushall-goteborg"
              element={
                <Tommerhushallgoteborg videoText={contentData?.videoText} />
              }
            />
            <Route
              path="/tomma-hus/tomma-hus-goteborg"
              element={<Tommahusgoteborg videoText={contentData?.videoText} />}
            />
            <Route
              path="/tomma-lagenhet/tomma-lagenhet-goteborg"
              element={
                <Tommalagenhetgoteborg videoText={contentData?.videoText} />
              }
            />
            <Route
              path="koper-dodsbo-goteborg"
              element={
                <Koperdodsbogoteborg videoText={contentData?.videoText} />
              }
            />
            <Route
              path="tommer-dodsbo-goteborg"
              element={
                <TommerDodsboGoteborg videoText={contentData?.videoText} />
              }
            />
            <Route
              path="tomma-dodsbo-kortedala"
              element={
                <TommaDodsboKortedala videoText={contentData?.videoText} />
              }
            />
            <Route
              path="koper-dodsbo-lerum"
              element={<Koperdodsbonlerum videoText={contentData?.videoText} />}
            />
            <Route
              path="tommer-dodsbo-lerum"
              element={
                <Tommerdodsbonlerum videoText={contentData?.videoText} />
              }
            />
            <Route
              path="koper-dodsbo-uddevalla"
              element={
                <Koperdodsbouddevalla videoText={contentData?.videoText} />
              }
            />
            <Route
              path="tommer-dodsbo-uddevalla"
              element={
                <Tommerdodsbouddevalla videoText={contentData?.videoText} />
              }
            />
            <Route
              path="/sanera-dodsbo"
              element={<Saneradodsbo videoText={contentData?.videoText} />}
            />
            <Route
              path="/bortforsling-dodsbo"
              element={
                <Bortforslingdodsbo videoText={contentData?.videoText} />
              }
            />
            <Route
              path="/vardera-dodsbo"
              element={<Varderadodsbo videoText={contentData?.videoText} />}
            />
            <Route
              path="/flyttstadning-i-goteborg"
              element={
                <Flyttstadninggoteborg videoText={contentData?.videoText} />
              }
            />
            <Route
              path="/flyttstadning-i-kungalv"
              element={
                <Flyttstadningkungalv videoText={contentData?.videoText} />
              }
            />
            <Route
              path="/flyttstadning-av-bohag"
              element={
                <Flyttstadningavbohag videoText={contentData?.videoText} />
              }
            />
            <Route
              path="/flyttstadning"
              element={<Flyttstadning videoText={contentData?.videoText} />}
            />
            <Route
              path="/vardering-av-dodsbo"
              element={<Varderingavdodsbo videoText={contentData?.videoText} />}
            />
            <Route
              path="/flyttstadning-trollhattan"
              element={
                <Flyttstadningtrollhattan videoText={contentData?.videoText} />
              }
            />
            <Route
              path="/dodsbo-trollhattan"
              element={<Dodsbotrollhattan videoText={contentData?.videoText} />}
            />
            <Route
              path="/dodsbo-kopes-trollhattan"
              element={
                <Dodsbokopestrollhattan videoText={contentData?.videoText} />
              }
            />
            <Route
              path="/bortforsling-dodsbo-trollhattan"
              element={
                <Bortforslingdodsbotrollhattan
                  videoText={contentData?.videoText}
                />
              }
            />
            <Route
              path="/vardera-dodsbo-trollhattan"
              element={
                <Varderadodsbotrollhattan videoText={contentData?.videoText} />
              }
            />
            <Route
              path="/salja-dodsbo-trollhattan"
              element={
                <Saljadodsbotrollhattan videoText={contentData?.videoText} />
              }
            />
            <Route
              path="/tomma-dodsbo-trollhattan"
              element={
                <Tommadodsbotrollhattan videoText={contentData?.videoText} />
              }
            />
            <Route
              path="/stadning-av-dodsbo-trollhattan"
              element={
                <Stadningavdodsbotrollhatttan
                  videoText={contentData?.videoText}
                />
              }
            />
            <Route
              path="/bortforsling-dodsbo-stenungsund"
              element={
                <Bortforslingdodsbostenungssund
                  videoText={contentData?.videoText}
                />
              }
            />
            <Route
              path="/roja-dodsbo-stenungsund"
              element={
                <Rojadodsbostenungsund videoText={contentData?.videoText} />
              }
            />
            <Route
              path="/kopa-dodsbo-stenungsund"
              element={
                <Kopadodsbostenungssund videoText={contentData?.videoText} />
              }
            />
            <Route
              path="/salja-dodsbo-stenungsund"
              element={
                <Saljadodsbostenungssund videoText={contentData?.videoText} />
              }
            />
            <Route
              path="/tomma-dodsbo-stenungsund"
              element={
                <Tommadodsbostenungssund videoText={contentData?.videoText} />
              }
            />
            <Route
              path="/vardera-dodsbo-stenungsund"
              element={
                <Varderadodsbostenungssund videoText={contentData?.videoText} />
              }
            />
            <Route
              path="/bortforsling-dodsbo-partille"
              element={
                <Bortforslingdodsbopartille
                  videoText={contentData?.videoText}
                />
              }
            />
            <Route
              path="/tommer-dodsbo-partille"
              element={
                <TommerDodsboPartille videoText={contentData?.videoText} />
              }
            />
            <Route
              path="/salja-dodsbo-partille"
              element={
                <Saljadodsbopartille videoText={contentData?.videoText} />
              }
            />
            <Route
              path="/kopa-dodsbo-partille"
              element={
                <Kopadodsbopartille videoText={contentData?.videoText} />
              }
            />
            <Route
              path="/rojer-dodsbo-partille"
              element={
                <Rojerdodsbopartille videoText={contentData?.videoText} />
              }
            />
            <Route
              path="/stada-dodsbo-partille"
              element={
                <Stadadodsbopartille videoText={contentData?.videoText} />
              }
            />
            <Route
              path="/uppkop-dodsbo-partille"
              element={
                <Uppkopdodsbopartille videoText={contentData?.videoText} />
              }
            />
            <Route
              path="/tomma-dodsbo-goteborg"
              element={
                <Tommadodsbogoteborg videoText={contentData?.videoText} />
              }
            />
            <Route
              path="/uppkop-dodsbo-goteborg"
              element={
                <Uppkopdodsbogoteborg videoText={contentData?.videoText} />
              }
            />
            <Route
              path="bortforsling-dodsbo-kungalv"
              element={
                <BortforslingDodsboKungalv videoText={contentData?.videoText} />
              }
            />
            <Route
              path="hjalp-dodsbo-kungalv"
              element={
                <HjalpDodsboKungalv videoText={contentData?.videoText} />
              }
            />
            <Route
              path="salja-dodsbo-kungalv"
              element={
                <SaljaDodsboKungalv videoText={contentData?.videoText} />
              }
            />
            <Route
              path="tomma-dodsbo-kungalv"
              element={
                <TommaDodsboKungalv videoText={contentData?.videoText} />
              }
            />
            <Route
              path="vardera-dodsbo-kungalv"
              element={
                <VarderaDodsboKungalv videoText={contentData?.videoText} />
              }
            />
            <Route
              path="uppkop-dodsbo-kungalv"
              element={
                <UppkopDodsboKungalv videoText={contentData?.videoText} />
              }
            />
            <Route
              path="bortforsling-dodsbo-ale"
              element={
                <Bortforslingdodsboale videoText={contentData?.videoText} />
              }
            />
            <Route
              path="hjalp-dodsbo-ale"
              element={<Hjalpdodsboale videoText={contentData?.videoText} />}
            />
            <Route
              path="salja-dodsbo-ale"
              element={<Saljadosboale videoText={contentData?.videoText} />}
            />
            <Route
              path="tomma-dodsbo-ale"
              element={<Tommadodsboale videoText={contentData?.videoText} />}
            />
            <Route
              path="uppkop-dodsbo-ale"
              element={<Uppkopdodsboale videoText={contentData?.videoText} />}
            />
            <Route
              path="vardera-dodsbo-ale"
              element={<Varderadodsboale videoText={contentData?.videoText} />}
            />
            <Route
              path="bortforsling-dodsbo-frolunda"
              element={
                <Bortforslingdodsbofrolunda
                  videoText={contentData?.videoText}
                />
              }
            />
            <Route
              path="salja-dodsbo-frolunda"
              element={
                <Saljadodsbofrolunda videoText={contentData?.videoText} />
              }
            />
            <Route
              path="salja-dodsbo-frolunda"
              element={
                <Saljadodsbofrolunda videoText={contentData?.videoText} />
              }
            />
            <Route
              path="tomma-dodsbo-frolunda"
              element={
                <Tommadodsbofrolunda videoText={contentData?.videoText} />
              }
            />
            <Route
              path="uppkop-dodsbo-frolunda"
              element={
                <Uppkopdodsbofrolunda videoText={contentData?.videoText} />
              }
            />
            <Route
              path="vardera-dodsbo-frolunda"
              element={
                <Varderadodsbofrolunda videoText={contentData?.videoText} />
              }
            />
            <Route
              path="vardera-dodsbo-hisingen"
              element={
                <Varderadodsbohisingen videoText={contentData?.videoText} />
              }
            />
            <Route
              path="tomma-dodsbo-hisingen"
              element={
                <Tommadodsbohisingen videoText={contentData?.videoText} />
              }
            />
            <Route
              path="salja-dodsbo-hisingen"
              element={
                <Saljadodsbohisingen videoText={contentData?.videoText} />
              }
            />
            <Route
              path="uppkop-dodsbo-hisingen"
              element={
                <Uppkopdodsbohisingen videoText={contentData?.videoText} />
              }
            />
            <Route
              path="bortforsling-dodsbo-hisingen"
              element={
                <Bortforslinghisingen videoText={contentData?.videoText} />
              }
            />
            <Route
              path="dodsboanmalan"
              element={<Dodsboanmalan videoText={contentData?.videoText} />}
            />
            <Route
              path="salja-dodsbo"
              element={<SaljaDodsbo videoText={contentData?.videoText} />}
            />
            <Route
              path="Dodsboet"
              element={<Dodsboet videoText={contentData?.videoText} />}
            />
            <Route
              path="dodsbodelagare"
              element={<Dodsbodelagare videoText={contentData?.videoText} />}
            />
            <Route
              path="dodsbo-uppkopare"
              element={<DodsboUppkopare videoText={contentData?.videoText} />}
            />
            <Route
              path="dodsbo-uppkopare-goteborg"
              element={
                <Dodsbouppkoparegoteborg videoText={contentData?.videoText} />
              }
            />
            <Route
              path="tommer-dodsbo"
              element={<Tommerdodsbo videoText={contentData?.videoText} />}
            />
            <Route
              path="dodsbofirma"
              element={<Dodsbofirma videoText={contentData?.videoText} />}
            />
            <Route
              path="uppkop-av-bohag"
              element={<Uppkopavbohag videoText={contentData?.videoText} />}
            />
            <Route
              path="foretag-som-koper-bohag"
              element={
                <Foretagsomkoperbohag videoText={contentData?.videoText} />
              }
            />
            <Route
              path="tomma-dodsbo"
              element={<Tommadodsbo videoText={contentData?.videoText} />}
            />
            <Route
              path="uppkop-av-dodsbo"
              element={<UppkopAvDodsbo videoText={contentData?.videoText} />}
            />
            <Route
              path="bortforsling-dodsbo-kungsbacka"
              element={
                <Bortforslingdodsbokungsbacka
                  videoText={contentData?.videoText}
                />
              }
            />
            <Route
              path="vardera-dodsbo-kungsbacka"
              element={
                <Varderadodsbokungsbacka videoText={contentData?.videoText} />
              }
            />
            <Route
              path="dodsbo-firma-kungsbacka"
              element={
                <Dodsbofirmakungsbacka videoText={contentData?.videoText} />
              }
            />
            <Route
              path="hamtar-dodsbo-kungsbacka"
              element={
                <HamtardodsboKungsbacka videoText={contentData?.videoText} />
              }
            />
            <Route
              path="koper-dodsbo-kungsbacka"
              element={
                <Koperdodsbokungsbacka videoText={contentData?.videoText} />
              }
            />
            <Route
              path="salja-dodsbo-kungsbacka"
              element={
                <Saljadodsbokungsbacka videoText={contentData?.videoText} />
              }
            />
            <Route
              path="tomma-dodsbo-kungsbacka"
              element={
                <TommadodsboKungsbacka videoText={contentData?.videoText} />
              }
            />
            <Route
              path="tommer-dodsbo-kungsbacka"
              element={
                <Tommerdodsbokungsbacka videoText={contentData?.videoText} />
              }
            />
            <Route
              path="tomma-dodsbo-molndal"
              element={
                <Tommadodsbomolndal videoText={contentData?.videoText} />
              }
            />
            <Route
              path="bortforsling-dodsbo-molndal"
              element={
                <Bortforslingdodsbomolndal videoText={contentData?.videoText} />
              }
            />
            <Route
              path="dodsbo-firma-molndal"
              element={
                <Dodsbofirmamolndal videoText={contentData?.videoText} />
              }
            />
            <Route
              path="kopa-dodsbo-molndal"
              element={<Kopadodsbomolndal videoText={contentData?.videoText} />}
            />
            <Route
              path="roja-dodsbo-molndal"
              element={<Rojadodsbomolndal videoText={contentData?.videoText} />}
            />
            <Route
              path="salja-dodsbo-molndal"
              element={
                <Saljadodsbomolndal videoText={contentData?.videoText} />
              }
            />
            <Route
              path="stada-dodsbo-molndal"
              element={
                <Stadadodsbomolndal videoText={contentData?.videoText} />
              }
            />
            <Route
              path="roja-dodsbo-goteborg"
              element={
                <Rojadodsbogoteborg videoText={contentData?.videoText} />
              }
            />
            <Route
              path="stada-dodsbo-goteborg"
              element={
                <Stadadodsbogoteborg videoText={contentData?.videoText} />
              }
            />
            <Route
              path="dashboard/leads/customer/:id"
              element={
                <PrivatRoute>
                  <LeadsDetails />
                </PrivatRoute>
              }
            />
            <Route
              path="/dashboard-main"
              element={
                <PrivatRoute>
                  <Dashboard />
                </PrivatRoute>
              }
            />
            <Route path="*" element={<Error />} />
          </Routes>
          <Partners />
          <ImagesServicesComponent />
          <Besok />
          <SeoServiceComponent />
          {/*<Oppetider /> */}
          <ServicesIconsComp />
          <Recensioner />
          <Footer />
          <Links />
        </Router>
      </Suspense>
    </div>
  );
};

export default App;
