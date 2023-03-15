import * as React from "react";
import "./TableHeader.css";
const TableHeader = (props: { text: string, className?: string }) => {
  return (
    <div className={`table-header ${props.className || ""}`}>
      <span className="text-28">{props.text || "tweet"}</span>
    </div>
  );
};
export default TableHeader;
