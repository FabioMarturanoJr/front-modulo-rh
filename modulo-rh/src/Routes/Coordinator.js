import { Navigate } from "react-router-dom"

export const goTo = (path) => {
    return <Navigate  to={`/${path}`}/>
}