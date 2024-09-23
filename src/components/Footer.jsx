import React from 'react';
import { X, Instagram, Dribbble, Send } from 'lucide-react';

const ContactForm = () => {
  return (
    <div className="bg-black text-white font-sans min-h-screen flex flex-col">
      <div className="flex-grow p-20 flex flex-col lg:flex-row lg:space-x-16">
        
        {/* Contact Information Section */}
        <div className="mb-8 lg:mb-0 lg:w-1/3">
          <h1 className="text-5xl font-normal mb-6">Feel free to connect with us!</h1>
          
          <div className="flex space-x-4 mb-6">
            <button className="p-2 bg-white bg-opacity-10 rounded-full">
              <X size={20} />
            </button>
            <button className="p-2 bg-white bg-opacity-10 rounded-full">
              <Instagram size={20} />
            </button>
            <button className="p-2 bg-white bg-opacity-10 rounded-full">
              <Dribbble size={20} />
            </button>
            <button className="p-2 bg-white bg-opacity-10 rounded-full">
              Be
            </button>
          </div>
          
          <div className="mb-6">
            <p className="mb-1">0972 663 633</p>
            <p>hello@wefo.com</p>
          </div>
        </div>
        
        {/* Contact Form Section */}
        <div className="lg:w-1/2 lg:ml-auto lg:mr-20">
          <form className="space-y-8">
            <div>
              <label htmlFor="name" className="block text-sm mb-2">Name *</label> 
              <input 
                type="text" 
                id="name" 
                placeholder="Your name" 
                className="w-full bg-transparent border-b border-white border-opacity-30 py-3 text-lg focus:outline-none focus:border-white" 
              /> 
            </div>
            <div>
              <label htmlFor="email" className="block text-sm mb-2">Email *</label>
              <input 
                type="email" 
                id="email" 
                placeholder="Your email address" 
                className="w-full bg-transparent border-b border-white border-opacity-30 py-3 text-lg focus:outline-none focus:border-white" 
              /> 
            </div>
            <div>
              <label htmlFor="message" className="block text-sm mb-2">Message</label>
              <textarea 
                id="message" 
                placeholder="Write your message here..." 
                rows={10}  
                className="w-full bg-transparent border-b border-white border-opacity-30 py-3 text-lg focus:outline-none focus:border-white" 
              /> 
            </div>
            <div>
              <button 
                type="submit" 
                className="inline-flex items-center bg-white text-black px-6 py-3 rounded-full text-lg"
              >
                Send <Send size={20} className="ml-2" /> 
              </button>
            </div>
          </form>
        </div>
      </div>
      
      {/* Bottom Section */}
      <div className="flex justify-between items-center text-sm border-t border-white border-opacity-10 p-4 mx-20 mt-0">
        <p className='text-5xl font-bold'>Wefo</p>
        <div className="flex space-x-4 text-xl font-normal">
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Term</a>
          <a href="#" className="hover:underline">Security</a>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
