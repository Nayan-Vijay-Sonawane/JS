import { createContext, useState, useMemo } from "react";
// import './useAuth';

export const AuthContext = createContext(null);

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

    const value = useMemo(() => {
        return{
            user,
            isAuthenticated : !!user,
            login,
            logout,
        };
    }, [user]);

    return (
        <AuthContext.Provider value={{ value }}>
            {children}
        </AuthContext.Provider>
    );
};
