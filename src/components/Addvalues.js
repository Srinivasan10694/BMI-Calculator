import React,{useState} from 'react'

function Addvalues() {

    const [height,setHeight] = useState([])
    const [weight,setWeight] = useState([])

    const heights = parseInt(height*height) ;
    const bmiAction = parseInt(Math.round((weight/heights)*10000)) || 0  ;
    return (
        <div>
            <form className="" action="">
                <label htmlFor="">Height (in CM)</label>
                <input type="number" value={height} onChange={(e)=>setHeight(e.target.value)}  placeholder= "Enter height..." />  <br/>
                <label htmlFor="">Weight (in KG's)</label>
                <input type="number" value={weight} onChange={(e)=>setWeight(e.target.value)} placeholder= "Enter weight..." /> <br/>
               
                <p>Your Bmi is {bmiAction} {bmiAction <=25 && bmiAction > 20 ? <span style={{color:"#52934D"}}> <strong>You are living a healthy life</strong>  </span> : <span style={{color:"#E74C3C"}} > <strong>Please take care of your health</strong></span>} </p>

            </form>
           
        </div>
    )
}

export default Addvalues
