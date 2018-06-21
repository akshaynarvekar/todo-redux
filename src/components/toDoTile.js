import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteTask } from '../actions/taskAction';

//Material-UI

class ToDoTile extends Component {
  constructor(props){
    super(props);

    this.handleDeleteTasks = this.handleDeleteTasks.bind(this);
  }

  handleDeleteTasks(event){
    this.props.deleteTask(this.props.task);
  }

  render() {
    const title = "ToDo List";
    return (
      <div className="todo-tile-container">
        <p>Task Title: {this.props.task.title}</p>
        <button className="submit-button">Complete</button>
        <Link
          to={{
            pathname: '/editTask',
            state: { task : this.props.task }
          }}>
          <button className="view-button">View</button>
        </Link>
        <button onClick={this.handleDeleteTasks} className="delete-button">Delete</button>
      </div>
    );
  }
}

ToDoTile.propTypes = {
  deleteTask : PropTypes.func.isRequired
}

export default connect(null, { deleteTask })(ToDoTile);
