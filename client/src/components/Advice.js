// import { useEffect, useState } from "react";

// function Advice() {
//     const [advice, setAdvice] = useState("");
//     const [count, setCount] = useState(0);

//     async function getAdvice() {
//         const res = await fetch("https://api.adviceslip.com/advice")
//         const data = await res.json();
//         setAdvice(data.slip.advice);
//         setCount((c) => c + 1);
//     }

//     useEffect(function () {
//         getAdvice();
//     }, [])

//     return (
//         <div>
//             <h3 style={{ margin}}
//         </div>
//     )
// }