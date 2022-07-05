import React from "react";
import { Image } from "react-native";
import { Avatar } from "../../atoms/avatar/Avatar";
import { CustomLabel } from "../../atoms/CustomLabel/CustomLabel";
import BellSvgComponent from "../../atoms/icon/bell";
import MenuSvgComponent from "../../atoms/icon/MenuIcon";
import * as S from "./styles";
import { IHeaderInfoProps } from "./types";

export const HeaderInfo: React.FC<IHeaderInfoProps> = () => {
  return (
    <S.WrapHeader>
      <S.Box flexDirection="row">
        <Avatar />
        <S.Box width={240} ml={8}>
          <CustomLabel
            label="Deliver to"
            fontSize={12}
            fontWeight={400}
            textAlign="left"
          />
          <CustomLabel
            label="Your Destination"
            fontSize={16}
            fontWeight={600}
            textAlign="left"
          />
        </S.Box>
        <S.Box flexDirection="row" width={150} ml={8}>
          <S.Box width={20} mr={20}>
            <BellSvgComponent />
          </S.Box>
          <S.Box width={20}>
            <MenuSvgComponent />
          </S.Box>
        </S.Box>
      </S.Box>
    </S.WrapHeader>
  );
};
