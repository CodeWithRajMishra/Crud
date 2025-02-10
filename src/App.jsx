import { useCallback, useState } from "react";
import Call2 from "./Call2";
const App=()=>{
  const [count, setCount]= useState(0);
  const [task, setTask] = useState([]);
  const myAdd=()=>{
    setTask(values=>([...values, "New Task"]))
   }
   const MyTaskAdd = useCallback(myAdd, [task])
   return(
    <>
      <Call2 task={task} addtask={MyTaskAdd} />
      <button onClick={()=>{setCount(count+1)}}>Click here!!</button>
      Count: {count}
    </>
  )
}
export default App;