import React, { useState } from 'react';
import './App.css';
import 'react-calendar/dist/Calendar.css';
import { Supprimer, Modifier, Ajouter, SelectionDate, StatusTache } from './functions.jsx';
import { ButtonAjouter, ButtonSave, ButtonSupprimer, ButtonModifier, ButtonCalendar } from './buttons.jsx';

function App() {
    // useState
    const [list, setList] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [editingTaskId, setEditingTaskId] = useState(null);
    const [editingTaskTitle, setEditingTaskTitle] = useState("");
    const [showCalendarBtn, setShowCalendarBtn] = useState(false);
    const [openCalendarId, setOpenCalendarId] = useState(null);


    return (
        <>
            <h1>Todo List</h1>
            <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Nouvelle Tache"
            />
            <ButtonAjouter Ajouter={() => Ajouter(list, setList, newTask, setNewTask, setShowCalendarBtn)} />
            <ul>
                {list.map((task) => (
                    <li key={task.id} className={`task ${task.status ? 'completed' : ''}`}>
                        <input type="checkbox" checked={task.status} onChange={() => StatusTache(list, setList, task.id)} />
                        {task.id === editingTaskId ? (
                            <>
                                <input
                                    type="text"
                                    value={editingTaskTitle}
                                    onChange={(e) => setEditingTaskTitle(e.target.value)}
                                />
                                <ButtonSave Modifier={() => Modifier(list, setList, editingTaskId, editingTaskTitle, setEditingTaskId, setEditingTaskTitle)} />
                            </>)
                             : (
                            <>
                                <span>{task.title}</span>
                                <ButtonModifier setEditingTaskId={setEditingTaskId} id={task.id} />
                                <ButtonSupprimer Supprimer={() => Supprimer(list, setList, task.id)} id={task.id} />
                                <div className="calendar-container">
                                <ButtonCalendar
                                    setOpenCalendarId={setOpenCalendarId}
                                    openCalendarId={openCalendarId}
                                    task={task}
                                    SelectionDate={(date) => SelectionDate(list, setList, task.id, date, setOpenCalendarId)}
                                    selectedDate={selectedDate}
                                />
                                {task.date && <span className="date">Date: {task.date.toDateString()}</span>}
                                </div>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default App;
