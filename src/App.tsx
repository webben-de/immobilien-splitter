import { useState } from "react";
import { AppFooter } from "./components/AppFooter";
import { DatenschutzModal } from "./components/DatenschutzModal";
import { ErgebnisPanel } from "./components/ErgebnisPanel";
import { FinanzierungSection } from "./components/FinanzierungSection";
import { ImpressumModal } from "./components/ImpressumModal";
import { VerkaufSection } from "./components/VerkaufSection";
import { useCalculator } from "./hooks/useCalculator";

export default function App() {
  const [modal, setModal] = useState<"impressum" | "datenschutz" | null>(null);
  const calc = useCalculator();

  return (
    <div className="min-h-screen bg-slate-50 p-4 font-sans text-slate-900 md:p-8">
      {modal === "impressum" && <ImpressumModal onClose={() => setModal(null)} />}
      {modal === "datenschutz" && <DatenschutzModal onClose={() => setModal(null)} />}

      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-3xl border border-slate-100 bg-white p-6 text-center shadow-sm md:text-left">
          <h1 className="text-2xl font-bold text-slate-800">
            Interaktiver Plan: Immobilien-Auseinandersetzung
          </h1>
          <p className="text-slate-500">Alle Parameter sind dynamisch anpassbar.</p>
        </header>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-8">
            <FinanzierungSection
              purchasePrice={calc.purchasePrice}
              setPurchasePrice={calc.setPurchasePrice}
              equityM={calc.equityM}
              setEquityM={calc.setEquityM}
              equityK={calc.equityK}
              setEquityK={calc.setEquityK}
              monthlyRepayment={calc.monthlyRepayment}
              setMonthlyRepayment={calc.setMonthlyRepayment}
              yearsPassed={calc.yearsPassed}
              setYearsPassed={calc.setYearsPassed}
            />
            <VerkaufSection
              marketValue={calc.marketValue}
              setMarketValue={calc.setMarketValue}
              agentRate={calc.agentRate}
              setAgentRate={calc.setAgentRate}
              notaryRate={calc.notaryRate}
              setNotaryRate={calc.setNotaryRate}
              prepaymentPenalty={calc.prepaymentPenalty}
              setPrepaymentPenalty={calc.setPrepaymentPenalty}
              agentCosts={calc.stats.agentCosts}
              notaryCosts={calc.stats.notaryCosts}
            />
          </div>

          <div className="space-y-6 lg:col-span-4">
            <ErgebnisPanel
              stats={calc.stats}
              equityM={calc.equityM}
              equityK={calc.equityK}
            />
          </div>
        </div>

        <AppFooter
          onImpressumClick={() => setModal("impressum")}
          onDatenschutzClick={() => setModal("datenschutz")}
        />
      </div>
    </div>
  );
}
