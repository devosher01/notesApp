import React, { useState } from "react";

export default function Tabs() {
    const [activeTab, setActiveTab] = useState("active");

    return (
        <div className="tabs w-full" defaultValue="active">
            <div className="tabs-list grid w-full grid-cols-2">
                <button
                    value="active"
                    className={`tabs-trigger ${activeTab === "active" ? "active" : ""}`}
                    onClick={() => setActiveTab("active")}
                >
                    Active Notes
                </button>
                <button
                    value="archived"
                    className={`tabs-trigger ${activeTab === "archived" ? "active" : ""}`}
                    onClick={() => setActiveTab("archived")}
                >
                    Archived Notes
                </button>
            </div>
            {activeTab === "active" && (
                <div value="active" className="tabs-content">
                    {/* Aquí va el contenido de las notas activas */}
                </div>
            )}
            {activeTab === "archived" && (
                <div value="archived" className="tabs-content">
                    {/* Aquí va el contenido de las notas archivadas */}
                </div>
            )}
        </div>
    );
}