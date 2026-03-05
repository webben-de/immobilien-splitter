import { Calculator, Clock, Info, TrendingUp } from "lucide-react";
import { useMemo, useState } from "react";

const formatCurrency = (val: number) =>
  new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(val);

export default function App() {
  // --- DYNAMISCHE EINGANGSWERTE ---
  const [purchasePrice, setPurchasePrice] = useState(215000);
  const [equityM, setEquityM] = useState(50000);
  const [equityK, setEquityK] = useState(50000);
  const [monthlyRepayment, setMonthlyRepayment] = useState(1000);
  const [yearsPassed, setYearsPassed] = useState(4);

  // --- DYNAMISCHE MARKTWERTE & KOSTEN ---
  const [marketValue, setMarketValue] = useState(215000);
  const [agentRate, setAgentRate] = useState(3.57);
  const [notaryRate, setNotaryRate] = useState(1.5);
  const [prepaymentPenalty, setPrepaymentPenalty] = useState(5000);

  // --- BERECHNUNGSLOGIK ---
  const stats = useMemo(() => {
    const totalEquityStart = equityM + equityK;
    const initialLoan = Math.max(0, purchasePrice - totalEquityStart);
    const totalRepaid = monthlyRepayment * 12 * yearsPassed;
    const estimatedDebt = Math.max(0, initialLoan - totalRepaid);

    const agentCosts = (marketValue * agentRate) / 100;
    const notaryCosts = (marketValue * notaryRate) / 100;
    const totalDeductions = agentCosts + notaryCosts + prepaymentPenalty;

    const netAssets = marketValue - estimatedDebt - totalDeductions;
    const totalProfit = netAssets - totalEquityStart;

    const payoutM = equityM + totalProfit / 2;
    const payoutK = equityK + totalProfit / 2;

    return {
      estimatedDebt,
      agentCosts,
      notaryCosts,
      totalDeductions,
      netAssets,
      totalProfit,
      payoutM,
      payoutK,
    };
  }, [
    purchasePrice,
    equityM,
    equityK,
    monthlyRepayment,
    yearsPassed,
    marketValue,
    agentRate,
    notaryRate,
    prepaymentPenalty,
  ]);

  return (
    <div className="min-h-screen bg-slate-50 p-4 font-sans text-slate-900 md:p-8">
      <div className="mx-auto max-w-6xl space-y-6">
        {/* Header */}
        <header className="rounded-3xl border border-slate-100 bg-white p-6 text-center shadow-sm md:text-left">
          <h1 className="text-2xl font-bold text-slate-800">
            Interaktiver Plan: Immobilien-Auseinandersetzung
          </h1>
          <p className="text-slate-500">Alle Parameter sind dynamisch anpassbar.</p>
        </header>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Linke Spalte: Konfiguration (8/12) */}
          <div className="space-y-6 lg:col-span-8">
            {/* Sektion 1: Kauf & Finanzierung */}
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

            {/* Sektion 2: Aktuelle Situation & Verkauf */}
            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md">
              <div className="mb-6 flex items-center gap-2 border-b pb-4 text-orange-600">
                <TrendingUp size={20} />
                <h2 className="text-lg font-bold">2. Aktuelle Situation & Verkauf</h2>
              </div>

              <div className="space-y-8">
                {/* Marktwert */}
                <div className="space-y-4 rounded-2xl border border-orange-100 bg-orange-50 p-4">
                  <div className="flex items-end justify-between">
                    <label htmlFor="marketValue" className="text-sm font-bold text-orange-800">Heutiger Marktwert</label>
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
                      {formatCurrency(stats.agentCosts)}
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
                      {formatCurrency(stats.notaryCosts)}
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
          </div>

          {/* Rechte Spalte: Fazit (4/12) */}
          <div className="space-y-6 lg:col-span-4">
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
          </div>
        </div>

        {/* Footer */}
        <footer className="mx-auto max-w-2xl space-y-2 p-8 text-center text-xs text-slate-400">
          <p>
            Diese Simulation dient als grobe Orientierungshilfe. Die reale Restschuld weicht je
            nach Zinssatz der Finanzierung leicht ab (hier wird eine reine Tilgungsverrechnung
            angenommen).
          </p>
          <p>&copy; 2024 – Plan zur Gütertrennung & Immobilienauseinandersetzung</p>
        </footer>
      </div>
    </div>
  );
}
