import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import logo from './sw4.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state= {
      CharacterName: '',
      search: ''
    }
    this.handleChange= this.handleChange.bind(this)
    this.handleSubmit= this.handleSubmit.bind(this)
  }

  handleChange(e){
    this.setState({search: e.target.value});  
  }

  handleSubmit(e){
    e.preventDefault();
  }

  render() {
      return (
        <div className="App">
          <div className="App-header">
            <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
            <h1 className='navtop'>Welcome to React Wars</h1>
            <div className="Search-header">
              <h3 className='navtop'>Search Characters</h3>
              <form className="navbar-form" onSubmit={this.handleSubmit} >
                <div className="input-group">
                  <input className="form-control" placeholder="Search" name="srch" id="srch" type="text" value={this.state.search} onChange={this.handleChange} />
                  <div className="input-group-btn">
                      <Link to={`/${this.state.search}`} ><button className="btn btn-default btn-warning" type="submit"><i className="glyphicon glyphicon-search"></i>	
                      </button></Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {this.props.children}
        </div>
      )
  }
}

export default App