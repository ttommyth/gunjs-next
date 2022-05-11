import { IGun, IGunInstance } from 'gun';
import React, { useContext, useEffect, useState } from 'react'
const Gun = require('gun');

const GunContext = React.createContext({} as {
    gun: IGunInstance | null
});

export const GunProvider = (props: { children?: React.ReactNode }) => {
    const [handgun, setHandgun] = useState<IGunInstance | null>(null);
    useEffect(() => {
        console.debug(`setup handgun to ${window.location.origin}/gun`);
        setHandgun(Gun( [`${window.location.origin}/gun`]));
    }, [])
    return <GunContext.Provider value={{
        gun: handgun
    }} >
        {props.children}

    </GunContext.Provider>
}

export const useGun = () => {
    const gun = useContext(GunContext)
    return gun
}