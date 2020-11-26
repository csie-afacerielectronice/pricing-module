import React, {Component} from 'react'

class Plan extends Component {
    render() {
        return (
            <div id="plan">
                <div className=".plan-header">
                    <div>{this.props.data.price}</div>
                </div>
                <div className=".plan-features">
                    <ul>
                        {this.props.data.features.map(el => <li>{el.name}</li>  )}
                    </ul>
                </div>
            </div>
        )
    }
}


export default Plan