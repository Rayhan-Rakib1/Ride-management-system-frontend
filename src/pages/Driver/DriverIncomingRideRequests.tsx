/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { 
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow 
} from "@/components/ui/table";
import { useDriverAcceptRideRequestMutation } from "@/redux/features/driver/driver.api";
import { useGetAllRideQuery } from "@/redux/features/ride/ride.api";
import { IRideStatus } from "@/types";
import { toast } from "sonner";

export default function DriverIncomingRideRequests() {
  const { data, isLoading } = useGetAllRideQuery(undefined);
  const rides = data?.data ?? [];

  // ✅ Correct mutation hook usage
  const [driverAcceptRideRequest] = useDriverAcceptRideRequestMutation();

  // Status change handler
  const handleStatusChange = async (rideId: string, ) => {
    console.log(rideId);
    try {
      const res = await driverAcceptRideRequest( rideId).unwrap();
      toast.success('Ride status update');
      console.log("Update Response:", res);
    } catch (error) {
      console.error(error);
      toast.error("Failed to update ride status");
    }
  };

  if (isLoading) return <p className="p-4">Loading rides...</p>;

  return (
    <div className="p-4">
      <Table>
        <TableHeader className="bg-transparent">
          <TableRow className="*:border-border hover:bg-transparent [&>:not(:last-child)]:border-r">
            <TableHead>Pickup</TableHead>
            <TableHead>Destination</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Fare</TableHead>
            <TableHead>Distance</TableHead>
            <TableHead>Duration</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody className="[&_td:first-child]:rounded-l-lg [&_td:last-child]:rounded-r-lg">
          {rides?.map((ride: any) => (
            <TableRow 
              key={ride._id} 
              className="*:border-border hover:bg-transparent [&>:not(:last-child)]:border-r"
            >
              <TableCell>{ride.pickup?.address}</TableCell>
              <TableCell>{ride.destination?.address}</TableCell>
              <TableCell className="font-medium capitalize">{ride.status}</TableCell>
              <TableCell>${ride.fare}</TableCell>
              <TableCell>{ride.distance} km</TableCell>
              <TableCell>{ride.duration} min</TableCell>

              <TableCell className="flex gap-2">
                {/* Accept button */}
                {ride.status === IRideStatus.Requested && (
                  <Button 
                    size="sm" 
                   onClick={() => handleStatusChange(ride._id.toString())}

                  >
                    Accept
                  </Button>
                )}

               
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
