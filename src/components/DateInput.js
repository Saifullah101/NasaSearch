import React from "react";

const DateInput = props =>
(
  <form onSubmit={props.changeDate }align="center">
  <h6>  Enter a date (YYYY-MM-DD):</h6>
    <input />
    <input type="submit" />
  </form>
);

export default DateInput;
