export interface Transaction {
  id: number;
  amount: number;
  date: string;
  description: string;
  category: string;
}

export interface Category {
  id: string;
  name: string;
  color: string;
}

export interface BudgetData {
  [key: string]: number;
}

export interface FormData {
  amount: string;
  date: string;
  description: string;
  category: string;
}

export interface FormErrors {
  amount?: string;
  date?: string;
  description?: string;
}

export interface BudgetAnalysis {
  name: string;
  spent: number;
  budget: number;
  percentage: number;
  remaining: number;
  color: string;
}

export interface MonthlyExpense {
  month: string;
  amount: number;
}

export interface CategoryExpense {
  category: string;
  amount: number;
  color: string;
}