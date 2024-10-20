import React, { useState } from 'react';

const ProductCarousel = ({ pages }) => {
    const [currentPage, setCurrentPage] = useState(0);

    const goToNextPage = () => {
        setCurrentPage((prevPage) => (prevPage + 1) % pages.length);
    };

    const goToPreviousPage = () => {
        setCurrentPage((prevPage) => (prevPage - 1 + pages.length) % pages.length);
    };

    return (
        <div className="flex items-center space-x-4">
            <button 
                className="text-gray-600 hover:text-gray-900" 
                onClick={goToPreviousPage}
            >
                &lt;
            </button>
            <div className="w-full h-64 md:h-80 lg:h-96 flex items-center justify-center overflow-hidden rounded-lg shadow-md">
                <img 
                    src={pages[currentPage].imageSrc} 
                    alt={pages[currentPage].alt} 
                    className="object-contain w-full h-full"
                />
            </div>
            <button 
                className="text-gray-600 hover:text-gray-900" 
                onClick={goToNextPage}
            >
                &gt;
            </button>
        </div>
    );
};

export default ProductCarousel;
