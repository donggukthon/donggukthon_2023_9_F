import React from "react";
import { Snowflake } from "./styled";
import snow from "../../assets/images/snow.svg";
import snow2 from "../../assets/images/snow2.svg";

const SnowAnimation = () => {
  const snowflakes = Array.from({ length: 50 }, (_, index) => (
    <Snowflake
      key={`${getRandomSnowflake()}_${index}_${Math.random()}`}
      src={getRandomSnowflake()}
      alt="snow"
      style={getRandomDelay()}
    />
  ));

  return snowflakes;
};

const getRandomSnowflake = () => {
  const snowflakes = [snow, snow2];
  const randomIndex = Math.floor(Math.random() * snowflakes.length);
  return snowflakes[randomIndex];
};

const getRandomDelay = () => {
  const animationDelay = `${(Math.random() * 3).toFixed(2)}s`;
  return { animationDelay };
};

export default SnowAnimation;
