"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function CallToAction() {
  return (
    <section className="relative py-20 bg-gradient-to-r from-blue-700 to-blue-500">
      <div className="container mx-auto px-6 text-center relative z-10">
        <Card className="bg-white/10 border-none text-white shadow-xl">
          <CardContent className="p-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Experience{" "}
              <span className="text-yellow-400">Comfortable Rides?</span>
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Book rides, explore tours, and reach your destination faster with
              our reliable drivers and real-time tracking system.
            </p>

            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Button
                asChild
                className="bg-yellow-400 text-black hover:bg-yellow-300 px-8 py-6 rounded-full text-lg"
              >
                <a href="/rider/request-ride">Book a Ride</a>
              </Button>

              <Button
                asChild
                variant="secondary"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 rounded-full text-lg"
              >
                <a href="/download">Download App</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
