"use client";

import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Rahim Uddin",
      role: "Frequent Rider",
      review:
        "This app made my daily rides so easy and affordable. Drivers are professional and I always feel safe!",
      image: "https://i.pravatar.cc/100?img=1",
      rating: 5,
    },
    {
      id: 2,
      name: "Sarah Akter",
      role: "Traveler",
      review:
        "Best tour booking experience! I love the real-time tracking and easy payment options.",
      image: "https://i.pravatar.cc/100?img=2",
      rating: 4,
    },
    {
      id: 3,
      name: "Imran Hossain",
      role: "Businessman",
      review:
        "Very reliable and always on time. Perfect for my business trips across the city.",
      image: "https://i.pravatar.cc/100?img=3",
      rating: 5,
    },
    {
      id: 4,
      name: "Nusrat Jahan",
      role: "Tourist",
      review:
        "Amazing experience! The app helped me explore new places without any hassle.",
      image: "https://i.pravatar.cc/100?img=4",
      rating: 5,
    },
    {
      id: 5,
      name: "Arif Chowdhury",
      role: "Student",
      review:
        "Affordable rides and great discounts for students. Highly recommended!",
      image: "https://i.pravatar.cc/100?img=5",
      rating: 4,
    },
    {
      id: 6,
      name: "Maya Rahman",
      role: "Working Professional",
      review:
        "Quick, safe, and reliable rides. Makes my office commute stress-free every day.",
      image: "https://i.pravatar.cc/100?img=6",
      rating: 5,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          What Our <span className="text-blue-600">Users Say</span>
        </h2>

        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="md:basis-1/3 lg:basis-1/3"
              >
                <div className="bg-white rounded-2xl shadow-md p-6 mx-3 hover:shadow-xl transition">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">
                    {testimonial.role}
                  </p>
                  <div className="flex justify-center mb-3">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-500 fill-yellow-500"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm italic">
                    "{testimonial.review}"
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
