import React from 'react'
import Bmi from './Bmi'
import Result from './Result'
import {useState} from 'react'

function Final() {

    const[count,setCount] = useState(1)
    
    const nextStep = () => {

        setCount(

            count+1
            
        )

        

    }

    const backStep = (e) => {
        
        
        setCount(
            count-1
        )
    }

   
    
    switch(count){

        case 1:
            return(

                <Bmi nextStep={nextStep}/>
            )
        case 2:
            return <Result backStep={backStep}/> 
    }
}

export default Final
