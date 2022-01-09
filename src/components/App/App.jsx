import React, { Component } from "react";
import Section from "../Section/Section";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Statistics from "../Statistics/Statistics";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions />
        <Statistics />
      </Section>
    );
  }
}

export default App;
