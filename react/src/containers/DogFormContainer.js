import React, { Component } from 'react';
//DONT FORGET THE IMPORTS

class DogFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: ''
    }
    this.someFunction = this.someFunction.bind(this)
  }

  clearForm() {
    this.setState({
      name: '',
      description: ''
    })
  }

  handleFormSubmit(event) {
    event.preventDefault();
    let formPayLoad = {
      name: this.state.name,
      description: this.state.description
    }
    this.props.addNewDog(formPayLoad)
    this.clearForm();

  }


  handleChangeName(event){
    this.setState({ name: event.target.name })
  }

  handleChangeDescription(event) {
    this.setState({ description: event.target.description })
  }


  render() {
    return(
      <div>
        <TitleField handleChangeName={this.handleChangeName}/>
        <BodyField handleChangeDescription={this.handleChangeDescription}/>
      </div>
    )
  }
}
export default DogFormContainer;
