import { useEffect, useState } from "react";

function ClickCounter() {
    const [count, setCount] = useState(0);
    const [updateMsg, setUpdateMsg] = useState("");
    useEffect(() => {
      setUpdateMsg("Count Just Updated to " + count)
      
    }, [count])
    return <>
    <h2>
        This my tired percent ({count}) %
    </h2>
    <button onClick={() => setCount(count + 1)}>
      +
    </button>
    <button onClick={() => {
    if(count > 0)
        setCount(count - 1)
    }
        }>
      -
    </button>
    <button onClick={() => setCount(0)}>
      clear
    </button>
    <p> This msg Updated by UseEfeect</p>
    <p>{updateMsg}</p>
    </>
  }
  
  export default ClickCounter;