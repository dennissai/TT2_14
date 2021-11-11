import React, { Component } from 'react'; //TODO: Since using React Component
import 'axios';
import Expense from "./Expense";

const data =
  [
    {
      "id": 1,
      "project_id": 2,
      // "category_id": 2,
      "category_name": "NAME1",
      "name": "Server Maintenance",
      "description": "Server maintenance and upgrading work to incorporate BC plans",
      "amount": 30000,
      "created_at": "2021-11-04T16:00:00.000Z",
      "created_by": "Jacky",
      "updated_at": "2021-11-06T16:00:00.000Z",
      "updated_by": "Jacky"
    },
    {
      "id": 2,
      "project_id": 3,
      // "category_id": 4,
      "category_name": "NAME2",
      "name": "Consultant",
      "description": "Consultancy services for integration work",
      "amount": 10000,
      "created_at": "2021-11-06T16:00:00.000Z",
      "created_by": "Helen",
      "updated_at": "2021-11-07T16:00:00.000Z",
      "updated_by": "Helen"
    }


  ]

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    let stateRef = this.state;
    stateRef.result = props.result;

    console.log("Hello world");
  }

  // async componentDidMount() {
  //   axios.get()
  // }

  render() {

    const expenses = data.map(json => <Expense result={json} />)

    // const { id, user_id, name, budget, description } = this.state.result;
    return <div>

      {JSON.stringify(this.state.result)}
      {expenses}
    </div>
  }
}

export default Project;