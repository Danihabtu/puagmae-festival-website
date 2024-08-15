import React, { useState } from 'react';
import { testimonials } from '../constants';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Testimonials = () => {
    const [current, setCurrent] = useState(0);

    const previous = () => {
        setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
    };

    const next = () => {
        setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
    };

    return (
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 py-20 pb-28 px-4 relative overflow-hidden" id="testimonials">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-extrabold text-center text-goldenrod mb-12">
                    Hear from Our Guests
                </h1>
                <div className="relative flex items-center justify-center">
                    {testimonials.map((testimonial, index) => (
                        index === current && (
                            <div 
                                key={index} 
                                className="testimonial-card text-center transition-all duration-500 ease-in-out transform bg-gray-700 p-8 rounded-xl shadow-2xl hover:rotate-2 hover:scale-110"
                            >
                                <FaQuoteLeft className="text-4xl text-goldenrod mb-4 mx-auto" />
                                <p className="text-lg md:text-2xl text-white italic max-w-3xl mx-auto leading-relaxed px-4">
                                    "{testimonial.quote}"
                                </p>
                                <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-8">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="rounded-full h-20 w-20 md:h-24 md:w-24 border-4 border-goldenrod shadow-lg transition-transform duration-300 hover:scale-125"
                                    />
                                    <div className="text-center md:text-left">
                                        <h4 className="text-2xl text-white font-semibold">
                                            {testimonial.name}
                                        </h4>
                                        <h5 className="text-md md:text-lg text-gray-400">{testimonial.title}</h5>
                                    </div>
                                </div>
                            </div>
                        )
                    ))}
                    <div className="absolute top-1/2 transform -translate-y-1/2 left-4 md:left-8">
                        <div 
                            className="bg-goldenrod p-3 md:p-4 rounded-full cursor-pointer shadow-xl hover:bg-yellow-500 transition-colors duration-300 hover:scale-110" 
                            onClick={previous}
                        >
                            <FaChevronLeft className="text-black text-xl md:text-2xl" />
                        </div>
                    </div>
                    <div className="absolute top-1/2 transform -translate-y-1/2 right-4 md:right-8">
                        <div 
                            className="bg-goldenrod p-3 md:p-4 rounded-full cursor-pointer shadow-xl hover:bg-yellow-500 transition-colors duration-300 hover:scale-110" 
                            onClick={next}
                        >
                            <FaChevronRight className="text-black text-xl md:text-2xl" />
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-8 md:mt-12">
                    {testimonials.map((_, index) => (
                        <div
                            key={index}
                            onClick={() => setCurrent(index)}
                            className={`cursor-pointer h-4 w-4 md:h-5 md:w-5 mx-2 rounded-full transition-transform duration-300 ${
                                index === current ? "bg-goldenrod scale-150" : "bg-gray-600 hover:bg-goldenrod"
                            }`}
                        />
                    ))}
                </div>
            </div>
            <div className="parallax-bg absolute inset-0 bg-fixed bg-opacity-10"></div>
            <div className="particle-effect absolute inset-0 pointer-events-none"></div>
        </div>
    );
};

export default Testimonials;
