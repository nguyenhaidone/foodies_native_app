import { useNavigationContainerRef } from "@react-navigation/native";
import React from "react";
import { CustomButton } from "../../components/atoms/CustomButton/CustomButton";
import { CustomLabel } from "../../components/atoms/CustomLabel/CustomLabel";
import { black46474B, gray797979 } from "../../styles/constants";
import * as RootNavigation from "../../navigation/RootNavigation";
import * as S from "./styles";

export const WelcomeScreen: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Box width={355}>
        <S.WrapImage
          source={require("../../assets/images/welcome-screen.png")}
        ></S.WrapImage>
      </S.Box>
      <S.Box mt={8} pl={40} pr={40}>
        <CustomLabel
          label="Dont wanna make you have a bad day"
          fontSize={26}
          fontWeight={600}
          color={black46474B}
        ></CustomLabel>
      </S.Box>
      <S.Box mt={32} pl={45} pr={45}>
        <CustomLabel
          label="Our job is delivering a delicious food with fast , free delivery and easy."
          fontSize={14}
          fontWeight={500}
          color={gray797979}
        ></CustomLabel>
      </S.Box>
      <S.Box mt={32} pl={45} pr={45}>
        <CustomButton
          title="Get Started"
          handleOnPress={() => RootNavigation.navigate("Root", {})}
        ></CustomButton>
      </S.Box>
    </S.Wrapper>
  );
};
