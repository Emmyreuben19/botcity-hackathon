import React from "react";
import "./media.css";
import { mediaIcons } from "./mediaData";

const Media = () => {
  return (
    <div className="media">
      <p>Follow us on social media for updates</p>

      <div className="single__container">
          <div className="single">
          <a rel="noreferrer" target="_blank" href={mediaIcons.instagram}>
            <i class="fab fa-2x fa-instagram single__icon"></i>
          </a>
        </div>

        <div className="single">
          <a rel="noreferrer" target="_blank" href={mediaIcons.discord}>
            <i class="fab fa-2x fa-discord single__icon"></i>
          </a>
        </div>

        <div className="single">
          <a rel="noreferrer" target="_blank" href={mediaIcons.linkedin}>
            <i class="fab fa-2x fa-linkedin-in single__icon"></i>
          </a>
        </div>
        <div className="single">
          <a rel="noreferrer" target="_blank" href={mediaIcons.twitter}>
            <i class="fab fa-2x fa-twitter single__icon"></i>
          </a>
        </div>
        <div className="single">
          <a rel="noreferrer" target="_blank" href={mediaIcons.devpost}>
            <i class="fab fa-2x fa-dev single__icon"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Media