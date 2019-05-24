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
    const { notes} = this.state
    console.log(notes)
    let todos = notes.filter(note => note.completed === false).map(incomplete => {
      return <section key={incomplete.id}>
              <i class="material-icons" onClick={this.handleComplete}>check_box_outline_blank</i>
              <input className="material-icon" value={incomplete.text}/>
              <i class="material-icons">delete_forever</i>
            </section>

    })

     

    
    return (
      <div>
        <form className="NewCard-form">
          <input 
          type="text"
          name='title'
          value={this.state.title}
          placeholder='title'
          onChange={this.handleChange}
          />
          <input
          type="text"
          name='listItem'
          value={this.state.listItem}
          placeholder='listItem'
          onChange={this.handleChange}
          onKeyPress={(event) => {
            if(event.key === 'Enter') this.handleKeyPress() }}
          />
        </form>
        {todos}
      </div>
    )
  }
}
