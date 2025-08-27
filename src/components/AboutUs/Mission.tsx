
export default function Mission() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Mission & Vision</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            At RideEasy, we’re committed to revolutionizing urban mobility with safe, affordable, and sustainable rides.
          </p>
        </div>

        {/* Mission and Vision Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Mission */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              To provide seamless, safe, and affordable ride-hailing services that empower communities, connect people, and enhance urban mobility. We aim to make every journey reliable, convenient, and accessible for all.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              To redefine ride-sharing by creating a global platform that prioritizes sustainability, innovation, and inclusivity, making transportation effortless for everyone, everywhere.
            </p>
          </div>
        </div>

        {/* Our Commitment */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 text-center mb-8">Our Commitment</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Safety First',
                description: 'Ensuring every ride is secure with driver vetting, real-time tracking, and 24/7 support.',
                icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z',
              },
              {
                title: 'Affordability',
                description: 'Offering competitive pricing to make ride-hailing accessible to all communities.',
                icon: 'M12 4v16m8-8H4',
              },
              {
                title: 'Eco-Friendly Rides',
                description: 'Promoting sustainable transport with electric vehicles and carbon-neutral initiatives.',
                icon: 'M12 22s-8-4.5-8-10V8l8-4 8 4v4c0 5.5-8 10-8 10z',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <svg
                  className="w-12 h-12 mx-auto mb-4 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
                </svg>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Ride with Us</h2>
          <p className="text-gray-600 mb-6">
            Join RideEasy and experience the future of urban mobility. Book your first ride today!
          </p>
          <a
            href="/signup"
            className="inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}