import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { addTask } from '../actions/taskAction';

//Materil- UI
import TitleBar from './common/titleBar';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const completeStatus = [
  {
    value: 'Yes',
    label: 'Yes',
  },
  {
    value: 'No',
    label: 'No',
  }
];

class TaskForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      id:0,
      title:"",
      description:"",
      completed:"No",
      toList:false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const player = {
      id:this.state.id,
      title: this.state.title,
      description: this.state.description,
      completed: this.state.completed
    };

    this.props.addTask(player)
    this.setState({
      toList:true
    });
  }

  render() {
    const title="Add a To Do task";
    if(this.state.toList){
      return <Redirect to="/" />;
    }
    return(
      <form className="form" onSubmit={this.handleSubmit}>
        <TitleBar title={title}/>
        <TextField
          required
          id="title"
          name="title"
          label="Title"
          value={this.state.title}
          onChange={this.handleChange}
          margin="normal"
        />
        <br />
        <TextField
          id="description"
          name="description"
          label="Description"
          multiline
          rowsMax="4"
          value={this.state.description}
          onChange={this.handleChange}
          margin="normal"
        />
        <br />
        <TextField
          id="completed"
          select
          label="Completed"
          name="completed"
          value={this.state.completed}
          onChange={this.handleChange}
          helperText="Enter if task is complete"
          margin="normal"
        >
          {completeStatus.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <br />
        <input type="submit" value="Submit" className="submit-button" />
      </form>
    );
  }
}

TaskForm.propTypes = {
  addTask : PropTypes.func.isRequired
}

export default connect(null, { addTask })(TaskForm);
