import React from 'react';

export default class Service extends React.Component {
    constructor(){
        super()
        this.state= {
            PeopleList: []
        }
        this.searchPeople= this.searchPeople.bind(this)
    }

    searchPeople(name){
        fetch('https://swapi.co/api/people/?format=json&search=' + name)
        .then((data) => {
            return data.json();
        })
        .then((data) =>{
            this.state.PeopleList.push(data)
            this.setState({
                PeopleList: this.state.PeopleList
            })
        })
        .catch((err) => {
            console.log(err);
        })
    }

    render(){
        return(
            <div>hola</div>
        )
    }
}