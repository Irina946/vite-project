import {createContext, JSX, useState, FC} from "react";

type AuthContextType = {
    auth: AuthType,
    setAuth: (auth:AuthType) => void
}

type Props = {
    children: JSX.Element
};

type AuthType = {
    role: string
    id: string
}

export const authContext = createContext<AuthContextType| null>(null);

// export function AuthProvider({children}): JSX.Element {
//     const [auth, setAuth] = useState({role: 'guest'});
//     return (<authContext.Provider value={{auth, setAuth}}>{children}</authContext.Provider>)
// }

const AuthProvider: FC<Props> = ({children}) => {
    const [auth, setAuth] = useState<AuthType>({role: 'guest'});
    return <authContext.Provider value={{auth, setAuth}}>{children}</authContext.Provider>
}

export default AuthProvider;