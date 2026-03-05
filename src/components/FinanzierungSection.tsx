import { Clock } from "lucide-react";
import { formatCurrency } from "../utils/formatCurrency";

interface FinanzierungSectionProps {
  purchasePrice: number;
  setPurchasePrice: (v: number) => void;
  equityM: number;
  setEquityM: (v: number) => void;
  equityK: number;
  setEquityK: (v: number) => void;
  monthlyRepayment: number;
  setMonthlyRepayment: (v: number) => void;
  yearsPassed: number;
  setYearsPassed: (v: number) => void;
}

export function FinanzierungSection({
  purchasePrice, setPurchasePrice,
  equityM, setEquityM,
  equityK, setEquityK,
  monthlyRepayment, setMonthlyRepayment,
  yearsPassed, setYearsPassed,
}: FinanzierungSectionProps) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md">
      <div className="mb-6 flex items-center gap-2 border-b pb-4 text-blue-600">
        <Clock size={20} />
        <h2 className="text-lg font-bold">1. Kauf & Finanzierung</h2>
      </div>

      <div className="grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2">
        {/* Kaufpreis */}
        <div className="space-y-4">
          <div className="flex justify-between">
            <label htmlFor="purchasePrice" className="text-sm font-semibold uppercase tracking-tighter text-slate-600">
              Kaufpreis damals
            </label>
            <span className="font-bold text-blue-600">{formatCurrency(purchasePrice)}</span>
          </div>
          <input
            id="purchasePrice"
            type="range"
            min={50000}
            max={1000000}
            step={5000}
            value={purchasePrice}
            onChange={(e) => setPurchasePrice(Number(e.target.value))}
            className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-blue-600"
          />
        </div>

        {/* Monatliche Tilgung */}
        <div className="space-y-4">
          <div className="flex justify-between">
            <label htmlFor="monthlyRepayment" className="text-sm font-semibold uppercase tracking-tighter text-slate-600">
              Monatl. Tilgung
            </label>
            <span className="font-bold text-blue-600">
              {formatCurrency(monthlyRepayment)}
            </span>
          </div>
          <input
            id="monthlyRepayment"
            type="range"
            min={0}
            max={5000}
            step={50}
            value={monthlyRepayment}
            onChange={(e) => setMonthlyRepayment(Number(e.target.value))}
            className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-blue-600"
          />
        </div>

        {/* Eigenkapital M */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <label htmlFor="equityM" className="text-sm font-semibold uppercase tracking-tighter text-emerald-600">
              EK Partner M
            </label>
            <input
              id="equityM"
              type="number"
              min={0}
              max={250000}
              step={1000}
              value={equityM}
              onChange={(e) => setEquityM(Math.max(0, Number(e.target.value)))}
              className="w-32 rounded-lg border border-emerald-200 px-2 py-1 text-right text-sm font-bold text-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </div>
          <input
            aria-label="EK Partner M Slider"
            type="range"
            min={0}
            max={250000}
            step={1000}
            value={equityM}
            onChange={(e) => setEquityM(Number(e.target.value))}
            className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-emerald-100 accent-emerald-500"
          />
        </div>

        {/* Eigenkapital K */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <label htmlFor="equityK" className="text-sm font-semibold uppercase tracking-tighter text-indigo-600">
              EK Partner K
            </label>
            <input
              id="equityK"
              type="number"
              min={0}
              max={250000}
              step={1000}
              value={equityK}
              onChange={(e) => setEquityK(Math.max(0, Number(e.target.value)))}
              className="w-32 rounded-lg border border-indigo-200 px-2 py-1 text-right text-sm font-bold text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <input
            aria-label="EK Partner K Slider"
            type="range"
            min={0}
            max={250000}
            step={1000}
            value={equityK}
            onChange={(e) => setEquityK(Number(e.target.value))}
            className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-indigo-100 accent-indigo-500"
          />
        </div>

        {/* Haltedauer */}
        <div className="space-y-4 md:col-span-2">
          <div className="flex justify-between">
            <label htmlFor="yearsPassed" className="text-sm font-semibold uppercase tracking-tighter text-slate-600">
              Dauer der Tilgung (Jahre)
            </label>
            <span className="font-bold text-blue-600">{yearsPassed} Jahre</span>
          </div>
          <input
            id="yearsPassed"
            type="range"
            min={1}
            max={30}
            step={1}
            value={yearsPassed}
            onChange={(e) => setYearsPassed(Number(e.target.value))}
            className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-blue-600"
          />
        </div>
      </div>
    </section>
  );
}
