import React, { createContext, useState } from 'react';

// Create a context for the language
export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    // State for the current language ('en' for English, 'de' for German)
    const [language, setLanguage] = useState('en');

    // Function to toggle between languages
    const toggleLanguage = () => {
        setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'de' : 'en'));
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};
