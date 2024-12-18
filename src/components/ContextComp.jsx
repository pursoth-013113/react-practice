import React, { createContext, useContext, useState } from "react";



export const ContextFunction = createContext();

const ContextComp = ({children}) => {
    // const data = "test";
    const [state, setState] = useState("Parent")

    console.log(children)
    return <ContextFunction.Provider value= {{state, setState}}>
        {children}
        </ContextFunction.Provider>
}



export default ContextComp;

export const A = () => {
    const data = useContext(ContextFunction);
    return(
        <div className="w-[200px] h-[200] bg-green-50 flex  flex-col justify-center items-center gap-2"> 
               <h1>A Component - {data.state}</h1>
               <button className="px-4 py-1.5 rounded bg-green-500"
               onClick={() => data.setState('A')}>A Button</button>

        </div>
    )
}

export const B = () => {
    const {state, setState} = useContext(ContextFunction);
    return(
        <div className="w-[200px] h-[200] bg-red-50 flex flex-col justify-center items-center gap-2"> 
               <h1>B Component - {state}</h1>
               <button className="px-4 py-1.5 rounded bg-red-500"
               onClick={() => setState('B')}>B Button</button>
        </div>
    )
};

export const C = () => {
    const data = useContext(ContextFunction);
    return(
        <div className="w-[200px] h-[200] bg-blue-50 flex flex-col justify-center items-center gap-2"> 
               <h1>C Component - {data.state}</h1>
               <button className="px-4 py-1.5 rounded bg-blue-500"
               onClick={() => data.setState('C')}>C Button</button>
        </div>
    )
}

export const D = () => {
    const data = useContext(ContextFunction);
    return(
        <div className="w-[200px] h-[200] bg-orange-50 flex flex-col justify-center items-center gap-2"> 
               <h1>D Component - {data.state}</h1>
               <button className="px-4 py-1.5 rounded bg-orange-500"
               onClick={() => data.setState('D')}>D Button</button>
        </div>
    )
}










































// const ContextComp = () => {
//     const data = "test";
//     const B_data = "b test";
// }

// const A = () => {
//     const data = "test 1"
//     return <B data = {data}/>;
// };

// const B = ({data}) => {
//     const B_data = "B test";
//     return <C data = {data}/>
// }

// const C = ({data}) => {
//     return <D data = {data}/>
// }

// const D = ({data}) => {
//     return <h1>{data}</h1>/>
// }