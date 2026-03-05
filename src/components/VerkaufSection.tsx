import { TrendingUp } from "lucide-react";
import { formatCurrency } from "../utils/formatCurrency";

interface VerkaufSectionProps {
  marketValue: number;
  setMarketValue: (v: number) => void;
  agentRate: number;
  setAgentRate: (v: number) => void;
  notaryRate: number;
  setNotaryRate: (v: number) => void;
  prepaymentPenalty: number;
  setPrepaymentPenalty: (v: number) => void;
  agentCosts: number;
  notaryCosts: number;
}

export function VerkaufSection({
  marketValue, setMarketValue,
  agentRate, setAgentRate,
  notaryRate, setNotaryRate,
  prepaymentPenalty, setPrepaymentPenalty,
  agentCosts,
  notaryCosts,
}: VerkaufSectionProps) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md">
      <div className="mb-6 flex items-center gap-2 border-b pb-4 text-orange-600">
        <TrendingUp size={20} />
        <h2 className="text-lg font-bold">2. Aktuelle Situation & Verkauf</h2>
      </div>

      <div className="space-y-8">
        {/* Marktwert */}
        <div className="space-y-4 rounded-2xl border border-orange-100 bg-orange-50 p-4">
          <div className="flex items-end justify-between">
            <label htmlFor="marketValue" className="text-sm font-bold text-orange-800">
              Heutiger Marktwert
            </label>
            <span className="text-2xl font-black text-orange-600">
              {formatCurrency(marketValue)}
            </span>
          </div>
          <input
            id="marketValue"
            type="range"
            min={50000}
            max={1500000}
            step={5000}
            value={marketValue}
            onChange={(e) => setMarketValue(Number(e.target.value))}
            className="h-3 w-full cursor-pointer appearance-none rounded-lg bg-orange-200 accent-orange-600"
          />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Makler */}
          <div className="space-y-3">
            <label htmlFor="agentRate" className="text-xs font-bold uppercase text-slate-500">
              Makler ({agentRate}%)
            </label>
            <input
              id="agentRate"
              type="range"
              min={0}
              max={7.14}
              step={0.01}
              value={agentRate}
              onChange={(e) => setAgentRate(Number(e.target.value))}
              className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-100 accent-slate-400"
            />
            <p className="text-xs font-semibold text-slate-700">
              {formatCurrency(agentCosts)}
            </p>
          </div>

          {/* Notar */}
          <div className="space-y-3">
            <label htmlFor="notaryRate" className="text-xs font-bold uppercase text-slate-500">
              Notar ({notaryRate}%)
            </label>
            <input
              id="notaryRate"
              type="range"
              min={0}
              max={3}
              step={0.1}
              value={notaryRate}
              onChange={(e) => setNotaryRate(Number(e.target.value))}
              className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-100 accent-slate-400"
            />
            <p className="text-xs font-semibold text-slate-700">
              {formatCurrency(notaryCosts)}
            </p>
          </div>

          {/* Vorfälligkeit */}
          <div className="space-y-3">
            <label htmlFor="prepaymentPenalty" className="text-xs font-bold uppercase text-amber-600">
              Vorfälligkeit (Bank)
            </label>
            <input
              id="prepaymentPenalty"
              type="range"
              min={0}
              max={30000}
              step={500}
              value={prepaymentPenalty}
              onChange={(e) => setPrepaymentPenalty(Number(e.target.value))}
              className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-amber-100 accent-amber-500"
            />
            <p className="text-xs font-semibold text-amber-700">
              {formatCurrency(prepaymentPenalty)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
