import React, { useState } from "react";

const Button = (props) => {
  const { fn, text } = props;
  return <button onClick={fn}>{text}</button>;
};

const MostVotesAnec = ({ anec, num }) => {
  if (num === 0) {
    return (
      <>
        <h2>Anecdote with most votes.</h2>
        <h4>There isn't any votes yet.</h4>
      </>
    );
  }

  return (
    <>
      <h2>Anecdote with most votes</h2>
      <h3>{anec}</h3>
      <h4>with {num} votes</h4>
    </>
  );
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
  ];

  var votes = new Uint8Array(anecdotes.length);

  const [selected, setSelected] = useState(0);
  const [currentvote, setvotes] = useState(votes);

  const random = () => {
    let num;
    num = Math.floor(Math.random() * anecdotes.length);
    return num;
  };

  const RandomAnecdotes = () => {
    setSelected(random());
  };

  const AddVote = () => {
    let current = [...currentvote];
    current[selected] += 1;
    setvotes(current);
  };

  let maxIndex = currentvote.indexOf(Math.max(...currentvote));
  let maxVotes = Math.max(...currentvote);

  return (
    <div>
      <h1>Anedcote of the Day:</h1>
      <h3> {anecdotes[selected]}</h3>
      <br></br>
      current anecdote has {currentvote[selected]} votes;
      <br></br>
      <Button text="vote" fn={AddVote} />
      <Button text="next anecdote" fn={RandomAnecdotes} />
      <br></br>
      <MostVotesAnec anec={anecdotes[maxIndex]} num={maxVotes} />
    </div>
  );
};

export default App;
