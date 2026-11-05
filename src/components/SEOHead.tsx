import React, { useEffect } from 'react';

export interface BreadcrumbEntry {
  name: string;
  item: string;
}

export interface FAQEntry {
  question: string;
  answer: string;
}

export interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string[];
  canonicalPath?: string;
  canonicalUrl?: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  breadcrumbs?: BreadcrumbEntry[];
  faqs?: FAQEntry[];
  structuredData?: object | object[];
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords = [
        'Bangalore airport taxi',
    'Bangalore airport cab',
    'Tiyanshi Airport Taxi',
    'Kempegowda airport taxi',
    'BLR airport cab',
    'Bangalore airport drop',
    'Outstation cabs Bangalore',
    'Bangalore to Mysore cab',
    'Nandi Hills cab Bangalore',
    'Karnataka airport taxi service',
  ],
  canonicalPath,
  canonicalUrl,
  ogType = 'website',
  ogImage = 'https://tiyanshiairporttaxi.in/hero-banner.jpg',
  breadcrumbs,
  faqs,
  structuredData,
}) => {
  useEffect(() => {
    const CANONICAL_BASE = 'https://tiyanshiairporttaxi.in';
    const effectivePath = canonicalPath || canonicalUrl;
    const formattedCanonical = effectivePath
      ? `${CANONICAL_BASE}${effectivePath.startsWith('/') ? '' : '/'}${effectivePath}`
      : `${CANONICAL_BASE}${window.location.pathname.length > 1 ? window.location.pathname : '/'}`;

    // 1. Update Title (Human-first, localized)
    const fullTitle = title.includes('Tiyanshi Airport Taxi')
      ? title
      : `${title} | Tiyanshi Airport Taxi Bangalore`;
    document.title = fullTitle;

    // 2. Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // 3. Update Meta Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', keywords.join(', '));

    // 4. Update Canonical Link
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', formattedCanonical);

    // 5. OpenGraph Tags
    const ogTags: Record<string, string> = {
      'og:title': fullTitle,
      'og:description': description,
      'og:type': ogType,
      'og:image': ogImage,
      'og:url': formattedCanonical,
      'og:site_name': 'Tiyanshi Airport Taxi',
    };

    Object.entries(ogTags).forEach(([property, content]) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    });

    // 6. Twitter / X Cards
    const twitterTags: Record<string, string> = {
      'twitter:card': 'summary_large_image',
      'twitter:title': fullTitle,
      'twitter:description': description,
      'twitter:image': ogImage,
    };

    Object.entries(twitterTags).forEach(([name, content]) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    });

    // 7. Structured Data Graph Generation (JSON-LD)
    const scriptId = 'tiyanshi-page-jsonld';
    let scriptTag = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = scriptId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const graphEntities: object[] = [];

    // Core TaxiService Entity
    graphEntities.push({
      '@type': 'TaxiService',
      '@id': 'https://tiyanshiairporttaxi.in/#service',
      'name': 'Tiyanshi Airport Taxi Bengaluru',
      'url': formattedCanonical,
      'provider': {
        '@id': 'https://tiyanshiairporttaxi.in/#organization',
      },
      'serviceType': 'Cab and Taxi Service',
      'telephone': '+91-7676252579',
      'priceRange': '₹₹',
      'areaServed': [
        { '@type': 'City', 'name': 'Bengaluru' },
        { '@type': 'AdministrativeArea', 'name': 'Kempegowda International Airport (BLR)' },
        { '@type': 'City', 'name': 'Whitefield' },
        { '@type': 'City', 'name': 'Electronic City' },
        { '@type': 'City', 'name': 'Indiranagar' },
        { '@type': 'City', 'name': 'Koramangala' },
        { '@type': 'City', 'name': 'Mysore' },
        { '@type': 'City', 'name': 'Nandi Hills' },
      ],
      'offers': {
        '@type': 'Offer',
        'priceCurrency': 'INR',
        'availability': 'https://schema.org/InStock',
        'priceValidUntil': '2027-12-31',
      },
    });

    // Core LocalBusiness Entity
    graphEntities.push({
      '@type': 'LocalBusiness',
      '@id': 'https://tiyanshiairporttaxi.in/#organization',
      'name': 'Tiyanshi Airport Taxi',
      'url': 'https://tiyanshiairporttaxi.in',
      'logo': 'https://tiyanshiairporttaxi.in/logo.png',
      'image': ogImage,
      'telephone': '+91-7676252579',
      'priceRange': '₹₹',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Kempegowda International Airport Terminal Road, Devanahalli',
        'addressLocality': 'Bengaluru',
        'addressRegion': 'Karnataka',
        'postalCode': '560300',
        'addressCountry': 'IN',
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': 13.1986,
        'longitude': 77.7066,
      },
      'openingHoursSpecification': {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        'opens': '00:00',
        'closes': '23:59',
      },
    });

    // Breadcrumbs Schema if provided
    if (breadcrumbs && breadcrumbs.length > 0) {
      graphEntities.push({
        '@type': 'BreadcrumbList',
        'itemListElement': breadcrumbs.map((crumb, idx) => ({
          '@type': 'ListItem',
          'position': idx + 1,
          'name': crumb.name,
          'item': crumb.item.startsWith('http')
            ? crumb.item
            : `${CANONICAL_BASE}${crumb.item.startsWith('/') ? '' : '/'}${crumb.item}`,
        })),
      });
    }

    // FAQPage Schema if provided
    if (faqs && faqs.length > 0) {
      graphEntities.push({
        '@type': 'FAQPage',
        'mainEntity': faqs.map((faq) => ({
          '@type': 'Question',
          'name': faq.question,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': faq.answer,
          },
        })),
      });
    }

    // Additional custom structured data if passed
    if (structuredData) {
      if (Array.isArray(structuredData)) {
        graphEntities.push(...structuredData);
      } else {
        graphEntities.push(structuredData);
      }
    }

    scriptTag.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': graphEntities,
    });

    // Smooth scroll to top on navigation
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [title, description, keywords, canonicalPath, ogType, ogImage, breadcrumbs, faqs, structuredData]);

  return null;
};
