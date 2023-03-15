import * as React from "react";
import "./NavItemBase.css";
import homeLine from "../assets/homeLine.svg";
const NavItemBase = (props: {
  homeLine: string,
  chevronDown: string,
  text: string,
  dot: string,
  badge: {
    badgeBase: {
      text: string,
    },
  },
  className?: string,
}) => {
  return (
    <div className={`nav-item-base ${props.className || ""}`}>
      <img className="home-line" src={props.homeLine || HomeLine} />
      <span className="text-27">{props.text || "Home"}</span>
    </div>
  );
};
export default NavItemBase;
