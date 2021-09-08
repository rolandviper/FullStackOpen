import React from "react";

const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Content = ({ part }) => {
  //console.log(part);

  return (
    <ul>
      {part.map((list, i) => (
        <li key={i}>
          <Part item={list} />
        </li>
      ))}
    </ul>
  );
};
const Part = ({ item }) => {
  return (
    <>
      {item.name} - {item.exercises}
    </>
  );
};

const Total = ({ course }) => {
  let sum = course.reduce((total, part) => total + part.exercises, 0);
  // console.log(sum);
  return <h3>The Total amount of exercises is {sum}.</h3>;
};

const Course = ({ course }) => {
  //console.log(props);
  return (
    <>
      <Header course={course.name} />
      <Content part={course.parts} />
      <Total course={course.parts} />
    </>
  );
};

export default Course;
