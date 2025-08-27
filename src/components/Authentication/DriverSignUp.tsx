/* eslint-disable react-refresh/only-export-components */
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Link, useNavigate } from "react-router";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {  z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateDriverMutation } from "@/redux/features/driver/driver.api";
import { toast } from "sonner";

export const driverRegisterSchema = z
  .object({
    name: z.string().min(3, "Full name must be at least 3 characters"),
    email: z.string().email("Invalid email address"),
    address: z.string().min(5, "Address is required"),
    phone: z
      .string()
      .regex(/^(\+8801[3-9]\d{8})$/, "Invalid Bangladeshi phone number"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(6, "Please confirm your password"),
    profileImage: z.string().url("Must be a valid image URL"),
    gender: z
      .enum(["male", "female", "other"])
      .refine((val) => val !== undefined, { message: "Gender is required" }),
    dateOfBirth: z.string().nonempty("Date of birth is required"),
    nationality: z.string().min(2, "Nationality is required"),
    vehicleNumber: z.string().min(3, "Vehicle number is required"),
    vehicleType: z
      .enum(["car", "bike", "van"])
      .refine((val) => val !== undefined, {
        message: "Vehicle type is required",
      }),

    vehicleColor: z.string().min(2, "Vehicle color is required"),
    vehicleModel: z.string().min(2, "Vehicle model is required"),
    licenseNumber: z.string().min(5, "License number is required"),
    licenseExpiry: z.string().nonempty("License expiry date is required"),
    availability: z
      .enum(["online", "offline"])
      .refine((val) => val !== undefined, {
        message: "Availability is required",
      }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export function DriverSignUp({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const navigate = useNavigate();
  const [createDriver] = useCreateDriverMutation();

  const form = useForm<z.infer<typeof driverRegisterSchema>>({
    resolver: zodResolver(driverRegisterSchema),
    defaultValues: {
      address: "",
      availability: undefined,
      confirmPassword: "",
      dateOfBirth: "",
      email: "",
      gender: undefined,
      licenseExpiry: "",
      licenseNumber: "",
      name: "",
      nationality: "",
      password: "",
      phone: "",
      profileImage: "",
      vehicleColor: "",
      vehicleModel: "",
      vehicleNumber: "",
      vehicleType: undefined,
    },
  });

const onSubmit = async (data: z.infer<typeof driverRegisterSchema>) => {
  const driverInfo = {
    name: data.name,
    email: data.email,
    password: data.password,
    role: "driver",
    approvalStatus: "pending",
    availability: data.availability,
    address: data.address,
    phone: data.phone,
    profileImage: data.profileImage,
    gender: data.gender,
    dateOfBirth: new Date(data.dateOfBirth),
    nationality: data.nationality,
    auth: [
      {
        provider: "credential",
        providerId: data.email, 
      },
    ],
    vehicleInfo: {
      vehicleType: data.vehicleType,
      number: data.vehicleNumber,
      color: data.vehicleColor,
      model: data.vehicleModel,
      year: new Date(data.dateOfBirth).getFullYear(), 
    },
    license: {
      number: data.licenseNumber,
      expiryDate: new Date(data.licenseExpiry),
    },
    totalRides: 0,
    totalEarnings: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  try {
    const res = await createDriver(driverInfo).unwrap();
    if (res.success) {
      toast.success("You are now a driver 🚖");
      navigate("/verify-otp", { state: data.email });
    }
  } catch (error) {
    console.log("Driver creation error:", error);
    toast.error("Failed to create driver account");
  }
};


  return (
    <div className={cn("flex flex-col gap-6 m-4", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Register as a Driver</h1>
        <p className="text-sm text-muted-foreground">
          Enter your details to create a driver account
        </p>
      </div>

      <div className="grid gap-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Full Name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="john.doe@email.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Address & Phone */}
            <div className="flex gap-2">
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                      <Input placeholder="123 Main St, Dhaka" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input placeholder="+8801XXXXXXXXX" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Passwords */}
            <div className="flex gap-2">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="********"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="********"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Profile Image */}
            <FormField
              control={form.control}
              name="profileImage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Profile Image URL</FormLabel>
                  <FormControl>
                    <Input
                      type="url"
                      placeholder="https://example.com/avatar.jpg"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Gender & DOB */}
            <div className="flex gap-2">
              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Gender</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="dateOfBirth"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Date of Birth</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Nationality */}
            <FormField
              control={form.control}
              name="nationality"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nationality</FormLabel>
                  <FormControl>
                    <Input placeholder="Bangladeshi" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Vehicle Info */}
            <div className="flex gap-2">
              <FormField
                control={form.control}
                name="vehicleNumber"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Vehicle Number</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. DHA-1234" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="vehicleType"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Vehicle Type</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="car">Car</SelectItem>
                        <SelectItem value="bike">Bike</SelectItem>
                        <SelectItem value="van">Van</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex gap-2">
              <FormField
                control={form.control}
                name="vehicleColor"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Vehicle Color</FormLabel>
                    <FormControl>
                      <Input placeholder="Black" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="vehicleModel"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Model</FormLabel>
                    <FormControl>
                      <Input placeholder="Toyota Corolla" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* License Info */}
            <div className="flex gap-2">
              <FormField
                control={form.control}
                name="licenseNumber"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>License Number</FormLabel>
                    <FormControl>
                      <Input placeholder="DL-12345-678" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="licenseExpiry"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>License Expiry Date</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Availability */}
            <FormField
              control={form.control}
              name="availability"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Availability</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select availability" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="online">Online</SelectItem>
                      <SelectItem value="offline">Offline</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              Register as a driver
            </Button>
          </form>
        </Form>

        <div className="text-center text-sm">
          Already have an account?{" "}
          <Link to="/signIn" className="underline underline-offset-4">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
