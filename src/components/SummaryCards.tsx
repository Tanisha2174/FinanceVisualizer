import React from 'react';
import { DollarSign, Target, TrendingUp, TrendingDown } from 'lucide-react';

interface SummaryCardsProps {
  totalExpenses: number;
  totalBudget: number;
}

const SummaryCards: React.FC<SummaryCardsProps> = ({ totalExpenses, totalBudget }) => {
  const remaining = totalBudget - totalExpenses;
  const isOverBudget = totalExpenses > totalBudget;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-xl transform hover:scale-105 transition-transform duration-300">
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
            <DollarSign className="w-6 h-6 text-white" />
          </div>
          <div className="text-right">
            <p className="text-white/70 text-sm">Total Expenses</p>
            <p className="text-2xl font-bold text-white">${totalExpenses.toFixed(2)}</p>
          </div>
        </div>
        <div className="text-white/60 text-sm">This month</div>
      </div>

      <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-xl transform hover:scale-105 transition-transform duration-300">
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 bg-gradient-to-r from-green-500 to-teal-600 rounded-full">
            <Target className="w-6 h-6 text-white" />
          </div>
          <div className="text-right">
            <p className="text-white/70 text-sm">Total Budget</p>
            <p className="text-2xl font-bold text-white">${totalBudget.toFixed(2)}</p>
          </div>
        </div>
        <div className="text-white/60 text-sm">Monthly limit</div>
      </div>

      <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-xl transform hover:scale-105 transition-transform duration-300">
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 bg-gradient-to-r from-orange-500 to-red-600 rounded-full">
            {isOverBudget ? 
              <TrendingDown className="w-6 h-6 text-white" /> : 
              <TrendingUp className="w-6 h-6 text-white" />
            }
          </div>
          <div className="text-right">
            <p className="text-white/70 text-sm">Remaining</p>
            <p className={`text-2xl font-bold ${isOverBudget ? 'text-red-300' : 'text-green-300'}`}>
              ${remaining.toFixed(2)}
            </p>
          </div>
        </div>
        <div className="text-white/60 text-sm">
          {isOverBudget ? 'Over budget' : 'Under budget'}
        </div>
      </div>
    </div>
  );
};

export default SummaryCards;