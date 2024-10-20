// src/pages/Cookies.jsx
import React, { useState } from 'react';
import { useContext } from 'react';
import { LanguageContext } from '../components/LanguageContext';

function Cookies() {
  const { language } = useContext(LanguageContext);
  const [content] = useState({
    en: {
      title: "Cookie Notice",
      lastUpdated: "Last updated: July 10, 2024.",
      description:
        "This website uses only essential cookies that are necessary for the website to function properly. We do not use any cookies for analytics, tracking, or marketing purposes on our website. However, when you interact with third-party services, such as subscribing to our newsletter via MailerLite or filling out a Google Form, those services may use their own cookies and tracking technologies.",
      thirdPartyServicesTitle: "Third-Party Services",
      thirdPartyServicesDescription:
        "Our website may include links to or embed content from third-party services, such as MailerLite for newsletter subscriptions and Google Forms for job applications. These services may use cookies or other tracking technologies. We recommend reviewing their privacy policies for more information:",
      essentialCookiesTitle: "Essential Cookies",
      essentialCookiesList: [
        "Remember if you have accepted our cookie notice",
        "Maintain your session while you browse our website",
      ],
      contactUs: "Contact Us",
      contactDescription:
        "If you have any questions about this Cookie Policy, please contact us at macontardi@mcm-export.de.",
    },
    de: {
      title: "Cookie-Hinweis",
      lastUpdated: "Zuletzt aktualisiert: 10. Juli 2024.",
      description:
        "Diese Website verwendet nur wesentliche Cookies, die für das ordnungsgemäße Funktionieren der Website erforderlich sind. Wir verwenden keine Cookies für Analyse-, Tracking- oder Marketingzwecke auf unserer Website. Wenn Sie jedoch mit Drittanbieterdiensten interagieren, wie z.B. das Abonnieren unseres Newsletters über MailerLite oder das Ausfüllen eines Google-Formulars, können diese Dienste ihre eigenen Cookies und Tracking-Technologien verwenden.",
      thirdPartyServicesTitle: "Drittanbieter-Dienste",
      thirdPartyServicesDescription:
        "Unsere Website kann Links zu oder eingebettete Inhalte von Drittanbieterdiensten enthalten, wie MailerLite für Newsletter-Abonnements und Google Forms für Bewerbungen. Diese Dienste können Cookies oder andere Tracking-Technologien verwenden. Wir empfehlen Ihnen, deren Datenschutzrichtlinien zu lesen:",
      essentialCookiesTitle: "Wesentliche Cookies",
      essentialCookiesList: [
        "Zu merken, ob Sie unsere Cookie-Mitteilung akzeptiert haben",
        "Ihre Sitzung während des Besuchs unserer Website aufrechtzuerhalten",
      ],
      contactUs: "Kontaktieren Sie uns",
      contactDescription:
        "Wenn Sie Fragen zu dieser Cookie-Richtlinie haben, kontaktieren Sie uns bitte unter macontardi@mcm-export.de.",
    },
  });

  const t = content[language];

  return (
    <div className="max-w-4xl mx-auto py-10 px-4 text-gray-800">
      <h1 className="text-3xl font-bold text-center mb-4">{t.title}</h1>
      <p className="text-center text-sm text-gray-500 mb-6">{t.lastUpdated}</p>

      <p className="mb-6">{t.description}</p>

      <h2 className="text-xl font-semibold mb-4">{t.thirdPartyServicesTitle}</h2>
      <p className="mb-6">{t.thirdPartyServicesDescription}</p>
      <ul className="list-disc list-inside mb-6">
        <li>
          <a
            href="https://www.mailerlite.com/legal/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            MailerLite Privacy Policy
          </a>
        </li>
        <li>
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Google Privacy Policy
          </a>
        </li>
      </ul>

      <h2 className="text-xl font-semibold mb-4">{t.essentialCookiesTitle}</h2>
      <ul className="list-disc list-inside mb-6">
        {t.essentialCookiesList.map((item, index) => (
          <li key={index} className="mb-2">{item}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-4">{t.contactUs}</h2>
      <p className="mb-6">{t.contactDescription}</p>
    </div>
  );
}

export default Cookies;
