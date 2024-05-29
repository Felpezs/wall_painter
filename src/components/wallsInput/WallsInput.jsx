import NumberInput from "@/components/numberInput/NumberInput";
import { useState } from "react";

const WallsInput = () => {
  const [wallHeight, setWallHeight] = useState(undefined);
  const [wallWidth, setWallWidth] = useState(undefined);
  const [isWallsValid, setIsWallsValid] = useState(undefined);

  const errorMessage =
    "A área da parede deve ter no mínimo 1m² e no máximo 50m²";

  const validateWalls = (width, height) => {
    if (width == undefined || height == undefined) return;

    const area = width * height;
    const isValid = area >= 1 && area <= 50;

    setIsWallsValid(isValid);
  };

  return (
    <>
      <NumberInput
        label={"Largura da parede (m):"}
        step={0.01}
        name="width"
        handleBlur={(e) => {
          setWallWidth(e.target.value);
          validateWalls(e.target.value, wallHeight);
        }}
        isValid={isWallsValid}
        errorMsg={errorMessage}
      />
      <NumberInput
        label={"Altura da parede (m):"}
        step={0.01}
        name="height"
        handleBlur={(e) => {
          setWallHeight(e.target.value);
          validateWalls(wallWidth, e.target.value);
        }}
        isValid={isWallsValid}
        errorMsg={errorMessage}
      />
    </>
  );
};

export default WallsInput;
