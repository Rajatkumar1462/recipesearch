import React from 'react';
import './Recipe.css';



const Recipe = ({title, calories, image, source, url}) => {
    return(
        <div className="card container">
            <h1>{title}</h1>
            <p>Calories : {calories}</p>
            <div className="row">
                <img className="col-4" src={image} alt=""/>
                <span className="col-8">
                <a target="_blank" href={url} className="cf">
                    <span className="source-label">See full recipe on:</span>
                    <span className="source-link"><span>{source}</span></span>
                </a>
                <br/><br/><br/>
                <a className="btn btn-primary" href="mailto:?subject=Saag%20Paneer&body=https:{url}">Get it on Email</a>

                </span>
            </div>
        </div>
    );
};


export default Recipe;