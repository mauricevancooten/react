import React, {Component} from 'react'

class CanDoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: [
        {
          title: 'Dishes',
          id: 1
        }, {
          title: 'Mow lawn',
          id: 2
        }, {
          title: 'Groceries',
          id: 3
        }
      ]
    }
  }
  render() {
    const {tasks} = this.state
    return (
      <ol>
        {tasks.map((task) => (<Task title={task.title} key={task.id}/>))}
      </ol>
    )
  }
}

// Representational component
const Task = ({title}) => (
  <li>{title}</li>
)

export default CanDoList
