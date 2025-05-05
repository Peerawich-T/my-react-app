import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Reminder  () {
  const [reminders, setReminders] = useState([]);
  const [input, setInput] = useState('');
  

  const navigate = useNavigate();
  const addReminder = () => {
    if (input.trim() === '') return;
    setReminders([...reminders, input]);
    setInput('');
  };
  
  return(
    <div>
        <input
            type="text"
            placeholder="Add reminder..."
            value ={input}
            onChange ={e => setInput(e.target.value)}
        />
        <button onClick={addReminder}>Add</button>
        <ul>
        {reminders.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
        </ul>
        <button onClick={() => navigate('/newPage', {state :{msg : "U always mean so much."}})}>Go To NewPage</button>
    </div>
  )
}

export default Reminder;