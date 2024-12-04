import clsx from "clsx";
import styles from "./Cars.module.css";
import Link from "next/link";
import carsData from "../../Data/CarsData";
import CarCard from "../../Modules/CarCard/CarCard";
const Cars = () => {
  return (
    <section className="section cars" id="cars">
      <div className="sectionHeader">
        <h4 className="sectionTitle">Popular Cars</h4>
        <h1 className="sectionSub">Most popular cars for deal</h1>
      </div>
      <div className={clsx(styles.carsContainer, "container", "grid")}>
        {carsData.map((carData) => (
          <CarCard key={carData.id} {...carData} />
        ))}
      </div>
      <div className="textAlign">
        <Link
          href="/CarList"
          className={clsx(styles.carsButton, "button", "buttonFlex")}
        >
          Show all vehicles
          <i
            className={clsx(styles.carsButtonIcon, "bx bx-right-arrow-alt")}
          ></i>
        </Link>
      </div>
    </section>
  );
};

export default Cars;
