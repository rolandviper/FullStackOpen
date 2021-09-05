import React from "react";

const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Content = (props) => {
  console.log(props.parts);
  let part = props.parts;
  return (
    <div>
      <Part title={part[0].name} number={part[0].exercises} />
      <Part title={part[1].name} number={part[1].exercises} />
      <Part title={part[2].name} number={part[2].exercises} />
    </div>
  );
};

const Total = (props) => {
  let part = props.parts;
  return (
    <p>
      Number of exercises
      {part[0].exercises + part[1].exercises + part[2].exercises}
    </p>
  );
};

const Part = (props) => {
  return (
    <p>
      {props.title} {props.number}
    </p>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };
  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  );
};

export default App;
