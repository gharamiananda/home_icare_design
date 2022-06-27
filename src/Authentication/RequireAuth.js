import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase/firebase.config';

const RequireAuth = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    let location = useLocation();

    if (loading) {
        return <p>loading</p>
    }
    if (!user) {

        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default RequireAuth;