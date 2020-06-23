import React from 'react';
import './Recipe.css';



const Recipe = ({title, calories, image, source, url}) => {

    const string = `mailto:?subject=${title}&body=${url}`

    return(
        <div className="col-md-6">
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
                    <a className="btn btn-primary" href={string}>Get it on Email</a>
                    </span>
                </div>
            </div>
        </div>
    );
};


export default Recipe;