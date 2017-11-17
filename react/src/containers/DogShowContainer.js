import React, { Component } from 'react';
import ComponentToRender from './RelativePath'
import DataToUse from './RelativePath'

class DogShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: ''
    }
    this.someFunction = this.someFunction.bind(this)
  }

  componentDidMount() {
      //throw debugger
      let dogId = this.props.params.id
      fetch(`/api/v1/dogs/${dogId}`)
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
        //you can throw a debugger it should return some sort of hash/json thingy that we can call body.name and body.description.
        this.setState({
         name: body.name,
         description: body.description
        })
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    return(
      <div>
        <DogShow
          name={this.state.name}
          description={this.state.description}
        />
      </div>
    )
  }
}
export default DogShowContainer;
