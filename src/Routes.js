import React, {Component} from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import App from './App'
import CharacterData from './CharacterData'
import StarshipData from './StarshipData'
import Characters from './Characters'
import Home from './Home'

const routes = (
    <App>
        <Route exact path='/:search' component={Home} />
        <Route path='/:search/:name' component={CharacterData} />
        <Route render={() => {
            return (
                <Characters>
                    <Route path='/:search/:name/:id' component={StarshipData} />
                </Characters>
            )
        }} />
    </App>    
)

class Routes extends Component {
    render() {
        return (
            <Router>
                {routes}
            </Router>
        )
    }
}

export default Routes