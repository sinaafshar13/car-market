import clsx from "clsx";
import styles from "./Cars.module.css";
import Star from "../../SVGs/Star";
import User from "../../SVGs/User";
import Gearbox from "../../SVGs/Gearbox";
import AirConditioner from "../../SVGs/AirConditioner";
import Doors from "../../SVGs/Doors";
import Image from "next/image"; // Assuming you're using Next.js
import Car1 from "../../../public/Images/car1.png";
const Cars = () => {
  return (
    <section className="section cars" id="cars">
      <div className="sectionHeader">
        <h4 className="sectionTitle">Popular Cars</h4>
        <h1 className="sectionSub">Most popular cars for deal</h1>
      </div>
      <div className={clsx(styles.carsContainer, "container", "grid")}>
        <div className={styles.carCards}>
          <Image
            className={styles.cardsImage}
            src={Car1}
            alt="Car"
            width={300}
            height={200}
          />
          <div className={styles.cardsHeader}>
            <h3 className={styles.cardsName}>Car Name</h3>
            <div className={styles.cardsScore}>
              <Star />
              <div className={styles.scoresNumber}>4.5</div>
              <div className={styles.scoresReview}>(2,446 reviews)</div>
            </div>
          </div>
          <div className={styles.cardsInfos}>
            <div className={styles.cardsInfo}>
              <User />
              <span className={styles.infosText}>4 Passagers</span>
            </div>
            <div className={styles.cardsInfo}>
              <Gearbox />
              <span className={styles.infosText}>Auto</span>
            </div>
            <div className={styles.cardsInfo}>
              <AirConditioner />
              <span className={styles.infosText}>Air Conditioning</span>
            </div>
            <div className={styles.cardsInfo}>
              <Doors />
              <span className={styles.infosText}>4 Doors</span>
            </div>
          </div>
          <div className={styles.cardsPrice}>
            <h4 className={styles.priceText}>Price</h4>
            <h2 className={styles.priceNumber}>$1,000</h2>
          </div>
          <button className={clsx(styles.cardsButton, "button")}>
            View Details
          </button>
        </div>
        <div className={styles.carCards}>
          <Image src={Car1} alt="Car" width={300} height={200} />
          <div className={styles.cardsHeader}>
            <div className={styles.cardsName}>Car Name</div>
            <div className={styles.cardsScore}>
              <Star />
              <div className={styles.scoresNumber}>4.5</div>
              <div className={styles.scoresReview}>(120 Reviews)</div>
            </div>
          </div>

          <div className={styles.cardsInfos}>
            <div className={styles.cardsInfo}>
              <User />
              <div className={styles.infosText}>4 Seats</div>
            </div>
            <div className={styles.cardsInfo}>
              <Gearbox />
              <div className={styles.infosText}>Automatic</div>
            </div>
            <div className={styles.cardsInfo}>
              <AirConditioner />
              <div className={styles.infosText}>A/C Available</div>
            </div>
            <div className={styles.cardsInfo}>
              <Doors />
              <div className={styles.infosText}>4 Doors</div>
            </div>
          </div>

          <div className={styles.cardsPrice}>
            <h4 className={styles.priceText}>Price</h4>
            <h2 className={styles.priceNumber}>$1,000</h2>
          </div>

          <button className={clsx(styles.cardsButton, "button")}>
            View Details
          </button>
        </div>
        <div className={styles.carCards}>
          <Image src={Car1} alt="Car" width={300} height={200} />
          <div className={styles.cardsHeader}>
            <div className={styles.cardsName}>Car Name</div>
            <div className={styles.cardsScore}>
              <Star />
              <div className={styles.scoresNumber}>4.5</div>
              <div className={styles.scoresReview}>(120 Reviews)</div>
            </div>
          </div>

          <div className={styles.cardsInfos}>
            <div className={styles.cardsInfo}>
              <User />
              <div className={styles.infosText}>4 Seats</div>
            </div>
            <div className={styles.cardsInfo}>
              <Gearbox />
              <div className={styles.infosText}>Automatic</div>
            </div>
            <div className={styles.cardsInfo}>
              <AirConditioner />
              <div className={styles.infosText}>A/C Available</div>
            </div>
            <div className={styles.cardsInfo}>
              <Doors />
              <div className={styles.infosText}>4 Doors</div>
            </div>
          </div>

          <div className={styles.cardsPrice}>
            <h4 className={styles.priceText}>Price</h4>
            <h2 className={styles.priceNumber}>$1,000</h2>
          </div>

          <button className={clsx(styles.cardsButton, "button")}>
            View Details
          </button>
        </div>
        <div className={styles.carCards}>
          <Image src={Car1} alt="Car" width={300} height={200} />
          <div className={styles.cardsHeader}>
            <div className={styles.cardsName}>Car Name</div>
            <div className={styles.cardsScore}>
              <Star />
              <div className={styles.scoresNumber}>4.5</div>
              <div className={styles.scoresReview}>(120 Reviews)</div>
            </div>
          </div>

          <div className={styles.cardsInfos}>
            <div className={styles.cardsInfo}>
              <User />
              <div className={styles.infosText}>4 Seats</div>
            </div>
            <div className={styles.cardsInfo}>
              <Gearbox />
              <div className={styles.infosText}>Automatic</div>
            </div>
            <div className={styles.cardsInfo}>
              <AirConditioner />
              <div className={styles.infosText}>A/C Available</div>
            </div>
            <div className={styles.cardsInfo}>
              <Doors />
              <div className={styles.infosText}>4 Doors</div>
            </div>
          </div>

          <div className={styles.cardsPrice}>
            <h4 className={styles.priceText}>Price</h4>
            <h2 className={styles.priceNumber}>$1,000</h2>
          </div>

          <button className={clsx(styles.cardsButton, "button")}>
            View Details
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cars;
