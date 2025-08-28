import { 
  useDriverUpdateRideStatusMutation, 
  useGetDriverCurrentRideQuery 
} from "@/redux/features/driver/driver.api";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Navigation, DollarSign, Clock } from "lucide-react";

// Ride Status Flow
const rideStatusFlow: Record<string, string | null> = {
  requested: "accepted",
  accepted: "picked_up",
  picked_up: "in_transit",
  in_transit: "completed",
  completed: null,
  cancelled: null,
};

// Next button labels
const nextStatusLabel: Record<string, string> = {
  requested: "Accept Ride",
  accepted: "Pickup Rider",
  picked_up: "Start Ride",
  in_transit: "Complete Ride",
};

export default function DriverActivateRide() {
  const { data } = useGetDriverCurrentRideQuery(undefined);
  const ride = data?.data?.[0];

  const [updateRideStatus, { isLoading }] = useDriverUpdateRideStatusMutation();

  // Handler for updating ride status
  const handleUpdateStatus = async (newStatus: string) => {
    try {
      await updateRideStatus({
        rideId: ride._id,
        status: { status: newStatus },
      }).unwrap();
      console.log(`Ride status updated to ${newStatus}`);
    } catch (error) {
      console.error("Failed to update ride status:", error);
    }
  };

  if (!ride) {
    return (
      <div className="flex items-center justify-center h-[60vh]">
        <h2 className="text-xl text-gray-500">No active ride found 🚖</h2>
      </div>
    );
  }

  return (
    <section className="container mx-auto px-4 py-10">
      <Card className="shadow-xl rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50">
        <CardHeader>
          <CardTitle className="text-2xl font-bold flex items-center gap-2">
            🚖 Active Ride
            {ride.status === "completed" ? (
              <Badge variant="outline" className="capitalize bg-green-200 text-green-800">
                Ride Completed
              </Badge>
            ) : (
              <Badge variant="outline" className="capitalize">
                {ride.status}
              </Badge>
            )}
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Pickup & Destination */}
          <div className="grid gap-4">
            <div className="flex items-center gap-3">
              <MapPin className="text-green-600" />
              <span className="font-medium">
                Pickup: {ride.pickup?.address}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Navigation className="text-red-600" />
              <span className="font-medium">
                Destination: {ride.destination?.address}
              </span>
            </div>
          </div>

          {/* Distance, Duration, Fare */}
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-lg font-semibold">{ride.distance} km</p>
              <p className="text-sm text-gray-500">Distance</p>
            </div>
            <div>
              <p className="text-lg font-semibold flex items-center justify-center gap-1">
                <Clock className="w-4 h-4" /> {ride.duration} min
              </p>
              <p className="text-sm text-gray-500">Duration</p>
            </div>
            <div>
              <p className="text-lg font-semibold flex items-center justify-center gap-1">
                <DollarSign className="w-4 h-4" /> {ride.fare} BDT
              </p>
              <p className="text-sm text-gray-500">Fare</p>
            </div>
          </div>

          {/* Rider Info */}
          <div className="p-4 rounded-xl bg-white shadow flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold">Rider</h3>
              <h3 className="text-sm font-bold">{ride.riderId?.name}</h3>
              <p className="text-sm text-gray-500">{ride.riderId?.phone}</p>
            </div>
            <Badge>{ride.riderId?.gender}</Badge>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-3">
            {/* Cancel Button */}
            {ride.status !== "completed" && ride.status !== "cancelled" && (
              <Button
                variant="outline"
                disabled={isLoading}
                onClick={() => handleUpdateStatus("cancelled")}
              >
                Cancel
              </Button>
            )}

            {/* Next Step Button */}
            {rideStatusFlow[ride.status] && (
              <Button
                disabled={isLoading}
                onClick={() => handleUpdateStatus(rideStatusFlow[ride.status]!)}
              >
                {nextStatusLabel[ride.status]}
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
