import React from "react";
import Button from "./Button";

const Header = ({title,showAddTask,toggleShow}) => {
  const handleClick = () => {
    console.log("object");
  };
  return (
    <div className="header">
      <h1>{title}</h1>
   {/*    <Button
        handleClick={handleClick}
        color="purple"
        text="Show AddTask Bar"
      ></Button> */}

        <Button
        handleClick={handleClick}
        color={showAddTask ? "red":"purple"}
        text={ showAddTask? "Close Add Task Bar":"Show AddTask Bar"}
        toggleShow={toggleShow}
      ></Button>
    </div>
  );
};

// Header.defaultProps= {
//     title: "Task Tracker"
// }
export default Header;
