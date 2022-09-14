import Task from './Task';

const Tasks = ({ tasks }) => {

  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id} text={task.text}/>
      ))}
    </>
  );
};

export default Tasks;
