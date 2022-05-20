import { ToDo } from '../components/ToDo/ToDoReducer';

function ToDoList() {
  return (
    <>
      <div className="toDo">

        <h3 className="toDoTiltle">TO DO LIST</h3>

        <ToDo/>
        
      </div>
    </>
  );
}

export default ToDoList;