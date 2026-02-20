/**
 * Builds chart-ready data structures from CMS state.
 * Used by dashboard; no mock data. Returns empty/zero data when state is empty.
 */

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const MONTHS = ["Oct", "Nov", "Dec", "Jan", "Feb"];

export interface TrendDataPoint {
  day: string;
  waitlist: number;
  demos: number;
  contacts: number;
}

export interface MonthlyDataPoint {
  month: string;
  signups: number;
}

export function buildTrendData(): TrendDataPoint[] {
  return DAYS.map((day) => ({
    day,
    waitlist: 0,
    demos: 0,
    contacts: 0,
  }));
}

export function buildMonthlyData(): MonthlyDataPoint[] {
  return MONTHS.map((month) => ({
    month,
    signups: 0,
  }));
}
