import React, { useState } from "react";
import TableOfConent from "../toc/TableOfConent";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./MainUserComp.css";
export const items = [
  {
    title: "SEO",
    alt: "SEO",
    srcImg: "https://www.svgrepo.com/show/261947/seo-search.svg",
    srcPath: "/seo",
  },
  {
    title: "Marknadsföreing",
    alt: "Allt inom Digital marknadsföreing",
    srcImg: "https://www.svgrepo.com/show/261950/megaphone.svg",
    srcPath: "/marknadsforeing",
  },
  {
    title: "PPC",
    alt: "PPC (Pay-Per-Click) Reklam",
    srcImg: "https://www.svgrepo.com/show/261927/location-finder.svg",
    srcPath: "/ppc",
  },
  {
    title: "Sociala Medier",
    alt: "Sociala Medier",
    srcImg: "https://www.svgrepo.com/show/261962/video-player.svg",
    srcPath: "/social-media",
  },
  {
    title: "Innehålls marknadsföring",
    alt: "Innehållsmarknadsföring",
    srcImg: "https://www.svgrepo.com/show/261934/browsers-internet.svg",
    srcPath: "/Innehallsmarknadsforing",
  },
  {
    title: "Webbdesign och Utveckling",
    alt: "Webbdesign och Utveckling",
    srcImg: "https://www.svgrepo.com/show/261960/laptop.svg",
    srcPath: "/webbdesign-och-utveckling",
  },

  {
    title: "Utveckling",
    alt: "Utveckling av webbtjänster och applikationer",
    srcImg: "https://www.svgrepo.com/show/261926/internet-group.svg",
    srcPath: "/webbutveckling",
  },

  {
    title: "E-handel",
    alt: "Skapande av e-handelsplattformar",
    srcImg:
      "https://www.svgrepo.com/show/295093/commerce-business-and-finance.svg",
    srcPath: "/e-handel",
  },
  {
    title: "Hosting",
    alt: "Webbhosting och underhåll",
    srcImg: "https://www.svgrepo.com/show/418646/address-dedicated-globe.svg",
    srcPath: "/hosting",
  },
  {
    title: "Analys",
    alt: "Webbanalys och optimering",
    srcImg: "https://www.svgrepo.com/show/430173/presentation-chart-graph.svg",
    srcPath: "/webbanalys",
  },
  {
    title: "CMS",
    alt: "Implementering av innehållshanteringssystem",
    srcImg: "https://www.svgrepo.com/show/341372/chrome-browser-web-online.svg",
    srcPath: "/cms",
  },
  {
    title: "Underhåll",
    alt: "Löpande underhåll av webbplatser",
    srcImg:
      "https://www.svgrepo.com/show/429968/technical-support-service-3.svg",
    srcPath: "/underhall",
  },
  {
    title: "Mobilanpassning",
    alt: "Mobilanpassning av webbsidor och applikationer",
    srcImg: "https://www.svgrepo.com/show/530452/mobile-app.svg",
    srcPath: "/mobilanpassning",
  },
  {
    title: "Support",
    alt: "Teknisk support för webbtjänster",
    srcImg: "https://www.svgrepo.com/show/317744/support-male.svg",
    srcPath: "/support",
  },
];

const MainUseComp = ({ formTitle }) => {
  const [showInneHall, setshowInneHall] = useState(false);

  return (
    <>
      <div className="mainComp" style={{ height: showInneHall && "1500px" }}>
        <section style={{ maxWidth: "600px", marginBottom: "2rem" }}>
          <h1
            style={{
              opacity: "0",
              borderBottom: "1px solid white",
            }}
          >
            {formTitle}
          </h1>
          <h2 style={{ marginBottom: "0.5rem", fontSize: "1.2rem" }}>
            Detta kan vi hjälpa dig med..
          </h2>
          <p
            style={{
              maxWidth: "90%",
              margin: "0 auto",
              fontSize: "1rem",
              letterSpacing: "1px",
            }}
          >
            <a
              href="/webbdesign"
              title="webbdesign"
              style={{ color: "inherit" }}
            >
              Webbdesign
            </a>{" "}
            och{" "}
            <a
              href="/webbutveckling"
              title="webbutveckling"
              style={{ color: "inherit" }}
            >
              Webbutveckling
            </a>
            .{" "}
            <a
              href="/seo"
              title="sökmotoroptimering"
              style={{ color: "inherit" }}
            >
              SEO
            </a>
            ,{" "}
            <a href="/e-handel" title="e-handel" style={{ color: "inherit" }}>
              E-handel
            </a>
            ,{" "}
            <a href="/hosting" title="hosting" style={{ color: "inherit" }}>
              Hosting
            </a>
            ,{" "}
            <a
              href="/webbanalys"
              title="webbanalys"
              style={{ color: "inherit" }}
            >
              Webbanalys
            </a>
            ,{" "}
            <a href="/cms" title="CMS" style={{ color: "inherit" }}>
              CMS
            </a>
            ,{" "}
            <a href="/underhall" title="underhåll" style={{ color: "inherit" }}>
              Underhåll
            </a>
            ,{" "}
            <a
              href="/mobilanpassning"
              title="mobilanpassning"
              style={{ color: "inherit" }}
            >
              Mobilanpassning
            </a>{" "}
            och{" "}
            <a href="/support" title="support" style={{ color: "inherit" }}>
              Support
            </a>
            .
          </p>
        </section>
        <section
          style={{
            display: "flex",
            maxWidth: "700px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {items?.map((el, i) => {
            return (
              <div
                key={i}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  margin: "1.5rem 1.5rem",
                }}
              >
                <LazyLoadImage
                  alt={el.alt}
                  height={"60px"}
                  src={el.srcImg}
                  width={"60px"}
                  style={{
                    padding: "0.8rem",
                  }}
                />
                <a
                  href={el.srcPath}
                  title={el.alt}
                  style={{
                    fontSize: "0.8rem",
                    color: "white",
                    maxWidth: "100px",
                    marginTop: "0.3rem",
                    fontWeight: "bold",
                    letterSpacing: "0.5px",
                  }}
                >
                  {el.title}
                </a>
              </div>
            );
          })}
        </section>
        <TableOfConent
          showInneHall={showInneHall}
          setshowInneHall={setshowInneHall}
        />
      </div>
    </>
  );
};

export default MainUseComp;
