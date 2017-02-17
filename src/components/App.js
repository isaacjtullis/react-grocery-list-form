import React from 'react';
import GroceryList from './GroceryList';
import GroceryForm from './GroceryForm';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleButtonClick = this.handleButtonClick.bind(this)
  }

  handleFormSubmit(event) {
    event.preventDefault()
    alert('Form was submitted')
  }

  handleButtonClick(event) {
    alert('Button was clicked')
  }

  render() {
    let groceryData = [
      { id: 1, name: "Oranges" },
      { id: 2, name: "Bananas" },
      { id: 3, name: "Bread" }
    ]
    return(
      <div>
        <h1>Grocery List React</h1>
        <GroceryForm handleFormSubmit={this.handleFormSubmit} />
        <GroceryList
          groceries={groceryData}
          handleButtonClick={this.handleButtonClick}
        />
      </div>
    )
  }
}

export default App
/*

<form onSubmit={ (event) => { event.preventDefault(); alert('Form was submitted') } }>
  <input type="text" placeholder="name of grocery" />
  <input type="submit" value="Add To List" />
</form>
*/
