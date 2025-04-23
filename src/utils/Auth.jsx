import React from 'react';
import { Navigate } from 'react-router';

function Auth({ children }) {
    const cookie = document.cookie.includes("token=");

    if (!cookie)
        return <Navigate to="/login" />

    return children;
}

export default Auth;