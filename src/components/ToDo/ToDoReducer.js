import { useReducer, useState } from "react"

const ACTIONS = {
    ADD_TODO: 'add-toDo',
    DELETE: 'delete-toDo',
    TOGGLE: 'toggle-toDo',
}

function Reducer( list, action ){
    switch(action.type){
        case ACTIONS.ADD_TODO:
            return [ ...list, Add(action.payload.name)];

        case ACTIONS.TOGGLE:
            return [ ... list,]
}}



function Add(name){
    return{ id: Date.now(), name: name, complete: false }
}

// function Delete(){
//     dispatch({ type: ACTIONS.DELETE });
// }

// function Toggle(){
//     dispatch({ type: ACTIONS.TOGGLE });
// }

export function ToDo(){
    const [ list, dispatch ] = useReducer( Reducer, [] );
    const [ name, setName ] = useState('');  

    console.log(list);

    function handleSubmit(e){
        e.preventDefault();
        dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
        setName('');
    }

    return(
        <>
            {list.map( list => {
                return(
                    <ToDoItem key={list.id} list={list} />
                );
            })}
            <form onSubmit={ handleSubmit }>
                <input placeholder="write new task" type='text' value={name} onChange={ e => setName(e.target.value)} />
            </form>
        </>
    );
}

function ToDoItem({ list }){
    return(
        <div className="flex ">
            <button  className="toDoItem">Toggle</button>
            <p className="toDoItem text" style={{ color: list.completed ? '#AAAAA' : '#00000'}} >
                {list.name}
            </p>
            <button  className="toDoItem">Delete</button>
        </div>
    );
}