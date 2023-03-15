import * as React from "react";
import "./ButtonGroupBase.css";
const ButtonGroupBase = (props: { text: string, className?: string }) => {
  return (
    <div className={`button-group-base ${props.className || ""}`}>
      <span className="text-31">{props.text || "1 Day"}</span>
    </div>
  );
};
export default ButtonGroupBase;
