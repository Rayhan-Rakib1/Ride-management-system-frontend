
// Define TypeScript interface for feature categories
interface Feature {
  title: string;
  description: string;
  icon: string; // SVG path for icon
}

interface FeatureCategory {
  role: string;
  description: string;
  features: Feature[];
}

export default function Features() {
  // Feature data for Rider, Driver, and Admin
  const featureCategories: FeatureCategory[] = [
    {
      role: 'Rider',
      description: 'Empowering riders with seamless, safe, and convenient travel experiences.',
      features: [
        {
          title: 'Easy Ride Booking',
          description: 'Book cars or bike taxis instantly with real-time availability and estimated fares.',
          icon: 'M8 2h8v2H8V2zm0 4h8v10a2 2 0 01-2 2H10a2 2 0 01-2-2V6z',
        },
        {
          title: 'Real-Time Tracking',
          description: 'Track your driver’s location and ETA with live maps and updates.',
          icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z',
        },
        {
          title: 'Secure Payments',
          description: 'Pay seamlessly with mobile payments, cards, or cash, powered by trusted gateways.',
          icon: 'M12 4v16m8-8H4',
        },
        {
          title: 'Ride History & Receipts',
          description: 'Access detailed ride history and download receipts for easy expense tracking.',
          icon: 'M4 4h16v2H4V4zm0 4h16v12H4V8z',
        },
        {
          title: 'Safety Features',
          description: 'Share ride details, access emergency contacts, and rate drivers for safety.',
          icon: 'M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0 2c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8z',
        },
      ],
    },
    {
      role: 'Driver',
      description: 'Equipping drivers with tools to earn flexibly and deliver exceptional service.',
      features: [
        {
          title: 'Flexible Earnings',
          description: 'Choose your schedule and earn competitive rates with transparent payouts.',
          icon: 'M12 4v16m8-8H4',
        },
        {
          title: 'Driver Dashboard',
          description: 'Manage rides, track earnings, and view performance metrics in real time.',
          icon: 'M4 4h16v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4z',
        },
        {
          title: 'Navigation Support',
          description: 'Access optimized routes and navigation tools for efficient trips.',
          icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z',
        },
        {
          title: 'Training & Support',
          description: 'Get onboarding training and 24/7 support for a smooth driving experience.',
          icon: 'M12 4c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8z',
        },
        {
          title: 'Community Incentives',
          description: 'Earn bonuses and rewards for top performance and rider satisfaction.',
          icon: 'M12 2l10 10-10 10L2 12 12 2zm0 2.83L4.83 12 12 19.17 19.17 12 12 4.83z',
        },
      ],
    },
    {
      role: 'Admin',
      description: 'Empowering admins with robust tools to manage operations and scale the platform.',
      features: [
        {
          title: 'Fleet Management',
          description: 'Monitor and manage vehicles, ensuring optimal availability and maintenance.',
          icon: 'M4 4h16v2H4V4zm0 4h16v12H4V8z',
        },
        {
          title: 'User Management',
          description: 'Oversee rider and driver accounts, including verification and support.',
          icon: 'M12 4c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8z',
        },
        {
          title: 'Analytics Dashboard',
          description: 'Access real-time data on rides, revenue, and user engagement.',
          icon: 'M4 4h16v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4z',
        },
        {
          title: 'Payment Oversight',
          description: 'Manage transactions, refunds, and payouts with secure integrations.',
          icon: 'M12 4v16m8-8H4',
        },
        {
          title: 'Policy Enforcement',
          description: 'Set and enforce safety, pricing, and operational policies across the platform.',
          icon: 'M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0 2c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8z',
        },
      ],
    },
  ];

  return (
    <section className="bg-gray-50 py-16 container mx-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">RideEasy Features</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the powerful features designed for Riders, Drivers, and Admins to make urban mobility seamless and efficient.
          </p>
        </div>

        {/* Feature Categories */}
        {featureCategories.map((category, index) => (
          <div key={index} className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">{category.role} Capabilities</h2>
            <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">{category.description}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.features.map((feature, idx) => (
                <div key={idx} className="bg-white p-6 rounded-lg shadow-md text-center">
                  <svg
                    className="w-12 h-12 mx-auto mb-4 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={feature.icon} />
                  </svg>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Experience RideEasy Today</h2>
          <p className="text-gray-600 mb-6">
            Join millions of users enjoying seamless rides. Download the app or sign up to get started!
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