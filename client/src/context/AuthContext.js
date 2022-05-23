import { createContext } from "react";

function emp() {}

export const AuthContext = createContext({
    token: null,
    userId: null,
    login: emp,
    logout: emp,
    isAuth: false
})