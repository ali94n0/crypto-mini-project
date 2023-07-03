import React from "react";

function Coin({ name, symbol, image, marketCap, price, priceChange24 }) {
  return (
    <div>
      <img src={image} alt={name}></img>
      <span>{name}</span>
      <span>{symbol.toUpperCase()}</span>
      <span>$ {price.toLocaleString()}</span>
      <span>% {priceChange24.toFixed(2)}</span>
      <span>$ {marketCap.toLocaleString()}</span>
    </div>
  );
}

export default Coin;
