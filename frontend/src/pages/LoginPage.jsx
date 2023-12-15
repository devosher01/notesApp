import React, { useState, useCallback } from "react";
import CustomInput from "../components/custom_input";
import { Link, useNavigate} from "react-router-dom";
import { login } from "../Api/auth";


export default function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const usernameHandler = useCallback((event) => {
        setUsername(event.target.value);
    }, []);

    const passwordHandler = useCallback((event) => {
        setPassword(event.target.value);
    }, []);

    const loginHandler = useCallback(async () => {
        try {
            const response = await login(username, password);
            const token = response.token;  
            const userID = response.user.ID;
            localStorage.setItem('authToken', token);
            localStorage.setItem('userID', userID);
            console.log("ID del usuario", userID);
            navigate('/notes');
            console.log("Login successful");        
        } catch (error) {
            console.error(error);
        }
    }, [username, password, navigate]);


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
                        <CustomInput defaultValue="" onChange={usernameHandler} id="username" type="text" className="h-12" placeholder="Enter your username" />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="password" className="block mb-2 text-lg">
                            Password
                        </label>
                        <CustomInput defaultValue="" onChange={passwordHandler} id="password" type="password" className="h-12" placeholder="Enter your password" />
                    </div>
                </div>
                <div className="py-6">
                    <button onClick={loginHandler} className="inline-flex items-center justify-center rounded-md text-lg font-medium ring-offset-background transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-800 text-white hover:bg-blue-900 h-12 px-6 py-2 w-full">Login</button>
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

            </div>
        </div>
    );
}