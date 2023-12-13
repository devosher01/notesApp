import React from 'react';
import { Link } from 'react-router-dom';
import CustomInput from "../components/custom_input";

export default function SignUpPage() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="border bg-gray-200 text-card-foreground shadow-md rounded-lg p-8 mx-auto w-full max-w-2xl">
                <div className="flex flex-col space-y-4 p-6">
                    <h4 className="text-3xl font-medium leading-none tracking-tight">Sign Up</h4>
                    <p className="text-lg">Please enter your details to create an account.</p>
                </div>
                <div className="space-y-4">
                    <div className="space-y-2">
                        <label htmlFor="name" className="block mb-2 text-lg">
                            Name
                        </label>
                        <CustomInput defaultValue="" id="name" type="text" className="h-12" placeholder="Enter your name" />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="lastname" className="block mb-2 text-lg">
                            Last Name
                        </label>
                        <CustomInput defaultValue="" id="lastname" type="text" className="h-12" placeholder="Enter your last name" />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="block mb-2 text-lg">
                            Email Address
                        </label>
                        <CustomInput defaultValue="" id="email" type="email" className="h-12" placeholder="m@example.com" />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="password" className="block mb-2 text-lg">
                            Password
                        </label>
                        <CustomInput defaultValue="" id="password" type="password" className="h-12" placeholder="Enter your password" />
                    </div>
                </div>
                <div className="py-6">
                    <button className="inline-flex items-center justify-center rounded-md text-lg font-medium ring-offset-background transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-800 text-white hover:bg-blue-900 h-12 px-6 py-2 w-full">Sign Up</button>
                </div>
                <div className="flex justify-center mt-4">
                    <p className="text-black">Already have an account?</p>
                    <Link className="underline text-black ml-2" to="/">
                        <p className="ml-2">Login</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}