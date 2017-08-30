import React from 'react'


export default class Info extends React.Component {
    constructor(){
        super();
        this.state= {
            Info: []
        }
    }

    componentDidMount(){
        console.log(this.props)
        fetch('https://swapi.co/api/starships/' + this.props.match.params.id)
        .then((data) => {
            return data.json();
        })
        .then((data) =>{
            this.setState({
                Info: data
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
                    <div  className='starship'>
                        <h3>{this.state.Info.name}</h3>
                        <p>Model: {this.state.Info.model}</p>
                        <p>Length: {this.state.Info.length}</p>
                        <p>Passengers: {this.state.Info.passengers}</p>
                        <p>Class: {this.state.Info.starship_class}</p>
                        <p>Speed: {this.state.Info.max_atmosphering_speed}</p>
                    </div>    
                </div>   
                : null}
            </div>
            
        )
    }
}