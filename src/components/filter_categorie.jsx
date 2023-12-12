import React from "react";

export default function FilterCategories() {
    return (
        <div className="mb-4">
            <label htmlFor="filter-categories" className="block mb-2">
                Filter by Categories
            </label>
            <input
                defaultValue=""
                id="filter-categories"
                placeholder="Enter category"
                className="w-full px-2 py-1 border border-gray-300 rounded"
            />
        </div>
    );
}