import { useState } from "react";
import NumberInput from "../numberInput/NumberInput";
import styles from "./Card.module.css";
import WallsInput from "../wallsInput/WallsInput";

const Card = () => {
  const [windowsQty, setWindowsQty] = useState(0);
  const [doorsQty, setDoorsQty] = useState(0);

  return (
    <div className={styles.card}>
      <h2 className={styles["card-title"]}>Parede 1</h2>
      <div className={styles["card-inputs"]}>
        <WallsInput />
        <NumberInput
          label={"Quantidade de Portas:"}
          step={1}
          name="doors"
          handleBlur={(e) => setDoorsQty(e.target.value)}
        />
        <NumberInput
          label={"Quantidade de Janelas:"}
          step={1}
          name="windows"
          handleBlur={(e) => setWindowsQty(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Card;
