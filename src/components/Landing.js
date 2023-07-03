import React, { useState, useEffect } from "react";
import getAllCoins from "../services/api";
import Coin from "./Coin";

function Landing(props) {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCoins(await getAllCoins());
    };
    fetchAPI();
  }, []);

  return (
    <div>
      <input type="text" placeholder="Search..."></input>
      <div>
        <div>details</div>
        {coins.map((coin) => (
          <Coin
            key={coin.id}
            name={coin.name}
            symbol={coin.symbol}
            image={coin.image}
            price={coin.current_price}
            priceChange24={coin.price_change_24h}
            marketCap={coin.market_cap}
          />
        ))}
      </div>
    </div>
  );
}

export default Landing;
