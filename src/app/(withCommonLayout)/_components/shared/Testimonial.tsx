'use client';
import React, { useState } from 'react';
import Image from 'next/image';

import image1 from '@/../public/assets/testimonial-1.jpeg';
import image2 from '@/../public/assets/testimonial-2.avif';
import image3 from '@/../public/assets/testimonila-3.avif';

const testimonials = [
  {
    name: 'Emily Johnson',
    position: 'RoomFinder at RoomSync',
    image: image1,
    text: '“Our experience with RoomSync was fantastic! The platform made finding the perfect room effortless. Highly recommended for anyone searching for a room!”',
  },
  {
    name: 'Michael Adams',
    position: 'Room Host at RoomSync',
    image: image2,
    text: '“Listing my room on RoomSync was a breeze. The intuitive interface and robust features made connecting with potential roommates easy. RoomSync is the go-to platform for room hosts!”',
  },
  {
    name: 'Jessica Brown',
    position: 'Room Seeker at RoomSync',
    image: image3,
    text: "“I found my ideal room through RoomSync, and I couldn't be happier! The extensive listings and advanced search options made my room search smooth. Highly recommend RoomSync for room seekers!”",
  },
];

const Testimonial = () => {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-6xl px-6 py-10 mx-auto">
        <p className="text-xl font-medium text-rose-500">Testimonials</p>
        <h1 className="mt-2 text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
          What clients are saying
        </h1>

        <main className="relative z-0 w-full mt-8 md:flex md:items-center xl:mt-12">
          <div className="absolute w-full bg-rose-600 -z-10 md:h-96 rounded-2xl"></div>

          <div className="w-full p-6 bg-rose-600 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
            <Image
              className="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl"
              src={testimonials[current].image}
              alt="client photo"
              width={400}
              height={400}
            />

            <div className="mt-2 md:mx-6">
              <div>
                <p className="text-xl font-medium tracking-tight text-white">
                  {testimonials[current].name}
                </p>
                <p className="text-blue-200">
                  {testimonials[current].position}
                </p>
              </div>

              <p className="mt-4 text-lg leading-relaxed text-white md:text-xl">
                {testimonials[current].text}
              </p>

              <div className="flex items-center justify-between mt-6 md:justify-start">
                <button
                  onClick={handlePrev}
                  title="left arrow"
                  className="p-2 text-white transition-colors duration-300 border rounded-full rtl:-scale-x-100 hover:bg-rose-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                <button
                  onClick={handleNext}
                  title="right arrow"
                  className="p-2 text-white transition-colors duration-300 border rounded-full rtl:-scale-x-100 md:mx-6 hover:bg-rose-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Testimonial;
