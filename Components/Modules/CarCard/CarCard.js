import Star from "../../SVGs/Star";
import User from "../../SVGs/User";
import Gearbox from "../../SVGs/Gearbox";
import AirConditioner from "../../SVGs/AirConditioner";
import Doors from "../../SVGs/Doors";
import Image from "next/image";
import styles from "./CarCard.module.css";
import clsx from "clsx";

const CarCard = (props) => {
  const {
    id,
    name,
    model,
    year,
    distance,
    location,
    image,
    price,
    category,
    score,
    reviews,
  } = props;
  return (
    <div className={styles.carCards}>
      <Image
        className={styles.cardsImage}
        src={image}
        alt="Car"
        width={300}
        height={200}
      />
      <div className={styles.cardsHeader}>
        <h3 className={styles.cardsName}>
          {name} {model}
        </h3>
        <div className={styles.cardsScore}>
          <Star />
          <div className={styles.scoresNumber}>{score}</div>
          <div className={styles.scoresReview}>({reviews})</div>
        </div>
      </div>
      <div className={styles.cardsInfos}>
        <div className={styles.cardsInfo}>
          <div>
            <i className="bx bxs-calendar"></i>
            <span className={styles.infosText}>{year}</span>
          </div>
          <div>
            <AirConditioner />
            <span className={styles.infosText}>{category}</span>
          </div>
        </div>
        <div className={styles.cardsInfo}>
          <div>
            <Gearbox />
            <span className={styles.infosText}>{location}</span>
          </div>
          <div>
          <i class='bx bx-trip'></i>
            <span className={styles.infosText}>{distance} km</span>
          </div>
        </div>
      </div>
      <div className={styles.cardsPrice}>
        <span className={styles.priceText}>Price</span>
        <span className={styles.priceNumber}>${price}</span>
      </div>
      <button className={clsx(styles.cardsButton, "button")}>
        View Details
      </button>
    </div>
  );
};

export default CarCard;
