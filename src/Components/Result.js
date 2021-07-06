import React from 'react'
import Title from './Title'
import Button from './Button'


function Result({backStep,result}) {

    const back = (e) => {

        e.preventDefault();
        backStep()
    }
    return (
        <div>
            <React.Fragment>
            <div className="container">
               
             <div className="who-info">
                    <Title titleText={"World Health Organization's recommended body weight based on BMI values"}></Title>
                </div>
                <div className="table-holder">
                    <img src={"bmi-table.jpg"} className="bmi-img"></img>
                </div>
                <Button buttonText={"Back"} classText={"btn"} clicked={back}/>

                

            </div>

            

        </React.Fragment>
            
        </div>
    )
}

export default Result
