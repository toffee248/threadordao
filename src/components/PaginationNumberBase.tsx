import * as React from "react";
import "./PaginationNumberBase.css";
const PaginationNumberBase = (props: {
  number: string,
  className?: string,
}) => {
  return (
    <div className={`pagination-number-base-3 ${props.className || ""}`}>
      {props.number || "1626"}
    </div>
  );
};
export default PaginationNumberBase;
