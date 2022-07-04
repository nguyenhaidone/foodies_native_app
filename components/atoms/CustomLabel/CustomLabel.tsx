import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import * as S from "./styles";
import { ICustomLabel } from "./types";

export const CustomLabel: React.FC<ICustomLabel> = ({
  label,
  fontSize,
  fontWeight,
  color,
  lineHeight,
  margin,
  textAlign,
  padding,
  width,
}) => {
  return (
    <S.WrapLabel
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color}
      lineHeight={lineHeight}
      margin={margin}
      textAlign={textAlign}
      padding={padding}
      width={width}
    >
      {label}
    </S.WrapLabel>
  );
};
