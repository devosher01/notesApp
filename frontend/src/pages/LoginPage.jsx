import React from "react";
import CustomInput from "../components/custom_input";
import { Link } from "react-router-dom";

export default function LoginPage() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="border bg-gray-200 text-card-foreground shadow-md rounded-lg p-8 mx-auto w-full max-w-2xl">
                <div className="flex flex-col space-y-4 p-6">
                    <h4 className="text-3xl font-medium leading-none tracking-tight">Login</h4>
                    <p className="text-lg">Please enter your credentials to login.</p>
                </div>
                <div className="space-y-4">
                    <div className="space-y-2">
                        <label htmlFor="username" className="block mb-2 text-lg">
                            Username
                        </label>
                        <CustomInput defaultValue="" id="username" type="text" className="h-12" placeholder="Enter your username" />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="password" className="block mb-2 text-lg">
                            Password
                        </label>
                        <CustomInput defaultValue="" id="password" type="password" className="h-12" placeholder="Enter your password" />
                    </div>
                </div>
                <div className="py-6">
                    <button className="inline-flex items-center justify-center rounded-md text-lg font-medium ring-offset-background transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-800 text-white hover:bg-blue-900 h-12 px-6 py-2 w-full">Login</button>
                </div>
                <div className="flex justify-center mt-4">
                    {/* <Link className="underline text-black" to="#">
                    </Link> */}
                    Forgot your password?

                </div>
                <div className="flex justify-center mt-4">
                    <p className="text-black">Don't have an account?</p>
                    <Link className="underline text-black ml-2" to="/signup">
                        <p className="ml-2">Sign up</p>
                    </Link>
                </div>
                <div className="flex justify-center mt-4">
                    <Link className="underline text-black" to="/notes">
                        Go to Notes Page
                    </Link>
                </div>
            </div>
        </div>
    );
}