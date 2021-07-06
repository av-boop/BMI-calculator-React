import React from 'react'
import Input from './Input'
import Title from './Title'
import Button from './Button'
import { useState } from 'react';
import Result from './Result';
import { useEffect } from 'react';






function Final({nextStep}) {

    const [values,setValues] = useState({

        weight:'',
        height:'',
        display:"none",
        display2:"none",
        display3:"block",
        result:0,
        bgcolor:"green",
        resultText:"You are Normal"
        
    });

    const changeValues = (event) => {

        setValues(
            {
            ...values,
            [event.target.name]:event.target.value
            
            })
    }

    const[output,setOutput] = useState(0);

  


     
      
    const func = () => {

       
        values.height = parseFloat(values.height);
        values.weight = parseFloat(values.weight)
        var bmi = (values.weight/(values.height*values.height)).toFixed(2);
        
        
       
        if(values.weight && values.height){
        setValues(

           {
               ...values,
               result:bmi,
               display3:"none",
               display:"flex",
               display2:"flex"

            
           }

           
           
        )
        }

        else{

            alert("Please Enter All Values")
        }
        

        

      
        

        
     
 }

  const func2 = (e) => {
    
    e.preventDefault();
    nextStep();
  }

  const resetFunc = (event) => {

   

    // setValues(
    //     {
        
    //     ...values,
    //     weight:'',
    //     height:'',
    //     display3:"block",
    //     display:"none",
    //     display2:"none"
    // }

    // )

    window.location.reload();
}
  
  useEffect(() => {

    if(values.result<18.5){

        setValues(
            {

            ...values,    
            bgcolor:"orange",
            resultText:"You are Under-weight"
            }
        )
    }

    else if(values.result>=18.5 && values.result<=24.9){

        setValues(
            {

            ...values,    
            bgcolor:"green",
            resultText:"You are Normal-weight"
            }
        )
    }

    else if(values.result>=25 && values.result<=29.9){

        setValues(
            {

            ...values,    
            bgcolor:"red",
            resultText:"You are Over-weight"
            }
        )
    }

    else if(values.result>=30){

        setValues(
            {

            ...values,    
            bgcolor:"red",
            resultText:"You are Obese"
            }
        )
    }
  },[values.result])

  

  
    
    return (
        <React.Fragment>
            <div className="container">
                <div className="title-div">
                <Title titleText={"BMI Calculator"} titleclassText={"title-title"}/>
                </div>
                <div className="title-border">

                </div>
                <div className="inputs-holder">
                    <div className="weight-holder">
                        <Title titleText={"Weight"} titleclassText={"inputs-title"} />
                        <Input value={values.weight} changeValues={changeValues} nameText={"weight"} placeholderText={"In kg"}/>
                    </div>
                    <div className="weight-holder">
                        <Title titleText={"Height"} titleclassText={"inputs-title"}/>
                        <Input value={values.height} changeValues={changeValues} nameText={"height"}  placeholderText={"In m"}/>
                    </div>

                        

                </div>

                <div className="result-holder" style={{display:values.display,backgroundColor:values.bgcolor}}>
                    <Title titleText={"BMI: "+" "+values.result} titleclassText={"bmi-title"}/>        
                    <Title titleText={values.resultText} titleclassText={"status-title"}/>        

                </div>
                    
                    <div style={{display:values.display3}}>
                    <Button buttonText={"Calculate"} classText={"btn"} clicked={func}/>
                    </div>

                    <div className="two-btn" style={{display:values.display2}}>
                    <Button buttonText={"Reset"} classText={"btnn"}  clicked={resetFunc}/>
                    <Button buttonText={"Info"} classText={"btnn2"} clicked={func2}/>

                    </div>
                    
                    
                   

                </div>
                
                

            

            

            
            

        </React.Fragment>
    )
}

export default Final
