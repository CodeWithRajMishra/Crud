import AuthApp from "./AuthApp";
import UnAuthApp from "./UnAuthApp";
import { useContext } from "react";
import { mylogContext } from "./LoginContext";
const App=()=>{
  const {user} = useContext(mylogContext);
  return(
    <>
         <h1> My Login App</h1>
         {user.auth?   <AuthApp/>  : <UnAuthApp/>  }
    </>
  )
}
export default App;
