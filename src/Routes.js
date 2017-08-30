import React, {Component} from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import App from './App'
import CharacterData from './CharacterData'
import StarshipData from './StarshipData'
import Characters from './Characters'

const routes = (
    <App>
        <Route path='/:name' component={CharacterData} />
        <Route render={() => {
            return (
                <Characters>
                    <Route path='/:name/:id' component={StarshipData} />
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