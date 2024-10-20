import React, { useContext } from 'react';
import { translations } from '../components/Translations';
import { LanguageContext } from '../components/LanguageContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake, faCalculator } from '@fortawesome/free-solid-svg-icons';

function Jobs() {
    const { language } = useContext(LanguageContext);
    const t = translations[language];

    const jobs = [
        {
            title: "Sales Representative",
            description: "Join our dynamic sales team to promote medical devices.",
            icon: faHandshake,
        },
        {
            title: "Accounting Assistant",
            description: "Assist with financial reporting, bookkeeping, and other accounting tasks.",
            icon: faCalculator,
        },
    ];

    return (
        <div className="inner-content">
            {/* Full-width Image */}
            <div className="w-full h-64 lg:h-96 overflow-hidden">
                <img
                    src="/jobs-picture.jpg"
                    alt={t.jobsTitle}
                    className="w-full h-full object-cover"
                />
            </div>

            <section className="text-center py-10 px-6 max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-red-600">{t.jobsTitle}</h1>
                <p className="text-gray-700 mt-4">
                    {t.jobsIntroduction}
                    <a href="mailto:macontardi@mcm-export.de" className="text-blue-500 hover:underline ml-2">
                        macontardi@mcm-export.de
                    </a>
                </p>
            </section>

            <section className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {jobs.map((job, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
                            <FontAwesomeIcon icon={job.icon} className="text-red-600 text-3xl mb-3" />
                            <h5 className="text-xl font-semibold text-center">{job.title}</h5>
                            <p className="text-gray-700 text-center">{job.description}</p>
                            <a
                                href="https://forms.gle/5g2yL9rnwh9qumzb6"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
                            >
                                {t.applyNow}
                            </a>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Jobs;
