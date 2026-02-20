import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useCMS } from "@/admin/context/CMSContext";
import { EmptyState } from "@/components/EmptyState";
import { useToast } from "@/hooks/use-toast";
import { Download, UserPlus, Trash2 } from "lucide-react";

export function NewsletterPage() {
  const { state, dispatch } = useCMS();
  const { toast } = useToast();
  const [showAdd, setShowAdd] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleAdd = () => {
    if (!email.trim()) {
      toast({ title: "Enter an email", variant: "destructive" });
      return;
    }
    dispatch({ type: "NEWSLETTER_ADD", payload: { name: name.trim() || "Subscriber", email: email.trim() } });
    toast({ title: "Subscriber added" });
    setName("");
    setEmail("");
    setShowAdd(false);
  };

  const exportCsv = () => {
    const headers = ["Name", "Email", "Date subscribed"];
    const rows = state.newsletter.map((s) => [s.name, s.email, s.dateSubscribed]);
    const csv = [headers.join(","), ...rows.map((r) => r.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(","))].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "newsletter-subscribers.csv";
    a.click();
    URL.revokeObjectURL(url);
    toast({ title: "Export started" });
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button variant="outline" className="rounded-md w-fit" onClick={() => setShowAdd(!showAdd)}>
          <UserPlus className="h-4 w-4" />
          Manual add subscriber
        </Button>
        <Button variant="outline" className="rounded-md w-fit" onClick={exportCsv}>
          <Download className="h-4 w-4" />
          Export CSV
        </Button>
      </div>

      {showAdd && (
        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="text-base">Add subscriber</CardTitle>
            <p className="text-sm text-muted-foreground">Add a new email to the newsletter list.</p>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-4">
            <div className="space-y-2 min-w-[200px]">
              <Label>Name</Label>
              <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className="rounded-md" />
            </div>
            <div className="space-y-2 min-w-[240px]">
              <Label>Email</Label>
              <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email@example.com" className="rounded-md" />
            </div>
            <div className="flex items-end gap-2">
              <Button className="rounded-md" onClick={handleAdd}>Add</Button>
              <Button variant="outline" className="rounded-md" onClick={() => { setShowAdd(false); setName(""); setEmail(""); }}>Cancel</Button>
            </div>
          </CardContent>
        </Card>
      )}

      <Card className="border-border bg-card">
        <CardHeader>
          <CardTitle className="text-lg">Subscribers</CardTitle>
          <p className="text-sm text-muted-foreground">Newsletter list. Remove subscriber or export CSV.</p>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="border-border hover:bg-transparent">
                <TableHead className="text-muted-foreground">Name</TableHead>
                <TableHead className="text-muted-foreground">Email</TableHead>
                <TableHead className="text-muted-foreground">Date subscribed</TableHead>
                <TableHead className="w-20 text-right text-muted-foreground">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {state.newsletter.length === 0 ? (
                <tr><td colSpan={4}><EmptyState title="No newsletter subscribers yet" description="Subscribers will appear here or add manually." className="my-4" /></td></tr>
              ) : state.newsletter.map((row) => (
                <TableRow key={row.id} className="border-border">
                  <TableCell className="font-medium">{row.name}</TableCell>
                  <TableCell className="text-muted-foreground">{row.email}</TableCell>
                  <TableCell className="text-muted-foreground text-sm">{row.dateSubscribed}</TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-destructive hover:text-destructive"
                      onClick={() => {
                        dispatch({ type: "NEWSLETTER_REMOVE", payload: row.id });
                        toast({ title: "Subscriber removed" });
                      }}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card className="border-border bg-card border-dashed">
        <CardHeader>
          <CardTitle className="text-base">Campaign sending</CardTitle>
          <p className="text-sm text-muted-foreground">Campaign compose and send will be available in a future release.</p>
        </CardHeader>
      </Card>
    </div>
  );
}
