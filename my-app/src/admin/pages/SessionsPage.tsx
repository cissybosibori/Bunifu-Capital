import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useCMS } from "@/admin/context/CMSContext";
import { useToast } from "@/hooks/use-toast";
import { Plus, Pencil, Trash2 } from "lucide-react";
import type { SessionStatus } from "@/admin/context/types";
import { uid } from "@/admin/context/initialState";
import { EmptyState } from "@/components/EmptyState";

function isUrl(s: string) {
  return /^https?:\/\//i.test(s?.trim() || "");
}

function ensureUrl(s: string) {
  const t = s?.trim() || "";
  if (!t) return "";
  return /^https?:\/\//i.test(t) ? t : `https://${t}`;
}

export function SessionsPage() {
  const { state, dispatch } = useCMS();
  const { toast } = useToast();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [sessionLink, setSessionLink] = useState("");
  const [status, setStatus] = useState<SessionStatus>("Draft");
  const [featuredImage, setFeaturedImage] = useState("");

  const editingSession = editingId ? state.sessions.find((s) => s.id === editingId) : null;

  useEffect(() => {
    if (editingSession) {
      setTitle(editingSession.title);
      setDescription(editingSession.description);
      setDate(editingSession.date);
      setTime(editingSession.time);
      setLocation(editingSession.location);
      setSessionLink(editingSession.sessionLink);
      setStatus(editingSession.status);
      setFeaturedImage(editingSession.featuredImage || "");
    } else if (!showForm) {
      setTitle("");
      setDescription("");
      setDate("");
      setTime("");
      setLocation("");
      setSessionLink("");
      setStatus("Draft");
      setFeaturedImage("");
    }
  }, [editingSession, showForm]);

  const resetForm = () => {
    setEditingId(null);
    setShowForm(false);
    setTitle("");
    setDescription("");
    setDate("");
    setTime("");
    setLocation("");
    setSessionLink("");
    setStatus("Draft");
    setFeaturedImage("");
  };

  const handleSave = () => {
    const id = editingId || uid();
    dispatch({
      type: "SESSION_SAVE",
      payload: {
        id,
        title,
        description,
        date,
        time,
        location,
        sessionLink: sessionLink.trim() ? ensureUrl(sessionLink) : "",
        status,
        featuredImage: featuredImage || undefined,
        updatedAt: "",
      },
    });
    toast({ title: editingId ? "Session updated" : "Session created" });
    resetForm();
  };

  const handleDelete = (id: string) => {
    dispatch({ type: "SESSION_DELETE", payload: id });
    setDeleteId(null);
    toast({ title: "Session deleted" });
  };

  const startEdit = (session: (typeof state.sessions)[0]) => {
    setEditingId(session.id);
    setShowForm(true);
    setTitle(session.title);
    setDescription(session.description);
    setDate(session.date);
    setTime(session.time);
    setLocation(session.location);
    setSessionLink(session.sessionLink);
    setStatus(session.status);
    setFeaturedImage(session.featuredImage || "");
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-end">
        <Button
          className="rounded-md"
          onClick={() => {
            setEditingId(null);
            setShowForm(true);
            setTitle("");
            setDescription("");
            setDate("");
            setTime("");
            setLocation("");
            setSessionLink("");
            setStatus("Draft");
            setFeaturedImage("");
          }}
        >
          <Plus className="h-4 w-4" />
          Create new session
        </Button>
      </div>

      <Card className="border-border bg-card">
        <CardHeader>
          <CardTitle className="text-lg">Community sessions</CardTitle>
          <p className="text-sm text-muted-foreground">Sessions appear on the public community page. When published, location and session link are clickable if they are URLs.</p>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="border-border hover:bg-transparent">
                <TableHead className="text-muted-foreground">Title</TableHead>
                <TableHead className="text-muted-foreground">Date & time</TableHead>
                <TableHead className="text-muted-foreground">Location / link</TableHead>
                <TableHead className="text-muted-foreground">Status</TableHead>
                <TableHead className="w-24 text-right text-muted-foreground">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {state.sessions.length === 0 ? (
                <tr><td colSpan={5}><EmptyState title="No sessions yet" description="Create a session to show on the community page." className="my-4" /></td></tr>
              ) : state.sessions.map((row) => (
                <TableRow key={row.id} className="border-border">
                  <TableCell className="font-medium">{row.title}</TableCell>
                  <TableCell className="text-muted-foreground text-sm">{row.date} · {row.time}</TableCell>
                  <TableCell className="text-muted-foreground text-sm">
                    {row.status === "Published" && row.sessionLink ? (
                      <a href={row.sessionLink} target="_blank" rel="noreferrer" className="text-primary hover:underline">
                        {row.location || "Join session"}
                      </a>
                    ) : row.status === "Published" && isUrl(row.location) ? (
                      <a href={ensureUrl(row.location)} target="_blank" rel="noreferrer" className="text-primary hover:underline">
                        {row.location}
                      </a>
                    ) : (
                      row.location || "—"
                    )}
                  </TableCell>
                  <TableCell>
                    <Badge variant={row.status === "Published" ? "default" : "secondary"} className="rounded-full">
                      {row.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-1">
                      <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => startEdit(row)}>
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive hover:text-destructive" onClick={() => setDeleteId(row.id)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {(showForm || editingId) && (
        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="text-base">{editingId ? "Edit session" : "New session"}</CardTitle>
            <p className="text-sm text-muted-foreground">Editing a published session sets it back to Draft until you re-publish.</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label>Title</Label>
                <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Session title" className="rounded-md" />
              </div>
              <div className="space-y-2">
                <Label>Status</Label>
                <Select value={status} onValueChange={(v) => setStatus(v as SessionStatus)}>
                  <SelectTrigger className="rounded-md"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Draft">Draft</SelectItem>
                    <SelectItem value="In Review">In Review</SelectItem>
                    <SelectItem value="Published">Published</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label>Description</Label>
              <Textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Session description" rows={3} className="rounded-md resize-none" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label>Date</Label>
                <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="rounded-md" />
              </div>
              <div className="space-y-2">
                <Label>Time</Label>
                <Input type="time" value={time} onChange={(e) => setTime(e.target.value)} placeholder="14:00" className="rounded-md" />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Location (text or URL)</Label>
              <Input value={location} onChange={(e) => setLocation(e.target.value)} placeholder="e.g. Zoom or https://zoom.us/j/..." className="rounded-md" />
            </div>
            <div className="space-y-2">
              <Label>Session link (URL)</Label>
              <Input value={sessionLink} onChange={(e) => setSessionLink(e.target.value)} placeholder="https://..." className="rounded-md" />
            </div>
            <div className="space-y-2">
              <Label>Featured image URL</Label>
              <Input value={featuredImage} onChange={(e) => setFeaturedImage(e.target.value)} placeholder="https://..." className="rounded-md" />
            </div>
            <div className="flex gap-2">
              <Button className="rounded-md" onClick={handleSave}>Save session</Button>
              <Button variant="outline" className="rounded-md" onClick={resetForm}>Cancel</Button>
            </div>
          </CardContent>
        </Card>
      )}

      <AlertDialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete session?</AlertDialogTitle>
            <AlertDialogDescription>This cannot be undone.</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90" onClick={() => deleteId && handleDelete(deleteId)}>
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
