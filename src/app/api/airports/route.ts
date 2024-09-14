import { NextResponse } from 'next/server'

const airports = [
  { code: 'DXB', name: 'Dubai International Airport', city: 'Dubai' },
  { code: 'AUH', name: 'Abu Dhabi International Airport', city: 'Abu Dhabi' },
  { code: 'SHJ', name: 'Sharjah International Airport', city: 'Sharjah' },
  { code: 'LHR', name: 'London Heathrow Airport', city: 'London' },
  { code: 'JFK', name: 'John F. Kennedy International Airport', city: 'New York' },
  { code: 'CDG', name: 'Charles de Gaulle Airport', city: 'Paris' },
]

export async function GET() {
  return NextResponse.json(airports)
}