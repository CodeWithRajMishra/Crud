import { useContext } from "react";
import { mylogContext } from "./LoginContext";
const AuthApp=()=>{
    const {user, logout} = useContext(mylogContext);
    return(
        <>
          <h4> Welcome : {user.name}  !    
            <button onClick={()=>{logout()}} > Logout </button></h4>
        </>
    )
}
export default AuthApp;