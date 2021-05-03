import type { CreditInputDetails, ParsedCreditDetails } from './components/types';

export function getParsedDetails({
  balance,
  interest,
  payment,
}: CreditInputDetails): ParsedCreditDetails {
  let updatedBalance = balance;
  let months = 0;
  let totalIntCost = 0;
  let warningStatement = '';
  while (updatedBalance > 0) {
    const intCost = calcMonthlyIntCost(updatedBalance, interest);
    totalIntCost += intCost;
    updatedBalance = makeOnePayment(updatedBalance, intCost, payment);
    months++;

    if (updatedBalance > balance) {
      warningStatement = 'Your balance will only increase with the numbers you provided.';
      break;
    }
  }
  const avgMonthlyIntCost = formatMoney(totalIntCost / months);
  const formattedTotalIntCost = formatMoney(totalIntCost);
  console.log('frmt totalIntCost: ', formattedTotalIntCost);
  console.log('avgMoC: ', avgMonthlyIntCost);
  return {
    months,
    totalIntCost: formattedTotalIntCost,
    avgMonthlyIntCost,
    warningStatement,
  };
}

const makeOnePayment = (bal = 0, intCost = 0, payment = 0) => bal + intCost - payment;
const calcMonthlyIntCost = (bal: number, int: number): number => {
  return int > 0 ? (bal * (int / 100)) / 12 : 0;
};

export function addCommasToNums(strNum: string): string {
  return strNum.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function formatMoney(amount = 0): string {
  if (!amount) return;
  console.log('running?');
  const strAmt = roundToTwo(amount.toString());
  const [dollars, cents] = strAmt.split('.');
  if (!dollars) {
    return `0.${cents}`;
  }
  return cents
    ? `${addCommasToNums(dollars)}.${cents}`
    : `${addCommasToNums(dollars)}.00`;
}

export function roundToTwo(strNum = ''): string {
  if (!strNum) return;
  const number = parseFloat(strNum);
  const rounded = (Math.round((number + Number.EPSILON) * 100) / 100).toString();
  if (rounded.split('.')[1]?.length < 2) return rounded + '0';
  return rounded;
}

export function isNumber(e: KeyboardEvent, currentInput: string): boolean | void {
  console.log('currentInput: ', currentInput);
  console.log('e.code: ', e.code);
  if (e.code === 'Period' && currentInput.includes('.')) return e.preventDefault();
  if (e.code?.includes('Digit') || e.code === 'Period') return true;
  return e.preventDefault();
}
