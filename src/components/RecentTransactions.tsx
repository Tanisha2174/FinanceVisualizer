import React from 'react';
import { Plus, Edit3, Trash2 } from 'lucide-react';
import { Transaction } from '../types';
import { CATEGORIES } from '../data/constants';

interface RecentTransactionsProps {
  transactions: Transaction[];
  onAddTransaction: () => void;
  onEditTransaction: (transaction: Transaction) => void;
  onDeleteTransaction: (id: number) => void;
}

const RecentTransactions: React.FC<RecentTransactionsProps> = ({
  transactions,
  onAddTransaction,
  onEditTransaction,
  onDeleteTransaction
}) => {
  const getCategoryName = (categoryId: string) => {
    return CATEGORIES.find(c => c.id === categoryId)?.name || categoryId;
  };

  const getCategoryColor = (categoryId: string) => {
    return CATEGORIES.find(c => c.id === categoryId)?.color || '#a29bfe';
  };

  return (
    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-xl">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">Recent Transactions</h2>
        <button
          onClick={onAddTransaction}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Add Transaction
        </button>
      </div>
      <div className="space-y-3">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="bg-white/10 p-4 rounded-xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div 
                className="px-3 py-1 rounded-full text-white text-xs font-medium"
                style={{ backgroundColor: getCategoryColor(transaction.category) }}
              >
                {getCategoryName(transaction.category)}
              </div>
              <div>
                <p className="text-white font-medium">{transaction.description}</p>
                <p className="text-white/60 text-sm">{transaction.date}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-white font-bold">${transaction.amount.toFixed(2)}</span>
              <button
                onClick={() => onEditTransaction(transaction)}
                className="p-1 text-white/60 hover:text-white transition-colors"
              >
                <Edit3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => onDeleteTransaction(transaction.id)}
                className="p-1 text-white/60 hover:text-red-300 transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentTransactions;