import * as React from "react";
import "./NavItemBase1.css";
import settings from "../assets/settings.svg";
const NavItemBase1 = (props: {
  badge: {
    badgeBase: {
      text: string,
    },
  },
  dot: string,
  chevronDown: string,
  text: string,
  settings: string,
  className?: string,
}) => {
  return (
    <div className={`nav-item-base-1 ${props.className || ""}`}>
      <img className="settings" src={props.settings || settings} />
      <span className="text-30">{props.text || "Settings"}</span>
    </div>
  );
};
export default NavItemBase1;
