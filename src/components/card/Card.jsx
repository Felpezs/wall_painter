import styles from "./Card.module.css";
import Input from "@/components/numberInput/NumberInput";

const Card = () => {
  return (
    <div className={styles.card}>
      <h2 className={styles["card-title"]}>Parede 1</h2>
      <Input label={"Largura da parede (m):"} name="width" />
      <Input label={"Altura da parede (m):"} name="height" />
      <Input label={"Quantidade de Portas:"} step={1} name="doors" />
      <Input label={"Quantidade de Janelas:"} step={1} name="windows" />
    </div>
  );
};

export default Card;
