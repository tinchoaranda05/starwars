import React, {Component} from 'react'

class Characters extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default Characters