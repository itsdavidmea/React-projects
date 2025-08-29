import { TodoCard } from "./TodoCard";

export function TodoList(props) {
    const { todos, selectedTab} = props
    
    const filterTodosList = selectedTab === 'All' ?
        todos :
        selectedTab === 'Completed' ?
            todos.filter(val => val.complete) :
            todos.filter(val => !val.complete)

    return (
        <>
            {filterTodosList.map((todo, todoIndex) => {

                return (
                    <TodoCard
                        key={todoIndex}
                        todoIndex = {todoIndex}
                        todo={todo} // this todo will contain the input and the status 
                        {...props} />
                )
            })}
        </>
    )
}