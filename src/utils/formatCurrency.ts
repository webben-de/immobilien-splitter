export const formatCurrency = (val: number) =>
  new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(val);
