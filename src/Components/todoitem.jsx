import React, { useState } from "react";

function TodoItem({ task, toggleTodo, deleteTodo, editTodo }) {

    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(task.task);

    const handleEdit = () => {
        editTodo(task.id, editText); 
        setIsEditing(false); 
    };

    return (
        <li className="flex items-center justify-between p-4 mb-4 bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-200 rounded-lg shadow-md mx-10 ">
            {isEditing ? (
                <>
                  <textarea 
                    className=" flex-1 p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring focus:ring-cyan-300"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    rows={2}
                  />
                  <button
                     className="ml-3 px-4 py-2 text-sm font-medium text-white bg-cyan-600 rounded-md hover:bg-cyan-800"
                     onClick={handleEdit}
                  >
                    Save
                  </button>
                </>
            ) : (
                <>
                  <input
                  type="checkbox"
                  className="mr-3 h-5 w-5 text-violet-950 focus:ring-violet-500"
                  checked={task.completed}
                  onChange={() => toggleTodo(task.id)}
                  />
                  <div
                  className={`flex-1 truncate  ${
                  task.completed ? "line-through text-gray-600" : "text-gray-800"
                  }`}
                  >
                  {task.task}
                  </div>
                  <button
                  className="ml-3 px-4 py-2 text-sm font-medium text-white bg-cyan-600 rounded-md hover:bg-cyan-800"
                  onClick={() => setIsEditing(true)}
                  >
                  Edit
                  </button>
                  <button
                  className="ml-3 px-4 py-2 text-sm font-medium text-white bg-cyan-500 rounded-md hover:bg-red-700"
                  onClick={() => deleteTodo(task.id)}
                  >
                  Delete
                  </button>
                </>
            )}
        </li>
    );
}


export default TodoItem;