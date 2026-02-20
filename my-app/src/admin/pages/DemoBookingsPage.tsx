import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useCMS } from "@/admin/context/CMSContext";
import { EmptyState } from "@/components/EmptyState";
import { Mail, Eye } from "lucide-react";
import type { DemoBookingStatus } from "@/admin/context/types";

export function DemoBookingsPage() {
  const { state, dispatch } = useCMS();
  const [detailId, setDetailId] = useState<string | null>(null);

  const detail = detailId ? state.demoBookings.find((d) => d.id === detailId) : null;

  return (
    <div className="space-y-6">
      <Card className="border-border bg-card">
        <CardHeader>
          <CardTitle className="text-lg">Demo bookings</CardTitle>
          <p className="text-sm text-muted-foreground">New submissions default to Pending Review. Change status to update notifications.</p>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="border-border hover:bg-transparent">
                <TableHead className="text-muted-foreground">Name</TableHead>
                <TableHead className="text-muted-foreground">Email</TableHead>
                <TableHead className="text-muted-foreground">Organization</TableHead>
                <TableHead className="text-muted-foreground">Preferred date</TableHead>
                <TableHead className="text-muted-foreground">Message</TableHead>
                <TableHead className="text-muted-foreground">Status</TableHead>
                <TableHead className="w-24 text-right text-muted-foreground">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {state.demoBookings.length === 0 ? (
                <tr><td colSpan={6}><EmptyState title="No demo bookings yet" description="Bookings will appear here when users request a demo." className="my-4" /></td></tr>
              ) : state.demoBookings.map((row) => (
                <TableRow key={row.id} className="border-border">
                  <TableCell className="font-medium">{row.name}</TableCell>
                  <TableCell className="text-muted-foreground">{row.email}</TableCell>
                  <TableCell>{row.organization}</TableCell>
                  <TableCell className="text-muted-foreground text-sm">{row.preferredDate}</TableCell>
                  <TableCell className="text-muted-foreground text-sm max-w-[180px] truncate">{row.message || "—"}</TableCell>
                  <TableCell>
                    <Select
                      value={row.status}
                      onValueChange={(v) => dispatch({ type: "DEMO_UPDATE_STATUS", payload: { id: row.id, status: v as DemoBookingStatus } })}
                    >
                      <SelectTrigger className="w-[140px] h-8 rounded-md border-border">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Pending Review">Pending Review</SelectItem>
                        <SelectItem value="Confirmed">Confirmed</SelectItem>
                        <SelectItem value="Completed">Completed</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon" className="h-8 w-8" title="View details" onClick={() => setDetailId(row.id)}>
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      title="Send email"
                      onClick={() => window.open(`mailto:${row.email}`, "_blank")}
                    >
                      <Mail className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {detail && (
        <Card className="border-border bg-card">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-base">Booking details</CardTitle>
            <Button variant="ghost" size="sm" onClick={() => setDetailId(null)}>Close</Button>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <p><span className="font-medium text-muted-foreground">Name:</span> {detail.name}</p>
            <p><span className="font-medium text-muted-foreground">Email:</span> <a href={`mailto:${detail.email}`} className="text-primary hover:underline">{detail.email}</a></p>
            <p><span className="font-medium text-muted-foreground">Organization:</span> {detail.organization}</p>
            <p><span className="font-medium text-muted-foreground">Preferred date:</span> {detail.preferredDate}</p>
            <p><span className="font-medium text-muted-foreground">Status:</span> {detail.status}</p>
            {detail.message && <p><span className="font-medium text-muted-foreground">Message:</span> {detail.message}</p>}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
