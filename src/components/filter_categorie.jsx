// En FilterCategories.jsx
import React from "react";

export default function FilterCategories({ selectedCategories, setSelectedCategories }) {
    const categories = ["Trabajo", "Personal", "Ideas", "Recordatorios", "Estudio", "Proyectos", "Salud", "Finanzas", "Viajes", "Compras"]; // Las categorías disponibles

    const toggleCategory = (category) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(selectedCategories.filter(cat => cat !== category));
        } else {
            setSelectedCategories([...selectedCategories, category]);
        }
    };

    return (
        <div className="mb-4">
            <label htmlFor="filter-categories" className="block mb-2">
                Filter by Categories
            </label>
            <div id="filter-categories">
                {categories.map((category, index) => (
                    <button
                        key={index}
                        onClick={() => toggleCategory(category)}
                        className={`px-2 py-1 border border-gray-300 rounded mr-2 mb-2 ${selectedCategories.includes(category) ? "bg-blue-500 text-white" : ""}`}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <div className="mt-2">
                {selectedCategories.map((category, index) => (
                    <span key={index} className="px-2 py-1 bg-blue-500 text-white rounded mr-2 mb-2 inline-flex items-center">
                        {category}
                        <button onClick={() => toggleCategory(category)} className="ml-2 text-xs">x</button>
                    </span>
                ))}
            </div>
        </div>
    );
}