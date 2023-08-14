import React from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import "./Cancel.css";
function Cancel() {
  return (
    <div className="cancel">
      <CancelIcon style={{ fontSize: "20px" }} />
      <span className="title">Canceled</span>
      <span>0</span>
    </div>
  );
}
export default Cancel;
