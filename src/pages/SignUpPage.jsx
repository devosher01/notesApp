import React from 'react';
import { Link } from 'react-router-dom';

export default function SignUpPage() {
    return (
        <div className="w-full h-screen bg-white flex items-center justify-center">
            <div className="w-full max-w-md mx-4 bg-white rounded-lg shadow-md">
                <div className="flex justify-center py-4">
                    <h1 className="text-3xl font-bold text-black">Sign Up</h1>
                </div>
                <div className="p-4">
                    <form className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-black block" htmlFor="email">
                                Email Address
                            </label>
                            <input className="w-full px-3 py-2 border border-gray-300 rounded" id="email" placeholder="m@example.com" required type="email" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-black block" htmlFor="password">
                                Password
                            </label>
                            <input className="w-full px-3 py-2 border border-gray-300 rounded" id="password" required type="password" />
                        </div>
                        <button className="w-full bg-black text-white px-3 py-2 rounded" type="submit">
                            Sign Up
                        </button>
                    </form>
                    <div className="flex justify-center mt-4">
                        <p className="text-black">Already have an account?</p>
                        {/* <Link className="underline text-black ml-2" to="/login">
                            Login
                        </Link> */}
                    </div>
                </div>
            </div>
        </div>
    );
}