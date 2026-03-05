import { useMemo, useState } from "react";

export interface CalculatorStats {
  estimatedDebt: number;
  agentCosts: number;
  notaryCosts: number;
  totalDeductions: number;
  netAssets: number;
  totalProfit: number;
  payoutM: number;
  payoutK: number;
}

export function useCalculator() {
  const [purchasePrice, setPurchasePrice] = useState(215000);
  const [equityM, setEquityM] = useState(50000);
  const [equityK, setEquityK] = useState(50000);
  const [monthlyRepayment, setMonthlyRepayment] = useState(1000);
  const [yearsPassed, setYearsPassed] = useState(4);

  const [marketValue, setMarketValue] = useState(215000);
  const [agentRate, setAgentRate] = useState(3.57);
  const [notaryRate, setNotaryRate] = useState(1.5);
  const [prepaymentPenalty, setPrepaymentPenalty] = useState(5000);

  const stats = useMemo<CalculatorStats>(() => {
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
  }, [purchasePrice, equityM, equityK, monthlyRepayment, yearsPassed, marketValue, agentRate, notaryRate, prepaymentPenalty]);

  return {
    purchasePrice,
    setPurchasePrice,
    equityM,
    setEquityM,
    equityK,
    setEquityK,
    monthlyRepayment,
    setMonthlyRepayment,
    yearsPassed,
    setYearsPassed,
    marketValue,
    setMarketValue,
    agentRate,
    setAgentRate,
    notaryRate,
    setNotaryRate,
    prepaymentPenalty,
    setPrepaymentPenalty,
    stats,
  };
}
