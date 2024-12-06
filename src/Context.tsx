import React, {createContext, useContext, useState} from "react";
import usePersistedState from "./services/usePersistedState";

const AppContext = createContext<object | null>(null)

interface AppProviderProps {
    children: React.ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({children}) => {
    const [user, setUser] = usePersistedState("user", {});
    const [language, setLanguage] = usePersistedState("language", "pt-BR");

    const changeLanguage = (newLanguage: string) => {
        console.log(` ALTERANDO IDIOMA PARA ${newLanguage}`);
        setLanguage(newLanguage);
    }

    const changeUser = (newUser: object) => {
        setUser(newUser);
    }

    const sharedState = {
        changeLanguage,
        language,
        user,
        changeUser
    };

    return <AppContext.Provider value={sharedState}>
        {children}
    </AppContext.Provider>
}

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (context === null) {
        throw new Error("useAppContext must be used within an AppProvider");
    }
    return context;
};

export default AppProvider;
