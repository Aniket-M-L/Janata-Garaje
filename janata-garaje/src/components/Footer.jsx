import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Janta Garaj</h3>
            <p className="text-gray-300">
              Your trusted partner for all automotive services. We provide quality service and maintenance for all types of vehicles.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white">Services</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Jr. Ntr</li>
              <li>Phone: 9307902794</li>
              <li>Location: Hyderabad, Telangana</li>
              <li>Near Bombay Talkies</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Janta Garaj. All rights reserved.</p>
          <p className="mt-2">
            <a 
              href="https://lionelagency.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              Visit our partner website
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
} 