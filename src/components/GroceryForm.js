import React from 'react';

const GroceryForm = (props) => {
  return (
    <form onSubmit={ (event) => { event.preventDefault(); alert('Form was submitted'); } }>
      <input type="text" placeholder="name of grocery" />
      <input type="submit" value="Add To List" />
    </form>
  );
};

export default GroceryForm;
