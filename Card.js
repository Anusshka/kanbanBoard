import React from "react";
import "./Card.css";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHoriz";
import CircleIcon from "@mui/icons-material/Circle";

function Card({ ticket }) {
  return (
    <div className="card">
      <div className="card_top">
        <div className="card_top_labels">{ticket.id}</div>
      </div>
      <div className="card_title">{ticket.title}</div>
      <div className="card_footer">
        <MoreHorizOutlinedIcon />
        <div className="request">
          <CircleIcon />
          {ticket.tag[0]}
        </div>
      </div>
    </div>
  );
}

export default Card;
