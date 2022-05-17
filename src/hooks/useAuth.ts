import { useContext } from "react";
import { AuthContest } from "../contexts/AuthContext";

export function useAuth(){
    const value = useContext(AuthContest);

    return value;
}