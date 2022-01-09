import React from "react";
import {
  List,
  GoodItem,
  NeutralItem,
  BadItem,
  Item,
} from "./Statistics.styled";

function Statistics() {
  return (
    <>
      <h2>Statistics</h2>
      <List>
        <GoodItem>Good:2</GoodItem>
        <NeutralItem>Neutral:3</NeutralItem>
        <BadItem>Bad:6</BadItem>
        <Item>Total:11</Item>
        <Item>Positive feedback:50%</Item>
      </List>
    </>
  );
}

export default Statistics;
