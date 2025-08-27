
import { ShieldCheck, Wallet, Clock, Users, MapPin, CreditCard } from "lucide-react";

export default function Service() {
  const services = [
    {
      id: 1,
      icon: <ShieldCheck className="w-12 h-12 text-blue-600" />,
      title: "Safe & Secure",
      desc: "Your safety is our top priority with trusted and verified drivers.",
    },
    {
      id: 2,
      icon: <Wallet className="w-12 h-12 text-green-600" />,
      title: "Affordable Pricing",
      desc: "Get transparent and budget-friendly ride fares anytime.",
    },
    {
      id: 3,
      icon: <Clock className="w-12 h-12 text-yellow-500" />,
      title: "24/7 Availability",
      desc: "Book your rides anytime, day or night, without hassle.",
    },
    {
      id: 4,
      icon: <Users className="w-12 h-12 text-purple-600" />,
      title: "Professional Drivers",
      desc: "Experienced drivers ensure you a smooth and safe journey.",
    },
    {
      id: 5,
      icon: <MapPin className="w-12 h-12 text-red-500" />,
      title: "Live Tracking",
      desc: "Track your ride in real-time with accurate GPS navigation.",
    },
    {
      id: 6,
      icon: <CreditCard className="w-12 h-12 text-pink-600" />,
      title: "Easy Payments",
      desc: "Pay easily using cash, card, or mobile banking options.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Our <span className="text-blue-600">Services</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
