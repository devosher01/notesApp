import React from "react";

export default function FilterCategories({ selectedCategories, setSelectedCategories }) {
    const categories = [
        { id: 1, name: "Trabajo" },
        { id: 2, name: "Personal" },
        { id: 3, name: "Ideas" },
        { id: 4, name: "Recordatorios" },
        { id: 5, name: "Estudio" },
        { id: 6, name: "Proyectos" },
        { id: 7, name: "Salud" },
        { id: 8, name: "Finanzas" },
        { id: 9, name: "Viajes" },
        { id: 10, name: "Compras" },
    ];

    const toggleCategory = (categoryId) => {
        if (selectedCategories.includes(categoryId)) {
            setSelectedCategories(selectedCategories.filter(id => id !== categoryId));
        } else {
            setSelectedCategories([...selectedCategories, categoryId]);
        }
    };

    return (
        <div className="mb-4">
            <p className="block mb-2">
                Filter by Categories
            </p>
            <div id="filter-categories">
                {categories.map((category) => (
                    <button
                        key={category.id}
                        onClick={() => toggleCategory(category.id)}
                        className={`px-2 py-1 border border-gray-300 rounded mr-2 mb-2 ${selectedCategories.includes(category.id) ? "bg-blue-500 text-white" : ""}`}
                    >
                        {category.name}
                    </button>
                ))}
            </div>
            <div className="mt-2">
                {selectedCategories.map((categoryId) => {
                    const category = categories.find(cat => cat.id === categoryId);
                    return (
                        <span key={categoryId} className="px-2 py-1 bg-blue-500 text-white rounded mr-2 mb-2 inline-flex items-center">
                            {category.name}
                            <button onClick={() => toggleCategory(categoryId)} className="ml-2 text-xs">x</button>
                        </span>
                    );
                })}
            </div>
        </div>
    );
}