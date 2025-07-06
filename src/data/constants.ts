import { Category, Transaction, BudgetData } from '../types';

export const CATEGORIES: Category[] = [
  { id: 'food', name: 'Food & Dining', color: '#ff6b6b' },
  { id: 'transport', name: 'Transportation', color: '#4ecdc4' },
  { id: 'entertainment', name: 'Entertainment', color: '#9c88ff' },
  { id: 'shopping', name: 'Shopping', color: '#ffa726' },
  { id: 'utilities', name: 'Utilities', color: '#26de81' },
  { id: 'healthcare', name: 'Healthcare', color: '#fd79a8' },
  { id: 'education', name: 'Education', color: '#74b9ff' },
  { id: 'other', name: 'Other', color: '#a29bfe' }
];

export const SAMPLE_TRANSACTIONS: Transaction[] = [
  { id: 1, amount: 85.50, date: '2024-12-01', description: 'Grocery shopping', category: 'food' },
  { id: 2, amount: 45.20, date: '2024-12-02', description: 'Gas station', category: 'transport' },
  { id: 3, amount: 120.00, date: '2024-12-03', description: 'Restaurant dinner', category: 'food' },
  { id: 4, amount: 65.75, date: '2024-12-04', description: 'Movie tickets', category: 'entertainment' },
  { id: 5, amount: 200.00, date: '2024-12-05', description: 'Clothing', category: 'shopping' },
  { id: 6, amount: 180.00, date: '2024-11-15', description: 'Electricity bill', category: 'utilities' },
  { id: 7, amount: 95.30, date: '2024-11-20', description: 'Pharmacy', category: 'healthcare' },
  { id: 8, amount: 150.00, date: '2024-11-25', description: 'Online course', category: 'education' }
];

export const SAMPLE_BUDGETS: BudgetData = {
  food: 400,
  transport: 200,
  entertainment: 150,
  shopping: 300,
  utilities: 250,
  healthcare: 100,
  education: 200,
  other: 100
};