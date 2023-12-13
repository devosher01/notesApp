import React, { useState } from "react";
import NoteFormCard from "../components/note_form_card";
import FilterCategories from "../components/filter_categorie";
import Tabs from "../components/tabs";
import NoteCard from "../components/note_card";

export default function NotesPage() {
    const [activeTab, setActiveTab] = useState("active");

    const [selectedCategories, setSelectedCategories] = useState([]); // Nuevo estado para las categorías seleccionadas

    const [notes, setNotes] = useState([
        { id: 1, title: "Nota 1", content: "Contenido de la nota 1", archived: true, category: ["Trabajo", "Personal"] },
        { id: 2, title: "Nota 2", content: "Contenido de la nota 2", archived: false, category: ["Personal"] },
        { id: 3, title: "Nota 3", content: "Contenido de la nota 3", archived: false, category: ["Ideas", "Personal"] },
        { id: 4, title: "Nota 4", content: "Contenido de la nota 4", archived: true, category: ["Recordatorios", "Trabajo"] },
    ]);

    const handleEdit = () => {
    };

    const handleArchive = (id) => {
        setNotes(notes.map(note => note.id === id ? { ...note, archived: true } : note));
    };

    const handleDelete = () => {

    };

    // Filtrar las notas basándose en el activeTab y las categorías seleccionadas
    const filteredNotes = notes.filter(note => 
        (activeTab === "active" ? !note.archived : note.archived) && 
        (selectedCategories.length === 0 ? true : selectedCategories.every(cat => note.category.includes(cat)))
    );

    return (
        <div className="container mx-auto p-4 bg-white-100 min-h-screen">
            <div className="grid grid-cols-4 gap-4">
                <div className="col-span-1">
                    <NoteFormCard />
                </div>
                <div className="col-span-3">
                    <FilterCategories selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories} /> {/* Pasar el estado a FilterCategories */}
                    <Tabs
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                    />
                    {filteredNotes.map(note => (
                        <NoteCard
                            key={note.id}
                            title={note.title}
                            content={note.content}
                            category={note.category} // Añade esto
                            onEdit={handleEdit}
                            onArchive={() => handleArchive(note.id)}
                            onDelete={handleDelete}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}