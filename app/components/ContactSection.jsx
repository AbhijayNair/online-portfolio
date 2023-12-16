"use client"
import React, { useState } from "react";

const ContactSection = () => {

    const [isMessageSent, setIsMessageSent] = useState(false)


    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = JSON.stringify({
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value
        })
        const endpoint = "/api/send"

        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: data
        }

        const response = await fetch(endpoint, options)
        if (response.status === 200) {
            setIsMessageSent(true)
            setTimeout(() => {
                setIsMessageSent(false)
            }, 3000);
        }
        
    }

  return (
    <section
      className="grid md:grid-cols-2 my-12 py-24 gap-4 lg:py-16"
      id="contact"
    >
      <div className="">
        <h2 className="col-span-6 text-left my-2 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-4xl sm:text-5xl lg:text-6xl lg:leading-snug font-semibold">
          Let&apos;s Chat!
        </h2>
        <br />
        <p className="text-left my-2 mb-4 max-w-md">
          I am currently looking for new opportunities as a Software Developer,
          so if you want to chat about that or just want to say hi, send me a
          message. I will try my best to get back to as soon as possible!
        </p>
      </div>
      <div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block text-sm font-medium mb-2"
              >
                Your email
              </label>
              <input
                className="bg-[#18191E] border border-[#33353F] placeholder-gray text-gray-100 text-sm rounded-lg block w-full p-3"
                type="email"
                id="email"
                name="email"
                required
                placeholder="johndoe@example.com"
              />
          </div>

          <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm font-medium mb-2"
              >
                Subject
              </label>
              <input
                className="bg-[#18191E] border border-[#33353F] placeholder-gray text-gray-100 text-sm rounded-lg block w-full p-3"
                type="text"
                id="subject"
                name="subject"
                required
                placeholder="Got some great news for you!"
              />
          </div>

          <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                className="bg-[#18191E] border border-[#33353F] placeholder-gray text-gray-100 text-sm rounded-lg block w-full p-3"
                id="message"
                name="message"
                rows={3}
                maxLength={512}
                required
                placeholder="Hi Jay! Let's chat about..."
              />
          </div>
          <button className="bg-primary hover:opacity-80 text-white font-medium py-3 px-5 rounded-lg w-full" type="submit">Send Message</button>
        </form>
        {isMessageSent && <p className="text-green-500 text-sm mt-2">Your message has been sent!</p>}
      </div>
    </section>
  );
};

export default ContactSection;
