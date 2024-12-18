import React, { useEffect, useState} from  'react'


const SampleUseEffect = () => {
    [state, setstate] = useState([]);


   useEffect(() => {
    console.log("Component Did Mount");
   }, [])

   useEffect(() => {
    console.log("Component Did Update");
   }, [state])

   useEffect(() => {
    return () => {
        console.log("Component Will UnMount")
    }
   }, []);

   console.log("render");

   return (
    <div>
        <button onClick={setstate} className='text-2xl'>Trigger</button>
        <Link to = {'/nav'}>NAV</Link>
    </div>
   )
}


export default SampleUseEffect;