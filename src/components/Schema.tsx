"use client";

import React from "react";

interface SchemaProps {
  type: "WebSite" | "Service" | "BreadcrumbList";
  data: any;
}

const Schema = ({ type, data }: SchemaProps) => {
  const schemaData = {
    "@context": "https://schema.org",
    ...data,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default Schema;

// Helper functions to generate schema data
export const generateWebSiteSchema = () => ({
  "@type": "WebSite",
  "url": "https://acrepairingksa.com/",
  "name": "AC Repairing KSA",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://acrepairingksa.com/services?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
});

export const generateServiceSchema = (name: string, description: string, url: string) => ({
  "@type": "Service",
  "name": name,
  "description": description,
  "provider": {
    "@type": "LocalBusiness",
    "name": "AC Repairing KSA",
    "image": "https://acrepairingksa.com/icon.png",
    "@id": "https://acrepairingksa.com/#organization",
    "url": "https://acrepairingksa.com",
    "telephone": "+966501234568",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "King Fahd Road",
      "addressLocality": "Riyadh",
      "postalCode": "12212",
      "addressCountry": "SA"
    }
  },
  "areaServed": {
    "@type": "State",
    "name": "Riyadh",
    "addressCountry": "SA"
  },
  "url": `https://acrepairingksa.com${url}`
});

export const generateBreadcrumbSchema = (items: { name: string; item: string }[]) => ({
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": `https://acrepairingksa.com${item.item}`
  }))
});
