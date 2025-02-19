import axios from "axios";

const App=()=>{
const hendleHome=async()=>{
  let api="http://localhost:8000/home";
  try {
     const response= await axios.get(api);
     console.log(response);
  } 
  catch (error) {
        alert(error.response.data.msg);
  }


}

const hendleSubmit1=async()=>{
  let api="http://localhost:8000/about";
  try {
    const res= await axios.get(api);
    console.log(res);
  } catch (error) {
    alert(error.response.data.msg);
  }
  
}

const hendleSubmit2=async()=>{
  let api="http://localhost:8000/service";
  const res= await axios.get(api);
  console.log(res);
}

  return(
        <>
         <h1> Welcome To My App</h1>

         <button onClick={hendleHome}> Home</button>
       
       
         <button onClick={hendleSubmit1}> About</button>
         <button onClick={hendleSubmit2}> Service</button>
        </>

    )
}

export default App;