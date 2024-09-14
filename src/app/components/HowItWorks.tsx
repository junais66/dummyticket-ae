import { ClockIcon, CreditCardIcon, DocumentTextIcon } from '@heroicons/react/24/outline'

const steps = [
  {
    title: 'Quick Booking',
    description: 'Fill out our simple form with your travel details.',
    icon: ClockIcon,
  },
  {
    title: 'Secure Payment',
    description: 'Make a safe payment through our trusted gateway.',
    icon: CreditCardIcon,
  },
  {
    title: 'Receive Ticket',
    description: 'Get your verifiable dummy ticket instantly via email.',
    icon: DocumentTextIcon,
  },
]

export default function HowItWorks() {
  return (
    <div className="bg-sky-400 py-12 font-mono"> {/* Changed to light gray background */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Your Dummy Ticket in 3 Easy Steps</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <div className="flex items-center justify-center mb-4 p-4 bg-sky-500 rounded-full">
                <step.icon className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
