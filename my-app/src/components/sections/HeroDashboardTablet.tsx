export function HeroDashboardTablet() {
  return (
    <div className="bg-white rounded-xl border border-border shadow-[0_16px_44px_rgba(0,0,0,0.14)] p-4">
      {/* Header */}
      <div className="mb-4 pb-3 border-b border-border">
        <h3 className="text-lg font-semibold text-foreground">Bunifu Capital</h3>
        <p className="text-xs text-foreground/60 mt-0.5">Credit Score</p>
      </div>

      {/* Credit Score Display */}
      <div className="mb-5">
        <div className="flex items-baseline gap-2 mb-3">
          <span className="text-4xl font-bold text-accent">742</span>
          <span className="text-sm text-foreground/60">/ 850</span>
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden mb-2">
          <div className="h-full bg-accent rounded-full" style={{ width: "87%" }} />
        </div>
        <p className="text-xs text-foreground/50">Good • 12 income sources</p>
      </div>

      {/* Mini Metrics */}
      <div className="grid grid-cols-2 gap-3 mb-5">
        <div className="bg-muted/50 rounded-lg p-2.5">
          <p className="text-[10px] text-foreground/60 mb-0.5">Monthly</p>
          <p className="text-base font-semibold text-foreground">$8,450</p>
        </div>
        <div className="bg-muted/50 rounded-lg p-2.5">
          <p className="text-[10px] text-foreground/60 mb-0.5">Stability</p>
          <p className="text-base font-semibold text-foreground">High</p>
        </div>
      </div>

      {/* Mini Pie Chart */}
      <div className="mb-3">
        <p className="text-[10px] font-medium text-foreground/70 mb-2">Top Sources</p>
        <div className="flex items-center gap-3">
          <div className="relative w-16 h-16">
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
          <div className="flex-1 space-y-1">
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-[10px] text-foreground">YouTube</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span className="text-[10px] text-foreground">Instagram</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
              <span className="text-[10px] text-foreground">TikTok</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="space-y-1.5">
        {[
          { label: "Platforms", value: "7 active" },
          { label: "Credit Limit", value: "$25K" },
          { label: "Growth", value: "+12%" },
        ].map((stat) => (
          <div key={stat.label} className="flex justify-between items-center py-1 border-b border-border/20 last:border-0">
            <span className="text-[10px] text-foreground/60">{stat.label}</span>
            <span className="text-[10px] font-medium text-foreground">{stat.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
