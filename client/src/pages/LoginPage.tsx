import React from 'react'
import { Link } from "react-router-dom";
import { useAuth } from "../lib/AuthContext";

export default function LoginPage() {

    const { login } = useAuth()

    const onSubmit: React.FormEventHandler<HTMLFormElement> = async (ev) => {
        ev.preventDefault()
        // @ts-ignore
        const username = ev.target['username'].value
        // @ts-ignore
        const password = ev.target['password'].value
        login(username, password)
    }

    return (
        <div className="flex bg-teal-200 flex-wrap">
            <div className="flex  w-full flex-col md:w-1/2">
                
                <div className="lg:w-[28rem] mx-auto my-auto flex flex-col justify-center pt-8 md:justify-start md:px-6 md:pt-0">
                    <p className="text-left text-3xl font-bold">Welcome back</p>
                    <p className="mt-2 text-left text-gray-500">Welcome back, please enter your details.</p>
                   
                    
                    <form onSubmit={onSubmit} className="flex flex-col pt-3 md:pt-8">
                        <div className="flex flex-col pt-4">
                            <div className="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
                                <input id="username" className="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="User name" />
                            </div>
                        </div>
                        <div className="mb-12 flex flex-col pt-4">
                            <div className="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
                                <input type="password" id="password" className="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="******" />
                            </div>
                        </div>
                        <button type="submit" className="w-full rounded-lg bg-gray-900 px-4 py-2 text-center text-base font-semibold text-white shadow-md ring-gray-500 ring-offset-2 transition focus:ring-2">Log in</button>
                    </form>
                    <div className="py-12 text-center">
                        <p className="whitespace-nowrap text-gray-600">
                            Don't have an account?&nbsp;
                            <Link to="/signup" className="underline-offset-4 font-semibold text-gray-900 underline">Sign up for free</Link>.
                        </p>
                    </div>
                </div>
            </div>
            <div className="pointer-events-none relative hidden h-screen select-none bg-white md:block md:w-1/2">
               
               
            </div>
        </div>
    )
}

