import React from 'react';
import {Link} from 'react-router-dom'

export default class Home extends React.Component {
  constructor(){
    super();
    this.state= {
      People: []
    }
  }

  
  componentDidMount(){
    var name= this.props.match.params.search;
    fetch('https://swapi.co/api/people/?format=json&search=' + name)
    .then((data) => {
        return data.json();
    })
    .then((data) =>{
        this.setState({
            People: data.results
        })
    })
    .catch((err) => {
        console.log(err);
    })
}


  render() {
    return (
        <div>          
            <button className='btn btn-warning button' onClick={this.props.history.goBack}>back</button>            
            <div className='container'>
            {this.state.People.map((data, number) =>{
                return(
                    <div key={number} className='col-md-3 cols'>
                        <Link to={`${this.props.match.url}/${data.name}`}>
                            <div className='bg-color'>
                                <img className='img-thumbnail image' src={'../images/'+ data.name +'.jpg'} alt='character face' />
                                <h3>{data.name}</h3>
                            </div>
                        </Link>
                    </div>
                )
            })}
            </div>
            
            {this.props.children}
        </div>
      
      
    );
  }
}
