import React from "react";
import { Route } from "react-router-dom";
import * as Services from "./servicesImport";
import { useSelector } from "react-redux";
import { getContentData } from "./redux-toolkit/content/contentSlice";

const ServiceRoutes = () => {
  const contentData = useSelector(getContentData);

  return (
    <>
      <Route path="/seo" element={<Services.Seo videoText={contentData?.videoText} />} />
      <Route path="/marknadsforeing" element={<Services.Marknadsforeing videoText={contentData?.videoText} />} />
      <Route path="/ppc" element={<Services.Ppc videoText={contentData?.videoText} />} />
      <Route path="/social-media" element={<Services.SocialMedia videoText={contentData?.videoText} />} />
      <Route path="/innehallsmarknadsforing" element={<Services.Innehallsmarknadsforing videoText={contentData?.videoText} />} />
      <Route path="/webbdesignochutveckling" element={<Services.Webbdesignochutveckling videoText={contentData?.videoText} />} />
      <Route path="/webbutveckling" element={<Services.Webbutveckling videoText={contentData?.videoText} />} />
      <Route path="/ehandel" element={<Services.Ehandel videoText={contentData?.videoText} />} />
      <Route path="/hosting" element={<Services.Hosting videoText={contentData?.videoText} />} />
      <Route path="/webbanalys" element={<Services.Webbanalys videoText={contentData?.videoText} />} />
      <Route path="/cms" element={<Services.Cms videoText={contentData?.videoText} />} />
      <Route path="/underhall" element={<Services.Underhall videoText={contentData?.videoText} />} />
      <Route path="/mobilanpassning" element={<Services.Mobilanpassning videoText={contentData?.videoText} />} />
      <Route path="/support" element={<Services.Support videoText={contentData?.videoText} />} />
      <Route path="/webbdesign" element={<Services.Webbdesign videoText={contentData?.videoText} />} />
      <Route path="/digitalmarknadsforing" element={<Services.Digitalmarknadsforing videoText={contentData?.videoText} />} />
      <Route path="/innehallsskapande" element={<Services.Innehallsskapande videoText={contentData?.videoText} />} />
      <Route path="/ppc-annonsering" element={<Services.Ppcannonsering videoText={contentData?.videoText} />} />
      <Route path="/uxdesign" element={<Services.Uxdesign videoText={contentData?.videoText} />} />
    </>
  );
};

export default ServiceRoutes;
