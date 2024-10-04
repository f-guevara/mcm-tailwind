import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from './LanguageContext';

function Footer() {
    const { language } = useContext(LanguageContext);

    const content = {
        en: {
            title: "Contact Us",
            address: "Eltastraße 2, 78573 Wurmlingen, Germany",
            hours: "Mon-Thu: 8 am - 4 pm, Fri: 8 am - 12 noon",
            email: "info@mcm-export.de",
            phone: "+49 (0) 7461 9145600",
            terms: "Terms and Conditions",
            imprint: "Imprint",
            privacy: "Privacy Policy",
            cookies: "Cookies"
        },
        de: {
            title: "Kontaktieren Sie uns",
            address: "Eltastraße 2, 78573 Wurmlingen, Deutschland",
            hours: "Mo-Do: 8:00 - 16:00 Uhr, Fr: 8:00 - 12:00 Uhr",
            email: "info@mcm-export.de",
            phone: "+49 (0) 7461 9145600",
            terms: "Allgemeine Geschäftsbedingungen",
            imprint: "Impressum",
            privacy: "Datenschutzerklärung",
            cookies: "Cookies"
        }
    };

    const t = content[language];

    return (
        <footer className="bg-gray-900 text-white py-10">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold mb-4">{t.title}</h2>
                <p className="mb-2">{t.address}</p>
                <p className="mb-2">{t.hours}</p>
                <p className="mb-2">
                    <a href={`mailto:${t.email}`} className="text-blue-400 hover:underline">
                        {t.email}
                    </a>
                </p>
                <p className="mb-6">
                    <a href={`tel:${t.phone}`} className="text-blue-400 hover:underline">
                        {t.phone}
                    </a>
                </p>
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6">
                    <a
                        href="https://drive.google.com/file/d/1Bq9P9-M7aGwbIH3829ef5f1hjbnM5C_s/view?usp=sharing"
                        className="hover:underline"
                    >
                        {t.terms}
                    </a>
                    <Link to="/imprint" className="hover:underline">
                        {t.imprint}
                    </Link>
                    <Link to="/privacy-policy" className="hover:underline">
                        {t.privacy}
                    </Link>
                    <Link to="/cookies" className="hover:underline">
                        {t.cookies}
                    </Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
