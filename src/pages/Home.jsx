import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../components/Carousel';
import { translations } from '../components/Translations';
import { LanguageContext } from '../components/LanguageContext'; // Import the context

function Home() {
    const { language } = useContext(LanguageContext); // Access the context

    const products = translations[language].products;
    const events = translations[language].events;
    
    return (
        <div className="home">
        <Carousel />
        
        {/* Company Name and Introduction */}
        <section className="text-center mt-8">
            <h1 className="text-3xl font-bold text-red-600">M.C. Medizintechnik Export GmbH & Co.Kg</h1>
            <p className="text-gray-700 mt-2 max-w-2xl mx-auto">
            {translations[language].history}
            </p>
        </section>
    
        <main className="content">
            {/* Introduction Section */}
            <section className="introduction text-center px-6 py-10 max-w-4xl mx-auto">
                <p className="text-lg font-ubuntu">{translations[language].introduction}</p>
            </section>
    
            {/* Stats Section */}
            <section className="stats grid grid-cols-1 sm:grid-cols-3 gap-6">
                {translations[language].stats.map((stat, index) => (
                    <div key={index} className="stat-card p-4 bg-red-600 text-white rounded-lg">
                        <h2 className="text-3xl font-bold font-lora">{stat.number}</h2>
                        <p className="text-lg">{stat.text}</p>
                    </div>
                ))}
            </section>
    
            {/* Products Section */}
            <section className="products mt-10">
                <h2 className="text-4xl font-semibold text-red-600 font-lora">{translations[language].productsTitle}</h2>
                <div className="product-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
                    {products.map((product, index) => (
                        <div key={index} className="product-card bg-white shadow-md p-6 rounded-lg">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="object-contain h-40 w-full mb-4"
                            />
                            <h3 className="text-xl font-semibold text-red-600 font-lora">{product.title}</h3>
                            <p className="text-gray-700 font-ubuntu">{product.description}</p>
                        </div>
                    ))}
                </div>
            </section>
    
            {/* Events Section */}
            <section className="events mt-10">
                <h2 className="text-4xl font-semibold text-red-600 font-lora">{translations[language].eventsTitle}</h2>
                <div className="event-grid grid grid-cols-1 sm:grid-cols-2 gap-8 mt-6">
                    {events.map((event, index) => (
                        <div key={index} className="event-card bg-white shadow-md p-6 rounded-lg">
                            <img
                                src={event.image}
                                alt={event.title}
                                className="object-contain h-40 w-full mb-4"
                            />
                            <h3 className="text-xl font-semibold text-red-600 font-lora">{event.title}</h3>
                            <p className="text-gray-700 font-ubuntu">{event.date}</p>
                            <a
                                href={event.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-red-600 underline mt-2"
                            >
                                Visit Website
                            </a>
                        </div>
                    ))}
                </div>
            </section>
    
            {/* Premises Section */}
            <section className="premises mt-10">
                <h2 className="text-4xl font-semibold text-red-600 font-lora">{translations[language].premisesTitle}</h2>
                <div className="premises-content mt-6 flex flex-col lg:flex-row">
                    <img
                        src="/premises.png"
                        alt="MC Medizintechnik premises"
                        className="object-contain h-48 w-full lg:w-1/2 mb-4 lg:mb-0 lg:mr-8"
                    />
                    <p className="text-gray-700 font-ubuntu">{translations[language].premisesDescription}</p>
                </div>
            </section>
    
            {/* Call to Action Section */}
            <section className="cta mt-10 text-center px-6 py-2">
                <h2 className="text-3xl font-semibold font-lora">{translations[language].cta}</h2>
                <Link
                    to="/team"
                    className="inline-block mt-4 bg-red-600 text-white py-2 px-6 rounded-full hover:bg-red-700"
                >
                    {translations[language].contactButton}
                </Link>
            </section>
        </main>
    </div>
    
    );
}

export default Home;
