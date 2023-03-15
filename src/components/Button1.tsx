import * as React from "react";
import "./Button1.css";
import arrowRight2 from "../assets/arrowRight2.svg";
const Button1 = (props: {
  text: string,
  arrowRight: string,
  placeholder: string,
  className?: string,
}) => {
  return (
    <div className={`button-1 ${props.className || ""}`}>
      <span>{props.text || "Next"}</span>
      <img className="arrow-right-2" src={props.arrowRight || arrowRight2} />
    </div>
  );
};
export default Button1;
