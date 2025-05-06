import { useState } from "react";
function Counter(){
    //let count=10;
    let [count,setCount] = useState(0);
    function handleIncrement(){
        //alert('Increment Button Clicked');
        setCount(count+1);
        console.log(count);
    }
    function handleDecrement(){
        //alert('Decrement Button Clicked');
        setCount(count-1);
        console.log(count);
    }
    return(
        <>
         <h1>Counter Component</h1>
         <div>
            <button onClick={handleIncrement}>Increment</button>
            <input type="text" value={count} readOnly />
            <button onClick={handleDecrement}>Decrement</button>
         </div>
        </>
    );
}

export default Counter;