import React from "react";
import {
  black46474B,
  grayC5C4CB,
  orangeEC994B,
} from "../../../styles/constants";
import { CustomLabel } from "../../atoms/CustomLabel/CustomLabel";
import * as S from "./styles";
import { ISectionTitleProps } from "./types";

export const SectionTitle: React.FC<ISectionTitleProps> = ({
  title,
  seeAllAction,
  subScriptions,
}) => {
  return (
    <S.Wrapper>
      <S.WrapCol>
        <CustomLabel
          label={title || "Popular"}
          color={black46474B}
          fontWeight={700}
          fontSize={18}
          textAlign="left"
        />
        <CustomLabel
          label={subScriptions || "See the most popular food on order"}
          color={grayC5C4CB}
          fontWeight={400}
          textAlign="left"
          fontSize={12}
        />
      </S.WrapCol>
      <S.WrapCol>
        <CustomLabel
          label={title || "See all"}
          color={orangeEC994B}
          fontWeight={600}
          textAlign="right"
          fontSize={18}
          onPress={seeAllAction}
        />
      </S.WrapCol>
    </S.Wrapper>
  );
};
