// Parent Component that goes to index.js then index.html
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom"; // imports Router which allows main page then the /about page later in render
import Header from "./components/Layout/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import About from "./components/Pages/About"; // importing the different components
import uuid from "uuid"; // installed and imported to render id's for the different todo items and items created later
import "./App.css"; // import App.css which contains a lot of styling

// Creates class component titled App
class App extends React.Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: "Understand Compenents Better",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "Finish App",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "Add More Notes",
        completed: false
      }
    ]
  };

  // Complete a Task
  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  // Delete a Task
  delTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };

  // Add Todo
  addTodo = title => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  render() {
    return (
      <Router>
        <div className="APP">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={props => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    delTodo={this.delTodo}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
