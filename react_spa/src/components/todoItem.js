import React from 'react';
import './todoItem.css';
import {Button, Glyphicon} from 'react-bootstrap'


export default class TodoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  removeTodo(id) {
    this.props.removeTodo(id);
  }

  render() {
    return (
      <div className="todoWrapper">
        <Button className="removeTodo" onClick={(e)=> this.removeTodo(this.props.id) }>Complete</Button>{this.props.todo.text}
      </div>
    );
  }
}
