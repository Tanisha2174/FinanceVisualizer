import React, { useState, useEffect } from 'react';
import { BudgetData } from '../types';
import { CATEGORIES } from '../data/constants';

interface BudgetModalProps {
  isOpen: boolean;
  onClose: () => void;
  budgets: BudgetData;
  onUpdateBudgets: (budgets: BudgetData) => void;
}

const BudgetModal: React.FC<BudgetModalProps> = ({
  isOpen,
  onClose,
  budgets,
  onUpdateBudgets
}) => {
  const [tempBudgets, setTempBudgets] = useState<BudgetData>(budgets);

  useEffect(() => {
    setTempBudgets(budgets);
  }, [budgets, isOpen]);

  const handleBudgetChange = (categoryId: string, value: string) => {
    setTempBudgets(prev => ({
      ...prev,
      [categoryId]: parseFloat(value) || 0
    }));
  };

  const handleSave = () => {
    onUpdateBudgets(tempBudgets);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 max-w-lg w-full shadow-2xl transform transition-all max-h-[90vh] overflow-y-auto">
        <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Edit Monthly Budgets
        </h3>
        <div className="space-y-4">
          {CATEGORIES.map(category => (
            <div key={category.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <div className="flex items-center gap-3">
                <div 
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: category.color }}
                />
                <span className="font-medium">{category.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-500">$</span>
                <input
                  type="number"
                  step="0.01"
                  className="w-24 px-3 py-2 border border-gray-300 rounded-lg text-right focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={tempBudgets[category.id] || ''}
                  onChange={(e) => handleBudgetChange(category.id, e.target.value)}
                  placeholder="0.00"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-3 pt-6">
          <button
            onClick={handleSave}
            className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Save Budgets
          </button>
          <button
            onClick={onClose}
            className="px-6 py-3 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BudgetModal;