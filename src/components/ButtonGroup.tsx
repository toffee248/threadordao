import * as React from "react";
import "./ButtonGroup.css";
import ButtonGroupBase from "./ButtonGroupBase";
import ButtonGroupBase1 from "./ButtonGroupBase1";
const ButtonGroup = (props: {
  buttonGroupBase4: {
    text: string,
  },
  buttonGroupBase2: {
    text: string,
  },
  buttonGroupBase8: {
    text: string,
  },
  buttonGroupBase: {
    text: string,
  },
  buttonGroupBase5: {
    text: string,
  },
  buttonGroupBase7: {
    text: string,
  },
  buttonGroupBase3: {
    text: string,
  },
  buttonGroupBase1: {
    text: string,
  },
  buttonGroupBase6: {
    text: string,
  },
  className?: string,
}) => {
  return (
    <div className={`button-group ${props.className || ""}`}>
      <ButtonGroupBase
        className="button-group-base-instance-4"
        {...props.buttonGroupBase1}
      />
      <ButtonGroupBase1
        className="button-group-base-instance-2"
        {...props.buttonGroupBase3}
      />
      <ButtonGroupBase1
        className="button-group-base-instance-3"
        {...props.buttonGroupBase5}
      />
    </div>
  );
};
export default ButtonGroup;
