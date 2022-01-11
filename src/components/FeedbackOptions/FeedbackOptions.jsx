import React from "react";
import { BtnItem, Btn } from "./FeedbackOptions.styled";

function FeedbackOptions({ options, onHandleFeedback }) {
  return options.map((option) => (
    <BtnItem key={option}>
      <Btn type="button" onClick={() => onHandleFeedback(option)}>
        {option}
      </Btn>
    </BtnItem>
  ));
}

export default FeedbackOptions;
