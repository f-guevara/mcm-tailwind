import React, { useContext, useState } from 'react';
import ProductCarousel from '../components/ProductCarousel';
import { LanguageContext } from '../components/LanguageContext';

const catalogs = {
    "mastorakis-chest-stabilization": [
        { imageSrc: '/page-1.png', alt: 'Product Page 1', description: 'Page 1' },
        { imageSrc: '/page-2.png', alt: 'Product Page 2', description: 'Page 2' },
        { imageSrc: '/page-3.png', alt: 'Product Page 3', description: 'Page 3' },
        { imageSrc: '/page-4.png', alt: 'Product Page 4', description: 'Page 4' },
        { imageSrc: '/page-5.png', alt: 'Product Page 5', description: 'Page 5' },
        { imageSrc: '/page-6.png', alt: 'Product Page 6', description: 'Page 6' },
        { imageSrc: '/page-7.png', alt: 'Product Page 7', description: 'Page 7' },
        { imageSrc: '/page-8.png', alt: 'Product Page 8', description: 'Page 8' },
        { imageSrc: '/page-9.png', alt: 'Product Page 9', description: 'Page 9' },
        { imageSrc: '/page-10.png', alt: 'Product Page 10', description: 'Page 10' },
        { imageSrc: '/page-11.png', alt: 'Product Page 11', description: 'Page 11' },
        { imageSrc: '/page-12.png', alt: 'Product Page 12', description: 'Page 12' },
        { imageSrc: '/page-13.png', alt: 'Product Page 13', description: 'Page 13' },
        { imageSrc: '/page-14.png', alt: 'Product Page 14', description: 'Page 14' },
        { imageSrc: '/page-15.png', alt: 'Product Page 15', description: 'Page 15' },
        { imageSrc: '/page-16.png', alt: 'Product Page 16', description: 'Page 16' },
    ],
};

function Products() {
    const [currentCatalog, setCurrentCatalog] = useState('mastorakis-chest-stabilization');
    const { language } = useContext(LanguageContext);

    // Hardcoded descriptions for Mastorakis Chest Stabilization
    const descriptions = {
        en: "Discover our Mastorakis Chest Stabilization system, part of the MCM TRAUMA LINE, designed for advanced surgical procedures to ensure optimal patient outcomes.",
        de: "Entdecken Sie unser Mastorakis Bruststabilisierungssystem, Teil der MCM TRAUMA LINE, entwickelt für fortschrittliche chirurgische Eingriffe zur Gewährleistung optimaler Patientenergebnisse."
    };

    return (
        <div className="inner-content">
            {/* Full-width Image */}
            <div className="w-full h-64 lg:h-96 overflow-hidden">
                <img
                    src="/implants-2.png"
                    alt="Mastorakis Chest Stabilization Products"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Catalog Selection and Content */}
            <div className="container mx-auto mt-5 px-4">
                {/* System Heading */}
                <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
                    MCM TRAUMA LINE
                </h1>

                {/* Submenu for Catalog Selection */}
                <nav className="flex space-x-4 bg-gray-100 p-4 rounded-lg shadow-md">
                    <button
                        className={`px-3 py-2 rounded ${currentCatalog === 'mastorakis-chest-stabilization' ? 'bg-red-600 text-white' : 'bg-white text-gray-700'}`}
                        onClick={() => setCurrentCatalog('mastorakis-chest-stabilization')}
                    >
                        Mastorakis Chest Stabilization
                    </button>
                </nav>

                {/* Content for the selected catalog */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
                    <div>
                        <h2 className="text-2xl font-bold text-red-600">
                            Mastorakis Chest Stabilization
                        </h2>
                        <p className="mt-2 text-gray-600">
                            {descriptions[language]}
                        </p>
                    </div>
                    <div>
                        <ProductCarousel pages={catalogs[currentCatalog]} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Products;


