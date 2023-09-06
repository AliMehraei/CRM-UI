import { useState, useEffect } from 'react';
import { getToken } from './config';


export const useIsLoggedIn = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(!!getToken('token'));

    useEffect(() => {
        setIsLoggedIn(!!getToken('token'));
    }, []);

    return isLoggedIn;
}