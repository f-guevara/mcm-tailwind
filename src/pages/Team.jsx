import React, { useContext } from 'react';
import { translations } from '../components/Translations';
import { LanguageContext } from '../components/LanguageContext';

function Team() {
    const { language } = useContext(LanguageContext);

    const teamMembers = [
        {
            name: "Amer Almahameed",
            position: translations[language].amerPosition,
            phone: "+49 7461 9145600",
            email: "director@mcm-export.de",
            image: "/team-member-2.jpg"
        },
        {
            name: "Ali Maghari",
            position: translations[language].aliPosition,
            phone: "+49 7461 9145600",
            email: "a.maghari@mcm-export.de",
            image: "/team-member-1.jpg"
        },
        {
            name: "Michele Contardi",
            position: translations[language].michelePosition,
            phone: "+49 7461 9145601",
            email: "mcontardi@mcm-export.de",
            image: "/team-member-2.jpg"
        },
        {
            name: "Cristian Contardi",
            position: translations[language].cristianPosition,
            phone: "+49 7461 9145602",
            email: "ccontardi@mcm-export.de",
            image: "/team-member-3.jpg"
        },
        {
            name: "Matias Contardi",
            position: translations[language].matiasPosition,
            phone: "+49 7461 9145603",
            email: "macontardi@mcm-export.de",
            image: "/team-member-3.jpg"
        },
        {
            name: "Yasir Maghari",
            position: translations[language].yasirPosition,
            phone: "+49 7461 9145600",
            email: "mena@mcm-export.de",
            image: "/team-member-3.jpg"
        },
        {
            name: "Fernando Guevara",
            position: translations[language].fernandoPosition,
            phone: "+49 7461 9145605",
            email: "fguevara@mcm-export.de",
            image: "/team-member-3.jpg"
        },
        {
            name: "Hans-Michael Künz",
            position: translations[language].hansPosition,
            phone: "+49 7461 9145604",
            email: "buchhaltung@mcm-export.de",
            image: "/team-member-3.jpg"
        },
    ];

    return (
        <div className="inner-content">
        {/* Full-width Image Banner */}
        <div className="w-full h-64 lg:h-96 overflow-hidden">
            <img
                src="/team-picture.png" // Replace with your team banner image
                alt={translations[language].teamTitle}
                className="w-full h-full object-cover"
            />
        </div>

        {/* Team Introduction */}
        <section className="text-center py-10 px-6 max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-red-600">{translations[language].teamTitle}</h2>
            <p className="text-gray-700 mt-4 text-lg">
                {translations[language].teamIntroduction}
            </p>
        </section>
        
        {/* Team Members */}
        <div className="container mx-auto mt-5 px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {teamMembers.map((member, index) => (
                    <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden h-full">
                        <img
                            src="/employee_icon.png"
                            className="w-full h-56 object-cover"
                            alt={member.name}
                        />
                        <div className="p-4">
                            <h5 className="text-xl font-semibold">{member.name}</h5>
                            <p className="text-gray-600">{member.position}</p>
                            <div className="mt-4">
                                <p className="text-gray-600">{translations[language].phoneLabel}: {member.phone}</p>
                                <p className="text-gray-600">{translations[language].emailLabel}: {member.email}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
    );
}

export default Team;


