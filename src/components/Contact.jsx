import React, { useState, useEffect,useRef} from 'react';
import emailjs from 'emailjs-com';

const ContactUs = () => {
    const [formState, setFormState] = useState({
        user_name: '',
        email_name: '',
        message: ''
      });
    
      const handleInputChange = (event) => {
        setFormState({
          ...formState,
          [event.target.name]: event.target.value,
        });
      };
    
      const [showMessage, setShowMessage] = useState(false);
      const handleSubmit = (event) => {
        event.preventDefault();
    
        emailjs
          .sendForm(
            'service_xqp2oj8',
            'template_awbu5eh',
            event.target,
            'vExBR3tkohSGu0M3P'
          )
          .then(
            (result) => {
              console.log('Email sent successfully!', result.text);
              setShowMessage(true);
              setFormState({
                user_name: '',
                email_name: '',
                message: '',
            
              });
              setTimeout(() => {
                setShowMessage(false);
              }, 2000);
            },
            (error) => {
              console.error('Error sending email:', error.text);
              setFormState({
                user_name: '',
                email_name: '',
                message: '',
            
              });
            }
          );
      };

    return (
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 py-20 pb-28 px-4 text-white" id="contact">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-extrabold text-center text-goldenrod mb-12">
                    Contact Us
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-black bg-opacity-50 p-8 rounded-lg shadow-lg">
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-lg font-semibold mb-2">Name</label>
                                <input
                                
                                    id="name"
                                    className="w-full p-4 bg-gray-800 text-gray-300 rounded-lg focus:ring-2 focus:ring-goldenrod focus:outline-none"
                                    placeholder="Your Name"
                                    type="text"
                                    
  name="user_name"
  value={formState.user_name}
  onChange={handleInputChange}
  autoComplete='off'
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-lg font-semibold mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full p-4 bg-gray-800 text-gray-300 rounded-lg focus:ring-2 focus:ring-goldenrod focus:outline-none"
                                    placeholder="Your Email"
                                    name="email_name"
                                    value={formState.email_name}
                                    onChange={handleInputChange}
                                    autoComplete='off'
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-lg font-semibold mb-2">Message</label>
                                <textarea
                                    id="message"
                                    rows="5"
                                    className="w-full p-4 bg-gray-800 text-gray-300 rounded-lg focus:ring-2 focus:ring-goldenrod focus:outline-none"
                                    placeholder="Your Message"
                                    name="message"
                                    value={formState.message}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full py-4 bg-goldenrod text-black font-bold rounded-lg hover:bg-yellow-600 transition duration-300 ease-in-out"
                            >
                                Send Message
                            </button>
                            {showMessage && (
  <div className="bg-green-500 text-white px-4 py-2 rounded mb-4 mt-5 font-extrabold">
    Thanks for your message!
  </div>
)}
                        </form>
    
                    </div>
                    <div className="bg-black bg-opacity-50 p-8 rounded-lg shadow-lg">
                    <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.527726980457!2d38.73319197455684!3d9.015529089200626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b86759211d999%3A0x74668c1e1413be93!2zSGF2ZW4gSG90ZWwgfCBHZWphIFNlZmVyIHwg4YiA4Ymo4YqVIOGIhuGJtOGIjSB8IOGMjOGMgyDhiLDhjYjhiK0!5e0!3m2!1sen!2set!4v1723378908230!5m2!1sen!2set" 
                            className="w-full h-80 md:w-full md:h-[500px]" 
                            style={{border:0}} 
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
