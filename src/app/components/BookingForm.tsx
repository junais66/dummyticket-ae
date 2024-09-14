'use client'

import { useState, useEffect } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

type Airport = {
  code: string
  name: string
  city: string
}

export default function BookingForm() {
  const [airports, setAirports] = useState<Airport[]>([])
  const [tripType, setTripType] = useState('oneWay')
  const [departure, setDeparture] = useState<Airport | null>(null)
  const [arrival, setArrival] = useState<Airport | null>(null)
  const [departureDate, setDepartureDate] = useState(new Date())
  const [returnDate, setReturnDate] = useState(new Date())
  const [passengers, setPassengers] = useState({ adults: 1, children: 0, infants: 0 })
  const [travelClass, setTravelClass] = useState('economy')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [specialRequests, setSpecialRequests] = useState('')

  useEffect(() => {
    fetch('/api/airports')
      .then(response => response.json())
      .then(data => setAirports(data))
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({
      tripType,
      departure,
      arrival,
      departureDate,
      returnDate,
      passengers,
      travelClass,
      firstName,
      lastName,
      email,
      phone,
      specialRequests
    })
    // Here you would typically send this data to your backend or handle it accordingly
  }

  return (
    <div className="w-full max-w-4xl via-white p-6 rounded-xl shadow-2xl border border-gray-200 font-mono font-light">
  <h1 className="text-1xl font-bold text-gray-800 mb-4">Please enter your detals... </h1>
  <form onSubmit={handleSubmit} className="space-y-4">
    <div className="flex flex-col space-y-3">
      <div className="flex items-center space-x-3">
        <input
          type="radio"
          id="oneWay"
          value="oneWay"
          checked={tripType === 'oneWay'}
          onChange={() => setTripType('oneWay')}
          className="form-radio text-blue-600"
        />
        <label htmlFor="oneWay" className="text-sky-500 text-xs">One Way</label>

        <input
          type="radio"
          id="roundTrip"
          value="roundTrip"
          checked={tripType === 'roundTrip'}
          onChange={() => setTripType('roundTrip')}
          className="form-radio text-blue-600"
        />
        <label htmlFor="roundTrip" className="text-sky-500 text-xs">Return</label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <AirportSelect
          label="From"
          airports={airports}
          selected={departure}
          setSelected={setDeparture}
        />
        <AirportSelect
          label="To"
          airports={airports}
          selected={arrival}
          setSelected={setArrival}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="relative">
          <label className="block text-sky-500 text-xs mb-1">Departure Date</label>
          <DatePicker
            selected={departureDate}
            onChange={(date: Date) => setDepartureDate(date)}
            className="w-full p-2 border rounded-md bg-white text-gray-800 shadow-md"
          />
        </div>
        {tripType === 'roundTrip' && (
          <div className="relative">
            <label className="block text-sky-500 text-xs mb-1">Return Date</label>
            <DatePicker
              selected={returnDate}
              onChange={(date: Date) => setReturnDate(date)}
              className="w-full p-2 border rounded-md bg-white text-gray-800 shadow-md"
            />
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div>
          <label className="block text-sky-500 text-xs mb-1">Adults</label>
          <input
            type="number"
            min="1"
            value={passengers.adults}
            onChange={(e) => setPassengers({...passengers, adults: parseInt(e.target.value)})}
            className="w-full p-2 border rounded-md bg-white text-gray-800 shadow-md"
          />
        </div>
        <div>
          <label className="block text-sky-500 text-xs mb-1">Children</label>
          <input
            type="number"
            min="0"
            value={passengers.children}
            onChange={(e) => setPassengers({...passengers, children: parseInt(e.target.value)})}
            className="w-full p-2 border rounded-md bg-white text-gray-800 shadow-md"
          />
        </div>
        <div>
          <label className="block text-sky-500 text-xs mb-1">Infants</label>
          <input
            type="number"
            min="0"
            value={passengers.infants}
            onChange={(e) => setPassengers({...passengers, infants: parseInt(e.target.value)})}
            className="w-full p-2 border rounded-md bg-white text-gray-800 shadow-md"
          />
        </div>
      </div>

      <div>
        <label className="block text-sky-500 text-xs mb-1">Travel Class</label>
        <select
          value={travelClass}
          onChange={(e) => setTravelClass(e.target.value)}
          className="w-full p-2 border rounded-md bg-white text-gray-800 shadow-md"
        >
          <option value="economy">Economy</option>
          <option value="business">Business</option>
          <option value="first">First Class</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div>
          <label className="block text-sky-500 text-xs mb-1">First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full p-2 border rounded-md bg-white text-gray-800 shadow-md"
            required
          />
        </div>
        <div>
          <label className="block text-sky-500 text-xs mb-1">Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full p-2 border rounded-md bg-white text-gray-800 shadow-md"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div>
          <label className="block text-sky-500 text-xs mb-1">Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded-md bg-white text-gray-800 shadow-md"
            required
          />
        </div>
        <div>
          <label className="block text-sky-500 text-xs mb-1">Phone Number</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-2 border rounded-md bg-white text-gray-800 shadow-md"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sky-500 text-xs mb-1">Special Requests (Optional)</label>
        <textarea
          value={specialRequests}
          onChange={(e) => setSpecialRequests(e.target.value)}
          className="w-full p-2 border rounded-md bg-white text-gray-800 shadow-md"
          rows={3}
        />
      </div>

      <button
          type="submit"
          className="bg-sky-400 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-sky-500 transition-colors w-full text-sm font-large font-bold"
        >
          Book Ticket (AED 49)
        </button>
    </div>
  </form>
</div>
  )
}

function AirportSelect({ label, airports, selected, setSelected }: { label: string, airports: Airport[], selected: Airport | null, setSelected: (airport: Airport | null) => void }) {
  const [query, setQuery] = useState('')
  const filteredAirports = query === '' ? airports : airports.filter(airport =>
    airport.city.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className="relative">
        <Listbox.Label className="block mb-2 font-semibold text-black">{label}</Listbox.Label>
        <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-3 pl-4 pr-10 text-left border text-black shadow-md focus:outline-none focus-visible:border-blue-500 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
          <span className="block truncate">{selected ? `${selected.city} (${selected.code})` : 'Select an airport'}</span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </span>
        </Listbox.Button>
        <Transition
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-20">
            <div className="p-2">
              <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full p-2 border rounded mb-2"
              />
            </div>
            {filteredAirports.length === 0 ? (
              <Listbox.Option
                disabled
                className="cursor-default select-none px-4 py-2 text-gray-500"
              >
                No results found
              </Listbox.Option>
            ) : (
              filteredAirports.map((airport) => (
                <Listbox.Option
                  key={airport.code}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-blue-100 text-blue-900' : 'text-gray-900'
                    }`
                  }
                  value={airport}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {airport.city} ({airport.code})
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))
            )}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  )
}