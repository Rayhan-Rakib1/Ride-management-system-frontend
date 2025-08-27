import CompanyBackground from "@/components/AboutUs/CompanyBackground";
import Mission from "@/components/AboutUs/Mission";
import TeamProfiles from "@/components/AboutUs/TeamProfiles";

export default function AboutUs() {
  return (
    <div className="container mx-auto">
      <CompanyBackground></CompanyBackground>
      <Mission></Mission>
      <TeamProfiles></TeamProfiles>
    </div>
  );
}