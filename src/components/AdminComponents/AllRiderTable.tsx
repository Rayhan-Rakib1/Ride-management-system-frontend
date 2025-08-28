/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetAllRidersQuery } from "@/redux/features/rider/rider.api";

export default function AllRiderTable() {
  const { data, isLoading } = useGetAllRidersQuery(undefined);

  const riders = data?.data ?? [];

  if (isLoading) {
    return <p className="text-center">Loading riders...</p>;
  }

  return (
    <div>
      <Table>
        <TableHeader className="bg-transparent">
          <TableRow className="*:border-border hover:bg-transparent [&>:not(:last-child)]:border-r">
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Address</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Gender</TableHead>
            <TableHead>Date of Birth</TableHead>
            <TableHead>Nationality</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="[&_td:first-child]:rounded-l-lg [&_td:last-child]:rounded-r-lg">
          {riders.map((rider: any) => (
            <TableRow
              key={rider._id.toString()}
              className="*:border-border hover:bg-transparent [&>:not(:last-child)]:border-r"
            >
              <TableCell className="font-medium">{rider.name}</TableCell>
              <TableCell>{rider.email}</TableCell>
              <TableCell>{rider.phone}</TableCell>
              <TableCell>{rider.address}</TableCell>
              <TableCell>{rider.status ?? "N/A"}</TableCell>
              <TableCell>{rider.role}</TableCell>
              <TableCell>{rider.gender ?? "N/A"}</TableCell>
              <TableCell>
                {rider.dateOfBirth
                  ? new Date(rider.dateOfBirth).toLocaleDateString()
                  : "N/A"}
              </TableCell>
              <TableCell>{rider.nationality ?? "N/A"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    
    </div>
  );
}
