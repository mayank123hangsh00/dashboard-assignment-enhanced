import { configureStore, createSlice } from '@reduxjs/toolkit';
import initialData from './dashboardData.json';

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: initialData,
  reducers: {
    addWidget: (state, action) => {
      const { categoryId, widget } = action.payload;
      const category = state.categories.find(c => c.id === categoryId);
      if (category) category.widgets.push(widget);
    },
    removeWidget: (state, action) => {
      const { categoryId, widgetId } = action.payload;
      const category = state.categories.find(c => c.id === categoryId);
      if (category) {
        category.widgets = category.widgets.filter(w => w.id !== widgetId);
      }
    }
  }
});

export const { addWidget, removeWidget } = dashboardSlice.actions;
export const store = configureStore({ reducer: dashboardSlice.reducer });
