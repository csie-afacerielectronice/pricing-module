import React, {Component} from 'react'

import Plan from '../components/Plan.js'

class PricingPage extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
        plans: [
      {
        price: 0,
        offer: "No credit card needed",
        call_to_action: "Sign up free",
        value_proposition: "Gold features",
        features: [
          {name: "One image per product"},
          {name: "Free themes"}
        ]
      }, {
        price: 9.99,
        offer: "No credit card needed",
        call_to_action: "Sign up free",
        value_proposition: "Gold features",
        features: [
          {name: "One image per product"},
          {name: "Free themes"}
        ]
      }
    ]
    }
  }
  
  render() {
    return (
      <div id="pricing-page">
        <h1>Super produs software</h1>
        <div id="plans">
            {this.state.plans.map(el => <Plan data={el}/>)}
        </div>
      </div>
    )
  }
}

export default PricingPage