import React from 'react';
import axios from "axios";
import PersonList from "./Person/PersonList";
import PersonSingle from "./Person/PersonSingle";
import PersonForm from "./Person/PersonForm";
import "./App.css";

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        persons: [],
        currentPerson: {},
      }

      this.updateCurrentPerson = this.updateCurrentPerson.bind(this);
    }

    componentDidMount() {
      const url = "https://phonebook-react-application.herokuapp.com/persons"; // http://localhost:4000/persons

      axios.get(url)
        .then((Response) => {
          this.setState({
            persons: Response.data
          })
        })
        .catch((error) => {
          console.log(error);
        });
    };

    updateCurrentPerson(item) {
      this.setState({
        currentPerson: item,
      })
    }

    render() {
    return (
      <div className="container-fluid">
        <div className="row">
        <nav>
      <div className="nav-wrapper blue darken-1">
        <a href="/" className="brand-logo">PhoneBook Catalog</a>
      </div>
    </nav>
        </div>
        <div className="row">
          <div className="col s3"><PersonList persons={this.state.persons}
            updateCurrentPerson = {this.updateCurrentPerson}/>
          </div>
          <div className="col s9"><PersonSingle person={this.state.currentPerson}/></div>
        </div>
        <div className="row">
          <div className="col s12"><PersonForm /></div>
        </div>
      </div>
      );
    }
  }

export default App;
