/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useAllDriverQuery } from "@/redux/features/driver/driver.api"

export default function AllDriverTable() {
  const { data } = useAllDriverQuery(undefined);

  // type-safe data
  const drivers = data?.data ?? [];

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
            <TableHead>Approval Status</TableHead>
            <TableHead>Availability</TableHead>
            <TableHead>Vehicle Info</TableHead>
            <TableHead>License</TableHead>
            <TableHead>Total Rides</TableHead>
            <TableHead>Total Earnings</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="[&_td:first-child]:rounded-l-lg [&_td:last-child]:rounded-r-lg">
          {drivers.map((driver : any) => (
            <TableRow
              key={driver.email} 
              className="*:border-border hover:bg-transparent [&>:not(:last-child)]:border-r"
            >
              <TableCell className="font-medium">{driver.name}</TableCell>
              <TableCell>{driver.email}</TableCell>
              <TableCell>{driver.phone}</TableCell>
              <TableCell>{driver.address}</TableCell>
              <TableCell>{driver.status ?? "N/A"}</TableCell>
              <TableCell>{driver.role}</TableCell>
              <TableCell>{driver.gender ?? "N/A"}</TableCell>
              <TableCell>
                {driver.dateOfBirth
                  ? new Date(driver.dateOfBirth).toLocaleDateString()
                  : "N/A"}
              </TableCell>
              <TableCell>{driver.nationality ?? "N/A"}</TableCell>
              <TableCell>{driver.approvalStatus}</TableCell>
              <TableCell>{driver.availability}</TableCell>
              <TableCell>
                {driver.vehicleInfo
                  ? `${driver.vehicleInfo.vehicleType} - ${driver.vehicleInfo.number} (${driver.vehicleInfo.color})`
                  : "N/A"}
              </TableCell>
              <TableCell>
                {driver.license
                  ? `${driver.license.number} (exp: ${new Date(driver.license.expiryDate).toLocaleDateString()})`
                  : "N/A"}
              </TableCell>
              <TableCell>{driver.totalRides}</TableCell>
              <TableCell>{driver.totalEarnings}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
