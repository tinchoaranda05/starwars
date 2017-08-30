import React from 'react';
import {Link} from 'react-router-dom'
import logo from './sw4.svg';
import './App.css';



export default class App extends React.Component {
  constructor(){
    super();
    this.state= {
      People: [],
      CharacterName: '',
      show: false
    }
    this.handleChange= this.handleChange.bind(this)
    this.handleSubmit= this.handleSubmit.bind(this)
    this.showContent= this.showContent.bind(this)
  }

  handleChange(e){
    this.setState({CharacterName: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();

    var name= e.target.srch.value;
    fetch('https://swapi.co/api/people/?format=json&search=' + name)
    .then((data) => {
        return data.json();
    })
    .then((data) =>{
        this.setState({
            People: data.results,
            show:true
        })
    })
    .catch((err) => {
        console.log(err);
    })
}

showContent(){
  this.setState({
    show: false
  })
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
                <input className="form-control" placeholder="Search" name="srch" id="srch" type="text" value={this.state.name} onChange={this.handleChange} />
                <div className="input-group-btn">
                    <button className="btn btn-default btn-warning" type="submit"><i className="glyphicon glyphicon-search"></i>	
                    </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        {this.state.show ?
        <div className='container'>
          {this.state.People.map((data, number) =>{
              return(
                  <div key={number} className='col-md-3 cols'>
                  <Link to={`/${data.name}`}>
                      <div className='bg-color' onClick={this.showContent}>
                        <img className='img-thumbnail image' src={'../images/'+ data.name +'.jpg'} alt='character face' />
                        <h3>{data.name}</h3>
                      </div>
                    </Link>
                  </div>
              )
          })}
        </div>
        :null }
        {this.props.children}
      </div>
      
      
    );
  }
}
