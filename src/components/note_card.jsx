import React from "react";

export default function NoteCard({ title, content, onEdit, onArchive, onDelete }) {
    return (
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="py-4 p-6">
                <h2 className="m-0 text-xl">Note Title 1</h2>
            </div>
            <div className="py-4 p-6">Note Content 1</div>
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