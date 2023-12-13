import React from "react";

export default function NoteCard({ title, content, category,archived, onEdit, onArchive, onDelete }) {
    const categoryData = {
        1: { name: "Trabajo", color: "bg-blue-200 text-blue-800" },
        2: { name: "Personal", color: "bg-green-200 text-green-800" },
        3: { name: "Ideas", color: "bg-yellow-200 text-yellow-800" },
        4: { name: "Recordatorios", color: "bg-red-200 text-red-800" },
        5: { name: "Estudio", color: "bg-purple-200 text-purple-800" },
        6: { name: "Proyectos", color: "bg-indigo-200 text-indigo-800" },
        7: { name: "Salud", color: "bg-pink-200 text-pink-800" },
        8: { name: "Finanzas", color: "bg-orange-200 text-orange-800" },
        9: { name: "Viajes", color: "bg-teal-200 text-teal-800" },
        10: { name: "Compras", color: "bg-gray-200 text-gray-800" }
    };

    return (
        <div className="rounded-lg border mb-4 bg-card text-card-foreground shadow-sm">
            <div className="py-4 p-6">
                <h2 className="m-0 text-xl">{title}</h2>
                {Array.isArray(category) && category.map((catId, index) => {
                    const cat = categoryData[catId];
                    return (
                        <span key={index} className={`inline-block px-2 py-1 rounded-full text-xs font-medium tracking-widest m-1 ${cat.color}`}>
                            {cat.name}
                        </span>
                    );
                })}
            </div>
            <div className="py-4 p-6">{content}</div>
            <div className="py-4 flex justify-between p-6">
                <div>
                    <button className="bg-transparent text-black-500 border border-blue-500 py-2 px-4 rounded cursor-pointer" onClick={onEdit}>Edit</button>
                    <button className="ml-4 bg-transparent text-black-500 border border-yellow-500 py-2 px-4 rounded cursor-pointer" onClick={onArchive}>{archived ? "Desarchivar" : "Archivar"}</button>
                </div>
                <button className="bg-transparent text-black-500 border border-red-500 py-2 px-4 rounded cursor-pointer" onClick={onDelete}>Delete</button>
            </div>
        </div>
    );
}