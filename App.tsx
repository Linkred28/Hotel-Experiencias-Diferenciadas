import React, { useEffect } from 'react';
import { tools } from './constants';

const App: React.FC = () => {

    useEffect(() => {
        const slides = document.querySelectorAll('.slide-content');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        slides.forEach(slide => {
            observer.observe(slide);
        });

        return () => {
            slides.forEach(slide => {
                observer.unobserve(slide);
            });
        };
    }, []);

    return (
        <div className="presentation-container">

            {/* Slide 1: Cover */}
            <section id="slide1" className="slide bg-primary-blue text-white">
                <div className="slide-content text-center">
                    <h1 className="text-5xl md:text-8xl font-black leading-tight mb-6">
                        Experiencias Diferenciadas “Vive lo Europeo”
                    </h1>
                    <p className="text-2xl md:text-4xl text-gray-300">Sección: Recursos Humanos + Comunicación Digital</p>
                </div>
            </section>


            {/* Slide 2: Common Problems */}
            <section id="slide2" className="slide bg-white">
                <div className="slide-content">
                    <h2 className="text-4xl md:text-6xl font-bold text-dark mb-16 text-center">Áreas de oportunidad:</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div className="bg-light p-8 rounded-xl shadow-lg flex flex-col items-center text-center transition-transform transform hover:scale-105 duration-300 border border-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-20 h-20 text-primary-blue mb-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" /></svg>
                            <p className="text-dark text-xl md:text-2xl font-semibold">El concepto europeo y artístico del hotel no se capitaliza plenamente como diferenciador competitivo frente a otros alojamientos.</p>
                        </div>
                        <div className="bg-light p-8 rounded-xl shadow-lg flex flex-col items-center text-center transition-transform transform hover:scale-105 duration-300 border border-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-20 h-20 text-primary-blue mb-6"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 00-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
                            <p className="text-dark text-xl md:text-2xl font-semibold">El staff no tiene un guion claro para transmitir la historia de la marca.</p>
                        </div>
                        <div className="bg-light p-8 rounded-xl shadow-lg flex flex-col items-center text-center transition-transform transform hover:scale-105 duration-300 border border-gray-200">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-20 h-20 text-primary-blue mb-6"><path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 21.75a8.967 8.967 0 01-5.454-1.31m5.454 0L13.988 15.51a23.848 23.848 0 00-5.454-1.31M13.988 15.51a23.848 23.848 0 01-5.454-1.31A8.967 8.967 0 016 21.75a8.967 8.967 0 01-5.454-1.31M6 21.75L3.143 17.082m2.857 0L6 15.51a23.848 23.848 0 015.454-1.31m5.454 0L14.988 17.082" /></svg>
                           <p className="text-dark text-xl md:text-2xl font-semibold">Los huéspedes no encuentran actividades culturales que justifiquen estancias más largas o repetidas.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Slide 3: What We Do */}
            <section id="slide3" className="slide bg-primary-dark">
                 <div className="slide-content">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-12 text-center">Nuestra intervención contempla:</h2>
                    <div className="max-w-5xl mx-auto space-y-8">
                        <div className="bg-light p-6 rounded-xl shadow-lg flex items-center space-x-6 border border-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-16 h-16 text-primary-blue flex-shrink-0"><path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V6a2.25 2.25 0 012.25-2.25h3.75a2.25 2.25 0 012.25 2.25v.75m-10.5 6v6a2.25 2.25 0 002.25 2.25h3.75a2.25 2.25 0 002.25-2.25v-6" /><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75h3.75m-3.75 3h3.75M9 18h3.75m-3.75-9h3.75" /></svg>
                            <p className="text-dark text-xl md:text-2xl font-semibold">Diseñamos un calendario mensual de experiencias (catas de vino, cine europeo, exposiciones).</p>
                        </div>
                        <div className="bg-light p-6 rounded-xl shadow-lg flex items-center space-x-6 border border-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-16 h-16 text-primary-blue flex-shrink-0"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>
                            <p className="text-dark text-xl md:text-2xl font-semibold">Capacitamos al staff con manuales y entrenamientos en storytelling de marca.</p>
                        </div>
                        <div className="bg-light p-6 rounded-xl shadow-lg flex items-center space-x-6 border border-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-16 h-16 text-primary-blue flex-shrink-0"><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" /></svg>
                            <p className="text-dark text-xl md:text-2xl font-semibold">Integramos estas actividades en los paquetes de reservas y la comunicación digital.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Slide 4: Benefits */}
            <section id="slide4" className="slide bg-white">
                <div className="slide-content">
                    <h2 className="text-4xl md:text-6xl font-bold text-dark mb-16 text-center">📊 Beneficios:</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div className="bg-light p-8 rounded-xl shadow-lg flex flex-col items-center text-center border border-gray-200 h-full justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-16 h-16 text-primary-blue mb-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <h3 className="font-semibold text-xl md:text-2xl text-dark">Diferenciación clara frente a competidores modernos pero sin identidad.</h3>
                        </div>
                        <div className="bg-light p-8 rounded-xl shadow-lg flex flex-col items-center text-center border border-gray-200 h-full justify-center">
                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-16 h-16 text-primary-blue mb-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <h3 className="font-semibold text-xl md:text-2xl text-dark">Mayor fidelización y recomendaciones boca a boca.</h3>
                        </div>
                        <div className="bg-light p-8 rounded-xl shadow-lg flex flex-col items-center text-center border border-gray-200 h-full justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-16 h-16 text-primary-blue mb-6"><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639l4.43-7.108a1.012 1.012 0 011.59-.444l4.223 2.943a1.012 1.012 0 001.215 0l4.223-2.943a1.012 1.012 0 011.59.444l4.43 7.108a1.012 1.012 0 010 .639l-4.43 7.108a1.012 1.012 0 01-1.59.444l-4.223-2.943a1.012 1.012 0 00-1.215 0l-4.223-2.943a1.012 1.012 0 01-1.59-.444L2.036 12.322z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                            <h3 className="font-semibold text-xl md:text-2xl text-dark">Posicionamiento como el único art-hotel boutique de Guadalajara.</h3>
                        </div>
                    </div>
                </div>
            </section>


            {/* Slide 5: Deliverables */}
            <section id="slide5" className="slide bg-primary-dark">
                <div className="slide-content">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-12 text-center">📦 Entregables (con contexto):</h2>
                    <div className="max-w-4xl mx-auto space-y-6">
                        {[
                            "Calendario de experiencias → organiza una agenda mensual con actividades culturales que enriquecen la estancia y generan valor agregado.",
                            "Manual de storytelling para el staff → entrega al equipo un guion claro para transmitir la esencia europea y artística del hotel en cada interacción.",
                            "Campañas digitales con foco en arte y cultura → comunican estas experiencias en la web y redes, reforzando el posicionamiento como art-hotel."
                        ].map((item, index) => (
                            <div key={index} className="bg-light p-6 rounded-lg flex items-center space-x-6 text-left shadow-md transition-all hover:shadow-lg hover:bg-gray-200 border border-gray-200">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-10 h-10 text-accent-green flex-shrink-0"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                                <h3 className="font-semibold text-xl md:text-2xl text-dark">{item}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Slide 6: KPIs */}
            <section id="slide6" className="slide bg-primary-blue">
                <div className="slide-content">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-16 text-center">📈 KPIs:</h2>
                    <div className="timeline-container">
                        <div className="timeline-item timeline-left">
                            <div className="timeline-content">
                                <h3 className="text-xl md:text-2xl font-bold text-dark">
                                    % de huéspedes que participan en experiencias
                                    <span className="block mt-2 text-gray-600 font-medium">
                                        (indica qué tan atractivas resultan las actividades).
                                    </span>
                                </h3>
                            </div>
                        </div>
                        <div className="timeline-item timeline-right">
                            <div className="timeline-content">
                                <h3 className="text-xl md:text-2xl font-bold text-dark">
                                    Menciones de “arte” y “europeo” en reseñas
                                    <span className="block mt-2 text-gray-600 font-medium">
                                        (prueba de que el concepto se percibe en la experiencia real).
                                    </span>
                                </h3>
                            </div>
                        </div>
                        <div className="timeline-item timeline-left">
                           <div className="timeline-content">
                                <h3 className="text-xl md:text-2xl font-bold text-dark">
                                   Tasa de repetición de visitas
                                    <span className="block mt-2 text-gray-600 font-medium">
                                        (porcentaje de huéspedes que regresan motivados por el concepto cultural).
                                    </span>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Slide 7: Tools */}
            <section id="slide7" className="slide bg-primary-dark">
                <div className="slide-content text-center">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-16">🛠 Herramientas:</h2>
                    <div className="flex flex-col md:flex-row flex-nowrap justify-center items-stretch gap-8 max-w-6xl mx-auto">
                        {tools.map((tool, index) => (
                            <div key={index} className="bg-white px-8 py-12 rounded-2xl shadow-lg flex flex-col items-center justify-start gap-6 transition-transform transform hover:scale-105 duration-300 border border-gray-100 w-full md:w-1/4">
                                <div className="h-20 w-20 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    {tool.icon}
                                </div>
                                <div className="flex flex-col gap-2 text-center">
                                     <span className="font-bold text-xl text-dark">{tool.name}</span>
                                     {tool.description && (
                                        <span className="text-gray-500 text-base">{tool.description}</span>
                                     )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default App;