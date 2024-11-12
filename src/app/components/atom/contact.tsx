"use client";
import React from "react";
import Image from "next/image";
import ContactImage from '@/app/images/plane.png'
import Section from "@/app/components/ui/Section";

export default function ContactForm() {
  return (
    <div className="pt-[4.75rem] lg:[5.25rem] overflow-hidden pl-[4.5rem] pr-12">
    <Section crosses className="!px-0 !py-10" id='contact'>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pr-12 mt-10">
        <div className="text-center">
          <h2 className="text-gray-900 dark:text-gray-100 text-2xl md:text-4xl font-bold uppercase">Contact Us</h2>
          <p className="mt-4">
            Or reach out manually to{" "}
            <a href="mailto:vsay.official@gmail.com" className="text-gray-800 dark:text-gray-100 text-xl font-bold">
              vsay.official@gmail.com
            </a>
          </p>
          <Image
            src={ContactImage}
            alt="Illustration"
            className="hidden md:block mt-20 ml-[5rem] w-[65%]"
             style={{ animation: "bounce 4s infinite" }}
          />
        </div>
        <div className="mx-[5rem] ">
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-800 dark:text-gray-100 font-bold text-xl mb-4">
                Email address
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border border-gray-300 bg-gray-100 dark:bg-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300"
              />
              <small className="text-indigo-600 font-bold text-lg block mt-1">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-800 dark:text-gray-100 font-semibold text-xl mb-3">
                Your name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 border border-gray-300 bg-gray-100 dark:bg-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-800 dark:text-gray-100 font-bold text-xl mb-3">
                Your message
              </label>
              <textarea
                id="message"
                rows={3}
                className="w-full p-3 border border-gray-300 bg-gray-100 dark:bg-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-indigo-600 text-white rounded-md hover:bg-purple-700 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      </Section>
      </div>
  );
}
