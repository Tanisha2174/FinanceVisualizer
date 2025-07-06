import React, { useState } from 'react';
import { Transaction, BudgetData } from './types';
import { useFinanceData } from './hooks/useFinanceData';
import SummaryCards from './components/SummaryCards';
import MonthlyChart from './components/MonthlyChart';
import CategoryChart from './components/CategoryChart';
import BudgetProgress from './components/BudgetProgress';
import RecentTransactions from './components/RecentTransactions';
import TransactionTable from './components/TransactionTable';
import TransactionModal from './components/TransactionModal';
import BudgetModal from './components/BudgetModal';

function App() {
  const {
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
  } = useFinanceData();

  const [isTransactionModalOpen, setIsTransactionModalOpen] = useState(false);
  const [isBudgetModalOpen, setIsBudgetModalOpen] = useState(false);
  const [editingTransaction, setEditingTransaction] = useState<Transaction | null>(null);

  const handleAddTransaction = () => {
    setEditingTransaction(null);
    setIsTransactionModalOpen(true);
  };

  const handleEditTransaction = (transaction: Transaction) => {
    setEditingTransaction(transaction);
    setIsTransactionModalOpen(true);
  };

  const handleDeleteTransaction = (id: number) => {
    setTransactions(transactions.filter(t => t.id !== id));
  };

  const handleTransactionSubmit = (transactionData: Omit<Transaction, 'id'>) => {
    if (editingTransaction) {
      setTransactions(transactions.map(t => 
        t.id === editingTransaction.id ? { ...transactionData, id: editingTransaction.id } : t
      ));
    } else {
      const newTransaction = {
        ...transactionData,
        id: Date.now()
      };
      setTransactions([...transactions, newTransaction]);
    }
  };

  const handleBudgetUpdate = (newBudgets: BudgetData) => {
    setBudgets(newBudgets);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-purple-800 p-6">
      <div className="mx-auto px-12 sm:px-16 md:px-24 lg:px-32">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            Personal Finance Visualizer
          </h1>
          <p className="text-white/80 text-lg">
            Track your expenses, manage budgets, and visualize your financial journey
          </p>
        </div>

        {/* Summary Cards */}
        <SummaryCards totalExpenses={totalExpenses} totalBudget={totalBudget} />

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            <MonthlyChart data={monthlyExpenses} />
            <CategoryChart data={categoryData} />
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <BudgetProgress 
              budgetAnalysis={budgetAnalysis} 
              onEditBudgets={() => setIsBudgetModalOpen(true)}
            />
            <RecentTransactions 
              transactions={recentTransactions}
              onAddTransaction={handleAddTransaction}
              onEditTransaction={handleEditTransaction}
              onDeleteTransaction={handleDeleteTransaction}
            />
          </div>
        </div>

        {/* All Transactions Table */}
        <div className="mt-8">
          <TransactionTable 
            transactions={transactions}
            onEditTransaction={handleEditTransaction}
            onDeleteTransaction={handleDeleteTransaction}
          />
        </div>

        {/* Modals */}
        <TransactionModal 
          isOpen={isTransactionModalOpen}
          onClose={() => setIsTransactionModalOpen(false)}
          onSubmit={handleTransactionSubmit}
          editingTransaction={editingTransaction}
        />

        <BudgetModal 
          isOpen={isBudgetModalOpen}
          onClose={() => setIsBudgetModalOpen(false)}
          budgets={budgets}
          onUpdateBudgets={handleBudgetUpdate}
        />
      </div>
    </div>
  );
}

export default App;
