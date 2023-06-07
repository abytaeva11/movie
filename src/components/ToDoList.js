import React, {useState} from 'react';
import TaskItem from "./pages/TaskItem";
//CRUD-create,read,update,delete
const ToDoList = () => {
    const [title,setTitle]=useState("")
    //щбекти массивке сакташ учун setTask ачтык
    const [tasks,setTasks]=useState([])
    // even деген обекти кабыл алат биздин учурда ал (е)
    // setTitle title значениясын озгортконго жардам берет
    const handleChange=(e)=>{
        setTitle(e.target.value)
    }
const creatTask=()=>{
    const newTask={
        id:tasks.length? tasks[tasks.length-1].id+1: 1,
        name:title,
        isCompleted:false
    }
    setTasks([...tasks,newTask])
}
const deleteTask=( taskId)=>{
        // setTasks((tasks)=>tasks.filter((el)=>el.id !==tasks))
    setTasks((tasks.filter((el)=>el.id !==taskId)))
}

const  editTask=(id,value)=>{
        setTasks((prev)=>prev.map(el=>el.id? {...el,name:value}:el))

}
const  changeStatus=(id)=>{
        setTasks(prev=>prev.map(el=>el.id? {...el,isCompleted:!el.isCompleted}:el))
}
    return (
        <div className="container">
            <h1 className="my-3"> Todo app page</h1>
            <div className="row my-5">
                <div className="col-4 offset-4">
                    <div className="d-flex">
                        <input
                            onChange={handleChange}
                            type="text" className="form-control me-2 "/>
                        <button
                            onClick={creatTask}
                            className="btn btn-primary"> добавить</button>

                    </div>
                    <ul className="list-group my-3">
                        {
                            tasks.map(task=><TaskItem
                                task={task}
                                deleteTask={deleteTask}
                                editTask={editTask}
                            changeStatus={changeStatus}
                            />)
                        }
                    </ul>

                </div>

            </div>

        </div>
    );
};

export default ToDoList;