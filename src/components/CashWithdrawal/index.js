import {Component} from 'react'

import './index.css'

import DenominationItem from '../DenominationItem'

const denominationsList = [
  {
    id: 1,
    value: 50,
  },
  {
    id: 2,
    value: 100,
  },
  {
    id: 3,
    value: 200,
  },
  {
    id: 4,
    value: 500,
  },
]

class CashWithdrawal extends Component {
  state = {amount: 2000}

  cashChange = value => {
    this.setState(prevState => ({amount: prevState.amount - value}))
  }

  render() {
    const {amount} = this.sate
    return (
      <div className="bgContainer">
        <div className="insideContainer">
          <div className="container1">
            <div className="containerS">
              <h1 className="head1">S</h1>
            </div>
            <h1 className="head2">Sarah Williams</h1>
          </div>
          <div className="container2">
            <h1 className="head3">Your Balance</h1>
            <p className="para1">{amount}</p>
          </div>
          <p className="para2">In Rupees</p>
          <p className="para3">Withdraw</p>
          <h1 className="head4">CHOOSE SUM (IN RUPEES)</h1>
          <ul className="container">
            {denominationsList.map(eachItem => (
              <DenominationItem
                denominationsList={eachItem}
                key={eachItem.id}
                cashChange={this.cashChange}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
