import React from 'react';
import Button from 'material-ui/Button';

export default class AddTodo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formInput: ''
    };
  }

  onChange = e => {
    this.setState({formInput: e.target.value})
  };

  onSubmit = e => {
    e.preventDefault();
    this.addIt();
  };

  addTodo = e => {
    e.preventDefault();
    this.addIt();
  };

  addIt() {
    const newTodoName = this.state.formInput.trim();
    if(newTodoName) {
      this.props.onNewTodo({
        name: newTodoName
      });
      this.setState({
        formInput: ''
      });
    }
  }

  render() {
    return (
      <form className="add-todo" onSubmit={this.onSubmit}>
        <input
          type="text"
          placeholder="Add list item"
          onChange={this.onChange}
          value={this.state.formInput}
        />
        <Button variant="raised" color="primary" type='button' onClick={this.addTodo}>Add</Button>
      </form>
    );
  }
}
