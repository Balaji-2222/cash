import './index.css'

const DenominationItem = props => {
  const {denominationsList, cashChange} = props
  const {value} = denominationsList

  const changeMoney = () => {
    cashChange(value)
  }

  return (
    <li className="list-container">
      <button className="button" type="button" onClick={changeMoney}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
