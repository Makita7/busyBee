import { useReducer, useState } from "react"



const ACTIONS = {
    ADD_TODO: 'add-toDo',
    DELETE: 'delete-toDo',
    TOGGLE: 'toggle-toDo',
    CLEAR: 'clear-list',
}



function Reducer( list, action ){
    switch(action.type){
        case ACTIONS.ADD_TODO:
            return [ ...list, Add(action.payload.name)];

        case ACTIONS.TOGGLE:
            return list.map( list => {
                if (list.id === action.payload.id){
                    return{ ...list, complete: !list.complete}
                }
                return list;
            })
        case ACTIONS.DELETE:
            return list.filter( list => list.id !== action.payload.id )

        case ACTIONS.CLEAR:
            return list = []

        default:
            return list;
}}



function Add(name){
    return{ id: Date.now(), name: name, complete: false }
}



function ToDoItem({ list, dispatch }){
    return(
        <div className="flex ">
            <button  className="toDoItem" onClick={() => dispatch({ type: ACTIONS.TOGGLE, payload: { id: list.id }})} > Toggle </button>
            <p className={list.complete ? "toDoItem text complete" : "toDoItem text incomplete"} >
                {list.name}
            </p>
            <button onClick={() => dispatch({ type: ACTIONS.DELETE, payload: {id: list.id} })}  className="toDoItem" >Delete</button>
        </div>
    );
}



export function ToDo(){
    const [ list, dispatch ] = useReducer( Reducer, [] );
    const [ name, setName ] = useState('');  

    function handleSubmit(e){
        e.preventDefault();
        dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
        setName('');
    }

    return(
        <>
            {list.map( list => {
                return(
                    <ToDoItem key={list.id} list={list} dispatch={dispatch} />
                );
            })}
            <button onClick={() => dispatch({ type: ACTIONS.CLEAR }) }>CLEAR</button>
            <form onSubmit={ handleSubmit }>
                <input placeholder="write new task" type='text' value={name} onChange={ e => setName(e.target.value)} />
            </form>
        </>
    );
}
