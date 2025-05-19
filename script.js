//your JS code here. If required.
function daysOfAYear(year) {
  return ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) ? 366 : 365;
}
console.log(daysOfAYear(2022)); // 365
console.log(daysOfAYear(2024)); // 366
console.log(daysOfAYear(1900)); // 365
console.log(daysOfAYear(2000)); // 366
console.log(daysOfAYear(1600)); // 366
console.log(daysOfAYear(2100)); // 365
