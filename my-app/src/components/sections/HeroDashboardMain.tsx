export function HeroDashboardMain() {
  return (
    <div className="bg-white rounded-xl border border-border shadow-[0_20px_48px_rgba(0,0,0,0.12)] p-3 lg:p-4 w-full max-w-[92%] sm:max-w-[88%] mx-auto flex flex-col">
      {/* Header */}
      <div className="mb-3 pb-2.5 border-b border-border shrink-0">
        <h3 className="text-lg font-semibold text-foreground">Bunifu Capital</h3>
        <p className="text-[11px] text-foreground/60 mt-0.5">Creative Income Financial Profile</p>
      </div>

      {/* Top Metrics Row */}
      <div className="grid grid-cols-4 gap-2 mb-3 shrink-0">
        <div className="bg-muted/50 rounded-md p-2">
          <p className="text-[9px] text-foreground/60 mb-0.5">Credit Score</p>
          <p className="text-sm font-bold text-accent">742</p>
          <p className="text-[9px] text-emerald-600 mt-0.5">+15 pts</p>
        </div>
        <div className="bg-muted/50 rounded-md p-2">
          <p className="text-[9px] text-foreground/60 mb-0.5">Monthly Income</p>
          <p className="text-sm font-bold text-foreground">$8,450</p>
          <p className="text-[9px] text-emerald-600 mt-0.5">+12%</p>
        </div>
        <div className="bg-muted/50 rounded-md p-2">
          <p className="text-[9px] text-foreground/60 mb-0.5">Income Stability</p>
          <p className="text-sm font-bold text-foreground">High</p>
          <p className="text-[9px] text-foreground/50 mt-0.5">6+ months</p>
        </div>
        <div className="bg-muted/50 rounded-md p-2">
          <p className="text-[9px] text-foreground/60 mb-0.5">Credit Limit</p>
          <p className="text-sm font-bold text-emerald-600">$25K</p>
          <p className="text-[9px] text-foreground/50 mt-0.5">Eligible</p>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-2 gap-2 mb-3 shrink-0">
        {/* Pie Chart - Income Sources */}
        <div className="bg-muted/30 rounded-md p-2">
          <p className="text-[10px] font-medium text-foreground/70 mb-2">Income Distribution</p>
          <div className="flex items-center gap-2">
            {/* Pie Chart Visualization */}
            <div className="relative w-16 h-16">
              <svg viewBox="0 0 100 100" className="transform -rotate-90">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="hsl(var(--muted))"
                  strokeWidth="20"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="hsl(var(--accent))"
                  strokeWidth="20"
                  strokeDasharray={`${38 * 2 * Math.PI * 0.4} ${2 * Math.PI * 40}`}
                  strokeDashoffset="0"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="rgb(65, 242, 124)"
                  strokeWidth="20"
                  strokeDasharray={`${25 * 2 * Math.PI * 0.4} ${2 * Math.PI * 40}`}
                  strokeDashoffset={`-${38 * 2 * Math.PI * 0.4}`}
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="rgb(255, 198, 26)"
                  strokeWidth="20"
                  strokeDasharray={`${22 * 2 * Math.PI * 0.4} ${2 * Math.PI * 40}`}
                  strokeDashoffset={`-${(38 + 25) * 2 * Math.PI * 0.4}`}
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="rgb(88, 81, 219)"
                  strokeWidth="20"
                  strokeDasharray={`${15 * 2 * Math.PI * 0.4} ${2 * Math.PI * 40}`}
                  strokeDashoffset={`-${(38 + 25 + 22) * 2 * Math.PI * 0.4}`}
                />
              </svg>
            </div>
            {/* Legend */}
            <div className="flex-1 space-y-1">
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span className="text-[9px] text-foreground">YouTube (38%)</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span className="text-[9px] text-foreground">Instagram (25%)</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                <span className="text-[9px] text-foreground">TikTok (22%)</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                <span className="text-[9px] text-foreground">Other (15%)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Line Graph - Income Trend */}
        <div className="bg-muted/30 rounded-md p-2">
          <p className="text-[10px] font-medium text-foreground/70 mb-2">6-Month Income Trend</p>
          <div className="h-14 flex items-end justify-between gap-1">
            {[65, 72, 68, 85, 78, 100].map((height, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-0.5">
                <div
                  className="w-full bg-accent rounded-t transition-all"
                  style={{ height: `${height}%` }}
                />
                <span className="text-[9px] text-foreground/50">{['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'][i]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Income Sources Table */}
      <div className="min-h-0 shrink">
        <p className="text-[10px] font-medium text-foreground/70 mb-1.5">Platform Breakdown</p>
        <div className="space-y-0.5">
          {[
            { platform: "YouTube", amount: "$3,200", percentage: 38, trend: "+8%" },
            { platform: "Instagram", amount: "$2,100", percentage: 25, trend: "+12%" },
            { platform: "TikTok", amount: "$1,850", percentage: 22, trend: "+15%" },
            { platform: "Spotify", amount: "$800", percentage: 9, trend: "+5%" },
            { platform: "M-Pesa", amount: "$400", percentage: 5, trend: "+3%" },
            { platform: "Shopify", amount: "$100", percentage: 1, trend: "0%" },
          ].map((source) => (
            <div key={source.platform} className="flex items-center gap-1.5 py-1 border-b border-border/30 last:border-0">
              <div className="w-12 text-[9px] text-foreground">{source.platform}</div>
              <div className="flex-1 min-w-0">
                <div className="h-1 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-accent/60 rounded-full"
                    style={{ width: `${source.percentage}%` }}
                  />
                </div>
              </div>
              <div className="w-12 text-right">
                <span className="text-[9px] font-medium text-foreground">{source.amount}</span>
              </div>
              <div className="w-8 text-right">
                <span className="text-[9px] text-emerald-600">{source.trend}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
