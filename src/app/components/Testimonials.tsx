'use client'

import { useState, useEffect } from 'react'
import { FaStar } from 'react-icons/fa';
import Image from 'next/image';

const testimonials = [
    {
      name: 'John Doe',
      photo: '/john-doe.jpg',
      rating: 5,
      review: 'This service is fantastic! Highly recommend!',
    },
    {
      name: 'Jane Smith',
      photo: '/jane-smith.jpg',
      rating: 4,
      review: 'Great service, but the process took longer than expected.',
    },
    {
      name: 'Alex Johnson',
      photo: '/alex-johnson.jpg',
      rating: 5,
      review: 'Excellent support and service. Will come back for sure!',
    },
    {
      name: 'Emily Clark',
      photo: '/emily-clark.jpg',
      rating: 4,
      review: 'Reliable service. Got my dummy ticket very fast.',
    },
    {
      name: 'Michael Brown',
      photo: '/michael-brown.jpg',
      rating: 5,
      review: 'Super fast service! Highly satisfied.',
    },
    {
      name: 'Sara Wilson',
      photo: '/sara-wilson.jpg',
      rating: 4,
      review: 'Ticket worked perfectly! A bit slow, but reliable.',
    },
    // Add more testimonials if needed
  ];
  
  export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    // Update every 5 seconds to show the next 4 testimonials
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex + 4 >= testimonials.length ? 0 : prevIndex + 4
        );
      }, 5000); // Change every 5 seconds
  
      return () => clearInterval(interval);
    }, []);
  
    // Get the current set of testimonials
    const currentTestimonials = testimonials.slice(
      currentIndex,
      currentIndex + 4
    );
  
    return (
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            What Our Customers Say
          </h2>
  
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 transition-transform duration-1000 ease-in-out">
            {currentTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg text-center transition-opacity duration-500 ease-in-out transform hover:scale-105"
              >
                <div className="w-24 h-24 mb-4 mx-auto">
                  <Image
                    src={testimonial.photo}
                    alt={testimonial.name}
                    className="rounded-full border-4 border-sky-500"
                    width={96}
                    height={96}
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {testimonial.name}
                </h3>
                <div className="flex justify-center mb-4">
                  {Array(testimonial.rating)
                    .fill(0)
                    .map((_, i) => (
                      <FaStar key={i} className="text-yellow-400" />
                    ))}
                </div>
                <p className="text-gray-600">{testimonial.review}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }