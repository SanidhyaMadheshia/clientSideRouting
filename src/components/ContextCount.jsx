import { useContext, useState } from "react";
import { ContextCount } from "../CreateContext";

export default function CountContext(){
    const [count,setCount]=useState(0);

    return(
        <div>
            <ContextCount.Provider value={{count,setCount}}>

                <Count />
            </ContextCount.Provider>
        </div>
    )
}
function Count(){
    return (
        <div>
            <CountRenderer />
            <Buttons />

        </div>
    )
}
function CountRenderer(){
    const {count }=useContext(ContextCount);
    return (
        <div>
            {count}
        </div>
    )
}
function Buttons(){
    const {setCount}=useContext(ContextCount);
    return <div>
        <button onClick={()=>setCount((count)=>count+1)}>increment</button>
        <button onClick={()=>setCount((count)=>count-1)}>decrement</button>
    </div>
}