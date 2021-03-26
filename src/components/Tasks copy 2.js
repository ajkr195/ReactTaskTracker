import  { useState} from 'react'


const Tasks = () => {
const [tasks, setTasks] = useState ([
    {
        id : 1,
        text: 'task 1',
        day: 'feb 1, 2021 at 2:30pm',
        reminder: false,
    },
    {
        id : 2,
        text: 'task 2',
        day: 'feb 2, 2021 at 2:30pm',
        reminder: false,
    },
    {
        id : 3,
        text: 'task 3',
        day: 'feb 3, 2021 at 2:30pm',
        reminder: false,
    }
])

    return (
        <>

        {tasks.map((task) => (
            <h3 key={ task.id }>{task.text}</h3>
        ))}
            
        </>
    )
}

export default Tasks
