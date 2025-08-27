
export default function CompanyBackground() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About RideEasy</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the story behind RideEasy, your trusted partner in redefining urban mobility.
          </p>
        </div>

        {/* Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h2>
            <p className="text-gray-600 leading-relaxed">
              Founded in 2019, RideEasy emerged from a vision to transform how people move in cities. Inspired by the hustle of urban life, our founders set out to create a ride-hailing platform that prioritizes safety, affordability, and convenience. Starting with a small fleet of bike taxis in Dhaka, we’ve grown to serve millions across 30+ cities, offering cars, bikes, and eco-friendly ride options.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              Today, RideEasy connects riders and drivers through cutting-edge technology, providing seamless ride experiences, real-time tracking, and a commitment to sustainable transport. Our journey is fueled by innovation and a passion for making mobility accessible to all.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <img
              src="https://images.unsplash.com/photo-1593642532973-d31b97d0fed5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
              alt="RideEasy Team"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 text-center mb-8">Our Achievements</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: '5M+ Rides', description: 'Completed millions of safe rides across cities.' },
              { title: '30+ Cities', description: 'Serving urban and suburban areas globally.' },
              { title: '10K+ Drivers', description: 'Empowering thousands of drivers with flexible work.' },
              { title: 'Carbon Neutral', description: 'Committed to eco-friendly rides with electric vehicles.' },
            ].map((achievement, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

      
      </div>
    </section>
  );
}