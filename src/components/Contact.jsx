import React from 'react';

const Contact = () => {
    return (
        <section id='contacto' className="relative flex items-center justify-center h-screen overflow-hidden">
            <video className="absolute top-0 left-0 min-w-full min-h-full z-0 object-cover" autoPlay loop muted>
                <source src="fondoOscuro2.mp4" type="video/mp4" />
                Tu navegador no soporta el elemento de video.
            </video>

            <div className="relative z-30 text-white text-center">
                <h2 className="text-5xl font-bold mb-4 animate__animated animate__fadeInDown">¡Contáctame!</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    <div className="bg-white rounded-lg p-6 hover:shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                        <a href="tel:+524434395522" className="text-gray-800">
                            <img src="https://www.phoenixgroup.org.uk/images/icons/icon-blue-contact.png" alt="Teléfono" className="h-12 w-12 mx-auto mb-4" />
                            <p className="text-lg font-semibold text-gray-800 mb-2">Teléfono</p>
                            +52 (443) 439-5522</a>
                    </div>
                    <div className="bg-white rounded-lg p-6 hover:shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                        <a href="https://wa.me/524434395522" className="text-gray-800">
                            <img src="https://freepngimg.com/thumb/whatsapp/77102-whatsapp-computer-call-telephone-icons-png-image-high-quality.png" alt="WhatsApp" className="h-12 w-12 mx-auto mb-4" />
                            <p className="text-lg font-semibold text-gray-800 mb-2">WhatsApp</p>
                            +52 (443) 439-5522</a>
                    </div>
                    <div className="bg-white rounded-lg p-6 hover:shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                        <a href="mailto:arturoestrada301@gmail.com" className="text-gray-800">
                            <img src="https://www.freepnglogos.com/uploads/email-png/blue-email-box-circle-png-transparent-icon-2.png" alt="Correo" className="h-12 w-12 mx-auto mb-4" />
                            <p className="text-lg font-semibold text-gray-800 mb-2">Correo</p>
                            arturoestrada301@gmail.com</a>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Contact;