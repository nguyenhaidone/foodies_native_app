import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { IAvatarProps } from "./types";
import * as S from "./styles";
// import { avatar } from "../../../assets/images/avatar.png";

export const Avatar: React.FC<IAvatarProps> = ({ image }) => {
  return (
    <S.WrapImage>
      <S.ImageScale
        source={require("../../../assets/images/avatar.png")}
      ></S.ImageScale>
    </S.WrapImage>
  );
};
