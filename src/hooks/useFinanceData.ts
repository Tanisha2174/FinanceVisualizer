import { useState, useMemo } from 'react';
import { Transaction, BudgetData, MonthlyExpense, CategoryExpense, BudgetAnalysis } from '../types';
import { CATEGORIES, SAMPLE_TRANSACTIONS, SAMPLE_BUDGETS } from '../data/constants';

export const useFinanceData = () => {
  const [transactions, setTransactions] = useState<Transaction[]>(SAMPLE_TRANSACTIONS);
  const [budgets, setBudgets] = useState<BudgetData>(SAMPLE_BUDGETS);

  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  const monthlyExpenses = useMemo((): MonthlyExpense[] => {
    const monthlyData: { [key: string]: number } = {};
    
    transactions.forEach(transaction => {
      const date = new Date(transaction.date);
      const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
      
      if (!monthlyData[monthKey]) {
        monthlyData[monthKey] = 0;
      }
      monthlyData[monthKey] += transaction.amount;
    });

    return Object.entries(monthlyData)
      .sort(([a], [b]) => a.localeCompare(b))
      .slice(-6)
      .map(([month, amount]) => ({
        month: new Date(month + '-01').toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
        amount: amount
      }));
  }, [transactions]);

  const categoryData = useMemo((): CategoryExpense[] => {
    const categoryTotals: { [key: string]: number } = {};
    
    transactions.forEach(transaction => {
      const date = new Date(transaction.date);
      if (date.getMonth() === currentMonth && date.getFullYear() === currentYear) {
        const category = transaction.category;
        if (!categoryTotals[category]) {
          categoryTotals[category] = 0;
        }
        categoryTotals[category] += transaction.amount;
      }
    });

    return Object.entries(categoryTotals).map(([category, amount]) => ({
      category: CATEGORIES.find(c => c.id === category)?.name || category,
      amount: amount,
      color: CATEGORIES.find(c => c.id === category)?.color || '#a29bfe'
    }));
  }, [transactions, currentMonth, currentYear]);

  const budgetAnalysis = useMemo((): { [key: string]: BudgetAnalysis } => {
    const analysis: { [key: string]: BudgetAnalysis } = {};
    
    CATEGORIES.forEach(category => {
      const spent = transactions
        .filter(t => {
          const date = new Date(t.date);
          return t.category === category.id && 
                 date.getMonth() === currentMonth && 
                 date.getFullYear() === currentYear;
        })
        .reduce((sum, t) => sum + t.amount, 0);
      
      const budget = budgets[category.id] || 0;
      const percentage = budget > 0 ? (spent / budget) * 100 : 0;
      
      analysis[category.id] = {
        name: category.name,
        spent: spent,
        budget: budget,
        percentage: percentage,
        remaining: budget - spent,
        color: category.color
      };
    });
    
    return analysis;
  }, [transactions, budgets, currentMonth, currentYear]);

  const totalExpenses = useMemo(() => {
    return transactions
      .filter(t => {
        const date = new Date(t.date);
        return date.getMonth() === currentMonth && date.getFullYear() === currentYear;
      })
      .reduce((sum, t) => sum + t.amount, 0);
  }, [transactions, currentMonth, currentYear]);

  const totalBudget = useMemo(() => {
    return Object.values(budgets).reduce((sum, budget) => sum + budget, 0);
  }, [budgets]);

  const recentTransactions = useMemo(() => {
    return transactions
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 5);
  }, [transactions]);

  return {
    transactions,
    budgets,
    monthlyExpenses,
    categoryData,
    budgetAnalysis,
    totalExpenses,
    totalBudget,
    recentTransactions,
    setTransactions,
    setBudgets
  };
};