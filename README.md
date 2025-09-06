# 📊 Dashboard Assignment

Enhanced Dashboard built with:
- **React 18**
- **Redux Toolkit**
- **Tailwind CSS**
- **Recharts** (Donut & Bar Charts)

## ✨ Features
- JSON-driven categories and widgets
- Add / Remove widgets dynamically
- Search across widgets
- Styled with Tailwind
- Chart widgets powered by Recharts

## 🖼️ Screenshots
(<img width="514" height="424" alt="Screenshot 2025-09-06 151352" src="https://github.com/user-attachments/assets/f1d417c9-3aeb-4ad5-93a1-445b22db33cf" />
(<img width="580" height="360" alt="Screenshot 2025-09-06 151405" src="https://github.com/user-attachments/assets/cadca1cf-61f1-4ce6-b58b-108330b02a79" />
(<img width="1752" height="595" alt="Screenshot 2025-09-06 151431" src="https://github.com/user-attachments/assets/0082f238-cdd7-4e2a-a359-ee341062311d" />
(<img width="1638" height="524" alt="Screenshot 2025-09-06 151440" src="https://github.com/user-attachments/assets/74ec65c4-be92-47bf-aad6-b81445352cc0" />


## 🚀 Getting Started
Follow these steps to run the project locally:

### 1. Prerequisites

Make sure you have **Node.js** and **npm** installed:

```bash
node -v
npm -v
2. Clone the Project

If your project is on GitHub:

git clone https://github.com/your-username/dashboard-assignment-enhanced.git
cd dashboard-assignment-enhanced


Or navigate to your local project folder:

cd path/to/dashboard-assignment-enhanced

3. Install Dependencies

Install all required packages:

npm install


This includes React, Redux Toolkit, Tailwind CSS, Recharts, and other dependencies.

4. Tailwind CSS Setup (If Needed)

If Tailwind is not already configured:

Install Tailwind CSS dependencies:

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p


Configure tailwind.config.js:

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


Include Tailwind in src/index.css:

@tailwind base;
@tailwind components;
@tailwind utilities;

5. Start the Development Server

Run the app locally:

npm start


The app runs at http://localhost:3000

## 📂 Structure
- `src/components/DonutChartWidget.js` → donut charts
- `src/components/BarChartWidget.js` → bar charts
- `src/components/Dashboard.js` → main UI
- `src/store.js` → Redux store
- `src/dashboardData.json` → initial data

## 🔮 Improvements
- Add category management
- Persist to localStorage / DB
- Drag-and-drop widget reordering
