const humanYearsCatYearsDogYears = (humanYears) => {
  let catYears;
  let dogYears;
  
if (humanYears <= 1) {
  catYears = 15;
  dogYears = 15;
} else if (humanYears === 2) {
  catYears = 24;
  dogYears = 24;
} else if (humanYears >= 3) {
  catYears = 4 * (humanYears - 2) + 24;
  dogYears = 5 * (humanYears - 2) + 24;
} return [humanYears, catYears, dogYears]
}
console.log(humanYearsCatYearsDogYears(100));
