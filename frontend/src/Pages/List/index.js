import { useEffect, useState } from "react";
import Api from "../../services/Api.js";
import ToDo from "../../Components/toDo";
import "./index.css"

function List() {
    const [description, setDescription] = useState('');
    const [toDos, setToDos] = useState([]);

    //part of adding ToDo
    async function save() {
        await Api.post(`/todo`, { description, checked: 0 });
        //Look for the new update in the bank and put it on the to-do list
        getData();
        setDescription('');
    }
    
    // End the add
    async function remove(id){
        let confirm = window.confirm("Certeza que quer remover essa tarefa?")
        if(confirm){
            await Api.delete(`/todo/${id}`);
            let list = toDos.filter( (item) => item.id !== id )
            setToDos(list)
        }else{
            return;
        }
    }

    // List to-do
    //Get data in DB when run application
    async function getData() {
        let result = await Api.get(`listTodo/`);
        setToDos(result.data.todos)
    }
    
    useEffect(() => {        
        getData();
    }, [])
    
    
    return (
        <>
            <div className="addToDo">
                <span>+</span>
                <input type="text" placeholder="Adicionar uma tarefa" value={description}
                    onChange={(event) => setDescription(event.target.value)}
                />
                <button onClick={save}>Add</button>
            </div>
            { toDos?.map((toDo, key) => <ToDo key={key} data={toDo} remove={remove}/> ) }
            
        </>
    );
}

export default List;