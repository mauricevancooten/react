import React, {Component} from 'react'

class CanDoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: [
        {title: 'Dishes', id: 1},
        {title: 'Mow lawn', id: 2},
        {title: 'Groceries', id: 3}
      ]
    }
  }
  render() {
    return (
      // Container component
      <ol>
        {this.state.tasks.map( (task) => {
          return <Task title={task.title} key={task.id}/>
        })}
      </ol>
    )
  }
}
// Representational component
const Task = function(props) {
  return (
    <li>{props.title}</li>
  )
}

export default CanDoList
