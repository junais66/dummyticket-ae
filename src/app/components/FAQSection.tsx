'use client'

import { useState } from 'react'

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: 'How do I book a dummy ticket?',
    answer: 'You can book a dummy ticket through our easy-to-use online booking form. Simply fill in the details, and you will receive your ticket via email.',
  },
  {
    question: 'Is the dummy ticket valid for visa applications?',
    answer: 'Yes, our dummy tickets are designed to be used for visa applications and other travel purposes. They meet the requirements of most visa authorities.',
  },
  {
    question: 'Can I cancel or change my booking?',
    answer: 'Once booked, dummy tickets cannot be canceled or changed. Please make sure all details are correct before finalizing your booking.',
  },
  {
    question: 'What if I have more questions?',
    answer: 'Feel free to contact our support team via email or phone. We’re here to help with any additional questions or concerns you may have.',
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleTab = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <p className='text-center text-sky-500 text-lg'>Common questions about dummy tickets</p>
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="border rounded-lg shadow-lg overflow-hidden">
              <button
                onClick={() => toggleTab(index)}
                className="w-full px-4 py-3 bg-gray-100 text-left text-gray-800 font-semibold hover:bg-gray-200 transition-colors"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl">{item.question}</h3>
                  </div>
                  <svg
                    className={`h-6 w-6 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.293 7.293a1 1 0 011.414 0L10 8.586l2.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </button>
              {openIndex === index && (
                <div className="p-4 bg-white text-gray-800">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
