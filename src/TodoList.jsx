import { useState } from "react";
import { v4 as uuidv4} from "uuid";
import './TodoList.css'


export default function TodoList()
{
    let [List, setList] = useState([{task : "List-Items",id : uuidv4() , isdone : false}]);
    let [newList , setNewList] = useState("");

let newAddList = () =>{

setList([...List, {task : newList , id: uuidv4() , isdone : false}]);
setNewList("");

};

let updateNewList = (event) =>{

setNewList(event.target.value)

}

let deletetodo = (id) =>{

    setList(List.filter((Todo) => Todo.id != id));



}
let UpperCaseAll = () => {

    setList((Todo) =>
        Todo.map((Todo) => {
            return {
                ...Todo, task: Todo.task.toUpperCase()

            };
        }
    )
    );

};

let  TaskIsDone = (id) => {

    setList((Todo) =>
        Todo.map((Todo) => {

    if(Todo.id == id)
    {
            return {
                ...Todo, isdone : true,
            };

            }
else 
{
    return Todo;
}

    
        
        }
    )
    );

};

return (

<div>
 <h2> Todo List Application</h2>
<br />
<br />

<input type="text" placeholder="ask you list" value={newList} onChange={updateNewList}/>
<br />
<br />
 <button onClick={newAddList} >Add Task</button>

<br />
<br />
<hr />
<h4>Task to the list</h4>
<ul>
    {List.map((Todo) =>(        // map method always use in (array and state) by the render an each element 

    <li key={Todo.id}>
        
       <span style={Todo.isdone ? {textDecorationLine: "Line-through"} : {} }> {Todo.task}</span>
       &nbsp;&nbsp;&nbsp;&nbsp;
       <button onClick={ () => deletetodo(Todo.id)}>delete</button>
       <button onClick={ () => TaskIsDone(Todo.id)}>Task is done</button>
       </li>

    ))}
</ul>
<br />
<br />
<button onClick={UpperCaseAll}>Uppercase</button>


</div>
);





}
