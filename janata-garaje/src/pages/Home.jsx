import { Link } from 'react-router-dom';

export default function Home() {
  const featuredServices = [
    {
      title: 'General Service',
      description: 'Complete vehicle maintenance and service',
      icon: '🔧',
    },
    {
      title: 'Engine Repair',
      description: 'Expert engine diagnostics and repair',
      icon: '⚙️',
    },
    {
      title: 'Tire Service',
      description: 'Tire replacement and alignment',
      icon: '🛞',
    },
    {
      title: 'AC Service',
      description: 'AC system maintenance and repair',
      icon: '❄️',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Your Trusted Auto Service Partner
            </h1>
            <p className="text-xl mb-8">
              Professional automotive services with expert technicians and state-of-the-art equipment.
            </p>
            <Link to="/contact" className="btn bg-white text-primary hover:bg-gray-100">
              Book Appointment
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredServices.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="btn btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">👨‍🔧</div>
              <h3 className="text-xl font-semibold mb-2">Expert Technicians</h3>
              <p className="text-gray-600">
                Our team consists of certified and experienced technicians
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Quick Service</h3>
              <p className="text-gray-600">
                Fast and efficient service without compromising quality
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold mb-2">Best Prices</h3>
              <p className="text-gray-600">
                Competitive pricing with transparent cost breakdown
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Service Your Vehicle?</h2>
          <p className="text-xl mb-8">
            Book an appointment now and get 10% off on your first service!
          </p>
          <Link to="/contact" className="btn bg-white text-primary hover:bg-gray-100">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
} 