import React from "react";

const Photo = (props) => {

  const {title, url , hdurl, explanation, copyright} = props.data;
  return(
    <div className="astronomy">
    <a href = {hdurl} className="astronomy-image">
    <img src={url} alt={title}/>
    </a>

  </div>
)
}

export default Photo;
