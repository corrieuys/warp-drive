// format currency

export function formatCurrency(value: number, format: string) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: format,
  }).format(value);
}
