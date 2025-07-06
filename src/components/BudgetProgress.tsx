import React from 'react';
import { Edit3 } from 'lucide-react';
import { BudgetAnalysis } from '../types';

interface BudgetProgressProps {
  budgetAnalysis: { [key: string]: BudgetAnalysis };
  onEditBudgets: () => void;
}

const BudgetProgress: React.FC<BudgetProgressProps> = ({ budgetAnalysis, onEditBudgets }) => {
  return (
    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-xl">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">Budget Progress</h2>
        <button
          onClick={onEditBudgets}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2"
        >
          <Edit3 className="w-4 h-4" />
          Edit Budgets
        </button>
      </div>
      <div className="space-y-4">
        {Object.entries(budgetAnalysis).map(([categoryId, data]) => (
          <div key={categoryId} className="bg-white/10 p-4 rounded-xl">
            <div className="flex items-center justify-between mb-2">
              <span className="text-white font-medium">{data.name}</span>
              <span className="text-white/70 text-sm">
                ${data.spent.toFixed(2)} / ${data.budget.toFixed(2)}
              </span>
            </div>
            <div className="h-2 bg-white/20 rounded-full overflow-hidden">
              <div 
                className={`h-full rounded-full transition-all duration-300 ${
                  data.percentage > 100 ? 'bg-gradient-to-r from-red-500 to-red-600' : 
                  data.percentage > 80 ? 'bg-gradient-to-r from-yellow-500 to-orange-500' : 
                  'bg-gradient-to-r from-green-500 to-teal-500'
                }`}
                style={{ width: `${Math.min(data.percentage, 100)}%` }}
              />
            </div>
            <div className="flex justify-between mt-2">
              <span className={`text-sm ${
                data.percentage > 100 ? 'text-red-300' : 
                data.percentage > 80 ? 'text-yellow-300' : 
                'text-green-300'
              }`}>
                {data.percentage.toFixed(1)}%
              </span>
              <span className="text-white/60 text-sm">
                ${data.remaining.toFixed(2)} remaining
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BudgetProgress;