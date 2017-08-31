import React from 'react';
import {Link} from 'react-router-dom'

export default class People extends React.Component {
    constructor(){
        super();
        this.state= {
            People: []
        }

    }

    componentDidMount(){
        var name= this.props.match.params.name;
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


    render(){
        return(
            <div>
                {this.props.match.isExact ?
                <div className='container'>
                    <button className='btn btn-warning button' onClick={this.props.history.goBack}>back</button>
                    <h2 className='text-center'>{this.props.match.params.name}</h2>
                    {this.state.People.map((data, number) =>{
                        return(
                            <div key={number} className='col-md-3'>
                                <div className='bg-color'>
                                <img className='img-thumbnail image' src={'../images/'+ data.name +'.jpg'} alt='character face' />
                                <p>Age: {data.birth_year}</p>
                                <p>Gender: {data.gender}</p>
                                <p>Eye color: {data.eye_color}</p>
                                <p>Hair color: {data.hair_color}</p>
                                <p>Height: {data.height}</p>
                                {data.starships.map ((info, n) =>{
                                    return(
                                        <div key={n}>
                                            <Link to={`${this.props.match.url}/${info.split("/")[5]}`}><p>Starship {info.split("/")[5]}</p></Link>   
                                        </div>
                                    )
                                })}
                                </div>
                            </div>
                        )
                    })}
                </div>
                : null}
            </div>

        
        )
    }
}