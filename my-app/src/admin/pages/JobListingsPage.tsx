import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { useCMS } from "@/admin/context/CMSContext";
import { EmptyState } from "@/components/EmptyState";
import { Plus, Pencil, Eye } from "lucide-react";

export function JobListingsPage() {
  const { state } = useCMS();
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div className="flex justify-end">
        <Button className="rounded-md" onClick={() => navigate("/admin/jobs/new")}>
          <Plus className="h-4 w-4" />
          Add new job
        </Button>
      </div>

      <Card className="border-border bg-card">
        <CardHeader>
          <CardTitle className="text-lg">Job listings</CardTitle>
          <p className="text-sm text-muted-foreground">Draft = not visible publicly. Open = visible. Closed = not accepting applications.</p>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="border-border hover:bg-transparent">
                <TableHead className="text-muted-foreground">Job title</TableHead>
                <TableHead className="text-muted-foreground">Department</TableHead>
                <TableHead className="text-muted-foreground">Type</TableHead>
                <TableHead className="text-muted-foreground">Location</TableHead>
                <TableHead className="text-muted-foreground">Status</TableHead>
                <TableHead className="text-muted-foreground">Applications</TableHead>
                <TableHead className="w-28 text-right text-muted-foreground">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {state.jobListings.length === 0 ? (
                <tr><td colSpan={5}><EmptyState title="No job listings yet" description="Add a job to publish on the careers page." action={<Button className="rounded-md" onClick={() => navigate("/admin/jobs/new")}><Plus className="h-4 w-4" /> Add new job</Button>} className="my-4" /></td></tr>
              ) : state.jobListings.map((row) => (
                <TableRow key={row.id} className="border-border">
                  <TableCell className="font-medium">{row.title}</TableCell>
                  <TableCell className="text-muted-foreground">{row.department}</TableCell>
                  <TableCell className="text-muted-foreground">{row.type}</TableCell>
                  <TableCell className="text-muted-foreground">{row.location}</TableCell>
                  <TableCell>
                    <Badge variant={row.status === "Open" ? "default" : "secondary"} className="rounded-full">
                      {row.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{row.applicants.length}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-1">
                      <Button variant="ghost" size="icon" className="h-8 w-8" title="View" onClick={() => navigate(`/admin/jobs/${row.id}`)}>
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8" title="Edit" onClick={() => navigate(`/admin/jobs/${row.id}/edit`)}>
                        <Pencil className="h-4 w-4" />
                      </Button>
                    </div>
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
