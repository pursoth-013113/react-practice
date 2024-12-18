import React from "react";
import Button, {ButtonComp} from "./ChildComp";


const ParentComp = () => {
    const btnName = "Reset";

    const handleupdate = () => {
        console.log("update button trigger")
    }

    
    const handlesubmit = () => {
        console.log("submit button trigger")
    }

    const handleReset = () => {
        console.log("Reset button trigger")
    }
    
    const handleBack = () => {
        console.log("Back button trigger")
    }

    // const handleOnSubmit = (Event)=> {
    //     Event.preventDefault();
    //     console.log('on Submit')
    // }
return (
    <div>
         {/* <form onSubmit={handleOnSubmit}> */}
    <h1 className="text-center mb4">ParentComp</h1>
    <div className="flex gap-4">
        

<Button  btnName={"updateButton"} handleFunc={handleupdate} type={"submit"}/>
<Button btnName={"submit"} handleFunc={handlesubmit} type= {"button"}/>

<ButtonComp btnName={{btnName, handleFunc: handleReset}}/>
<ButtonComp btnName={{btnName: "Go Back" , handleFunc:handleBack}} />
    </div> 
     {/* </form> */ }
    </div>
    
);

};
export default ParentComp;