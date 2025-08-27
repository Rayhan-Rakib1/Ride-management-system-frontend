"use client";

import { Car, MapPin, CreditCard, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function HowItsWorks() {
  const steps = [
    {
      id: 1,
      icon: <MapPin className="w-10 h-10 text-blue-600" />,
      title: "Book Your Tour",
      desc: "Choose your pickup and destination with just a few taps.",
    },
    {
      id: 2,
      icon: <Car className="w-10 h-10 text-green-600" />,
      title: "Get a Driver",
      desc: "Nearby drivers accept your request and arrive quickly.",
    },
    {
      id: 3,
      icon: <Star className="w-10 h-10 text-yellow-500" />,
      title: "Enjoy the Journey",
      desc: "Travel comfortably with real-time tracking and updates.",
    },
    {
      id: 4,
      icon: <CreditCard className="w-10 h-10 text-purple-600" />,
      title: "Pay & Rate",
      desc: "Pay securely and leave a rating for your driver/guide.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-14">
          How It <span className="text-blue-600">Works</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step) => (
            <Card
              key={step.id}
              className="hover:shadow-xl transition border border-gray-100"
            >
              <CardHeader>
                <div className="flex justify-center mb-4">{step.icon}</div>
                <CardTitle className="text-lg font-semibold text-gray-800">
                  {step.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
