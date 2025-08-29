export function Header(props) {
    const {todos} = props 
    const todosLength = todos.length 
    // create a variable to know if the task is 1 or more 
    const isTaskPlural = todosLength != 1
    const taskOrTasks = isTaskPlural ? 'tasks' : 'task'
    return (
        <header>
            <h1 className="text-gradient">You have {todosLength} open {taskOrTasks}.</h1>
        </header>
    )
} 