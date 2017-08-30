import React from 'react';
import {Link} from 'react-router-dom'

export default class People extends React.Component {
    constructor(){
        super();
        this.state= {
            People: [],
            show: false
        }
        this.showContent= this.showContent.bind(this)
    }

    componentDidMount(){
        var name= this.props.match.params.name;
        fetch('https://swapi.co/api/people/?format=json&search=' + name)
        .then((data) => {
            return data.json();
        })
        .then((data) =>{
            this.setState({
                show: true,
                People: data.results
            })
            console.log( this.state.People);
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

    render(){
        return(
            <div>
                {this.state.show ?
                <div className='container'>
                    <button className='btn btn-warning button' onClick={this.props.history.goBack}>back</button>
                    <h3 className='text-center'>CHARACTERS:</h3>
                    {this.state.People.map((data, number) =>{
                        return(
                            <div key={number} className='col-md-3'>
                                <div className='bg-color'>
                                <h3>{data.name}</h3>
                                <p>Age: {data.birth_year}</p>
                                <p>Gender: {data.gender}</p>
                                <p>Eye color: {data.eye_color}</p>
                                <p>Hair color: {data.hair_color}</p>
                                <p>Height: {data.height}</p>
                                {data.starships.map ((info, n) =>{
                                    return(
                                        <div key={n}>
                                            <Link to={`${this.props.match.url}/${info.split("/")[5]}`}><p onClick={this.showContent}>Starship {info.split("/")[5]}</p></Link>   
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