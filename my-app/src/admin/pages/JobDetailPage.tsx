import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useCMS } from "@/admin/context/CMSContext";
import { EmptyState } from "@/components/EmptyState";
import { ArrowLeft, Pencil } from "lucide-react";
import type { ApplicantStatus } from "@/admin/context/types";

function ensureUrl(s: string) {
  const t = s?.trim() || "";
  if (!t) return "";
  return /^https?:\/\//i.test(t) ? t : `https://${t}`;
}

export function JobDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { state, dispatch } = useCMS();
  const job = state.jobListings.find((j) => j.id === id);

  if (!job) {
    return (
      <div className="space-y-4">
        <Button variant="ghost" size="sm" asChild>
          <Link to="/admin/jobs" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to job listings
          </Link>
        </Button>
        <p className="text-muted-foreground">Job not found.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Button variant="ghost" size="sm" asChild>
          <Link to="/admin/jobs" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to job listings
          </Link>
        </Button>
        <Button asChild>
          <Link to={`/admin/jobs/${job.id}/edit`} className="gap-2">
            <Pencil className="h-4 w-4" />
            Edit job
          </Link>
        </Button>
      </div>

      <Card className="border-border bg-card">
        <CardHeader>
          <CardTitle className="text-lg">{job.title}</CardTitle>
          <p className="text-sm text-muted-foreground">
            {job.department} · {job.type} · {job.location} · {job.status}
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-medium text-sm text-muted-foreground mb-1">Description</h3>
            <p className="text-sm whitespace-pre-wrap">{job.description || "—"}</p>
          </div>
          <div>
            <h3 className="font-medium text-sm text-muted-foreground mb-1">Requirements</h3>
            <p className="text-sm whitespace-pre-wrap">{job.requirements || "—"}</p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-border bg-card">
        <CardHeader>
          <CardTitle className="text-base">Applicants ({job.applicants.length})</CardTitle>
        </CardHeader>
        <CardContent>
          {job.applicants.length === 0 ? (
            <p className="text-sm text-muted-foreground">No applications yet.</p>
          ) : (
            <Table>
              <TableHeader>
                <TableRow className="border-border hover:bg-transparent">
                  <TableHead className="text-muted-foreground">Name</TableHead>
                  <TableHead className="text-muted-foreground">Email</TableHead>
                  <TableHead className="text-muted-foreground">Resume</TableHead>
                  <TableHead className="text-muted-foreground">Portfolio</TableHead>
                  <TableHead className="text-muted-foreground">Date applied</TableHead>
                  <TableHead className="text-muted-foreground">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {job.applicants.length === 0 ? (
                  <tr><td colSpan={6}><EmptyState title="No applicants yet" description="Applications will appear here when candidates apply." className="my-4" /></td></tr>
                ) : job.applicants.map((a) => (
                  <TableRow key={a.id} className="border-border">
                    <TableCell className="font-medium">{a.name}</TableCell>
                    <TableCell className="text-muted-foreground">
                      <a href={`mailto:${a.email}`} className="text-primary hover:underline">{a.email}</a>
                    </TableCell>
                    <TableCell className="text-muted-foreground text-sm">
                      <a href={ensureUrl(a.resumeLink)} target="_blank" rel="noreferrer" className="text-primary hover:underline">
                        Link
                      </a>
                    </TableCell>
                    <TableCell className="text-muted-foreground text-sm">
                      {a.portfolioLink ? (
                        <a href={ensureUrl(a.portfolioLink)} target="_blank" rel="noreferrer" className="text-primary hover:underline">
                          Link
                        </a>
                      ) : (
                        "—"
                      )}
                    </TableCell>
                    <TableCell className="text-muted-foreground text-sm">{a.dateApplied}</TableCell>
                    <TableCell>
                      <Select
                        value={a.status}
                        onValueChange={(v) =>
                          dispatch({
                            type: "APPLICANT_UPDATE_STATUS",
                            payload: { jobId: job.id, applicantId: a.id, status: v as ApplicantStatus },
                          })
                        }
                      >
                        <SelectTrigger className="w-[120px] h-8 rounded-md border-border">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="New">New</SelectItem>
                          <SelectItem value="Shortlisted">Shortlisted</SelectItem>
                          <SelectItem value="Interview">Interview</SelectItem>
                          <SelectItem value="Rejected">Rejected</SelectItem>
                          <SelectItem value="Accepted">Accepted</SelectItem>
                        </SelectContent>
                      </Select>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
