import { NavLink as RouterNavLink, type NavLinkProps } from "react-router-dom";

import { cn } from "@/lib/utils";

export function NavLink({ className, ...props }: NavLinkProps) {
  return (
    <RouterNavLink
      {...props}
      className={(nav) =>
        cn(
          "inline-flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors",
          nav.isActive && "text-foreground",
          typeof className === "function" ? className(nav) : className,
        )
      }
    />
  );
}
