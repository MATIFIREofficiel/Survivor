import DrawerMenu from './Pages/DrawerMenu';
import LoginPage from './Pages/LoginPage';
import React, { useState } from 'react';

export default function ConnectionChecker()
{
    const [isSignedIn, setIsSignedIn] = useState(false);

    if (isSignedIn) {
        return (<DrawerMenu setIsSignedIn={setIsSignedIn}/>);
    } else {
        return (<LoginPage setIsSignedIn={setIsSignedIn}/>);
    }
}
