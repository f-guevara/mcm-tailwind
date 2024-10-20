import React, { useContext } from 'react';
import { translations } from '../components/Translations';
import { LanguageContext } from '../components/LanguageContext';

function About() {
    const { language } = useContext(LanguageContext);

    return (
        <div className="about-page">
            {/* Full-width Image */}
            <div className="w-full h-80 lg:h-96 overflow-hidden">
                <img
                    src="/premises.png"
                    alt="MC Medizintechnik premises"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Company Story Section */}
            <section className="text-center py-10 px-6 max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-red-600">{translations[language].aboutTitle}</h2>
                <p className="text-gray-700 mt-4 text-lg">{translations[language].aboutDescription}</p>
            </section>

            {/* Leadership Section */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 px-6">
                <div className="text-center">
                    <img src="/michele.png" alt="Michele Contardi" className="w-36 h-36 mx-auto rounded-full object-cover mb-4" />
                    <h4 className="text-xl font-semibold">{translations[language].micheleName}</h4>
                    <p className="text-gray-600">{translations[language].micheleRole}</p>
                </div>
                <div className="text-center">
                    <img src="/murray.png" alt="Dr. Murray Morton" className="w-36 h-36 mx-auto rounded-full object-cover mb-4" />
                    <h4 className="text-xl font-semibold">{translations[language].murrayName}</h4>
                    <p className="text-gray-600">{translations[language].murrayRole}</p>
                </div>
                <div className="text-center">
                    <img src="/amer.png" alt="Amer Almah" className="w-36 h-36 mx-auto rounded-full object-cover mb-4" />
                    <h4 className="text-xl font-semibold">{translations[language].amerName}</h4>
                    <p className="text-gray-600">{translations[language].amerRole}</p>
                </div>
            </section>

            {/* Vision Section */}
            <section className="bg-gray-100 py-10 px-6 mt-10">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-3xl font-bold text-red-600">{translations[language].visionTitle}</h3>
                    <p className="text-gray-700 mt-4 text-lg">{translations[language].visionDescription}</p>
                </div>
            </section>
        </div>
    );
}

export default About;
