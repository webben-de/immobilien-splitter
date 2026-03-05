import { Calculator, Info } from "lucide-react";
import type { CalculatorStats } from "../hooks/useCalculator";
import { formatCurrency } from "../utils/formatCurrency";

interface ErgebnisPanelProps {
  stats: CalculatorStats;
  equityM: number;
  equityK: number;
}

export function ErgebnisPanel({ stats, equityM, equityK }: ErgebnisPanelProps) {
  return (
    <div className="relative sticky top-8 overflow-hidden rounded-3xl bg-slate-800 p-6 text-white shadow-xl">
      <div className="absolute right-0 top-0 p-4 opacity-10">
        <Calculator size={80} />
      </div>

      <h3 className="mb-6 border-b border-slate-700 pb-2 text-xs font-bold uppercase tracking-widest text-slate-400">
        Endergebnis
      </h3>

      <div className="space-y-8">
        {/* Payout M */}
        <div className="rounded-2xl border border-emerald-500/30 bg-emerald-900/30 p-4">
          <p className="mb-1 text-xs font-bold uppercase text-emerald-400">
            Auszahlung Partner M
          </p>
          <div className="text-3xl font-black text-white">
            {formatCurrency(stats.payoutM)}
          </div>
          <p className="mt-1 text-[10px] text-emerald-400/70">
            Basis: {formatCurrency(equityM)} EK + 50% Gewinn
          </p>
        </div>

        {/* Payout K */}
        <div className="rounded-2xl border border-indigo-500/30 bg-indigo-900/30 p-4">
          <p className="mb-1 text-xs font-bold uppercase text-indigo-400">
            Auszahlung Partner K
          </p>
          <div className="text-3xl font-black text-white">
            {formatCurrency(stats.payoutK)}
          </div>
          <p className="mt-1 text-[10px] text-indigo-400/70">
            Basis: {formatCurrency(equityK)} EK + 50% Gewinn
          </p>
        </div>

        {/* Details */}
        <div className="space-y-3 border-t border-slate-700 pt-4 text-xs">
          <div className="flex justify-between">
            <span className="text-slate-400">Verbl. Restschuld:</span>
            <span className="font-bold text-rose-400">
              {formatCurrency(stats.estimatedDebt)}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Gesamte Nebenkosten:</span>
            <span className="font-bold text-rose-400">
              {formatCurrency(stats.totalDeductions)}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Netto-Masse:</span>
            <span className="font-bold text-white">{formatCurrency(stats.netAssets)}</span>
          </div>
          <div className="flex justify-between border-t border-slate-700 pt-2">
            <span className="text-slate-400">Gesamtgewinn/-verlust:</span>
            <span
              className={`font-bold ${stats.totalProfit >= 0 ? "text-emerald-400" : "text-rose-400"}`}
            >
              {formatCurrency(stats.totalProfit)}
            </span>
          </div>
        </div>

        <div className="rounded-xl bg-blue-900/20 p-4">
          <div className="mb-2 flex items-center gap-2 text-[10px] font-bold text-blue-300">
            <Info size={14} />
            LOGIK DER VERTEILUNG
          </div>
          <p className="text-[10px] leading-normal text-slate-300">
            Die App berechnet zuerst das Reinvermögen (Marktwert minus Schulden und
            Kosten). Vom Rest bekommt jeder zuerst sein eingebrachtes Eigenkapital zurück.
            Ein danach verbleibender Überschuss (Gewinn) wird zu gleichen Teilen aufgeteilt.
          </p>
        </div>
      </div>
    </div>
  );
}
