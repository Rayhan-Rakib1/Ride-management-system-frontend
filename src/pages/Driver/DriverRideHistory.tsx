/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetDriverRideHistoryQuery } from "@/redux/features/driver/driver.api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Navigation, DollarSign, Clock, Star } from "lucide-react";

export default function DriverRideHistory() {
  const { data, isLoading, isError } = useGetDriverRideHistoryQuery(undefined);
  const rides = data?.data || [];

  if (isLoading) {
    return <div className="text-center py-20 dark:text-gray-300">Loading ride history...</div>;
  }

  if (isError || rides.length === 0) {
    return (
      <div className="text-center py-20 dark:text-gray-400">
        <h2 className="text-xl">No ride history found 🚖</h2>
      </div>
    );
  }

  return (
    <section className="container mx-auto px-4 py-10 space-y-6">
      {rides.map((ride: any) => (
        <Card
          key={ride._id}
          className="shadow-lg rounded-2xl bg-white dark:bg-gray-800 dark:shadow-gray-700"
        >
          <CardHeader>
            <CardTitle className="flex items-center justify-between text-gray-900 dark:text-gray-100">
              <span>Ride #{ride.id}</span>
              <Badge
                variant={ride.status === "completed" ? "default" : "outline"}
                className="capitalize"
              >
                {ride.status}
              </Badge>
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-4 text-gray-900 dark:text-gray-100">
            {/* Pickup & Destination */}
            <div className="grid gap-2">
              <div className="flex items-center gap-2">
                <MapPin className="text-green-600" />
                <span className="font-medium">Pickup: {ride.pickup?.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Navigation className="text-red-600" />
                <span className="font-medium">Destination: {ride.destination?.address}</span>
              </div>
            </div>

            {/* Distance, Duration, Fare */}
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-lg font-semibold">{ride.distance} km</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Distance</p>
              </div>
              <div>
                <p className="text-lg font-semibold flex items-center justify-center gap-1">
                  <Clock className="w-4 h-4" /> {ride.duration} min
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Duration</p>
              </div>
              <div>
                <p className="text-lg font-semibold flex items-center justify-center gap-1">
                  <DollarSign className="w-4 h-4" /> {ride.fare} BDT
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Fare</p>
              </div>
            </div>

            {/* Rider Info */}
            <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-700 shadow flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold">Rider</h3>
                <h3 className="text-sm font-bold">{ride.riderId?.name}</h3>
                <p className="text-sm">{ride.riderId?.phone}</p>
                <p className="text-sm">{ride.riderId?.address}</p>
              </div>
              <div className="flex flex-col items-end gap-1">
                <Badge>{ride.riderId?.gender}</Badge>
                <div className="flex items-center gap-1 text-yellow-500">
                  <Star className="w-4 h-4" />
                  <span className="text-sm">{ride.rating?.driverRating || 0}</span>
                </div>
              </div>
            </div>

            {/* Ride Timestamps */}
            <div className="text-sm flex justify-between text-gray-500 dark:text-gray-400">
              <span>Created: {new Date(ride.createdAt).toLocaleString()}</span>
              <span>Updated: {new Date(ride.updatedAt).toLocaleString()}</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </section>
  );
}
