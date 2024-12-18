

import { useState } from 'react';

const Header = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask(''); 
    }
  };

  return (
    <div className='container rounded-xl p-5 bg-cyan-100'>
      <h1 className='font-bold font-serif text-center text-xl mb-8 p-1'>PLAN AND ACHIEVE </h1>
      <form className='m-4 ' onSubmit={handleSubmit}>
      <h2 className='font-bold text-lg mx-18 my-3 text-slate-950'>Add a Todo</h2>
        <input 
          type="text"
          className='w-80 font-primary bg-slate-50 text-center '
          placeholder='Add a new task'
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type='submit' className='bg-slate-600 hover:bg-slate-900 p-3 py-1 text-sm font-bold text-white rounded-md mx-6'>Add Task</button>
      </form>
    </div>
  );
};

export default Header;