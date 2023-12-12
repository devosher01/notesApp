import React from "react";

export default function NoteFormCard() {
    return (
        <div className="border border-gray-300 rounded p-4 mt-4">
            <div className="py-4">
                <h2 className="m-0 text-xl">Create/Edit Note</h2>
            </div>
            <div className="space-y-2">
                <div className="space-y-1">
                    <label htmlFor="title" className="block mb-2">
                        Title
                    </label>
                    <input defaultValue="" id="title" className="w-full px-2 py-1 border border-gray-300 rounded" />
                </div>
                <div className="space-y-1">
                    <label htmlFor="content" className="block mb-2">
                        Content
                    </label>
                    <input defaultValue="" id="content" className="w-full px-2 py-1 border border-gray-300 rounded" />
                </div>
                <div className="space-y-1">
                    <label htmlFor="categories" className="block mb-2">
                        Categories
                    </label>
                    <input
                        defaultValue=""
                        id="categories"
                        placeholder="Add categories separated by comma"
                        className="w-full px-2 py-1 border border-gray-300 rounded"
                    />
                </div>
            </div>
            <div className="py-4">
                <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-black text-white hover:bg-gray-900 h-10 px-4 py-2">Save Note</button>
            </div>
        </div>
    );
}