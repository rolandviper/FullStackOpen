import React, { useState } from "react";

const Button = ({ onclick, text }) => {
  return <button onClick={onclick}>{text}</button>;
};

const StatisticalLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = (props) => {
  let all = props.good + props.neutral + props.bad;
  let avg = (props.good * 1 + props.neutral * 0 + props.bad * -1) / all;
  let pve = (props.good / all) * 100 + "%";

  if (all === 0) {
    return (
      <>
        <h1>Statistics</h1>
        <h6>Waiting for Feedback</h6>
      </>
    );
  }

  return (
    <div>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <StatisticalLine text="Good" value={props.good} />
          <StatisticalLine text="Neutral" value={props.neutral} />
          <StatisticalLine text="Bad" value={props.bad} />
          <StatisticalLine text="All" value={all} />
          <StatisticalLine text="Average" value={avg} />
          <StatisticalLine text="Positive" value={pve} />
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button text="Good" onclick={() => setGood(good + 1)} />
      <Button text="Neautral" onclick={() => setNeutral(neutral + 1)} />
      <Button text="Bad" onclick={() => setBad(bad + 1)} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
