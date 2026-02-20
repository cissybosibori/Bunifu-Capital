import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useCMS } from "@/admin/context/CMSContext";
import { EmptyState } from "@/components/EmptyState";
import { Download } from "lucide-react";
import type { TalentPoolTag } from "@/admin/context/types";

function ensureUrl(s: string) {
  const t = s?.trim() || "";
  if (!t) return "";
  return /^https?:\/\//i.test(t) ? t : `https://${t}`;
}

const TAG_OPTIONS: { value: TalentPoolTag; label: string }[] = [
  { value: null, label: "—" },
  { value: "Strong fit", label: "Strong fit" },
  { value: "Future fit", label: "Future fit" },
  { value: "Not suitable", label: "Not suitable" },
];

export function TalentPoolPage() {
  const { state, dispatch } = useCMS();
  const [roleFilter, setRoleFilter] = useState("all");

  const filtered = state.talentPool.filter((c) => roleFilter === "all" || c.roleInterest.toLowerCase().includes(roleFilter.toLowerCase()));

  const exportCsv = () => {
    const headers = ["Name", "Email", "Role interest", "LinkedIn", "GitHub", "Portfolio", "Date", "Tag"];
    const rows = state.talentPool.map((t) => [t.name, t.email, t.roleInterest, t.linkedin, t.github, t.portfolio, t.dateSubmitted, t.tag || ""]);
    const csv = [headers.join(","), ...rows.map((r) => r.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(","))].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "talent-pool.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <Input
            placeholder="Filter by role interest"
            value={roleFilter === "all" ? "" : roleFilter}
            onChange={(e) => setRoleFilter(e.target.value || "all")}
            className="max-w-xs rounded-md"
          />
          <Button variant="outline" size="sm" className="rounded-md" onClick={() => setRoleFilter("all")}>
            Clear
          </Button>
        </div>
        <Button variant="outline" className="rounded-md" onClick={exportCsv}>
          <Download className="h-4 w-4" />
          Export CSV
        </Button>
      </div>

      <Card className="border-border bg-card">
        <CardHeader>
          <CardTitle className="text-lg">Talent pool</CardTitle>
          <p className="text-sm text-muted-foreground">Candidates who joined without an open role. Optional internal tag per candidate.</p>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="border-border hover:bg-transparent">
                <TableHead className="text-muted-foreground">Name</TableHead>
                <TableHead className="text-muted-foreground">Email</TableHead>
                <TableHead className="text-muted-foreground">Role interest</TableHead>
                <TableHead className="text-muted-foreground">LinkedIn</TableHead>
                <TableHead className="text-muted-foreground">GitHub</TableHead>
                <TableHead className="text-muted-foreground">Portfolio</TableHead>
                <TableHead className="text-muted-foreground">Date submitted</TableHead>
                <TableHead className="text-muted-foreground">Tag</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.length === 0 ? (
                <tr><td colSpan={8}><EmptyState title="No talent pool entries yet" description="Applicants and expressions of interest will appear here." className="my-4" /></td></tr>
              ) : filtered.map((row) => (
                <TableRow key={row.id} className="border-border hover:bg-muted/50">
                  <TableCell className="font-medium">{row.name}</TableCell>
                  <TableCell className="text-muted-foreground">{row.email}</TableCell>
                  <TableCell>{row.roleInterest}</TableCell>
                  <TableCell className="text-muted-foreground text-sm">
                    <a href={ensureUrl(row.linkedin)} target="_blank" rel="noreferrer" className="text-primary hover:underline">
                      Link
                    </a>
                  </TableCell>
                  <TableCell className="text-muted-foreground text-sm">
                    {row.github ? (
                      <a href={ensureUrl(row.github)} target="_blank" rel="noreferrer" className="text-primary hover:underline">
                        Link
                      </a>
                    ) : (
                      "—"
                    )}
                  </TableCell>
                  <TableCell className="text-muted-foreground text-sm">
                    <a href={ensureUrl(row.portfolio)} target="_blank" rel="noreferrer" className="text-primary hover:underline">
                      Link
                    </a>
                  </TableCell>
                  <TableCell className="text-muted-foreground text-sm">{row.dateSubmitted}</TableCell>
                  <TableCell>
                    <Select
                      value={row.tag ?? "none"}
                      onValueChange={(v) => dispatch({ type: "TALENT_POOL_UPDATE_TAG", payload: { id: row.id, tag: v === "none" ? null : (v as TalentPoolTag) } })}
                    >
                      <SelectTrigger className="w-[120px] h-8 rounded-md border-border">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {TAG_OPTIONS.map((o) => (
                          <SelectItem key={o.label} value={o.value ?? "none"}>
                            {o.label}
                          </SelectItem>
                        ))}
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
