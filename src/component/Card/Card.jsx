import style from "./card.module.scss";

function Card(props) {
  const { tariff, price, speed, speedlimit, titleColor, priceColor, selected } =
    props;
  const priceParts = price.split(" ");
  return (
    <div className={`${style.wrapper} ${style[selected]}`}>
      <h3 className={`${style[titleColor]} ${style.title}`}>{tariff}</h3>
      <p className={`${style[priceColor]} ${style.priceContainer}`}>
        {priceParts.map((part, index) => (
          <span
            key={index}
            className={`${style.cardPrice} ${style[`pricePart${index + 1}`]}`}
          >
            {part}
          </span>
        ))}
      </p>
      <p className={style.speed}>{speed}</p>
      <p className={style.speedLimit}>{speedlimit}</p>
    </div>
  );
}

export default Card;
