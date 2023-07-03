import React from "react";
import Styles from "./Coin.module.css";

function Coin({ name, symbol, image, marketCap, price, priceChange24 }) {
  return (
    <div className={Styles.container}>
      <img src={image} alt={name} className={Styles.image}></img>
      <span className={Styles.name}>{name}</span>
      <span className={Styles.symbol}>{symbol.toUpperCase()}</span>
      <span className={Styles.price}>$ {price.toLocaleString()}</span>
      <span
        className={
          priceChange24 > 0 ? Styles.greenPriceChange : Styles.redPriceChange
        }
      >
        % {priceChange24.toFixed(2)}
      </span>
      <span className={Styles.price}>$ {marketCap.toLocaleString()}</span>
    </div>
  );
}

export default Coin;
