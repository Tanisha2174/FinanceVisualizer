# Personal Finance Visualizer

A modern, responsive web application for tracking and visualizing personal finances. Built with Next.js, React, and shadcn/ui components, this application provides an intuitive interface for managing transactions, categorizing expenses, and monitoring budgets.

## 🚀 Live Demo

[View Live Application](https://finance-visualizer-five.vercel.app/)

## ✨ Features

### Stage 1: Basic Transaction Tracking
- ✅ Add, edit, and delete transactions with amount, date, and description
- ✅ Clean transaction list view with sorting and filtering
- ✅ Monthly expenses bar chart visualization
- ✅ Comprehensive form validation with error handling

### Stage 2: Categories & Analytics
- ✅ Predefined transaction categories (Food, Transportation, Entertainment, etc.)
- ✅ Interactive category-wise pie chart
- ✅ Dashboard with summary cards showing:
  - Total expenses
  - Category breakdown
  - Most recent transactions
- ✅ Enhanced data visualization with Recharts

### Stage 3: Budgeting & Insights
- ✅ Set monthly budgets for each category
- ✅ Budget vs actual spending comparison charts
- ✅ Spending insights and budget alerts
- ✅ Progress tracking with visual indicators

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Frontend:** React 18 with TypeScript
- **Styling:** Tailwind CSS + shadcn/ui components
- **Charts:** Recharts for data visualization
- **Data Storage:** Local Storage (no database required)
- **State Management:** React Context API + useReducer
- **Form Handling:** React Hook Form with Zod validation
- **Icons:** Lucide React

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/personal-finance-visualizer.git
   cd personal-finance-visualizer
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)


## 💡 Key Features & Implementation

### Data Persistence
- Uses browser's Local Storage for data persistence
- No database setup required - runs entirely client-side
- Automatic data backup and recovery

### Responsive Design
- Mobile-first approach with Tailwind CSS
- Responsive charts that adapt to screen sizes
- Touch-friendly interface for mobile devices

### Error Handling
- Comprehensive error states for all operations
- Form validation with real-time feedback
- Graceful handling of storage limitations

### Performance
- Optimized React components with proper memoization
- Lazy loading for charts and heavy components
- Efficient state management with Context API


## 🌟 Future Enhancements

- [ ] Export data to CSV/PDF
- [ ] Dark mode support
- [ ] Advanced filtering and search
- [ ] Recurring transactions
- [ ] Multi-currency support
- [ ] Data import from bank statements
- [ ] Spending predictions with AI


## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for beautiful UI components
- [Recharts](https://recharts.org/) for powerful chart visualizations
- [Next.js](https://nextjs.org/) for the amazing React framework
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling

---

⭐ If you found this project helpful, please consider giving it a star on GitHub!

---

*Built with ❤️ using Next.js and modern web technologies*
