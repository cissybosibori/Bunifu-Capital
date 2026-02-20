import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCMS } from "@/admin/context/CMSContext";
import { useToast } from "@/hooks/use-toast";

export function SettingsPage() {
  const { state, dispatch } = useCMS();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    setEmail(state.adminProfile.email);
  }, [state.adminProfile.email]);

  const handleSave = () => {
    if (password !== confirmPassword && (password || confirmPassword)) {
      toast({ title: "Passwords do not match", variant: "destructive" });
      return;
    }
    dispatch({ type: "ADMIN_PROFILE_SAVE", payload: { email, ...(password ? { password } : {}) } });
    setPassword("");
    setConfirmPassword("");
    toast({ title: "Profile updated" });
  };

  return (
    <div className="space-y-6 max-w-xl">
      <Card className="border-border bg-card">
        <CardHeader>
          <CardTitle className="text-lg">Admin profile</CardTitle>
          <p className="text-sm text-muted-foreground">Updates are stored in memory. No authentication logic yet.</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@bunifucapital.com"
              className="rounded-md"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Change password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="New password"
              className="rounded-md"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirm">Confirm password</Label>
            <Input
              id="confirm"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm new password"
              className="rounded-md"
            />
          </div>
          <Button className="rounded-md" onClick={handleSave}>
            Save changes
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
