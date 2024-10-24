import React from "react";
import { Route } from "react-router-dom";
import * as Services from "./serviceCityImport";
import Home from "./pages/Home/Home";
import { useSelector } from "react-redux";
import { getContentData } from "./redux-toolkit/content/contentSlice";

const ServiceCityRoutes = () => {
  const contentData = useSelector(getContentData);

  return (
    <>
    { /* SEO router */}
    <Route path="/seo-stockholm" element={<Services.StockholmSEO videoText={contentData?.videoText} />} />
    <Route path="/seo-malmo" element={<Services.MalmoSEO videoText={contentData?.videoText} />} />
    <Route path="/seo-goteborg" element={<Services.GoteborgSEO videoText={contentData?.videoText} />} />
    <Route path="/seo-uppsala" element={<Services.UppsalaSEO videoText={contentData?.videoText} />} />
    <Route path="/seo-vasteras" element={<Services.VasterasSEO videoText={contentData?.videoText} />} />
    <Route path="/seo-orebro" element={<Services.OrebroSEO videoText={contentData?.videoText} />} />
    <Route path="/seo-helsingborg" element={<Services.HelsingborgSEO videoText={contentData?.videoText} />} />
    <Route path="/seo-jonkoping" element={<Services.JonkopingSEO videoText={contentData?.videoText} />} />

    { /* Ehandel router */}
    <Route path="/ehandel-stockholm" element={<Services.StockholmEhandel videoText={contentData?.videoText} />} />
    <Route path="/ehandel-malmo" element={<Services.MalmoEhandel videoText={contentData?.videoText} />} />
    <Route path="/ehandel-goteborg" element={<Services.GoteborgEhandel videoText={contentData?.videoText} />} />
    <Route path="/ehandel-uppsala" element={<Services.UppsalaEhandel videoText={contentData?.videoText} />} />
    <Route path="/ehandel-vasteras" element={<Services.VasterasEhandel videoText={contentData?.videoText} />} />
    <Route path="/ehandel-orebro" element={<Services.OrebroEhandel videoText={contentData?.videoText} />} />
    <Route path="/ehandel-helsingborg" element={<Services.HelsingborgEhandel videoText={contentData?.videoText} />} />
    <Route path="/ehandel-jonkoping" element={<Services.JonkopingEhandel videoText={contentData?.videoText} />} />

    { /* DigitalMarknadsforing router */}
    <Route path="/digitalmarknadsforing-stockholm" element={<Services.StockholmDigitalMarknadsforing videoText={contentData?.videoText} />} />
    <Route path="/digitalmarknadsforing-malmo" element={<Services.MalmoDigitalMarknadsforing videoText={contentData?.videoText} />} />
    <Route path="/digitalmarknadsforing-goteborg" element={<Services.GoteborgDigitalMarknadsforing videoText={contentData?.videoText} />} />
    <Route path="/digitalmarknadsforing-uppsala" element={<Services.UppsalaDigitalMarknadsforing videoText={contentData?.videoText} />} />
    <Route path="/digitalmarknadsforing-vasteras" element={<Services.VasterasDigitalMarknadsforing videoText={contentData?.videoText} />} />
    <Route path="/digitalmarknadsforing-orebro" element={<Services.OrebroDigitalMarknadsforing videoText={contentData?.videoText} />} />
    <Route path="/digitalmarknadsforing-helsingborg" element={<Services.HelsingborgDigitalMarknadsforing videoText={contentData?.videoText} />} />
    <Route path="/digitalmarknadsforing-jonkoping" element={<Services.JonkopingDigitalMarknadsforing videoText={contentData?.videoText} />} />

    { /* UXDesign router */}
    <Route path="/uxdesign-stockholm" element={<Services.StockholmUXDesign videoText={contentData?.videoText} />} />
    <Route path="/uxdesign-malmo" element={<Services.MalmoUXDesign videoText={contentData?.videoText} />} />
    <Route path="/uxdesign-goteborg" element={<Services.GoteborgUXDesign videoText={contentData?.videoText} />} />
    <Route path="/uxdesign-uppsala" element={<Services.UppsalaUXDesign videoText={contentData?.videoText} />} />
    <Route path="/uxdesign-vasteras" element={<Services.VasterasUXDesign videoText={contentData?.videoText} />} />
    <Route path="/uxdesign-orebro" element={<Services.OrebroUXDesign videoText={contentData?.videoText} />} />
    <Route path="/uxdesign-helsingborg" element={<Services.HelsingborgUXDesign videoText={contentData?.videoText} />} />
    <Route path="/uxdesign-jonkoping" element={<Services.JonkopingUXDesign videoText={contentData?.videoText} />} />

    { /* Webbdesign router */}
    <Route path="/webbdesign-stockholm" element={<Services.StockholmWebbdesign videoText={contentData?.videoText} />} />
    <Route path="/webbdesign-malmo" element={<Services.MalmoWebbdesign videoText={contentData?.videoText} />} />
    <Route path="/webbdesign-goteborg" element={<Services.GoteborgWebbdesign videoText={contentData?.videoText} />} />
    <Route path="/webbdesign-uppsala" element={<Services.UppsalaWebbdesign videoText={contentData?.videoText} />} />
    <Route path="/webbdesign-vasteras" element={<Services.VasterasWebbdesign videoText={contentData?.videoText} />} />
    <Route path="/webbdesign-orebro" element={<Services.OrebroWebbdesign videoText={contentData?.videoText} />} />
    <Route path="/webbdesign-helsingborg" element={<Services.HelsingborgWebbdesign videoText={contentData?.videoText} />} />
    <Route path="/webbdesign-jonkoping" element={<Services.JonkopingWebbdesign videoText={contentData?.videoText} />} />

    { /* PPC router */}
    <Route path="/ppc-stockholm" element={<Services.StockholmPPC videoText={contentData?.videoText} />} />
    <Route path="/ppc-malmo" element={<Services.MalmoPPC videoText={contentData?.videoText} />} />
    <Route path="/ppc-goteborg" element={<Services.GoteborgPPC videoText={contentData?.videoText} />} />
    <Route path="/ppc-uppsala" element={<Services.UppsalaPPC videoText={contentData?.videoText} />} />
    <Route path="/ppc-vasteras" element={<Services.VasterasPPC videoText={contentData?.videoText} />} />
    <Route path="/ppc-orebro" element={<Services.OrebroPPC videoText={contentData?.videoText} />} />
    <Route path="/ppc-helsingborg" element={<Services.HelsingborgPPC videoText={contentData?.videoText} />} />
    <Route path="/ppc-jonkoping" element={<Services.JonkopingPPC videoText={contentData?.videoText} />} />

    { /* Innehallsskapande router */}
    <Route path="/innehallsskapande-stockholm" element={<Services.StockholmInnehallsskapande videoText={contentData?.videoText} />} />
    <Route path="/innehallsskapande-malmo" element={<Services.MalmoInnehallsskapande videoText={contentData?.videoText} />} />
    <Route path="/innehallsskapande-goteborg" element={<Services.GoteborgInnehallsskapande videoText={contentData?.videoText} />} />
    <Route path="/innehallsskapande-uppsala" element={<Services.UppsalaInnehallsskapande videoText={contentData?.videoText} />} />
    <Route path="/innehallsskapande-vasteras" element={<Services.VasterasInnehallsskapande videoText={contentData?.videoText} />} />
    <Route path="/innehallsskapande-orebro" element={<Services.OrebroInnehallsskapande videoText={contentData?.videoText} />} />
    <Route path="/innehallsskapande-helsingborg" element={<Services.HelsingborgInnehallsskapande videoText={contentData?.videoText} />} />
    <Route path="/innehallsskapande-jonkoping" element={<Services.JonkopingInnehallsskapande videoText={contentData?.videoText} />} />

    </>
  );
};


export default ServiceCityRoutes;
