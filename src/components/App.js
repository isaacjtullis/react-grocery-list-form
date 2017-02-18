import React from 'react';
import GroceryList from './GroceryList';
import GroceryForm from './GroceryForm';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      groceries: [],
      name: ''
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleButtonClick = this.handleButtonClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    let newName = event.target.value
    this.setState({ name: newName })
  }

  handleFormSubmit(event) {
    event.preventDefault()
    let newId = this.state.groceries.length
    let newGrocery = {
      id: newId,
      name: this.state.name
    }
    let newGroceries = [...this.state.groceries, newGrocery]
    this.setState({
      groceries: newGroceries,
      name: ''
    })
  }

  handleButtonClick(id) {
    let newGroceries = this.state.groceries.filter(grocery => {
      return grocery.id !== id
    })
    this.setState({ groceries: newGroceries})
  }

  render() {
    console.log('Apps state name value is: ', this.state.name)
    console.log(this.state.groceries)
    return(
      <div>
        <h1>Grocery List React</h1>
        <GroceryForm
          handleFormSubmit={this.handleFormSubmit}
          handleChange={this.handleChange}
          name={this.state.name}
        />
        <GroceryList
          groceries={this.state.groceries}
          handleButtonClick={this.handleButtonClick}
        />
      </div>
    )
  }
}

export default App
