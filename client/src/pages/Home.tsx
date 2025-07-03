import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import StakeEarn from "@/components/StakeEarn";
import Roadmap from "@/components/Roadmap";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

export default function Home() {
  // Get the current URL for canonical and og:url
  const currentUrl =
    typeof window !== "undefined" ? window.location.href : "https://doxadao.org/";
  const socialImageUrl = `${currentUrl.replace(/\/$/, "")}/social-image.jpg`;

  return (
    <div className="bg-black text-white font-sans overflow-x-hidden">
      <Helmet>
        {/* Basic HTML Meta Tags */}
        <html lang="en" />
        <title>
          Doxa - The Future of Stablecoins | Multi-Stablecoin Platform
        </title>
        <meta
          name="description"
          content="Create, own and earn with Doxa USD. A multi-stablecoin platform built on the Internet Computer. No banks, no middlemen, just programmable money—backed, secure, fast."
        />
        <meta
          name="keywords"
          content="stablecoin, defi, doxa, usd, cryptocurrency, internet computer, blockchain, web3, decentralized finance"
        />
        <meta name="author" content="Doxa Foundation" />
        <meta name="robots" content="index, follow" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1"
        />

        {/* Canonical URL */}
        <link rel="canonical" href={currentUrl} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:title" content="Doxa - The Future of Stablecoins" />
        <meta
          property="og:description"
          content="Create, own and earn with Doxa USD. A multi-stablecoin platform built on the Internet Computer. No banks, no middlemen, just programmable money."
        />
        <meta property="og:image" content={socialImageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="628" />
        <meta property="og:site_name" content="Doxa" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={currentUrl} />
        <meta
          property="twitter:title"
          content="Doxa - The Future of Stablecoins"
        />
        <meta
          property="twitter:description"
          content="Create, own and earn with Doxa USD. A multi-stablecoin platform built on the Internet Computer. No banks, no middlemen, just programmable money."
        />
        <meta property="twitter:image" content={socialImageUrl} />
        <meta property="twitter:creator" content="@DoxaUSD" />
        <meta property="twitter:site" content="@DoxaUSD" />

        {/* Favicons */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="/icons/favicon.svg" />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/icons/favicon-96x96.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/apple-touch-icon.png"
        />

        {/* Web App Manifest */}
        <link rel="manifest" href="/icons/site.webmanifest" />

        {/* Theme Colors */}
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />

        {/* Additional Meta Tags */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content="Doxa" />

        {/* Sitemap */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Doxa",
            description:
              "A multi-stablecoin platform built on the Internet Computer",
            url: currentUrl,
            logo: `${currentUrl.replace(/\/$/, "")}/DOXA.png`,
            sameAs: [
              "https://twitter.com/DoxaUSD",
              "https://discord.gg/FUuJRFZ8u7",
              "https://github.com/DoxaFoundation/doxa-v3",
            ],
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "customer service",
              email: "doxadaooperations@gmail.com",
            },
          })}
        </script>
      </Helmet>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <StakeEarn />
      <Roadmap />
      <Testimonials />
      <CallToAction />
      <Newsletter />
      <Footer />
    </div>
  );
}
