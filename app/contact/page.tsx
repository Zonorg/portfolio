"use client";
import { useState } from "react";
import Image from "next/image";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="contact_content py-20 w-2/3 mx-auto animate-translateUp mb-32 max-md:mb-8 max-md:py-0 max-md:w-11/12">
      <h1 className="text-8xl font-semibold max-md:text-5xl">Contact me</h1>
      <div className="contact_flex mt-8 flex justify-between items-start w-full gap-5 max-lg:flex-col">
        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-4">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full p-2 border border-gray-300 text-stone-900 rounded-md focus:outline-none focus:border-gray-500"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full p-2 border border-gray-300 text-stone-900 rounded-md focus:outline-none focus:border-gray-500"
              required
            />
          </div>
          <div className="mb-6">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Leave your message here"
              rows={4}
              className="w-full p-2 border border-gray-300 text-stone-900 rounded-md focus:outline-none focus:border-gray-500 resize-none"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-pink-700 font-medium rounded-md hover:bg-pink-600 focus:outline-none focus:bg-gray-600"
          >
            Submit
          </button>
        </form>
        <video
          src="/contact-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="rounded-xl max-lg:hidden w-1/2"
        />
        <Image
          src="/contact-cover.png"
          alt="About me cover"
          width={800}
          height={800}
          className="lg:hidden max-lg:w-72"
        />
      </div>
    </div>
  );
}
