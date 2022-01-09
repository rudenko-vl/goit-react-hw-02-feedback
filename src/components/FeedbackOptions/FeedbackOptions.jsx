import React from "react";
import { BtnList, BtnItem } from "./FeedbackOptions.styled";

function FeedbackOptions() {
  return (
    <BtnList>
      <BtnItem>
        <button>Good</button>
      </BtnItem>
      <BtnItem>
        <button>Neutral</button>
      </BtnItem>
      <BtnItem>
        <button>Bad</button>
      </BtnItem>
    </BtnList>
  );
}

export default FeedbackOptions;
