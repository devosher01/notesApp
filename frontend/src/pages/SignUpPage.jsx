import React, {useState} from 'react';
import { Link, useNavigate} from 'react-router-dom';
import CustomInput from "../components/custom_input";
import { register } from "../Api/auth";
import * as yup from 'yup';

const schema = yup.object().shape({
  username: yup.string().required('Username is required'),
  email: yup.string().email('Must be a valid email').required('Email is required'),
  password: yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
});

export default function SignUpPage() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleUsernameChange = (event) => setUsername(event.target.value);
    const handleEmailChange = (event) => setEmail(event.target.value);
    const handlePasswordChange = (event) => setPassword(event.target.value);

    const handleRegister = async () => {
        try {
            // Validate form data
            await schema.validate({ username, email, password });

            await register({ username, email, password });
            navigate('/');
        } catch (error) {
            if (error instanceof yup.ValidationError) {
              // Handle validation errors
              console.error(error.errors);
            } else {
              // Handle other errors
              console.error(error);
            }
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="border bg-gray-200 text-card-foreground shadow-md rounded-lg p-8 mx-auto w-full max-w-2xl">
                <div className="flex flex-col space-y-4 p-6">
                    <h4 className="text-3xl font-medium leading-none tracking-tight">Sign Up</h4>
                    <p className="text-lg">Please enter your details to create an account.</p>
                </div>
                <div className="space-y-4">
                    <div className="space-y-2">
                        <label htmlFor="username" className="block mb-2 text-lg">
                            Username
                        </label>
                        <CustomInput onChange={handleUsernameChange} defaultValue="" id="username" type="text" className="h-12" placeholder="Enter your username" />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="block mb-2 text-lg">
                            Email Address
                        </label>
                        <CustomInput onChange={handleEmailChange} defaultValue="" id="email" type="email" className="h-12" placeholder="m@example.com" />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="password" className="block mb-2 text-lg">
                            Password
                        </label>
                        <CustomInput onChange={handlePasswordChange} defaultValue="" id="password" type="password" className="h-12" placeholder="Enter your password" />
                    </div>
                </div>
                <div className="py-6">
                    <button onClick={handleRegister} className="inline-flex items-center justify-center rounded-md text-lg font-medium ring-offset-background transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-800 text-white hover:bg-blue-900 h-12 px-6 py-2 w-full">Sign Up</button>
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