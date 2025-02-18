import axios from "axios";

const App=()=>{
const hendleSubmit=async()=>{
  let api="http://localhost:8000/myhome";
  const res= await axios.get(api);
  console.log(res);
}

const hendleSubmit1=async()=>{
  let api="http://localhost:8000/about";
  const res= await axios.get(api);
  console.log(res);
}

const hendleSubmit2=async()=>{
  let api="http://localhost:8000/service";
  const res= await axios.get(api);
  console.log(res);
}

  return(
        <>
         <h1> Welcome To My App</h1>

         <button onClick={hendleSubmit}> Home here!</button>
         <button onClick={hendleSubmit1}> About btn!</button>
         <button onClick={hendleSubmit2}> Service btn!</button>
        </>

    )
}

export default App;