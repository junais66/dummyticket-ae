import BookingForm from './components/BookingForm';
import HowItWorks from './components/HowItWorks';
import FAQSection from './components/FAQSection';
import { TicketIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import boardingImage from './assets/boarding.png';
import Testimonials from './components/Testimonials';

export default function Home() {
  return (
    <div className="bg-white min-h-screen font-mono">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          {/* Left Side (Text and Special Offer Section) */}
          <div className="md:w-1/2 pr-8 text-center md:text-left">
            <div className="mb-8 flex justify-center md:justify-start transition-transform transform hover:scale-105">
              <TicketIcon className="h-16 w-16 text-sky-500" />
            </div>
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4 transition-transform transform hover:scale-105">
              Book Your Dummy Ticket
            </h1>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed transition-transform transform hover:scale-105">
              Get your <span className="font-semibold text-sky-500">verifiable dummy ticket</span> for hassle-free <br />
              visa applications and travel plans. Fast, secure, and easy!
            </p>
            <p className="text-gray-500 italic mb-6">
              Trusted by thousands of travelers worldwide for their visa needs.
            </p>

            <div className="border-l-4 border-sky-500 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <Image
                src={boardingImage}
                alt="Boarding"
                className="w-full mb-6 rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-110 hover:scale-105"
              />
            </div>

            <div className="bg-yellow-300 border-l-4 border-sky-500 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 mt-4">
              <div className="flex items-center mb-4">
                <TicketIcon className="h-12 w-12 text-sky-500 mr-4" />
                <h2 className="text-2xl font-bold text-sky-500">Special Offer!</h2>
              </div>
              <p className="text-lg text-gray-700">
                Book your dummy ticket now for just <span className="font-semibold text-sky-500">AED 49</span>.
                <br />
                <span className="text-gray-600">Limited time offer – Don’t miss out!</span>
              </p>
            </div>

              
          </div>

          {/* Right Side (Booking Form and Image) */}
          <div className="md:w-1/2 w-full mb-12 flex flex-col items-center">
            
            <BookingForm />
          </div>
        </div>
      </div>
      <HowItWorks />
      <Testimonials />
      <FAQSection /> {/* Add the FAQ section */}
    </div>
  );
}
