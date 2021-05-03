export interface CreditInputDetails {
  name: string;
  balance: number;
  interest: number;
  payment: number;
}

export interface ParsedCreditDetails {
  months: number;
  avgMonthlyIntCost: string;
  totalIntCost: string;
  warningStatement: string;
}
export type CreditOutputDetails = CreditInputDetails & ParsedCreditDetails;

export type Accounts = CreditOutputDetails[];
