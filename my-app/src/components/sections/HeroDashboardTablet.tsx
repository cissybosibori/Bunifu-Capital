export function HeroDashboardTablet() {
  return (
    <div className="bg-white rounded-xl border border-border shadow-[0_12px_32px_rgba(0,0,0,0.12)] p-2.5 w-full max-w-[92%] mx-auto mr-2 sm:mr-3 flex flex-col">
      {/* Header */}
      <div className="mb-2 pb-2 border-b border-border shrink-0">
        <h3 className="text-sm font-semibold text-foreground">Bunifu Capital</h3>
        <p className="text-[10px] text-foreground/60 mt-0.5">Credit Score</p>
      </div>

      {/* Credit Score Display */}
      <div className="mb-2 shrink-0">
        <div className="flex items-baseline gap-1.5 mb-1.5">
          <span className="text-2xl font-bold text-accent">742</span>
          <span className="text-[10px] text-foreground/60">/ 850</span>
        </div>
        <div className="h-1.5 bg-muted rounded-full overflow-hidden mb-1">
          <div className="h-full bg-accent rounded-full" style={{ width: "87%" }} />
        </div>
        <p className="text-[9px] text-foreground/50">Good • 12 income sources</p>
      </div>

      {/* Mini Metrics */}
      <div className="grid grid-cols-2 gap-2 mb-2 shrink-0">
        <div className="bg-muted/50 rounded-md p-2">
          <p className="text-[9px] text-foreground/60 mb-0.5">Monthly</p>
          <p className="text-sm font-semibold text-foreground">$8,450</p>
        </div>
        <div className="bg-muted/50 rounded-md p-2">
          <p className="text-[9px] text-foreground/60 mb-0.5">Stability</p>
          <p className="text-sm font-semibold text-foreground">High</p>
        </div>
      </div>

      {/* Mini Pie Chart */}
      <div className="mb-2 shrink-0">
        <p className="text-[9px] font-medium text-foreground/70 mb-1.5">Top Sources</p>
        <div className="flex items-center gap-2">
          <div className="relative w-12 h-12 shrink-0">
            <svg viewBox="0 0 100 100" className="transform -rotate-90">
              <circle
                cx="50"
                cy="50"
                r="35"
                fill="none"
                stroke="hsl(var(--muted))"
                strokeWidth="15"
              />
              <circle
                cx="50"
                cy="50"
                r="35"
                fill="none"
                stroke="hsl(var(--accent))"
                strokeWidth="15"
                strokeDasharray={`${38 * 2 * Math.PI * 0.35} ${2 * Math.PI * 35}`}
              />
              <circle
                cx="50"
                cy="50"
                r="35"
                fill="none"
                stroke="rgb(65, 242, 124)"
                strokeWidth="15"
                strokeDasharray={`${25 * 2 * Math.PI * 0.35} ${2 * Math.PI * 35}`}
                strokeDashoffset={`-${38 * 2 * Math.PI * 0.35}`}
              />
              <circle
                cx="50"
                cy="50"
                r="35"
                fill="none"
                stroke="rgb(255, 198, 26)"
                strokeWidth="15"
                strokeDasharray={`${37 * 2 * Math.PI * 0.35} ${2 * Math.PI * 35}`}
                strokeDashoffset={`-${(38 + 25) * 2 * Math.PI * 0.35}`}
              />
            </svg>
          </div>
          <div className="flex-1 min-w-0 space-y-0.5">
            <div className="flex items-center gap-1">
              <div className="w-1 h-1 rounded-full bg-accent shrink-0" />
              <span className="text-[9px] text-foreground truncate">YouTube</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-1 h-1 rounded-full bg-emerald-500 shrink-0" />
              <span className="text-[9px] text-foreground truncate">Instagram</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-1 h-1 rounded-full bg-yellow-500 shrink-0" />
              <span className="text-[9px] text-foreground truncate">TikTok</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="space-y-0.5 shrink-0">
        {[
          { label: "Platforms", value: "7 active" },
          { label: "Credit Limit", value: "$25K" },
          { label: "Growth", value: "+12%" },
        ].map((stat) => (
          <div key={stat.label} className="flex justify-between items-center py-0.5 border-b border-border/20 last:border-0">
            <span className="text-[9px] text-foreground/60">{stat.label}</span>
            <span className="text-[9px] font-medium text-foreground">{stat.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
