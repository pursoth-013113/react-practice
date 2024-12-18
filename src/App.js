import './App.css';
// import { Link } from "react-router-dom";
import ContextComp, { A, B, C, D } from './components/ContextComp';
// import ParentContext, { A1, B2, C3, D4 } from './Project/ContextComp';
// import CounterApp from './components/CounterAPP';
// import FuncBasedComp from './components/FunctionBasedComponent';
// import ChildOne from './components/ChildOne';
// import ChildTwo from './components/ChildTwo';
// import ChildThree from './components/ChildThree';
// import FuncBasedComp from './components/FunctionBasedComponent';
// import ParentComp from './props/ParentComp';
// import { Route, Routes} from 'react-router-dom';


// function App() {
//   return (
//     <div className="w-full h-screen flex justify-centre items-center">
//      <ChildOne/>
//      <ChildTwo/>
//      <ChildThree/>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="w-full h-screen flex flex-col gap-2 justify-center items-center">
//       <div className="flex gap-3 flex-col">
//         <h1>Index Component</h1>
//         <Link to={"/class"}>Navigate to class comp </Link>
//         <Link to={"/function"}>Navigate to function comp </Link>
//       </div>
//     </div>
//   );
// }

// function App() {
//   return(
//     <ParentContext>
//           <div className="w-full h-screen flex flex-row gap-2 justify-center items-center ">
//             <A1 />
//             <B2 />
//             <C3 />
//             <D4 />
//           </div>

//       </ParentContext>
     

//   );
// }
// export default App;

// function App () {
//   return (
//     <div>
//             <A1 />
//             <B2 />
//             <C3 />
//             <D4 />
//     </div>
//   )
// }

function App () {
  return (
      <ContextComp >
        <div>
               <A />
//             <B />
//             <C />
//             <D />   
        </div>
      </ContextComp>
  )
}
export default App;



