import { createContext, useContext, useState } from "react";


export const ContextFunction = createContext();

const ParentContext = ({children}) => {
    const [state, setState] = useState("Parent");

 console.log(children);
return <ContextFunction.Provider value={{state, setState}}>
    {children}
</ContextFunction.Provider>
}


export default ParentContext;


export const A1 = () => {
    const data = useContext(ContextFunction);
    return(
        <div className="w-[200] h-[500]  bg-green-500 flex flex-col justify-center items-center gap-2 ">
            <h1>A1 Component - {data.state}</h1>
            <button className="px-4 py-0.5 rounded bg-purple-700 " onClick={() => data.setState("A")}>Button</button>
        </div>
    )
}

export const B2 = () => {
    const {state, setState} = useContext(ContextFunction);
    return(
        <div className="w-[200] h-[500]  bg-red-500 flex flex-col justify-center items-center gap-2 ">
            <h1>B2 Component - {state} </h1>
            <button className="px-4 py-0.5 rounded bg-blue-500" onClick={() =>  setState("B")}>Button</button>
        </div>
    )
}

export const C3 = () => {
    const data = useContext(ContextFunction);
    return(
        <div className="w-[200] h-[500] bg-yellow-500 flex flex-col justify-center items-center gap-2">
            <h1>C3 Component - {data.state}</h1>
            <button className="px-4 py-0.5 rounded bg-red-500 " onClick={() => data.setState("C3")}>Button</button>

        </div>
    )
}

export  const D4 = () => {
    const data = useContext(ContextFunction);
    return(
        <div className="w-[200] h-[500]  bg-red-500 flex flex-col justify-center items-center gap-2 ">
              <h1>D4 Component - {data.state}</h1>
            <button className="px-4 py-0.5 rounded bg-red-500" onClick={() => data.setState("D4")}>Button</button>
        </div>
    )
}

