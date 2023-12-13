import React from "react";

export default function NoteCard({ title, content, category, onEdit, onArchive, onDelete }) {
    const categoryColors = {
        "Trabajo": "bg-blue-200 text-blue-800",
        "Personal": "bg-green-200 text-green-800",
        "Ideas": "bg-yellow-200 text-yellow-800",
        "Recordatorios": "bg-red-200 text-red-800",
        "Estudio": "bg-purple-200 text-purple-800",
        "Proyectos": "bg-indigo-200 text-indigo-800",
        "Salud": "bg-pink-200 text-pink-800",
        "Finanzas": "bg-orange-200 text-orange-800",
        "Viajes": "bg-teal-200 text-teal-800",
        "Compras": "bg-gray-200 text-gray-800",
        "Libros": "bg-cyan-200 text-cyan-800",
        "Películas": "bg-lime-200 text-lime-800",
        "Música": "bg-amber-200 text-amber-800",
        "Recetas": "bg-emerald-200 text-emerald-800",
        "Ejercicio": "bg-rose-200 text-rose-800",
        "Meditación": "bg-violet-200 text-violet-800",
        "Diario": "bg-fuchsia-200 text-fuchsia-800",
        "Reuniones": "bg-lightBlue-200 text-lightBlue-800",
        "Eventos": "bg-warmGray-200 text-warmGray-800",
        "Inspiración": "bg-trueGray-200 text-trueGray-800"
    };

    return (
        <div className="rounded-lg border mb-4 bg-card text-card-foreground shadow-sm">
            <div className="py-4 p-6">
                <h2 className="m-0 text-xl">{title}</h2>
                {category.map((cat, index) => (
                    <span key={index} className={`inline-block px-2 py-1 rounded-full text-xs font-medium tracking-widest m-1 ${categoryColors[cat]}`}>
                        {cat}
                    </span>
                ))}
            </div>
            <div className="py-4 p-6">{content}</div>
            <div className="py-4 flex justify-between p-6">
                <div>
                    <button className="bg-transparent text-black-500 border border-blue-500 py-2 px-4 rounded cursor-pointer" onClick={onEdit}>Edit</button>
                    <button className="ml-4 bg-transparent text-black-500 border border-yellow-500 py-2 px-4 rounded cursor-pointer" onClick={onArchive}>Archive</button>
                </div>
                <button className="bg-transparent text-black-500 border border-red-500 py-2 px-4 rounded cursor-pointer" onClick={onDelete}>Delete</button>
            </div>
        </div>
    );
}