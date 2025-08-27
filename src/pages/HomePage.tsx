import Banner from "@/components/HomePage/Banner";
import CallToAction from "@/components/HomePage/CallToAction";
import HowItsWorks from "@/components/HomePage/HowItsWorks";
import Service from "@/components/HomePage/Service";
import Testimonials from "@/components/HomePage/Testimonials";

export default function HomePage() {
  return (
    <div className="container mx-auto">
      <Banner></Banner>
      <HowItsWorks></HowItsWorks>
      <Service></Service>
      <Testimonials></Testimonials>
      <CallToAction></CallToAction>
    </div>
  );
}
