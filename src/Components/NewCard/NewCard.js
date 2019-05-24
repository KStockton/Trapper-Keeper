import React, { Component } from 'react'

export default class NewCard extends Component {
  constructor() {
    super()
    
    this.state = {
      title: '',
      listItem: '',
      notes: []
    }
  }

  handleChange = event => {
      const { name , value } = event.target
      this.setState({[ name ]: value } )
  }

  
handleKeyPress = () => {
  const {title, listItem, notes} = this.state
  const newNote = {id: Date.now(), title, text: listItem, completed: false}
  this.setState({notes: [...notes, newNote],
    listItem: ''})
}

  render() {
    const {title, listItem, notes} = this.state
    console.log(notes)
    return (
      <div>
        <form >
          <input 
          name='title'
          value={this.state.title}
          placeholder='title'
          onChange={this.handleChange}
          />
          <input
          name='listItem'
          value={this.state.listItem}
          placeholder='listItem'
          onChange={this.handleChange}
          onKeyPress={(event) => {
            if(event.key === 'Enter') this.handleKeyPress() }}
          />
        </form>
      </div>
    )
  }
}
