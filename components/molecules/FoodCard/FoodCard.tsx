import React from "react";
import { IFoodPopular } from "../../../screens/HomeScreen/types";
import { black46474B, grayC5C4CB } from "../../../styles/constants";
import { CustomLabel } from "../../atoms/CustomLabel/CustomLabel";
import * as S from "./styles";

export const FoodCard: React.FC<IFoodPopular> = ({
  name,
  id,
  picUrl,
  price,
  onAddClick,
  subscription,
}) => {
  console.log(name, id, picUrl, price, onAddClick, subscription);
  return (
    <S.Card>
      <S.FoodImage source={require("../../../assets/images/food-1.png")} />
      <S.Box pl={16} pt={8} pb={8} pr={16} justify="flex-start">
        <CustomLabel
          label={name || "Pizza"}
          fontWeight={600}
          fontSize={18}
          color={black46474B}
          textAlign="left"
        />
        <CustomLabel
          label={subscription || "With tommato sauce"}
          fontWeight={500}
          fontSize={14}
          color={grayC5C4CB}
          textAlign="left"
        />
      </S.Box>
      <S.Box
        flexDirection="row"
        justify="space-between"
        pl={16}
        pb={16}
        pr={16}
      >
        <S.Box width={70}>
          <CustomLabel
            label={`${price}` || "$0"}
            color={black46474B}
            fontSize={18}
            fontWeight={700}
            textAlign="left"
          />
        </S.Box>
        <S.Add>+</S.Add>
      </S.Box>
    </S.Card>
  );
};
