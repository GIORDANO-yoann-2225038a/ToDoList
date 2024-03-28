export const Supprimer = (list, setList, id) => {
    setList(list.filter(task => task.id !== id));
}

export const Modifier = (list, setList, editingTaskId, editingTaskTitle, setEditingTaskId, setEditingTaskTitle) => {
    if (editingTaskId !== null && editingTaskTitle.trim() !== "") {
        setList(list.map(task => {
            if (task.id === editingTaskId) {
                return { ...task, title: editingTaskTitle };
            }
            return task;
        }));
        setEditingTaskId(null);
        setEditingTaskTitle("");
    }
}

export const Ajouter = (list, setList, newTask, setNewTask, setShowCalendarBtn) => {
    if (newTask.trim() !== "") {
        const newId = list.length > 0 ? list[list.length - 1].id + 1 : 1;
        setList([...list, { id: newId, title: newTask, status: false, date: null }]);
        setNewTask("");
        setShowCalendarBtn(true);
    }
}

export const SelectionDate = (list, setList, id, date, setOpenCalendarId) => {
    const updatedList = list.map(task => {
        if (task.id === id) {
            return { ...task, date: date };
        }
        return task;
    });
    setList(updatedList);
    setOpenCalendarId(null);
}


export const StatusTache = (list, setList, id) => {
    setList(list.map(task => {
        if (task.id === id) {
            return { ...task, status: !task.status };
        }
        return task;
    }));
}
