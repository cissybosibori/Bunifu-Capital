import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useCMS } from "@/admin/context/CMSContext";
import { EmptyState } from "@/components/EmptyState";
import type { ContactStatus } from "@/admin/context/types";

export function ContactsPage() {
  const { state, dispatch } = useCMS();

  return (
    <div className="space-y-6">
      <Card className="border-border bg-card">
        <CardHeader>
          <CardTitle className="text-lg">Contact form submissions</CardTitle>
          <p className="text-sm text-muted-foreground">Mark as Resolved to remove from the notification list.</p>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="border-border hover:bg-transparent">
                <TableHead className="text-muted-foreground">Name</TableHead>
                <TableHead className="text-muted-foreground">Email</TableHead>
                <TableHead className="text-muted-foreground">Subject</TableHead>
                <TableHead className="text-muted-foreground">Message preview</TableHead>
                <TableHead className="text-muted-foreground">Date</TableHead>
                <TableHead className="text-muted-foreground">Status</TableHead>
                <TableHead className="w-36 text-right text-muted-foreground">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {state.contacts.length === 0 ? (
                <tr><td colSpan={8}><EmptyState title="No contact submissions yet" description="Form submissions will appear here." className="my-4" /></td></tr>
              ) : state.contacts.map((row) => (
                <TableRow key={row.id} className="border-border">
                  <TableCell className="font-medium">{row.name}</TableCell>
                  <TableCell className="text-muted-foreground">{row.email}</TableCell>
                  <TableCell>{row.subject}</TableCell>
                  <TableCell className="text-muted-foreground text-sm max-w-[220px] truncate">{row.messagePreview}</TableCell>
                  <TableCell className="text-muted-foreground text-sm">{row.date}</TableCell>
                  <TableCell>
                    <Select
                      value={row.status}
                      onValueChange={(v) => dispatch({ type: "CONTACT_UPDATE_STATUS", payload: { id: row.id, status: v as ContactStatus } })}
                    >
                      <SelectTrigger className="w-[120px] h-8 rounded-md border-border">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="New">New</SelectItem>
                        <SelectItem value="Reviewed">Reviewed</SelectItem>
                        <SelectItem value="Replied">Replied</SelectItem>
                        <SelectItem value="Resolved">Resolved</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell className="text-right">
                    {row.status !== "Resolved" && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="rounded-md"
                        onClick={() => dispatch({ type: "CONTACT_UPDATE_STATUS", payload: { id: row.id, status: "Resolved" } })}
                      >
                        Mark as resolved
                      </Button>
                    )}
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
