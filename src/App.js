import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Partners from "./components/Partners";
import { getContentData } from "./redux-toolkit/content/contentSlice";
import { useSelector } from "react-redux";
import Links from "./internalLinks/Links";
import { Circles } from "react-loader-spinner";
import SeoServiceComponent from "./components/SeoServiceComponent";
import ServiceRoutes from './servicesRouter'; 
import ServiceCityRoutes from './serviceCityRouter'


const LeadsDetails = lazy(() => import("./pages/LeadsDetails"));
const PrivatRoute = lazy(() => import("./pages/PrivatRoute"));
const ForFragan = lazy(() => import("./components/ForFragan"));
const ServicesIconsComp = lazy(() => import("./components/ServicesIconsComp"));
const Error = lazy(() => import("./pages/Error/Error"));
const Home = lazy(() => import("./pages/Home/Home"));
const Footer = lazy(() => import("./components/Footer/Footer"));
const Besok = lazy(() => import("./components/Besok"));
const ExternaLankar = lazy(() => import("./components/externalLinks/ExternaLankar"));
const Oppetider = lazy(() => import("./components/Oppetider"));
const Recensioner = lazy(() => import("./components/Recensioner"));
const Arbetsprocessen = lazy(() => import("./components/Arbetsprocessen"));
const ImagesServicesComponent = lazy(() => import("./components/ImagesServicesComponent"));
const Varderingavdodsbo = lazy(() => import("./pages/InfoPages/Varderingavdodsbo"));
const BookingModal = lazy(() => import("./components/BookingModal"));
const Atervinning = lazy(() => import("./pages/InfoPages/Atervinning"));
const Avfallshantering = lazy(() => import("./pages/InfoPages/Avfallshantering"));
const AtervinningscentralGoteborg = lazy(() => import("./pages/InfoPages/AtervinningscentralGoteborg"));
const Atervinningscentral = lazy(() => import("./pages/InfoPages/Atervinningscentral"));
const Atervinningsstation = lazy(() => import("./pages/InfoPages/Atervinningsstation"));

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
            {/* Home Page */}
            <Route path="/" element={<Home videoText={contentData?.videoText} />} />

            {/* Service Routes */}
            {ServiceRoutes()}

            {/* Service City Routes */}
            {ServiceCityRoutes()}

            {/* Additional Routes */}
            <Route path="/atervinning" element={<Atervinning />} />
            <Route path="/atervinningscentral" element={<Atervinningscentral />} />
            <Route path="/atervinningscentral-goteborg" element={<AtervinningscentralGoteborg />} />
            <Route path="/atervinningsstation" element={<Atervinningsstation />} />
            <Route path="/forfragan" element={<ForFragan />} />
            <Route path="/avfallshantering" element={<Avfallshantering />} />
            <Route path="/boka" element={<BookingModal />} />
            <Route path="/vardering-av-dodsbo" element={<Varderingavdodsbo videoText={contentData?.videoText} />} />

            <Route path="*" element={<Error />} />
          </Routes>

          <Partners />
          <ImagesServicesComponent />
          <Besok />
          <SeoServiceComponent />
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
