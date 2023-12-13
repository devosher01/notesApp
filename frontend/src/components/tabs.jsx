import React from "react";

export default function Tabs({ activeTab, setActiveTab }) {
    return (
        <div role="tablist" aria-orientation="horizontal" className="h-9 items-center justify-center rounded-lg bg-custom p-1 mb-4 text-muted-foreground grid w-full grid-cols-2">
            <button
                type="button"
                role="tab"
                aria-selected={activeTab === "active"}
                aria-controls="content-active"
                id="trigger-active"
                className={`inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${activeTab === "active" ? "bg-white text-foreground shadow" : "text-custom2"}`}
                onClick={() => setActiveTab("active")}
            >
                Active Notes
            </button>
            <button
                type="button"
                role="tab"
                aria-selected={activeTab === "archived"}
                aria-controls="content-archived"
                id="trigger-archived"
                className={`inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${activeTab === "archived" ? "bg-white text-foreground shadow" : "text-custom2"}`}
                onClick={() => setActiveTab("archived")}
            >
                Archived Notes
            </button>
        </div>
    );
}