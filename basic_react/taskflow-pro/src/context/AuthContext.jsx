import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = async (email) => {
        const fakeToken = crypto.randomUUID();

        setUser({
            email,
            token: fakeToken,
        });
    };

    const logout = () => {
        setUser(null);
    };

    const value = {
        user,
        isAuthenticated: !!user,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={{ value }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context =  useContext(AuthContext);
    if(!context) {
        throw new Error("useAuth must be used inside AuthProvider");
    }
    return context;
};