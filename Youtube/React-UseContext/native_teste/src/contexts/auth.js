import React, { createContext } from 'react'

export const AuthContext = createContext({})

function AuthProvider({ children }) {
    return (
        <AuthContext.Provider value={{ nome: 'Genilson do Carmo' }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
