import React, {Component} from 'react';
//import logo from './logo.svg';
//import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: 'Adam',
      todoItems: [{action: 'Buy Flowers', done: false},
      {action: 'Get shoes', done: false},
      {action: 'Collect Tickets', done: true},
      {action: 'Call Joe', done: false} ],
      newItemText: ''
    }
  }
  
  updateNewTextValue = (event) => {
    this.setState({ newItemText: event.target.value})
  }

  createNewTodo = () => {
    if(!this.state.todoItems
      .find(item => item.action === this.state.newItemText)){
        this.setState({
          todoItems: [...this.state.todoItems,
          { action: this.state.newItemText, done: false}],
          newItemText: ''
        });
    }
  }

  todoTableRows = () => this.state.todoItems.map(item => 
    <tr key={ item.action }>
      <td>{ item.aciton }</td>
      <td>
        <input type='checkbox' checked={ item.done }
          onChange= { () => this.toggleTodo(item)}
        />

      </td>
      <td></td>
    </tr>
  )

  toggleTodo = (todo) => this.setState({ todoItems:
    this.state.todoItems.map(item => item.action === todo.action 
      ? {...item, done: !item.done} : item) });
  

  render = () =>
      <div>
        <h4 className="bg-primary text-white text-center p-2">
          {this.state.userName}'s To Do List
          ({ this.state.todoItems.filter(t => !t.done).length} items to do)
        </h4>
        <div className='container-fluid'>
          <div className='my-1'>
            <input className='form-control'
              value={ this.state.newItemText }
              onChange={ this.updateNewTextValue }
            />
            <button className="btn btn-primary m-1"
            onClick={this.createNewTodo}>Add</button>
          </div>
        </div>
      </div>
}

