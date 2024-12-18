

import TodoItem from "./todoitem";

const Todolist = ({ tasks, toggleTodo, deleteTodo, editTodo }) => {
    return (
        <div>
            {tasks.length === 0 ?(
                <h2 className="text-lg font-bold my-4 mx-9">No Todos Avilable :</h2>
            ):(
                <h2 className="text-lg font-bold my-4 mx-9">Todo List :</h2>
            )}
            <ul>
                {tasks.map((task, index) => (
                    <TodoItem
                      key={task.id}
                      task={task}
                      toggleTodo={toggleTodo}
                      deleteTodo={deleteTodo}
                      editTodo={editTodo}
                    />
                ))}
            </ul>
        </div>
    );
}

export default Todolist;