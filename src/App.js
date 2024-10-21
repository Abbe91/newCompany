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

// GÖTEBORG
const Seogoteborg = lazy(() => import("./blocks/Goteborg/SeoGoteborg"));
const DigitalmarkertingGoteborg = lazy(() => import("./blocks/Goteborg/DigitalmarkertingGoteborg"));

//I will delete this
const LeadsDetails = lazy(() => import("./pages/LeadsDetails"));
const PrivatRoute = lazy(() => import("./pages/PrivatRoute"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const AtervinningscentralGoteborg = lazy(
  () => import("./pages/InfoPages/AtervinningscentralGoteborg")
);
const Atervinningscentral = lazy(
  () => import("./pages/InfoPages/Atervinningscentral")
);
const Atervinningsstation = lazy(
  () => import("./pages/InfoPages/Atervinningsstation")
);
const ForFragan = lazy(() => import("./components/ForFragan"));
const ServicesIconsComp = lazy(() => import("./components/ServicesIconsComp"));
const Error = lazy(() => import("./pages/Error/Error"));
const Home = lazy(() => import("./pages/Home/Home"));
const Footer = lazy(() => import("./components/Footer/Footer"));
const Besok = lazy(() => import("./components/Besok"));

const Hjalpdodsboale = lazy(() => import("./blocks/ale/Hjalpdodsboale"));
const Saljadosboale = lazy(() => import("./blocks/ale/Saljadosboale"));
const Tommadodsboale = lazy(() => import("./blocks/ale/Tommadodsboale"));
const Uppkopdodsboale = lazy(() => import("./blocks/ale/Uppkopdodsboale"));
const Varderadodsboale = lazy(() => import("./blocks/ale/Varderadodsboale"));
const ExternaLankar = lazy(
  () => import("./components/externalLinks/ExternaLankar")
);
const Dodsboanmalan = lazy(() => import("./pages/InfoPages/Dodsboanmalan"));
const Dodsbodelagare = lazy(() => import("./pages/InfoPages/Dodsbodelagare"));
const Dodsboet = lazy(() => import("./pages/InfoPages/Dodsboet"));
const SaljaDodsbo = lazy(() => import("./pages/InfoPages/SaljaDodsbo"));
const Oppetider = lazy(() => import("./components/Oppetider"));
const Recensioner = lazy(() => import("./components/Recensioner"));
const Arbetsprocessen = lazy(() => import("./components/Arbetsprocessen"));
const ImagesServicesComponent = lazy(
  () => import("./components/ImagesServicesComponent")
);
const Varderingavdodsbo = lazy(
  () => import("./pages/InfoPages/Varderingavdodsbo")
);
const BookingModal = lazy(() => import("./components/BookingModal"));
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
            <Route
              path="/digital-marknadsforing-goteborg"
              element={<DigitalmarkertingGoteborg videoText={contentData?.videoText} />}
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
              path="/vardering-av-dodsbo"
              element={<Varderingavdodsbo videoText={contentData?.videoText} />}
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
