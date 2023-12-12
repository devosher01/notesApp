import React from "react";

export default function NoteCard({ title, content, onEdit, onArchive, onDelete }) {
    return (
        <div className="border border-gray-300 rounded p-4 mt-4">
            <div className="py-4">
                <h2 className="m-0 text-xl">{title}</h2>
            </div>
            <div className="py-4">{content}</div>
            <div className="py-4 flex justify-between">
                <div>
                    <button className="bg-transparent text-blue-500 border border-blue-500 py-2 px-4 rounded cursor-pointer" onClick={onEdit}>Edit</button>
                    <button className="ml-4 bg-transparent text-blue-500 border border-blue-500 py-2 px-4 rounded cursor-pointer" onClick={onArchive}>Archive</button>
                </div>
                <button className="bg-transparent text-blue-500 border border-blue-500 py-2 px-4 rounded cursor-pointer" onClick={onDelete}>Delete</button>
            </div>
        </div>
    );
}