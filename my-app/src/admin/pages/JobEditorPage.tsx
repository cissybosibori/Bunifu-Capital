import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { useCMS } from "@/admin/context/CMSContext";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft } from "lucide-react";
import type { JobStatus } from "@/admin/context/types";
import { uid } from "@/admin/context/initialState";

export function JobEditorPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { state, dispatch } = useCMS();
  const { toast } = useToast();
  const isNewJob = !id || id === "new";

  const existing = id && id !== "new" ? state.jobListings.find((j) => j.id === id) : null;

  const [title, setTitle] = useState("");
  const [department, setDepartment] = useState("");
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [requirements, setRequirements] = useState("");
  const [published, setPublished] = useState(true);

  useEffect(() => {
    if (existing) {
      setTitle(existing.title);
      setDepartment(existing.department);
      setType(existing.type);
      setLocation(existing.location);
      setDescription(existing.description);
      setRequirements(existing.requirements);
      setPublished(existing.status === "Open");
    } else if (!isNewJob) {
      setTitle("");
      setDepartment("");
      setType("");
      setLocation("");
      setDescription("");
      setRequirements("");
      setPublished(true);
    }
  }, [existing, isNewJob]);

  const handleSave = () => {
    const jobId = isNewJob ? uid() : id!;
    const status: JobStatus = published ? "Open" : "Draft";
    dispatch({
      type: "JOB_SAVE",
      payload: {
        id: jobId,
        title,
        department,
        type,
        location,
        description,
        requirements,
        status,
        applicants: existing?.applicants ?? [],
        updatedAt: "",
      },
    });
    toast({ title: isNewJob ? "Job created" : "Job updated" });
    navigate(isNewJob ? `/admin/jobs/${jobId}` : "/admin/jobs");
  };

  return (
    <div className="space-y-6 max-w-3xl">
      <Button variant="ghost" size="sm" asChild>
        <Link to="/admin/jobs" className="gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to job listings
        </Link>
      </Button>

      <Card className="border-border bg-card">
        <CardHeader>
          <CardTitle className="text-lg">{isNewJob ? "New job" : "Edit job"}</CardTitle>
          <p className="text-sm text-muted-foreground">Draft = not visible publicly. Open = visible on careers page.</p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Job title" className="rounded-md" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="department">Department</Label>
              <Input id="department" value={department} onChange={(e) => setDepartment(e.target.value)} placeholder="e.g. Engineering" className="rounded-md" />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="type">Type</Label>
              <Input id="type" value={type} onChange={(e) => setType(e.target.value)} placeholder="Full-time, Contract" className="rounded-md" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input id="location" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Remote or city" className="rounded-md" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Role description" rows={6} className="rounded-md resize-none" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="requirements">Requirements</Label>
            <Textarea id="requirements" value={requirements} onChange={(e) => setRequirements(e.target.value)} placeholder="Requirements list" rows={4} className="rounded-md resize-none" />
          </div>
          <div className="flex items-center justify-between rounded-lg border border-border p-4">
            <div>
              <p className="font-medium">Publish (Open)</p>
              <p className="text-sm text-muted-foreground">Show this role on the careers page. Off = Draft.</p>
            </div>
            <Switch checked={published} onCheckedChange={setPublished} />
          </div>
          <div className="flex gap-2">
            <Button className="rounded-md" onClick={handleSave}>Save job</Button>
            <Button variant="outline" className="rounded-md" onClick={() => navigate("/admin/jobs")}>Cancel</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
