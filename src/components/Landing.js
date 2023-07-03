import React, { useState, useEffect } from "react";
import getAllCoins from "../services/api";
import Coin from "./Coin";
import Loading from "./Loading";
import Styles from "./Landing.module.css";

function Landing(props) {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchAPI = async () => {
      setCoins(await getAllCoins());
    };
    fetchAPI();
  }, []);

  const searchHandler = (event) => {
    setSearch(event.target.value);
  };

  const searchCoins = coins.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.symbol.toLowerCase().includes(search.toLowerCase())
  );
  console.log(searchCoins);

  return (
    <div className={Styles.container}>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={searchHandler}
        className={Styles.input}
      ></input>
      <div className={Styles.detailsContainer}>
        <span>Logo</span>
        <span>Name</span>
        <span>Symbol</span>
        <span>Price</span>
        <span>Price Change 24h</span>
        <span>MarketCap</span>
      </div>
      {coins.length ? (
        <div className={Styles.coinContainer}>
          {searchCoins.map((coin) => (
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
      ) : (
        <Loading className={Styles.loader} />
      )}
    </div>
  );
}

export default Landing;
