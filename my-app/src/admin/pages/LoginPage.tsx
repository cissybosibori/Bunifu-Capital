import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div
      className={cn(
        "min-h-svh flex flex-col items-center justify-center p-4",
        "bg-background",
        "bg-[radial-gradient(ellipse_at_top,_hsl(var(--primary)/0.08),_transparent_50%)]",
        "bg-[radial-gradient(ellipse_at_bottom_right,_hsl(var(--rainbow-indigo)/0.06),_transparent_50%)]"
      )}
    >
      <div className="w-full max-w-[400px]">
        <div className="mb-8 flex justify-center">
          <Link to="/" className="text-2xl font-semibold tracking-tight text-[hsl(var(--rainbow-orange))]">
            Bunifu Capital
          </Link>
        </div>
        <Card className="border-border bg-card shadow-lg shadow-black/5">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-xl font-semibold tracking-tight">Admin sign in</CardTitle>
            <CardDescription className="text-muted-foreground">Enter your credentials to access the CMS.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="admin@bunifucapital.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-md"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link
                  to="#"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  Forgot password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="rounded-md"
              />
            </div>
            <Button
              type="button"
              className="w-full rounded-md"
              onClick={() => navigate("/admin")}
            >
              Sign in
            </Button>
          </CardContent>
        </Card>
        <p className="mt-6 text-center text-xs text-muted-foreground">
          CMS for Bunifu Capital. No authentication logic yet.
        </p>
      </div>
    </div>
  );
}
