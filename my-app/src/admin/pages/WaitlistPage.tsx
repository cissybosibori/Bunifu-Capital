import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useCMS } from "@/admin/context/CMSContext";
import { EmptyState } from "@/components/EmptyState";
import { Search, Download } from "lucide-react";
import type { WaitlistStatus } from "@/admin/context/types";

export function WaitlistPage() {
  const { state, dispatch } = useCMS();
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");

  const filtered = state.waitlist.filter((e) => {
    const matchSearch = !search || e.name.toLowerCase().includes(search.toLowerCase()) || e.email.toLowerCase().includes(search.toLowerCase());
    const matchType = typeFilter === "all" || e.type === typeFilter;
    return matchSearch && matchType;
  });

  const exportCsv = () => {
    const headers = ["Name", "Email", "Type", "Challenges", "Date joined", "Status"];
    const rows = state.waitlist.map((e) => [e.name, e.email, e.type, e.challenges, e.dateJoined, e.status]);
    const csv = [headers.join(","), ...rows.map((r) => r.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(","))].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "waitlist-export.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-1 items-center gap-2">
          <div className="relative max-w-sm flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9 rounded-md" />
          </div>
          <Select value={typeFilter} onValueChange={setTypeFilter}>
            <SelectTrigger className="w-[180px] rounded-md">
              <SelectValue placeholder="Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="Creative">Creative</SelectItem>
              <SelectItem value="Financial Institution">Institution</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button variant="outline" className="rounded-md" onClick={exportCsv}>
          <Download className="h-4 w-4" />
          Export CSV
        </Button>
      </div>
      <Card className="border-border bg-card">
        <CardHeader>
          <CardTitle className="text-lg">Waitlist entries</CardTitle>
          <p className="text-sm text-muted-foreground">Change status to update notification count.</p>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="border-border hover:bg-transparent">
                <TableHead className="text-muted-foreground">Name</TableHead>
                <TableHead className="text-muted-foreground">Email</TableHead>
                <TableHead className="text-muted-foreground">Type</TableHead>
                <TableHead className="text-muted-foreground">Challenges</TableHead>
                <TableHead className="text-muted-foreground">Date joined</TableHead>
                <TableHead className="text-muted-foreground">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.length === 0 ? (
                <tr><td colSpan={6}><EmptyState title="No waitlist entries yet" description="Entries will appear here when users sign up." className="my-4" /></td></tr>
              ) : filtered.map((row) => (
                <TableRow key={row.id} className="border-border hover:bg-muted/50">
                  <TableCell className="font-medium">{row.name}</TableCell>
                  <TableCell className="text-muted-foreground">{row.email}</TableCell>
                  <TableCell>{row.type}</TableCell>
                  <TableCell className="text-muted-foreground text-sm max-w-[200px] truncate">{row.challenges}</TableCell>
                  <TableCell className="text-muted-foreground text-sm">{row.dateJoined}</TableCell>
                  <TableCell>
                    <Select
                      value={row.status}
                      onValueChange={(v) => dispatch({ type: "WAITLIST_UPDATE_STATUS", payload: { id: row.id, status: v as WaitlistStatus } })}
                    >
                      <SelectTrigger className="w-[130px] h-8 rounded-md border-border">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="New">New</SelectItem>
                        <SelectItem value="Reviewed">Reviewed</SelectItem>
                        <SelectItem value="Contacted">Contacted</SelectItem>
                        <SelectItem value="Converted">Converted</SelectItem>
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
