"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface DataItem {
  date: string;
  cashIn: number;
  cashOut: number;
}

const data: DataItem[] = [
  { date: "2023-04-01", cashIn: 1926, cashOut: 1450 },
  { date: "2023-04-02", cashIn: 2994, cashOut: 2235 },
  { date: "2023-04-03", cashIn: 5000, cashOut: 3668 },
  { date: "2023-04-04", cashIn: 8000, cashOut: 4959 },
  { date: "2023-04-05", cashIn: 12000, cashOut: 6277 },
  { date: "2023-04-06", cashIn: 11000, cashOut: 6876 },
  { date: "2023-04-07", cashIn: 4000, cashOut: 7410 },
  { date: "2023-04-08", cashIn: 7000, cashOut: 8624 },
  { date: "2023-04-09", cashIn: 12000, cashOut: 9890 },
  { date: "2023-04-10", cashIn: 16000, cashOut: 10955 },
  { date: "2023-04-11", cashIn: 17000, cashOut: 11712 },
  { date: "2023-04-12", cashIn: 18000, cashOut: 12811 },
];

export default function Charts() {
  return (
    <div className="flex items-center bg-slate-950 h-screen flex-col justify-center gap-4">
      <div className="w-full max-w-lg h-60 border border-slate-700 p-4 m-2 rounded-md">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#334155"
              vertical={false}
            />

            <Area
              dataKey="cashIn"
              type="monotone"
              stroke="#06b6d4"
              fill="url(#cyan-gradient)"
            />

            <Area
              dataKey="cashOut"
              type="monotone"
              stroke="#ef4444"
              fill="url(#red-gradient)"
            />

            <XAxis
              dataKey="date"
              stroke="#64748b"
              //Trait du repère pour le chart
              tickLine={false}
              axisLine={false}
              interval={3}
              fontSize={12}
              //Format de la date
              tickFormatter={(value: string) => {
                //format like 22/04
                return value.split("-").reverse().splice(0, 2).join("/");
              }}
            />

            <YAxis
              dataKey={"cashIn"}
              stroke="#64748b"
              tickLine={false}
              axisLine={false}
              interval={1}
              fontSize={12}
              tickFormatter={(value) => {
                return `$${Intl.NumberFormat("en-US").format(value)}`;
              }}
            />

            <Tooltip
              cursor={{
                fill: "#06b6d4",
                radius: 4,
                stroke: "#64748b",
              }}
              content={({ active, payload }) => {
                if (!active || !payload || payload.length === 0) {
                  return null;
                }
                return (
                  <div className="text-white rounded-lg border bg-slate-800 border-slate-700 p-2 shadow-sm">
                    <div className="grid grid-cols-3 gap-2">
                      <div className="flex flex-col">
                        <span className="text-xs uppercase text-slate-500">
                          Date
                        </span>
                        <span className="text-sm uppercase font-bold text-slate-300">
                          {payload[0].payload.date}
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs uppercase text-slate-500">
                          Cash In
                        </span>
                        <span className="text-sm uppercase font-bold text-slate-300">
                          $
                          {Intl.NumberFormat("en-US").format(
                            payload[0].payload.cashIn
                          )}
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs uppercase text-slate-500">
                          Cash Out
                        </span>
                        <span className="text-sm uppercase font-bold text-slate-300">
                          $
                          {Intl.NumberFormat("en-US").format(
                            payload[0].payload.cashOut
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              }}
            />

            <defs>
              <linearGradient id="cyan-gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity={0.4} />
                <stop offset="75%" stopColor="#8b5cf6" stopOpacity={0.05} />
              </linearGradient>
              <linearGradient id="red-gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ef4444" stopOpacity={0.4} />
                <stop offset="75%" stopColor="#fbbf24" stopOpacity={0.05} />
              </linearGradient>
            </defs>
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
