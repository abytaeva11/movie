import React, {useState} from 'react';

const TaskItem = ({task,deleteTask,editTask,changeStatus }) => {
    const [isEdit,setIsEdit]=useState(false)
const [newName,setNewName]=useState(task.name)
    const handleChange=(e)=>{
        setNewName(e.target.value)
    }

const openInput=()=>{
    setIsEdit(true)
    }

const closeInput=(id,value)=>{
    editTask(id,value)
    setIsEdit(false)
}
    return (
        <li className="list-group-item d-flex align-items-center justify-content-between">
            {
                isEdit? <input type="text" onChange={handleChange} defaultValue={newName} className="form-control w-50"/>:
                    <span className={task.isCompleted? "text=decoration_line-through":""}>{task.name}</span>

            }
            <div className="d-flex">
                <input onChange={()=> changeStatus(task.id)}  defaultChecked={task.isCompleted }  type="checkbox"/>
            <button
                onClick={()=>isEdit? closeInput(task.id,newName):openInput()}
                className={`btn ${isEdit?"btn-success":"btn-warning"} mx-2`}>
                {isEdit? "save":"edit"}
            </button>
            <button
                onClick={()=>deleteTask(task.id)}
                className=" btn btn-primary">
                &times;
            </button>
        </div>

        </li>
    );
};

export default TaskItem;