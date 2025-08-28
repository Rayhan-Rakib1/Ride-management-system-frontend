/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useGetAllUserQuery } from "@/redux/features/user/user.api"
import { Button } from "../ui/button";
import { Trash2 } from "lucide-react";



export default function AllUserTable() {

  const {data} = useGetAllUserQuery(undefined);
  const items = data?.data ?? [];
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
           <TableHead>Delete</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="[&_td:first-child]:rounded-l-lg [&_td:last-child]:rounded-r-lg">
          {items.map((rider: any) => (
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
              <TableCell><Button><Trash2></Trash2></Button></TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    
    </div>
  )
}
