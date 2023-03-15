import * as React from "react";
import "./AvatarLabelGroup.css";
import avatar from "../assets/avatar.svg";
const AvatarLabelGroup = (props: {
  text: string,
  supportingText: string,
  avatar: string,
  className?: string,
}) => {
  return (
    <div className={`avatar-label-group ${props.className || ""}`}>
      <img className="avatar" src={props.avatar || Avatar} />
      <div className="flex-container-29">
        <span className="text-29">{props.text || "Maks Tashkent"}</span>
        <span className="supporting-text">
          {props.supportingText || "maks@tashkent.com"}
        </span>
      </div>
    </div>
  );
};
export default AvatarLabelGroup;
