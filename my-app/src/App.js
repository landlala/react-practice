import {useState, useEffect} from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [cost, setCost] = useState();
  const [money, setMoney] = useState();
  const [empty, setEmpty] = useState(true);
  const onChange = (event) => {
    setCost(event.target.value);
  }
  const calMoney = (event) => {
    setMoney(event.target.value);
    setEmpty(false);
  }
  
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then(response => response.json())
      .then(json => {
        setCoins(json);
        setLoading(false);
      })
  }, [])

  return (
    <div>
      {loading ? <strong>loading...</strong> : 
        <select onChange={onChange}>
          {coins.map((coin, index) => 
            <option key={index} value={coin.quotes.USD.price}>
              {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
            </option>
          )}
        </select>
      }
      <div>
        <input onChange={calMoney}
          value={money}
          type="number" 
          placeholder="write something" />
      </div>
      {empty ? null : <h3>{money / cost}</h3>}
    </div>
  )
}

export default App;