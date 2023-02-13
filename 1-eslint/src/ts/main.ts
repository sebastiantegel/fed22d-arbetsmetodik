// Beskrivande variabelnamn
const timeElapsedInDays = 10;

// Magic numbers
// Använd inte
// totalIncome * 0.3

// Använd:
const TAX_RATE_STOCKHOLM_IN_PERCENT = 30;

function calculateTax(totalIncome: number) {
  return (totalIncome * TAX_RATE_STOCKHOLM_IN_PERCENT) / 100;
}

// Onödig tilldelning av variabler
function sumArray() {
  const numbers: number[] = [1, 1, 2, 3, 5, 8, 13];

  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum;
}

function sumArrayWithReduce() {
  const numbers: number[] = [1, 1, 2, 3, 5, 8, 13];

  return numbers.reduce((previous: number, current: number) => {
    return previous + current;
  });
}

// Texter - string
function handleText(name: string) {
  // return "Hej " + name + "! Logga ut";

  return `Hej ${name}! Logga ut`;
}

function sumText() {
  const texts: string[] = ["Lorem", "ipsum", "dolor"];

  return texts.join("");
}
