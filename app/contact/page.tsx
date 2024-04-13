"use client";
import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Image from "next/image";

interface FormData {
  from_name: string;
  from_email: string;
  message: string;
}

export default function Contact(): JSX.Element {
  const [formData, setFormData] = useState<FormData>({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "portfolio",
        "portfolio_temp_wofrc8m",
        e.currentTarget,
        "orPc7-IqQewECHePE"
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessageSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });

    setFormData({
      from_name: "",
      from_email: "",
      message: "",
    });
  };

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (messageSent) {
      timer = setTimeout(() => {
        setMessageSent(false);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [messageSent]);

  return (
    <div className="contact_content py-20 w-2/3 mx-auto animate-translateUp mb-32 max-md:mb-8 max-md:py-0 max-md:w-11/12">
      <h1 className="text-8xl font-semibold max-md:text-5xl">Contact me</h1>
      <div className="contact_flex mt-8 flex justify-between items-start w-full gap-5 max-lg:flex-col">
        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-4">
            <input
              type="text"
              id="from_name"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full p-2 border border-gray-300 text-stone-900 rounded-md focus:outline-none focus:border-gray-500"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              id="from_email"
              name="from_email"
              value={formData.from_email}
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
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <AiOutlineLoading3Quarters className="animate-spin" />
            ) : (
              <span>Submit</span>
            )}
          </button>
          {messageSent && (
            <p className="mt-2 text-pink-600 font-bold text-md">
              Thank you for contacting me! I will be in touch with you as soon
              as possible.
            </p>
          )}
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
