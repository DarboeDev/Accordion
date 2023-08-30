import { useState } from "react"

const Questions = ({title, info}) => {
    const [show, setShow] =useState (false)

    function showInfo(){
        setShow(prevShow => !prevShow)
    }
    return(
        
  <div className="question-section">
       <div className="question">
        <h1>
        {title}
        </h1>
        <button className="btn" onClick={showInfo}>+</button>
       </div>
       {
        show && <p className="info">
            {info}
        </p>
       }
      
    </div>
        
    )
}
export default Questions