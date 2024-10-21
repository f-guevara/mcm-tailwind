import React, { useContext } from 'react';
import { LanguageContext } from '../components/LanguageContext';

function Imprint() {
    const { language } = useContext(LanguageContext);

    // Content for German and English
    const content = {
        EN: (
            <div className="inner-content">
                <div className="p-6 text-gray-800">
                    <h2 className="text-3xl font-bold text-center mb-6">Imprint</h2>
                    <h3 className="text-xl font-semibold mb-2">M.C. Medizintechnik-Export GmbH & Co. KG</h3>
                    <p className="mb-4">
                        Eltastraße 2, <br />
                        78573 Wurmlingen<br />
                        Phone: +49 (0) 7461 9145600<br />
                        Email: info@mcm-export.de
                    </p>
                    <p className="mb-4">
                        Hereafter referred to as "M.C. Medizintechnik-Export".
                    </p>
                    <h4 className="text-lg font-medium mt-4">Managing Directors:</h4>
                    <p className="mb-4">Michele Contardi</p>
                    <p className="mb-4">District Court Stuttgart, HRA 732310</p>

                    <h4 className="text-lg font-medium mt-4">Terms of Use</h4>
                    <p className="mb-4">
                        All rights to the design and content of this website remain with M.C. Medizintechnik-Export and are protected by copyright. The use or reproduction of the content, in whole or in part, requires written permission from M.C. Medizintechnik-Export. All information on this website is provided without guarantee of its accuracy. M.C. Medizintechnik-Export is not liable for any damages arising from the use of the information retrieved.
                    </p>
                    <p className="mb-4">
                        M.C. Medizintechnik-Export reserves the right to change, supplement, or delete the content of this website at any time without prior notice. No liability arises from these actions.
                    </p>

                    <h4 className="text-lg font-medium mt-4">Concept, Design & Implementation</h4>
                    <p className="mb-4">Developed in-house by Fernando Guevara, M.C. Medizintechnik-Export GmbH & Co. KG.</p>
                </div>
            </div>
        ),
        DE: (
            <div className="inner-content">
                <div className="p-6 text-gray-800">
                    <h2 className="text-3xl font-bold text-center mb-6">Impressum</h2>
                    <h3 className="text-xl font-semibold mb-2">M.C. Medizintechnik-Export GmbH & Co. KG</h3>
                    <p className="mb-4">
                        Eltastraße 2, <br />
                        78573 Wurmlingen<br />
                        Telefon: +49 (0) 7461 9145600<br />
                        E-Mail: info@mcm-export.de
                    </p>
                    <p className="mb-4">
                        Nachfolgend als "M.C. Medizintechnik-Export" bezeichnet.
                    </p>
                    <h4 className="text-lg font-medium mt-4">Geschäftsführer:</h4>
                    <p className="mb-4">Michele Contardi</p>
                    <p className="mb-4">Amtsgericht Stuttgart, HRA 732310</p>

                    <h4 className="text-lg font-medium mt-4">Nutzungsbedingungen</h4>
                    <p className="mb-4">
                        Alle Rechte an der Gestaltung und den Inhalten dieser Website verbleiben bei M.C. Medizintechnik-Export und unterliegen dem Urheberrecht. Der Gebrauch oder die Vervielfältigung der Inhalte, ganz oder teilweise, bedarf der schriftlichen Genehmigung von M.C. Medizintechnik-Export. Alle Informationen auf dieser Website werden ohne Gewähr für ihre Richtigkeit bereitgestellt. M.C. Medizintechnik-Export haftet nicht für Schäden, die sich aus der Nutzung der abgerufenen Informationen ergeben.
                    </p>
                    <p className="mb-4">
                        M.C. Medizintechnik-Export behält sich das Recht vor, die Inhalte dieser Website jederzeit und ohne Vorankündigung zu ändern, zu ergänzen oder zu löschen. Daraus ergibt sich keine Haftung.
                    </p>

                    <h4 className="text-lg font-medium mt-4">Konzept, Gestaltung & Umsetzung</h4>
                    <p className="mb-4">Entwickelt intern durch Fernando Guevara, M.C. Medizintechnik-Export GmbH & Co. KG.</p>
                </div>
            </div>
        ),
    };

    return (
        <div className="p-6">
            {language === 'EN' ? content.EN : content.DE}
        </div>
    );
}

export default Imprint;
