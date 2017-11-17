import React, { Component } from 'react';
//DONT FORGET THE IMPORTS

class DogIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      description: ''
    }
    this.addNewDog = this.addNewDog.bind(this)
  }

  componentDidMount(){
    fetch('/api/v1/dogs')
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({
       id: body.id,
       name: body.name,
       description: body.description
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  addNewDog(newDog){
    fetch('/api/v1/dogs', {
      method: "POST",
      body: JSON.stringify(newDog)
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      let updatedDog = this.state.dogs.concat(body)
      this.setState({
        dogs: updatedDog
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }



  render() {
    return(
      <div>
        <DogTile dogs={this.state.dogs}/>
        <DogShowContainer />
        <DogFormContainer addNewDog={this.addNewDog}/>
      </div>
    )
  }
}
export default DogIndexContainer;
