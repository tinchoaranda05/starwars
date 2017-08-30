import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import logo from './sw4.svg';
import './App.css';
import People from './People'

const App = () => (
    <div className="App">
        <h1>holaaa</h1>
      </div>
)


/*
class App extends Component {
  constructor(){
    super();
    this.state= {
      PersonID: ''
    }
    this.searchPeople= this.searchPeople.bind(this)
  }


  searchPeople(e){
    this.setState({
      PersonID: e
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Welcome to React Wars</h1>
          <div className="Search-header">
            <h4 className=''>Search Characters</h4>
            <form className="navbar-form" onSubmit={this.handleSubmit} >
              <div className="input-group">
                <input className="form-control" placeholder="Search" name="srch" id="srch" type="text" value={this.state.ArtistName} onChange={this.handleChange} />
                <div className="input-group-btn">
                    <button className="btn btn-default btn-info" type="submit"><i className="glyphicon glyphicon-search"></i>	
                    </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <People name='r' getPerson={this.searchPeople} />
      </div>
    );
  }
}
*/

const index = (char) => (

        <div>
          <h1>hola {char.match.params.name}</h1>
          {console.log(char.match)}
        </div>

)
export default index;
