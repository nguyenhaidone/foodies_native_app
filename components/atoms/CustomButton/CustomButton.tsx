import React from "react";
import { ICustomButton } from "./types";
import * as S from "./styles";
import { CustomLabel } from "../CustomLabel/CustomLabel";
import { white } from "../../../styles/constants";

export const CustomButton: React.FC<ICustomButton> = ({
  title,
  width,
  height,
  color,
  backgroundColor,
  handleOnPress,
}) => {
  return (
    <S.WrapButton
      width={width}
      height={height}
      color={backgroundColor}
      onPress={(e: any) => handleOnPress(e)}
    >
      <CustomLabel label={title} color={color || white} />
    </S.WrapButton>
  );
};
