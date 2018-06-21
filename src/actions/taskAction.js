import { FETCH_TASKS, ADD_NEW_TASK, EDIT_TASK, DELETE_TASK,COMPLETE_TASK } from './type';

export const fetchTasks = () => dispatch => {
  fetch('https://practiceapi.devmountain.com/api/tasks')
      .then(res => res.json())
      .then(data =>
        dispatch({
          type: FETCH_TASKS,
          payload: data
        })
      );
};

export const addTask = (taskData) => dispatch => {
  fetch('https://practiceapi.devmountain.com/api/tasks',{
    method: 'POST',
    headers: {
      'content-type':'application/json'
    },
    body: JSON.stringify(taskData)
  })
  .then(res => res.json())
  .then(task =>
    dispatch({
      type: ADD_NEW_TASK,
      payload: task
    })
  );
};

export const editTask = (taskData) => dispatch => {
  fetch('https://practiceapi.devmountain.com/api/tasks/'+taskData.id,{
    method: 'PATCH',
    headers: {
      'content-type':'application/json'
    },
    body: JSON.stringify(taskData)
  })
  .then(res => res.json())
  .then(task =>
    dispatch({
      type: EDIT_TASK,
      payload: task
    })
  );
};

export const deleteTask = (taskData) => dispatch => {
  fetch('https://practiceapi.devmountain.com/api/tasks/'+taskData.id,{
    method: 'DELETE',
    headers: {
      'content-type':'application/json'
    },
    body: JSON.stringify(taskData)
  })
  .then(res => res.json())
  .then(task =>
    dispatch({
      type: DELETE_TASK,
      payload: task
    })
  );
};

export const completeTask = (taskData) => dispatch => {
  fetch('https://practiceapi.devmountain.com/api/tasks/'+taskData.id,{
    method: 'PUT',
    headers: {
      'content-type':'application/json'
    },
    body: JSON.stringify(taskData)
  })
  .then(res => res.json())
  .then(task =>
    dispatch({
      type: COMPLETE_TASK,
      payload: task
    })
  );
};
