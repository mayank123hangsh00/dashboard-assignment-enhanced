import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addWidget, removeWidget } from '../store';
import DonutChartWidget from './DonutChartWidget';
import BarChartWidget from './BarChartWidget';

function AddWidgetModal({ onAdd, onClose, category }) {
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-xl shadow-lg p-6 w-96">
        <h3 className="text-lg font-semibold mb-4">Add widget to "{category.name}"</h3>
        <input
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Widget name"
          className="w-full border p-2 rounded mb-3"
        />
        <textarea
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Widget text"
          className="w-full border p-2 rounded mb-3"
          rows={4}
        />
        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="px-3 py-1 rounded border">Cancel</button>
          <button
            onClick={() => {
              if (!name) return alert('Please enter widget name');
              onAdd({ name, text });
            }}
            className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

function renderWidget(widget, dispatch, categoryId) {
  if (widget.name === "Cloud Accounts") {
    return (
      <DonutChartWidget
        title="Cloud Accounts"
        data={[
          { name: "Connected", value: 2 },
          { name: "Not Connected", value: 2 }
        ]}
        colors={["#3b82f6", "#cbd5e1"]}
      />
    );
  }
  if (widget.name === "Cloud Account Risk Assessment") {
    return (
      <DonutChartWidget
        title="Cloud Account Risk Assessment"
        data={[
          { name: "Failed", value: 1689 },
          { name: "Warning", value: 681 },
          { name: "Not available", value: 36 },
          { name: "Passed", value: 7253 }
        ]}
        colors={["#ef4444", "#facc15", "#94a3b8", "#22c55e"]}
      />
    );
  }
  if (widget.name === "Image Risk Assessment") {
    return (
      <BarChartWidget
        title="Image Risk Assessment"
        data={[
          { name: "Critical", value: 9 },
          { name: "High", value: 150 },
          { name: "Medium", value: 620 },
          { name: "Low", value: 691 }
        ]}
        colors={["#7f1d1d", "#dc2626", "#f59e0b", "#22c55e"]}
      />
    );
  }
  if (widget.name === "Image Security Issues") {
    return (
      <BarChartWidget
        title="Image Security Issues"
        data={[
          { name: "Critical", value: 2 },
          { name: "High", value: 2 },
          { name: "Medium", value: 4 },
          { name: "Low", value: 6 }
        ]}
        colors={["#7f1d1d", "#dc2626", "#f59e0b", "#22c55e"]}
      />
    );
  }
  return (
    <div className="p-4 bg-white border rounded-xl shadow">
      <div className="flex justify-between">
        <h3 className="font-bold">{widget.name}</h3>
        <button
          onClick={() => dispatch(removeWidget({ categoryId, widgetId: widget.id }))}
          className="text-red-500 hover:text-red-700 font-bold"
        >
          ✕
        </button>
      </div>
      <p className="text-gray-600">{widget.text}</p>
    </div>
  );
}

export default function Dashboard(){
  const categories = useSelector(state => state.categories);
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const [addingCategory, setAddingCategory] = useState(null);

  const handleAdd = (categoryId, payload) => {
    const widget = { id: Date.now(), name: payload.name, text: payload.text || '' };
    dispatch(addWidget({ categoryId, widget }));
    setAddingCategory(null);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <input
          placeholder="Search widgets..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="border p-2 rounded w-64"
        />
      </div>

      {categories.map(category => (
        <div key={category.id} className="bg-white p-6 rounded-2xl shadow mb-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">{category.name}</h2>
            <button
              onClick={() => setAddingCategory(category)}
              className="px-3 py-1 rounded bg-blue-500 text-white hover:bg-blue-600"
            >
              + Add Widget
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {category.widgets
              .filter(w =>
                w.name.toLowerCase().includes(search.toLowerCase()) ||
                w.text.toLowerCase().includes(search.toLowerCase())
              )
              .map(widget => (
                <div key={widget.id}>
                  {renderWidget(widget, dispatch, category.id)}
                </div>
              ))}
          </div>
        </div>
      ))}

      {addingCategory && (
        <AddWidgetModal
          category={addingCategory}
          onClose={() => setAddingCategory(null)}
          onAdd={payload => handleAdd(addingCategory.id, payload)}
        />
      )}
    </div>
  );
}
