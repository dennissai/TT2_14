import React, { Component } from 'react'; //TODO: Since using React Component


class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    let stateRef = this.state;
    stateRef.result = props.result;

    console.log("Hello world");
  }

  render() {

    // const { id, user_id, name, budget, description } = this.state.result;
    return <div>

      {JSON.stringify(this.state.result)}
    </div>
  }
}

export default Project;