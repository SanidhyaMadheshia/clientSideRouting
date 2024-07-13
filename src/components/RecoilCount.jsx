import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom } from "../store/atoms/counter";

export function RecoilCount(){
    // const [count,setCount]=useRecoilState(countAtom);
    const count=useRecoilValue(countAtom);
    const setCount=useSetRecoilState(countAtom);
    
      
    return(<>
        <div>
            {count}
        </div>
        <button onClick={()=>{
            setCount(count+1);
        }}>increment

        </button>
        </>
    )
}
