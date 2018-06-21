import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchTasks } from '../actions/taskAction';
import { Link } from 'react-router-dom';
import ToDoTile from './toDoTile';

//Material-UI
import TitleBar from './common/titleBar';
import AddToDoButton from './common/addToDoButton';

class ToDoView extends Component {
  componentWillMount(){
    this.props.fetchTasks();
  }

  componentWillReceiveProps(prop){
    if (prop.newTask) {
      this.props.tasks.push(prop.newTask);
    }
  }

  render() {
    const taskItems = this.props.tasks.map(task =>
            <ToDoTile key={task.id} task={task} />
          ),
          title = "To Do List";

    return (
      <div className="todo-list-container">
        <TitleBar title={title} />
        <Link to="/addTask">
          <AddToDoButton />
        </Link>
        {taskItems}
      </div>
    );
  }
}

ToDoView.propTypes = {
  fetchTasks: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired,
  newTask: PropTypes.object
}

const mapStateToProps = state => ({
  tasks: state.tasks.items,
  newTask: state.tasks.item
});

export default connect(mapStateToProps, { fetchTasks })(ToDoView);
