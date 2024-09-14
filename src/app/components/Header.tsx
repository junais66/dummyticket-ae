import Link from 'next/link'
import { PaperAirplaneIcon, GlobeAltIcon } from '@heroicons/react/24/outline'

export default function Header() {
  return (
    <header className="bg-sky-500 text-white">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold flex items-center">
          <PaperAirplaneIcon className="h-8 w-8 mr-2" />
          DummyTicket.ae
        </Link>
        <ul className="flex space-x-4">
          <li><Link href="/">Book</Link></li>
          <li><Link href="/about">Proccess</Link></li>
          <li><Link href="/flights">About</Link></li>
          <li><Link href="/contact">Faq</Link></li>
          <li><Link href="/login">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}