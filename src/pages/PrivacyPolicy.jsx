import React, { useState } from 'react';

function PrivacyPolicy() {
    const [language, setLanguage] = useState('EN');

    const handleLanguageToggle = (lang) => {
        setLanguage(lang);
    };

    const content = {
        EN: {
            title: "Privacy Policy",
            lastUpdated: "Last updated: July 10, 2024.",
            sections: [
                {
                    title: "Use of Cookies",
                    content: "This website uses only essential cookies that are necessary for the website to function properly. We do not use any cookies for analytics, tracking, or marketing purposes on our website. However, when you interact with third-party services, such as subscribing to our newsletter via MailerLite or filling out a Google Form, those services may use their own cookies and tracking technologies."
                },
                {
                    title: "Third-Party Services",
                    content: "Our website may include links to or embed content from third-party services, such as MailerLite for newsletter subscriptions and Google Forms for job applications. Please note that these services may use cookies or other tracking technologies, and we recommend reviewing their privacy policies for more information:",
                    links: [
                        { text: "MailerLite Privacy Policy", url: "https://www.mailerlite.com/legal/privacy-policy" },
                        { text: "Google Privacy Policy", url: "https://policies.google.com/privacy" }
                    ]
                },
                {
                    title: "Essential Cookies",
                    content: "Essential cookies are used to:",
                    list: [
                        "Remember if you have accepted our cookie notice",
                        "Maintain your session while you browse our website"
                    ],
                    additional: "These cookies do not collect any personal information and are strictly necessary for the website to function."
                },
                {
                    title: "Your Rights",
                    content: "You have the right to accept or decline cookies. However, declining essential cookies may impact the functionality of the website."
                },
                {
                    title: "Changes to This Policy",
                    content: "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page."
                },
                {
                    title: "Contact Us",
                    content: "If you have any questions about this Privacy Policy, please contact us at macontardi@mcm-export.de."
                }
            ]
        },
        DE: {
            title: "Datenschutzerklärung",
            lastUpdated: "Zuletzt aktualisiert: 10. Juli 2024.",
            sections: [
                {
                    title: "Verwendung von Cookies",
                    content: "Diese Website verwendet nur essentielle Cookies, die für das ordnungsgemäße Funktionieren der Website erforderlich sind. Wir verwenden keine Cookies für Analyse-, Tracking- oder Marketingzwecke auf unserer Website. Wenn Sie jedoch mit Drittanbieterdiensten interagieren, wie z.B. das Abonnieren unseres Newsletters über MailerLite oder das Ausfüllen eines Google-Formulars, können diese Dienste ihre eigenen Cookies und Tracking-Technologien verwenden."
                },
                {
                    title: "Drittanbieter-Dienste",
                    content: "Unsere Website kann Links zu oder eingebettete Inhalte von Drittanbieterdiensten enthalten, wie MailerLite für Newsletter-Abonnements und Google Forms für Bewerbungen. Bitte beachten Sie, dass diese Dienste Cookies oder andere Tracking-Technologien verwenden können. Wir empfehlen, deren Datenschutzrichtlinien für weitere Informationen zu überprüfen:",
                    links: [
                        { text: "MailerLite Datenschutzrichtlinie", url: "https://www.mailerlite.com/legal/privacy-policy" },
                        { text: "Google Datenschutzrichtlinie", url: "https://policies.google.com/privacy" }
                    ]
                },
                {
                    title: "Essentielle Cookies",
                    content: "Essentielle Cookies werden verwendet, um:",
                    list: [
                        "Zu merken, ob Sie unsere Cookie-Mitteilung akzeptiert haben",
                        "Ihre Sitzung während des Besuchs unserer Website aufrechtzuerhalten"
                    ],
                    additional: "Diese Cookies sammeln keine persönlichen Informationen und sind unbedingt erforderlich, damit die Website funktioniert."
                },
                {
                    title: "Ihre Rechte",
                    content: "Sie haben das Recht, Cookies zu akzeptieren oder abzulehnen. Das Ablehnen von essentiellen Cookies kann jedoch die Funktionalität der Website beeinträchtigen."
                },
                {
                    title: "Änderungen dieser Richtlinie",
                    content: "Wir können unsere Datenschutzerklärung von Zeit zu Zeit aktualisieren. Wir werden Sie über alle Änderungen informieren, indem wir die neue Datenschutzerklärung auf dieser Seite veröffentlichen."
                },
                {
                    title: "Kontaktieren Sie uns",
                    content: "Wenn Sie Fragen zu dieser Datenschutzerklärung haben, kontaktieren Sie uns bitte unter macontardi@mcm-export.de."
                }
            ]
        }
    };

    const renderContent = () => {
        const langContent = content[language];
        return (
            <div>
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">{langContent.title}</h1>
                <p className="text-center text-gray-600 mb-6">{langContent.lastUpdated}</p>
                {langContent.sections.map((section, index) => (
                    <div key={index} className="mb-6">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">{section.title}</h2>
                        <p className="text-gray-700">{section.content}</p>
                        {section.links && (
                            <ul className="list-disc ml-6 mt-2">
                                {section.links.map((link, i) => (
                                    <li key={i}>
                                        <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                            {link.text}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        )}
                        {section.list && (
                            <ul className="list-disc ml-6 mt-2">
                                {section.list.map((item, i) => (
                                    <li key={i} className="text-gray-700">{item}</li>
                                ))}
                            </ul>
                        )}
                        {section.additional && <p className="mt-2 text-gray-700">{section.additional}</p>}
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="flex justify-center space-x-4 mb-6">
                <button 
                    className={`py-2 px-4 rounded ${language === 'EN' ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-800'}`}
                    onClick={() => handleLanguageToggle('EN')}
                >
                    English
                </button>
                <button 
                    className={`py-2 px-4 rounded ${language === 'DE' ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-800'}`}
                    onClick={() => handleLanguageToggle('DE')}
                >
                    Deutsch
                </button>
            </div>
            {renderContent()}
        </div>
    );
}

export default PrivacyPolicy;


