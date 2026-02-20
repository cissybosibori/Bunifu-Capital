import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useCMS } from "@/admin/context/CMSContext";
import { EmptyState } from "@/components/EmptyState";
import type { WorkingWithUsStatus } from "@/admin/context/types";

export function WorkingWithUsPage() {
  const { state, dispatch } = useCMS();

  return (
    <div className="space-y-6">
      <Card className="border-border bg-card">
        <CardHeader>
          <CardTitle className="text-lg">Working With Us</CardTitle>
          <p className="text-sm text-muted-foreground">Partnership and collaboration inquiries. Status changes update the UI and notification count.</p>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="border-border hover:bg-transparent">
                <TableHead className="text-muted-foreground">Name</TableHead>
                <TableHead className="text-muted-foreground">Company</TableHead>
                <TableHead className="text-muted-foreground">Email</TableHead>
                <TableHead className="text-muted-foreground">Inquiry type</TableHead>
                <TableHead className="text-muted-foreground">Message</TableHead>
                <TableHead className="text-muted-foreground">Date</TableHead>
                <TableHead className="text-muted-foreground">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {state.workingWithUs.length === 0 ? (
                <tr><td colSpan={7}><EmptyState title="No working with us entries yet" description="Partnership inquiries will appear here." className="my-4" /></td></tr>
              ) : state.workingWithUs.map((row) => (
                <TableRow key={row.id} className="border-border">
                  <TableCell className="font-medium">{row.name}</TableCell>
                  <TableCell>{row.company}</TableCell>
                  <TableCell className="text-muted-foreground">{row.email}</TableCell>
                  <TableCell>{row.inquiryType}</TableCell>
                  <TableCell className="text-muted-foreground text-sm max-w-[200px] truncate">{row.message}</TableCell>
                  <TableCell className="text-muted-foreground text-sm">{row.date}</TableCell>
                  <TableCell>
                    <Select
                      value={row.status}
                      onValueChange={(v) => dispatch({ type: "WORKING_WITH_US_UPDATE_STATUS", payload: { id: row.id, status: v as WorkingWithUsStatus } })}
                    >
                      <SelectTrigger className="w-[130px] h-8 rounded-md border-border">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="New">New</SelectItem>
                        <SelectItem value="Reviewed">Reviewed</SelectItem>
                        <SelectItem value="Contacted">Contacted</SelectItem>
                        <SelectItem value="Accepted">Accepted</SelectItem>
                        <SelectItem value="Declined">Declined</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
