/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { useCreateRideMutation } from "@/redux/features/ride/ride.api";

// ✅ Validation Schema
const rideSchema = z.object({
  riderId: z.string().min(1, "Rider ID is required"),
  pickupLat: z.string().min(1, "Pickup latitude is required"),
  pickupLng: z.string().min(1, "Pickup longitude is required"),
  pickupAddress: z.string().min(5, "Pickup address must be valid"),

  destinationLat: z.string().min(1, "Destination latitude is required"),
  destinationLng: z.string().min(1, "Destination longitude is required"),
  destinationAddress: z.string().min(5, "Destination address must be valid"),

  fare: z.string().min(1, "Fare is required"),
  distance: z.string().min(1, "Distance is required"),
  duration: z.string().min(1, "Duration is required"),
});

export function CreateRideForm() {
  const [createRide, { isLoading }] = useCreateRideMutation();

  const form = useForm<z.infer<typeof rideSchema>>({
    resolver: zodResolver(rideSchema),
    defaultValues: {
      riderId: "",
      pickupLat: "",
      pickupLng: "",
      pickupAddress: "",
      destinationLat: "",
      destinationLng: "",
      destinationAddress: "",
      fare: "",
      distance: "",
      duration: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof rideSchema>) => {
    console.log("Form Data:", data); // ✅ check console

    const ridePayload = {
      riderId: data.riderId,
      pickup: {
        lat: Number(data.pickupLat),
        lng: Number(data.pickupLng),
        address: data.pickupAddress,
      },
      destination: {
        lat: Number(data.destinationLat),
        lng: Number(data.destinationLng),
        address: data.destinationAddress,
      },
      fare: Number(data.fare),
      distance: Number(data.distance),
      duration: Number(data.duration),
      status: "requested", // default status
    };

    try {
      const res = await createRide(ridePayload).unwrap();
      if (res.success) {
        toast.success("✅ Ride created successfully!");
        form.reset();
      }
    } catch (error: any) {
      console.error("Error creating ride:", error);
      toast.error("❌ Failed to create ride");
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-16 mb-16 border-2 shadow-md rounded-xl p-6">
      <h1 className="text-2xl font-bold text-center mb-4">🚖 Create Ride</h1>
      <p className="text-sm text-gray-500 text-center mb-6">
        Enter your pickup and destination details. Get fare estimates and request your ride.
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">

        

          {/* Pickup */}
          <div className="grid grid-cols-3 gap-2">
            <FormField
              control={form.control}
              name="pickupLat"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pickup Latitude</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="23.8103" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="pickupLng"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pickup Longitude</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="90.4125" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="pickupAddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pickup Address</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Gulshan, Dhaka" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Destination */}
          <div className="grid grid-cols-3 gap-2">
            <FormField
              control={form.control}
              name="destinationLat"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Destination Latitude</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="23.7000" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="destinationLng"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Destination Longitude</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="90.3500" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="destinationAddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Destination Address</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Dhanmondi, Dhaka" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Fare, Distance, Duration */}
          <div className="grid grid-cols-3 gap-2">
            <FormField
              control={form.control}
              name="fare"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Fare (BDT)</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="300" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="distance"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Distance (km)</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="10" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="duration"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Duration (minutes)</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="25" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Submit */}
          <Button type="submit" className="w-full bg-primary" disabled={isLoading}>
            {isLoading ? "Creating..." : "Create Ride"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
