import React from 'react';

const Contact = () => {
  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-8">Feel free to connect with us!</h3>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your name"
            className="w-full p-3 rounded-lg bg-gray-800 border-none focus:ring-2 focus:ring-blue-600"
          />
          <input
            type="email"
            placeholder="Your email address"
            className="w-full p-3 rounded-lg bg-gray-800 border-none focus:ring-2 focus:ring-blue-600"
          />
          <textarea
            placeholder="Write your message here..."
            className="w-full p-3 h-32 rounded-lg bg-gray-800 border-none focus:ring-2 focus:ring-blue-600"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
