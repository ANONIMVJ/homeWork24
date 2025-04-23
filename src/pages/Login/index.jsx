import React from 'react';
import { useNavigate } from 'react-router';

function LoginPage(props) {
    const navigate = useNavigate();

    const userObj = {
        firstName: "John",
        lastName: "Doe",
        age: 23,
        location: "Miami, Florida",
        mainRoute: "/dashboard/statistics",
        permissions: [
            "CAN_SEE_ADD_BUTTON",
            "CAN_VISIT_ANNOUNCEMENTS_PAGE"
        ]
    }

    localStorage.setItem("user", JSON.stringify(userObj));

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            username: e.target.username.value,
            password: e.target.password.value,
        };

        document.cookie = 'token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9';
        navigate('/dashboard/statistics');
    }

    return (
        <div className='h-[100vh] w-full flex items-center justify-center'>
            <div className='bg-white flex flex-col gap-3 shadow p-4 rounded'>
                <h1 className='text-2xl font-bold text-center'>Login</h1>
                <form onSubmit={handleSubmit} className='flex flex-col'>
                    <input
                        className='border p-1 rounded border-slate-200 mb-3'
                        placeholder='Username'
                        type="text"
                        name="username"
                    />
                    <input
                        className='border p-1 rounded border-slate-200 mb-3'
                        placeholder='Password'
                        type="password"
                        name="password"
                    />
                    <button className='border border-slate-200'>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;