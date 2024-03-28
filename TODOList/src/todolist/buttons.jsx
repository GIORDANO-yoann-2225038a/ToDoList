import React from 'react';
import Calendar from "react-calendar";
import { IoCalendarNumberSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { IoMdAddCircleOutline } from "react-icons/io";

export const ButtonAjouter = ({ Ajouter }) => (
    <button onClick={Ajouter}><IoMdAddCircleOutline /></button>
);

export const ButtonSave = ({ Modifier }) => (
    <button onClick={Modifier}>Save</button>
);

export const ButtonSupprimer = ({ Supprimer, id }) => (
    <button onClick={() => Supprimer(id)}><MdDelete /></button>
);

export const ButtonModifier = ({ setEditingTaskId, id }) => (
    <button onClick={() => setEditingTaskId(id)}><FaEdit /></button>
);

export const ButtonCalendar = ({ setOpenCalendarId, openCalendarId, task, SelectionDate, selectedDate }) => (
    <button onClick={() => setOpenCalendarId(openCalendarId === task.id ? null : task.id)}>
        <IoCalendarNumberSharp />
        {openCalendarId === task.id && (
            <Calendar onChange={(date) => SelectionDate(date)} value={selectedDate} />
        )}
    </button>
);
