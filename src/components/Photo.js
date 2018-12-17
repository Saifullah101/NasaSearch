import React from "react";
const Photo = props =>
<div>
<h5>{props.photo.title}</h5>
  <img src={props.photo.url} id = "nas" alt={props.photo.title} />
  <p>{props.photo.explanation}</p>
</div>
export default Photo;
