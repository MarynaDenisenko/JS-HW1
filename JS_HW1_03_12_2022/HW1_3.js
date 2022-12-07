// Завдання
/* В пачке бумаги 500 листов. За неделю 
в офисе расходуется 1200 листов. Какое наименьшее
 количество пачек бумаги нужно купить в офис 
 на 8 недель?*/
const sheetsInReamPaper = 500;
const consumptionPerWeek = 1200;
const weeksAmount = 8;
let numberOfPacks = 0;
let remainderOfDivision = 0;

numberOfPacks = consumptionPerWeek * weeksAmount / sheetsInReamPaper;
remainderOfDivision = numberOfPacks % 1;
numberOfPacks = numberOfPacks - remainderOfDivision + 1;

console.log(numberOfPacks);