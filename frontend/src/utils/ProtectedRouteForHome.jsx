import {Navigate} from "react-router-dom"

const ProtectedRouteForHome = ({children}) => {
    const islogin = sessionStorage.getItem('isLoggedIn');
    if(!islogin){
        return <Navigate to="/auth" replace />
    }
    return children

}

export default ProtectedRouteForHome
