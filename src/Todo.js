import React from 'react';
import Button from 'material-ui/Button';

export default class Todo extends React.Component {

  toggleDone = () => {
    this.props.doneChange(this.props.todo.id);
  };

  onClick = e => {
    e.preventDefault();
    this.props.deleteTodo(this.props.todo.id);
  };

  render() {
    const {todo} = this.props;
    const className = todo.done ? 'done-todo cf' : 'cf';
    return (
      <div className={`todo ${className} todo-${todo.id}`}>
        <span className="toggle-todo" onClick={this.toggleDone}>
          {todo.name}
        </span>
        <Button variant="raised" color="secondary" className="delete-todo" onClick={this.onClick}>
          Delete
        </Button>
      </div>
    );
  }
}
