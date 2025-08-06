import {useState, createContext} from "react"
import ComponentB from "./Componentb";

export const UserContext = createContext();

export default function ComponentA(){
    const [user, setUser] = useState("Icer")

    return(
        <>
            <div className="box">
                <h1>Component A</h1>
                <h2>{`Hello ${user}`}</h2>
                <UserContext.Provider value={user}>
                    <ComponentB user={user}></ComponentB>
                </UserContext.Provider>
                

            </div>
        </>
    )
}