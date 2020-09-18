import React from "react";
import ReplayIcron from "@material-ui/icons/Replay";
import CloseIcron from "@material-ui/icons/Close";
import StarRateIcron from "@material-ui/icons/StarRate";
import FavoriteIcron from "@material-ui/icons/Favorite";
import FlashOnIcron from "@material-ui/icons/FlashOn";

import IconButton from "@material-ui/core/IconButton";

import "./SwipeButtons.css";

function SwipeButtons() {
  return (
    <div className="swipeButtons">
      <IconButton className="swipeButtons__repeat">
        <ReplayIcron fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__left">
        <CloseIcron fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__star">
        <StarRateIcron fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__right">
        <FavoriteIcron fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__lightning">
        <FlashOnIcron fontSize="large" />
      </IconButton>
    </div>
  );
}

export default SwipeButtons;
