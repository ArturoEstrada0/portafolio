import React, { useState, useEffect } from 'react';
import './BackToTopButton.css'; // Asegúrate de que la ruta del archivo CSS sea correcta

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Mostrar el botón cuando se desplaza hacia abajo
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Agregar el event listener al scroll
    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    // Scroll hacia arriba cuando se hace clic en el botón
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className={`back-to-top ${isVisible ? 'visible' : 'hidden'}`}>
            <button
                onClick={scrollToTop}
                aria-label="Volver arriba"
                title="Volver arriba"
                className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#ffffff" d="M318 177.5c3.8-8.8 2-19-4.6-26l-136-144C172.9 2.7 166.6 0 160 0s-12.9 2.7-17.4 7.5l-136 144c-6.6 7-8.4 17.2-4.6 26S14.4 192 24 192H96l0 288c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32l0-288h72c9.6 0 18.2-5.7 22-14.5z" /></svg>      </button>
        </div>
    );
};

export default BackToTopButton;
