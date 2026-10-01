import Todoitem from "./Todoitem";

const TodoItems = ({ todoItems }) => {
  return (
    <div className="item-container">
      {todoItems.map((item) => (
        <Todoitem
          key={item.name}
          todoDate={item.dueDate}
          todoName={item.name}
        />
      ))}
    </div>
  );
};

export default TodoItems;