"use client";

import React from "react";

interface SchemaProps {
  type: "WebSite" | "Service" | "BreadcrumbList" | "LocalBusiness" | "Organization";
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

export const generateOrganizationSchema = () => ({
  "@type": "Organization",
  "@id": "https://acrepairingksa.com/#organization",
  "name": "AC Repairing KSA",
  "url": "https://acrepairingksa.com",
  "logo": "https://acrepairingksa.com/icon.png",
  "sameAs": [
    "https://facebook.com/acrepairingksa",
    "https://twitter.com/acrepairingksa",
    "https://instagram.com/acrepairingksa"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+966501234568",
    "contactType": "customer service",
    "areaServed": "SA",
    "availableLanguage": ["Arabic", "English"]
  }
});

export const generateLocalBusinessSchema = () => ({
  "@type": "HVACBusiness",
  "@id": "https://acrepairingksa.com/#localbusiness",
  "name": "AC Repairing KSA",
  "image": "https://acrepairingksa.com/icon.png",
  "url": "https://acrepairingksa.com",
  "telephone": "+966501234568",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "King Fahd Road",
    "addressLocality": "Riyadh",
    "postalCode": "12212",
    "addressCountry": "SA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 24.7136,
    "longitude": 46.6753
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "00:00",
    "closes": "23:59"
  },
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 24.7136,
      "longitude": 46.6753
    },
    "geoRadius": "50000"
  }
});

export const generateServiceSchema = (name: string, description: string, url: string) => ({
  "@type": "Service",
  "name": name,
  "description": description,
  "provider": {
    "@id": "https://acrepairingksa.com/#localbusiness"
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
