import React from 'react'
import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {

  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'task 1',
      day: 'feb 1, 2021 at 2:30pm',
      reminder: false,
    },
    {
      id: 2,
      text: 'task 2',
      day: 'feb 2, 2021 at 2:30pm',
      reminder: false,
    },
    {
      id: 3,
      text: 'task 3',
      day: 'feb 3, 2021 at 2:30pm',
      reminder: false,
    }
  ])

  //Add Task 

  const addTask = (task) => {
    // console.log(task);
    const id = Math.floor(Math.random() * 1000) +1;

    const newTask = { id, ...task};
    
    setTasks([...tasks, newTask]);

  }


  //delete Task

  const deleteTask = (id) => {
    // console.log('Delete :: ', id);
    setTasks(tasks.filter((task) => task.id !== id))
  }


  // toggle reminder 

  const toggleReminder = (id) => {
    // console.log(id);
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className="container">
      <Header onAdd={ () => setShowAddTask(!showAddTask) } showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask} />}
      {/* title="Hello" */}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Tasks to Show'}
    </div>
  );
}





// class App extends React.Component {
//   render() {
//     return <h1>Hello from a Class</h1>
//   }
// }

export default App;
