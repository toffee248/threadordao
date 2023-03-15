import * as React from "react";
import "./ButtonGroupBase1.css";
const ButtonGroupBase1 = (props: { text: string, className?: string }) => {
  return (
    <div className={`button-group-base-1 ${props.className || ""}`}>
      1 Month
    </div>
  );
};
export default ButtonGroupBase1;
