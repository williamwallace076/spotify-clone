import React from "react";
import './CardPlans.css'

export default props => {
    return (
            <div className="plan-card">
                <div className="title-card-area">

                    <p className="card-title">{props.cardTitle}</p>
                    {props.cardSubtitle?<p className="card-subtitle"> {props.cardSubtitle}</p> :<p className="card-subtitle" style={{display:'none'}}></p>}
                    <p className="tipe-of-plan">{props.tipeOfPlan}</p>
                    <p className="value-of-plan">{props.valueOfPlan}</p>
                    <p className="number-of-counts">{props.numberOfCounts}</p>
                </div>
                    
                    <div className="descripition-card">
                    <p>{props.descriptionCard1}</p>
                    <p>{props.descriptionCard2}</p>
                    <p>{props.descriptionCard3}</p>
                    {props.descriptionCard4?<p>{props.descriptionCard5}</p>:<p style={{display:'none'}}></p>}
                    {props.descriptionCard5?<p>{props.descriptionCard5}</p>:<p style={{display:'none'}}></p>}
                    </div>

                    <button className="button-card">{props.buttonCard}</button>
                    
                   {props.termsAndConditions?<span className="terms-and-conditions"><u>Sujeito a Termos e Condições.</u> {props.termsAndConditions}</span>:<span className="terms-and-conditions" style={{display:'none'}}></span>}
                   {props.termsAndConditionsUniversitario?<span className="terms-and-conditions">{props.termsAndConditionsUniversitario} <u>Sujeito a Termos e Condições.</u> da oferta do Spotify de desconto para universitários.</span> :<span className="terms-and-conditions" style={{display:'none'}}></span>}
                </div>
    )

    }