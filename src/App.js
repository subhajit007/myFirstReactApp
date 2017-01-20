import React, { Component } from 'react';
import Projects from './components/Projects';
import AddProject from './components/AddProject';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      projects : []
    }
  }
  componentWillMount(){
    this.setState({projects:[{
      title: 'Business Website',
      category: 'Web Design'
    },
    {
      title: 'Social App',
      category: 'Mobile Development'
    },
    {
      title: 'Ecommerce Shopping Cart',
      category: 'Web Development'
    }]})
  }
  render() {

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>WOO HOO!</h2>
          <h3>My First React App Project Management</h3>
        </div>
            <div className="App-intro">
              <AddProject/>
          <Projects projects={this.state.projects}/>
          </div>
      </div>
    );
  }
}

export default App;
