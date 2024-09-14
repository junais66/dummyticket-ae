import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { FaCcVisa, FaCcMastercard, FaCcAmex } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-sky-500 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/flights">Flights</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/terms">Terms and Conditions</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex items-center space-x-2">
                  <FaFacebookF className="text-lg hover:text-gray-100 transition-colors" />
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="flex items-center space-x-2">
                  <FaTwitter className="text-lg hover:text-gray-100 transition-colors" />
                  <span>Twitter</span>
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex items-center space-x-2">
                  <FaInstagram className="text-lg hover:text-gray-100 transition-colors" />
                  <span>Instagram</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between items-center mt-8">
          <div className="flex space-x-4">
            <FaCcVisa className="text-white text-2xl" aria-label="Visa" />
            <FaCcMastercard className="text-white text-2xl" aria-label="Mastercard" />
            <FaCcAmex className="text-white text-2xl" aria-label="American Express" />
          </div>
        </div>
        <div className="text-center py-4 mt-4">
          <p className="text-sm">&copy; 2024 DummyTicket.ae. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
