import React, { useState } from 'react';

// Define TypeScript interface for team members
interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export default function TeamProfiles() {
  // Sample team data (32 members)
  const teamMembers: TeamMember[] = [
    { name: 'John Rahman', role: 'CEO & Co-Founder', bio: 'Visionary leader driving RideEasy’s mission for accessible mobility.', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80' },
    { name: 'Ayesha Khan', role: 'CTO', bio: 'Leads innovative tech solutions for seamless ride experiences.', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80' },
    { name: 'Michael Chen', role: 'COO', bio: 'Oversees operations to ensure reliable and efficient rides.', image: 'https://images.unsplash.com/photo-1519083833763-7d7e2c735c73?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80' },
    { name: 'Sara Ahmed', role: 'CFO', bio: 'Manages financial strategy to support RideEasy’s growth.', image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80' },
    { name: 'Rahul Gupta', role: 'Lead Developer', bio: 'Builds robust systems for real-time ride tracking.', image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf7026e6?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80' },
    { name: 'Fatima Hossain', role: 'Product Manager', bio: 'Designs user-friendly features for riders and drivers.', image: 'https://images.unsplash.com/photo-1517365381413-7a77e21539b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80' },
    { name: 'David Lee', role: 'Data Scientist', bio: 'Analyzes ride data to optimize pricing and routes.', image: 'https://images.unsplash.com/photo-1527980965256-3d7d0c3e6b1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80' },
    { name: 'Nadia Islam', role: 'Marketing Lead', bio: 'Crafts campaigns to grow RideEasy’s user base.', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80' },
    { name: 'Arif Khan', role: 'Operations Manager', bio: 'Ensures smooth fleet management and driver support.', image: 'https://images.unsplash.com/photo-1519083833763-7d7e2c735c73?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80' },
    { name: 'Sofia Patel', role: 'UX Designer', bio: 'Creates intuitive interfaces for rider and driver apps.', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80' },
    { name: 'Imran Ali', role: 'Driver Coordinator', bio: 'Supports drivers with training and onboarding.', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80' },
    { name: 'Lina Chowdhury', role: 'Customer Support Lead', bio: 'Ensures 24/7 assistance for riders and drivers.', image: 'https://images.unsplash.com/photo-1517365381413-7a77e21539b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80' },
    { name: 'Amir Hossain', role: 'Mobile Developer', bio: 'Builds reliable apps for iOS and Android platforms.', image: 'https://images.unsplash.com/photo-1527980965256-3d7d0c3e6b1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80' },
    { name: 'Priya Sharma', role: 'HR Manager', bio: 'Fosters a vibrant and inclusive team culture.', image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80' },
    { name: 'Zain Malik', role: 'Backend Engineer', bio: 'Develops scalable APIs for ride management.', image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf7026e6?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80' },
    { name: 'Meena Begum', role: 'Safety Officer', bio: 'Implements safety protocols for secure rides.', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80' },
    { name: 'Omar Faruk', role: 'Logistics Manager', bio: 'Optimizes fleet operations for efficiency.', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80' },
    { name: 'Riya Das', role: 'Content Strategist', bio: 'Creates engaging content for brand growth.', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80' },
    { name: 'Asif Rahman', role: 'DevOps Engineer', bio: 'Ensures reliable and scalable infrastructure.', image: 'https://images.unsplash.com/photo-1519083833763-7d7e2c735c73?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80' },
    { name: 'Tania Akter', role: 'Finance Analyst', bio: 'Supports budgeting and financial planning.', image: 'https://images.unsplash.com/photo-1517365381413-7a77e21539b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80' },
    { name: 'Kamal Hossain', role: 'QA Engineer', bio: 'Ensures app quality through rigorous testing.', image: 'https://images.unsplash.com/photo-1527980965256-3d7d0c3e6b1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80' },
    { name: 'Sana Mirza', role: 'Community Manager', bio: 'Builds strong driver and rider communities.', image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80' },
    { name: 'Rohan Islam', role: 'AI Specialist', bio: 'Develops AI for route optimization.', image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf7026e6?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80' },
    { name: 'Anika Roy', role: 'UI Designer', bio: 'Designs intuitive interfaces for user apps.', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80' },
    { name: 'Faisal Khan', role: 'Security Engineer', bio: 'Protects user data with robust security.', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80' },
    { name: 'Nusrat Jahan', role: 'Marketing Analyst', bio: 'Drives growth through data-driven campaigns.', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80' },
    { name: 'Irfan Ahmed', role: 'Driver Trainer', bio: 'Ensures drivers meet safety standards.', image: 'https://images.unsplash.com/photo-1519083833763-7d7e2c735c73?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80' },
    { name: 'Shabnam Begum', role: 'Customer Success', bio: 'Delivers exceptional support for users.', image: 'https://images.unsplash.com/photo-1517365381413-7a77e21539b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80' },
    { name: 'Adnan Malik', role: 'Fleet Manager', bio: 'Manages vehicle maintenance and availability.', image: 'https://images.unsplash.com/photo-1527980965256-3d7d0c3e6b1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80' },
    { name: 'Ruma Akter', role: 'PR Manager', bio: 'Builds RideEasy’s brand through media.', image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80' },
    { name: 'Salman Khan', role: 'Database Engineer', bio: 'Manages data for ride and user analytics.', image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf7026e6?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80' },
    { name: 'Jasmine Rahman', role: 'Social Media Lead', bio: 'Engages users through vibrant online presence.', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80' },
  ];

  // Pagination state
  const [currentPage, setCurrentPage] = useState<number>(1);
  const membersPerPage = 10;
  const totalPages = Math.ceil(teamMembers.length / membersPerPage);

  // Calculate members to display on current page
  const indexOfLastMember = currentPage * membersPerPage;
  const indexOfFirstMember = indexOfLastMember - membersPerPage;
  const currentMembers = teamMembers.slice(indexOfFirstMember, indexOfLastMember);

  // Handle page change
  const handlePageChange = (pageNumber: number, event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault(); // Prevent default behavior
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Meet Our Team</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get to know the passionate individuals driving RideEasy’s mission to revolutionize urban mobility.
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {currentMembers.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h3>
              <p className="text-blue-600 font-medium mb-2">{member.role}</p>
              <p className="text-gray-600">{member.bio}</p>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center space-x-2 mb-12">
          <button
            type="button"
            onClick={(e) => handlePageChange(currentPage - 1, e)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-blue-700 transition"
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              type="button"
              key={page}
              onClick={(e) => handlePageChange(page, e)}
              className={`px-4 py-2 rounded-lg ${
                currentPage === page
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              } transition`}
            >
              {page}
            </button>
          ))}
          <button
            type="button"
            onClick={(e) => handlePageChange(currentPage + 1, e)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-blue-700 transition"
          >
            Next
          </button>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Join Our Team</h2>
          <p className="text-gray-600 mb-6">
            Passionate about mobility and innovation? Join RideEasy and help shape the future of urban transport!
          </p>
          <a
            href="/careers"
            className="inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition"
          >
            Explore Careers
          </a>
        </div>
      </div>
    </section>
  );
}