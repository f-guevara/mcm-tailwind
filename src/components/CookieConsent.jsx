import React, { useState, useEffect, useContext } from 'react';
import { LanguageContext } from './LanguageContext';

const CookieConsent = () => {
  const [show, setShow] = useState(false);
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShow(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShow(false);
  };

  const content = {
    EN: {
      title: 'Cookie Notice',
      body: (
        <>
          <p>This website uses only essential cookies to ensure the website functions properly. We do not use any tracking, analytics, or marketing cookies.</p>
          <p>By continuing to use this site, you accept our use of essential cookies.</p>
          <p>For more information, please read our <a href="/privacy-policy" className="text-blue-500 underline">Privacy Policy</a>.</p>
        </>
      ),
      button: 'I Understand'
    },
    DE: {
      title: 'Cookie-Hinweis',
      body: (
        <>
          <p>Diese Website verwendet nur wesentliche Cookies, um sicherzustellen, dass die Website ordnungsgemäß funktioniert. Wir verwenden keine Tracking-, Analyse- oder Marketing-Cookies.</p>
          <p>Durch die weitere Nutzung dieser Website akzeptieren Sie unsere Verwendung von wesentlichen Cookies.</p>
          <p>Für weitere Informationen lesen Sie bitte unsere <a href="/privacy-policy" className="text-blue-500 underline">Datenschutzbestimmungen</a>.</p>
        </>
      ),
      button: 'Verstanden'
    }
  };

  const cookieContent = content[language] || content.EN;

  return (
    show && (
      <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 z-50 shadow-lg">
        <h2 className="text-xl font-bold">{cookieContent.title}</h2>
        <div className="mt-2">{cookieContent.body}</div>
        <button
          onClick={handleAccept}
          className="mt-4 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded"
        >
          {cookieContent.button}
        </button>
      </div>
    )
  );
};

export default CookieConsent;
