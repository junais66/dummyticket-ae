const portfolioItems = [
    { title: 'Visa Applications', description: 'Our dummy tickets have helped thousands of travelers with their visa applications.' },
    { title: 'Travel Planning', description: 'Customers use our service to plan and budget their trips effectively.' },
    { title: 'Corporate Bookings', description: 'We provide dummy tickets for corporate travel planning and budgeting.' },
  ]
  
  export default function Portfolio() {
    return (
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="flex items-center justify-center mb-4 p-4 bg-gradient-to-r from-blue-200 to-blue-100 rounded-full">
                  {/* You can add an icon or image here if needed */}
                  <svg className="h-10 w-10 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M3 12h18M3 17h18" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  