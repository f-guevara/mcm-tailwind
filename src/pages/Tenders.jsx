import React, { useContext, useState } from 'react';
import { translations } from '../components/Translations';
import { LanguageContext } from '../components/LanguageContext';

function Tenders() {
    const { language } = useContext(LanguageContext);
    const [expandedTender, setExpandedTender] = useState(null);

    const tenders = translations[language].tenders;

    const toggleTender = (id) => {
        setExpandedTender((prev) => (prev === id ? null : id));
    };

    return (
        <div className="inner-content">
            {/* Full-width Image */}
            <div className="w-full h-64 lg:h-96 overflow-hidden">
                <img
                    src="/tender-2.jpg"
                    alt={translations[language].tendersTitle}
                    className="w-full h-full object-cover"
                />
            </div>
            <section className="text-center py-10 px-6 max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-red-600">{translations[language].tendersTitle}</h2>
                <p className="text-gray-700 mt-4 text-lg">
                    {translations[language].tendersIntroduction}
                </p>
            </section>

            {/* Tender Cards */}
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {tenders.map((tender) => (
                        <div key={tender.id} className="bg-white shadow-lg rounded-lg p-4">
                            <h3 className="text-xl font-semibold text-red-600">{tender.title}</h3>
                            <p className="text-gray-600 mt-2">{tender.country}</p>
                            <p className="text-gray-700 mt-2">{tender.description}</p>
                            <button 
                                onClick={() => toggleTender(tender.id)}
                                className="mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
                            >
                                {expandedTender === tender.id ? translations[language].hidePdfs : translations[language].showPdfs}
                            </button>

                            {/* Display PDFs if this tender is expanded */}
                            {expandedTender === tender.id && (
                                <div className="mt-4 space-y-2">
                                    {tender.pdfs.map((pdf, index) => (
                                        <a 
                                            key={index} 
                                            href={pdf.url} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="block text-red-600 underline hover:text-red-800"
                                        >
                                            {pdf.name}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Tenders;
