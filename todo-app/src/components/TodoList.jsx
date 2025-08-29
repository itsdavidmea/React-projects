import { TodoCard } from "./TodoCard";

export function TodoList(props) {
    const { todos } = props

    return (
        <>
            {todos.map((todo, todoIndex) => {

                return (
                    <TodoCard key={todoIndex} todoIndex={todoIndex} {...props}/>
                )
            })}
        </>
    )
}