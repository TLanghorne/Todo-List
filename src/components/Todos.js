import React from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types"; //Specifically this line

const Todos = () => {
  return this.props.todos.map(todo => (
    <TodoItem
      key={todo.id}
      todo={todo}
      markComplete={this.props.markComplete}
      delTodo={this.props.delTodo}
    />
  ));
};

Todos.propTypes = {
  // and also this section
  todos: PropTypes.array.isRequired
};

export default Todos;
