import React from "react";
import CustomInput from "./custom_input";

export default function LoginCard() {
    return (
        <div className="border bg-card text-card-foreground shadow-md rounded-lg p-8 mt-8 mx-auto w-full max-w-2xl">
            <div className="flex flex-col space-y-4 p-6">
                <h4 className="text-3xl font-medium leading-none tracking-tight">Login</h4>
                <p className="text-lg">Please enter your credentials to login.</p>
            </div>
            <div className="space-y-4">
                <div className="space-y-2">
                    <label htmlFor="username" className="block mb-2 text-lg">
                        Username
                    </label>
                    <CustomInput defaultValue="" id="username" type="text" className="h-12" />
                </div>
                <div className="space-y-2">
                    <label htmlFor="password" className="block mb-2 text-lg">
                        Password
                    </label>
                    <CustomInput defaultValue="" id="password" type="password" className="h-12" />
                </div>
            </div>
            <div className="py-6">
                <button className="inline-flex items-center justify-center rounded-md text-lg font-medium ring-offset-background transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-black text-white hover:bg-gray-900 h-12 px-6 py-2 w-full">Login</button>
            </div>
        </div>
    );
}