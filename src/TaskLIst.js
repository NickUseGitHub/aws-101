import React from "react";

export default function TaskList(props) {
  const { tasks = [] } = props;

  return (
    <ul>
      {tasks.map(function eachTask(task) {
        return <li key={task.id}>{task.task}</li>;
      })}
    </ul>
  );
}
