import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { gray797979 } from "../../../styles/constants";
import { CustomLabel } from "../../atoms/CustomLabel/CustomLabel";
import * as S from "./styles";
import { IFoodBanner } from "./types";

export const FoodBanner: React.FC<IFoodBanner> = ({ bannerUrl }) => {
  return (
    <S.WrapBanner>
      <ImageBackground
        style={{ width: "100%", height: "100%" }}
        resizeMode="contain"
        source={bannerUrl || require("../../../assets/images/katsu.png")}
      >
      </ImageBackground>
    </S.WrapBanner>
  );
};
