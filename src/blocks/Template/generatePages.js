const fs = require("fs");
const path = require("path");
const GenerateSEO = require("./GenerateCityTemplates/GenerateSEO.js");
const GenerateEhandel = require("./GenerateCityTemplates/GenerateEhandel.js");
const GenerateDigitalMarknadsforing = require("./GenerateCityTemplates/GenerateDigitalmarknadsforing.js");
const GenerateUXDesign = require("./GenerateCityTemplates/GenerateUXDesign.js");
const GenerateWebbdesign = require("./GenerateCityTemplates/GenerateWebbdesign.js");
const GeneratePPC = require("./GenerateCityTemplates/GeneratePPC.js");
const GenerateInnehallsskapande = require("./GenerateCityTemplates/GenerateInnehallsskapande.js");

const citiesData = require("./cities.json");

const services = [
  { name: "SEO", generateTemplate: GenerateSEO, key: "seo" },
  { name: "Ehandel", generateTemplate: GenerateEhandel, key: "ehandel" },
  { name: "DigitalMarknadsforing", generateTemplate: GenerateDigitalMarknadsforing, key: "digital_marknadsforing" },
  { name: "UXDesign", generateTemplate: GenerateUXDesign, key: "ux_design" },
  { name: "Webbdesign", generateTemplate: GenerateWebbdesign, key: "webbdesign" },
  { name: "PPC", generateTemplate: GeneratePPC, key: "ppc" },
  { name: "Innehallsskapande", generateTemplate: GenerateInnehallsskapande, key: "innehallsskapande" }
];

// Normalize city names to remove special characters and make them lowercase
const normalizeCityName = (city) => {
  return city.name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Remove diacritics
    .replace(/[^a-zA-Z0-9]/g, "") // Remove special characters
};

// Step 1: Generate service files
services.forEach((service) => {
  const targetDir = path.join(__dirname, `../servicesInCites/${service.name}`);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  citiesData.cities.forEach((city) => {
    const normalizedCityName = normalizeCityName(city);
    const cityFileName = `${normalizedCityName}${service.name.toLowerCase()}.js`;
    const filePath = path.join(targetDir, cityFileName);

    const serviceData = city[service.key];
    if (serviceData) {
      const content = service.generateTemplate(serviceData, city.name);  
      fs.writeFileSync(filePath, content);
      console.log(`Generated ${cityFileName} in ${service.name} folder`);
    }
  });
});

// Step 2: Make the imports
const importCityFilePath = path.join(__dirname, "../../serviceCityImport.js");
fs.writeFileSync(importCityFilePath, `import { lazy } from "react";\n\n`);

services.forEach((service) => {
  fs.appendFileSync(importCityFilePath, `// ${service.name} services\n`);

  citiesData.cities.forEach((city) => {
    const normalizedCityName = normalizeCityName(city);
    const cityFileName = `${normalizedCityName}${service.name.toLowerCase()}.js`;

    const importStatement = `export const ${normalizedCityName}${service.name} = lazy(() => import("./blocks/servicesInCites/${service.name}/${cityFileName.replace(".js", "")}"));\n`;
    fs.appendFileSync(importCityFilePath, importStatement);
  });
  fs.appendFileSync(importCityFilePath, `\n`);
});

// Step 3: Make the routes
const routerCityPath = path.join(__dirname, "../../serviceCityRouter.js");
fs.writeFileSync(
  routerCityPath,
  `import React from "react";
import { Route } from "react-router-dom";
import * as Services from "./serviceCityImport";
import Home from "./pages/Home/Home";
import { useSelector } from "react-redux";
import { getContentData } from "./redux-toolkit/content/contentSlice";

const ServiceCityRoutes = () => {
  const contentData = useSelector(getContentData);

  return (
    <>
`
);

services.forEach((service) => {
  fs.appendFileSync(routerCityPath, `    { /* ${service.name} router */}\n`);

  citiesData.cities.forEach((city) => {
    const normalizedCityName = normalizeCityName(city);
    const routePath = `${service.name.toLowerCase()}-${normalizedCityName.toLowerCase()}`;
    const routerStatement = `    <Route path="/${routePath}" element={<Services.${normalizedCityName}${service.name} videoText={contentData?.videoText} />} />\n`;
    fs.appendFileSync(routerCityPath, routerStatement);
  });
  fs.appendFileSync(routerCityPath, `\n`);
});


fs.appendFileSync(
  routerCityPath,
  `    </>
  );
};


export default ServiceCityRoutes;
`
);
