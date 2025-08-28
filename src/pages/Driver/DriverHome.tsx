import { EarningSnapshot } from "@/components/DriverComponets/EarningSnapshot";
import StatusUpdate from "@/components/DriverComponets/StatusUpdate";

export default function DriverHome() {
  return (
    <div className="container">
      <StatusUpdate></StatusUpdate>
      <EarningSnapshot></EarningSnapshot>
    </div>
  );
}