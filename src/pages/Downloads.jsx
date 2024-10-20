import React, { useContext } from 'react';
import { translations } from '../components/Translations';
import { LanguageContext } from '../components/LanguageContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate } from '@fortawesome/free-solid-svg-icons';

function Downloads() {
    const { language } = useContext(LanguageContext);
    const t = translations[language];

    const certificates = [
        { name: "DIN ISO 13485:2016 D", icon: faCertificate, downloadUrl: "https://drive.google.com/file/d/1qYzediUQRKYj9JOzdLt-OMOvSL5IjPw2/view?usp=sharing" },
        { name: "DIN ISO 13485:2016 Annex D", icon: faCertificate, downloadUrl: "https://drive.google.com/file/d/1UlKKYBuBuXcA8RLH_rKGgTIFklYZzAYs/view?usp=sharing" },
        { name: "DIN ISO 13485:2016 E", icon: faCertificate, downloadUrl: "https://drive.google.com/file/d/1kz99AQAyiWBaklqH5PwBwersCXVYkoKh/view?usp=sharing" },
        { name: "DIN ISO 13485:2016 Annex E", icon: faCertificate, downloadUrl: "https://drive.google.com/file/d/1zJWo1_s3ndfLnDNOrh78dfhzd_cMAZ2X/view?usp=sharing" },
        { name: "EG Zertifikat D", icon: faCertificate, downloadUrl: "https://drive.google.com/file/d/1ib5C23UJVE5U0k72cij9NJd4zsFua4FL/view?usp=sharing" },
        { name: "EC Certificate E", icon: faCertificate, downloadUrl: "https://drive.google.com/file/d/1hH-73t2QyLVRuw98Ch4FClqDLEkamjXt/view?usp=sharing" },
        { name: "EC Certificate Annex E", icon: faCertificate, downloadUrl: "https://drive.google.com/file/d/1DNZEz1w3KG6yTr2iHaWZDM-OsxrWYnDc/view?usp=sharing" },
        { name: "DIN ISO 13485:2021 E", icon: faCertificate, downloadUrl: "https://drive.google.com/file/d/1qCRb_O_pqt6NPAG_TT9_Y2_Eajr5TKKo/view?usp=sharing" },
    ];

    return (
        <div className="inner-content">
           {/* Simple Full-Width Image */}
           <div className="w-full h-64 lg:h-96 overflow-hidden">
                <img
                    src="/docs-picture.jpg"
                    alt={t.downloadsTitle}
                    className="w-full h-full object-cover"
                />
            </div>

            <section className="text-center py-10 px-6 max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-red-600">{t.downloadsTitle}</h1>
                <p className="text-gray-700 mt-4">{t.downloadsIntroduction}</p>
            </section>

            <section className="container mx-auto px-4">
                <h2 className="text-2xl font-semibold text-red-600 text-center mb-6">{t.certificatesTitle}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {certificates.map((item, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
                            <FontAwesomeIcon icon={item.icon} className="text-red-600 text-3xl mb-3" />
                            <h5 className="text-xl font-semibold text-center">{item.name}</h5>
                            <a
                                href={item.downloadUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
                            >
                                {t.downloadButton}
                            </a>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Downloads;
