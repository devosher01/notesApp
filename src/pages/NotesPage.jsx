import React, { useState } from "react";
import NoteFormCard from "../components/note_form_card";
import FilterCategories from "../components/filter_categorie";
import Tabs from "../components/tabs";

export default function NotesPage() {
    const [activeTab, setActiveTab] = useState("active");

    const handleEdit = () => {
        // Implementar la lógica de edición aquí
    };

    const handleArchive = () => {
        // Implementar la lógica de archivo aquí
    };

    const handleDelete = () => {
        // Implementar la lógica de eliminación aquí
    };

    return (
        <div className="container mx-auto p-4 bg-white-100 min-h-screen">
            <div className="grid grid-cols-4 gap-4">
                <div className="col-span-1">
                    <NoteFormCard />
                </div>
                <div className="col-span-3">
                    <FilterCategories />
                    <Tabs
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                        handleEdit={handleEdit}
                        handleArchive={handleArchive}
                        handleDelete={handleDelete}
                    />
                </div>
            </div>
        </div>
    );
}