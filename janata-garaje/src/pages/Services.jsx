import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      category: 'General Services',
      items: [
        {
          name: 'Basic Service',
          description: 'Oil change, filter replacement, and basic inspection',
          price: '₹1,500',
          duration: '1-2 hours',
        },
        {
          name: 'Comprehensive Service',
          description: 'Full vehicle inspection and maintenance',
          price: '₹3,500',
          duration: '3-4 hours',
        },
        {
          name: 'Premium Service',
          description: 'Complete vehicle service with premium parts',
          price: '₹5,000',
          duration: '4-5 hours',
        },
      ],
    },
    {
      category: 'Engine Services',
      items: [
        {
          name: 'Engine Diagnostics',
          description: 'Complete engine health check and diagnostics',
          price: '₹2,000',
          duration: '1-2 hours',
        },
        {
          name: 'Engine Repair',
          description: 'Engine repair and component replacement',
          price: '₹4,000+',
          duration: '4-6 hours',
        },
        {
          name: 'Engine Overhaul',
          description: 'Complete engine overhaul and rebuild',
          price: '₹15,000+',
          duration: '2-3 days',
        },
      ],
    },
    {
      category: 'AC Services',
      items: [
        {
          name: 'AC Service',
          description: 'AC system cleaning and maintenance',
          price: '₹1,500',
          duration: '1-2 hours',
        },
        {
          name: 'AC Repair',
          description: 'AC system repair and component replacement',
          price: '₹3,000+',
          duration: '2-3 hours',
        },
        {
          name: 'AC Installation',
          description: 'New AC system installation',
          price: '₹8,000+',
          duration: '4-5 hours',
        },
      ],
    },
    {
      category: 'Tire Services',
      items: [
        {
          name: 'Tire Rotation',
          description: 'Tire rotation and balancing',
          price: '₹500',
          duration: '30-45 mins',
        },
        {
          name: 'Tire Replacement',
          description: 'Tire replacement with alignment',
          price: '₹2,000+',
          duration: '1-2 hours',
        },
        {
          name: 'Wheel Alignment',
          description: 'Complete wheel alignment service',
          price: '₹800',
          duration: '1 hour',
        },
      ],
    },
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">Our Services</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of automotive services to keep your vehicle
            running smoothly. Our expert technicians use state-of-the-art equipment
            to provide the best service possible.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-16">
          {services.map((category, index) => (
            <section key={index} className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-8 text-primary">{category.category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {category.items.map((service, serviceIndex) => (
                  <div
                    key={serviceIndex}
                    className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                  >
                    <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="space-y-2">
                      <p className="text-primary font-medium">Price: {service.price}</p>
                      <p className="text-gray-600">Duration: {service.duration}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Call to Action */}
        <section className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-6">Ready to Book a Service?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact us today to schedule your service appointment
          </p>
          <Link to="/contact" className="btn btn-primary">
            Book Appointment
          </Link>
        </section>
      </div>
    </div>
  );
} 