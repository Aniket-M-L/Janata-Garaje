export default function About() {
  const teamMembers = [
    {
      name: 'Jr. Ntr',
      position: 'Owner & Lead Technician',
      description: 'With over 15 years of experience in automotive repair and maintenance.',
      image: '👨‍🔧',
    },
    {
      name: 'Team Member 1',
      position: 'Senior Technician',
      description: 'Specialized in engine diagnostics and repair.',
      image: '👨‍🔧',
    },
    {
      name: 'Team Member 2',
      position: 'Service Advisor',
      description: 'Expert in customer service and vehicle maintenance scheduling.',
      image: '👨‍🔧',
    },
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Company Overview */}
        <section className="mb-16">
          <h1 className="text-4xl font-bold text-center mb-8">About Janta Garaj</h1>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-600 mb-6">
              Janta Garaj is a premier automotive service center located in Hyderabad, Telangana. 
              We have been serving our community with excellence in vehicle maintenance and repair 
              for over a decade.
            </p>
            <p className="text-lg text-gray-600">
              Our commitment to quality service, customer satisfaction, and technical expertise 
              has made us the preferred choice for vehicle owners in the region.
            </p>
          </div>
        </section>

        {/* Our Mission */}
        <section className="mb-16 bg-gray-100 py-12 rounded-lg">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600">
              To provide exceptional automotive services with integrity, expertise, and a 
              commitment to customer satisfaction. We strive to be the most trusted name 
              in automotive care in Hyderabad.
            </p>
          </div>
        </section>

        {/* Our Team */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-2">{member.position}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Our Values */}
        <section className="bg-primary text-white py-12 rounded-lg">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">Quality</h3>
                <p className="text-gray-300">
                  We maintain the highest standards in all our services
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Integrity</h3>
                <p className="text-gray-300">
                  Honest and transparent in all our dealings
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                <p className="text-gray-300">
                  Striving for excellence in everything we do
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 