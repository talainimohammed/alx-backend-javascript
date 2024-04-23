export default function getBudgetForCurrentYear(income, gdp, capita) {
  const currentYear = this.getCurrentYear();
  const budget = {
    [`income-${currentYear}`]: income,
    [`gdp-${currentYear}`]: gdp,
    [`capita-${currentYear}`]: capita,
  };

  return budget;
}
