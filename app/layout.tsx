import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://yesptech.in"),
  title: {
    default: "Yesp Tech - Leading Web Development & eCommerce Company in Erode",
    template: "%s | Yesp Tech - Web Development Company Erode",
  },
  description:
    "Yesp Tech is the premier web development company in Erode, Tamil Nadu. We specialize in custom web development, eCommerce solutions, mobile app development, UI/UX design, and digital marketing. 50+ successful projects delivered with 3+ years of expertise.",
  keywords: [
    "web development company erode",
    "ecommerce development company erode",
    "web development company in erode",
    "mobile app development erode",
    "SEO services erode",
    "UI UX design company erode",
    "custom software development erode",
    "digital marketing erode",
    "website design erode",
    "web application development",
    "responsive web design",
    "ecommerce website development",
    "wordpress development erode",
    "react development erode",
    "next.js development",
    "web development services tamil nadu",
  ],
  authors: [{ name: "Yesp Tech" }],
  creator: "Yesp Tech",
  publisher: "Yesp Tech",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["ta_IN"],
    url: "https://yesptech.in",
    siteName: "Yesp Tech",
    title: "Yesp Tech - Leading Web Development & eCommerce Company in Erode",
    description:
      "Professional web development and eCommerce solutions trusted by 50+ clients. Expert web development company in Erode with 3+ years of experience delivering cutting-edge digital solutions.",
    images: [
      {
        url: "/yesp-logo.png",
        width: 1200,
        height: 630,
        alt: "Yesp Tech - Web Development Company in Erode",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yesptech",
    creator: "@yesptech",
    title: "Yesp Tech - Leading Web Development & eCommerce Company in Erode",
    description:
      "Professional web development and eCommerce solutions trusted by 50+ clients. Expert web development company in Erode.",
    images: ["/yesp-logo.png"],
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    other: {
      "msvalidate.01": "your-bing-verification-code",
      "p:domain_verify": "your-pinterest-verification-code",
    },
  },
  alternates: {
    canonical: "https://yesptech.in",
  },
  category: "technology",
  classification: "Web Development Services",
  other: {
    "geo.region": "IN-TN",
    "geo.placename": "Erode",
    "geo.position": "11.3410;77.7172",
    ICBM: "11.3410, 77.7172",
    rating: "5",
    distribution: "global",
    "revisit-after": "1 days",
    coverage: "Worldwide",
    target: "all",
    audience: "all",
    "resource-type": "document",
    "doc-type": "Web Page",
    "doc-class": "Living Document",
    "doc-rights": "Public",
  },
  icons: {
    icon: [
      { url: "/yesp-logo.ico", sizes: "any" },
      { url: "/yesp-logo.png", type: "image/png", sizes: "32x32" },
      { url: "/yesp-logo.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [{ url: "/yesp-logo.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/yesp-logo.ico",
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Yesp Tech",
  },
  formatDetection: {
    telephone: false,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://yesptech.in/#organization",
    name: "YESP Tech",
    alternateName: "Yesp Tech",
    description:
      "Leading web development and eCommerce company in Erode, Tamil Nadu specializing in custom web solutions, mobile apps, and digital marketing services.",
    url: "https://yesptech.in",
    logo: {
      "@type": "ImageObject",
      url: "https://yesptech.in/yesp-logo.png",
      width: 400,
      height: 400,
    },
    image: "https://yesptech.in/yesp-logo.png",
    telephone: "+91-9751755757",
    email: "info@yesptech.in",
    foundingDate: "2021",
    numberOfEmployees: "10-50",
    slogan: "Transforming Ideas into Digital Reality",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-9751755757",
        contactType: "customer service",
        availableLanguage: ["English", "Tamil"],
        areaServed: "IN",
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "09:00",
          closes: "18:00",
        },
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Erode",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
      postalCode: "638001",
    },
    areaServed: [
      {
        "@type": "State",
        name: "Tamil Nadu",
      },
      {
        "@type": "Country",
        name: "India",
      },
    ],
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 11.341,
        longitude: 77.7172,
      },
      geoRadius: "100000",
    },
    sameAs: [
      "https://www.linkedin.com/company/yesptech",
      "https://twitter.com/yesptech",
      "https://www.facebook.com/yesptech",
      "https://www.instagram.com/yesptech",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Web Development Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Web Development",
            description: "Custom web development services",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "eCommerce Development",
            description: "Professional eCommerce solutions",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Mobile App Development",
            description: "iOS and Android app development",
          },
        },
      ],
    },
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://yesptech.in/#localbusiness",
    name: "YESP Tech",
    image: "https://yesptech.in/yesp-logo.png",
    telephone: "+91-9751755757",
    email: "info@yesptech.in",
    url: "https://yesptech.in",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Erode",
      addressLocality: "Erode",
      addressRegion: "Tamil Nadu",
      postalCode: "638001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 11.341,
      longitude: 77.7172,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "50",
    },
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://yesptech.in/#website",
    url: "https://yesptech.in",
    name: "YESP Tech",
    description: "Leading web development and eCommerce company in Erode",
    publisher: {
      "@id": "https://yesptech.in/#organization",
    },
    potentialAction: [
      {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://yesptech.in/search?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    ],
    inLanguage: "en-US",
  }

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://yesptech.in/#service",
    name: "YESP Tech - Web Development Services",
    image: "https://yesptech.in/yesp-logo.png",
    telephone: "+91-9751755757",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Erode",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 11.341,
      longitude: 77.7172,
    },
    url: "https://yesptech.in",
    serviceType: "Web Development",
    areaServed: "Tamil Nadu, India",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Web Development Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom Web Development",
            description: "Tailored web solutions for businesses",
          },
        },
      ],
    },
  }

  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />

        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        <meta httpEquiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=()" />

        <meta name="theme-color" content="#2563eb" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
