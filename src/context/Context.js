import React from 'react';

const DataUser = React.createContext();

function ContextProvider({ children }) {    
    const [user, setUser] = React.useState({ name: 'Fabian', lastName: 'Duran' });
    return (
        <DataUser.Provider value={{
            user, 
            setUser
        }}>
            { children }
        </DataUser.Provider>
    )
}

export { DataUser, ContextProvider };