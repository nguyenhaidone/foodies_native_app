import React from "react";
import { Text } from "react-native";
import { CustomLabel } from "../../components/atoms/CustomLabel/CustomLabel";
import { FoodBanner } from "../../components/molecules/FoodBanner/FoodBanner";
import { HeaderInfo } from "../../components/molecules/HeaderInfo/HeaderInfo";
import { SectionTitle } from "../../components/molecules/SectionTitle/SectionTitle";
import { ListFoodCard } from "../../components/organisms/ListFoodCard/ListFoodCard";
import * as RootNavigation from "../../navigation/RootNavigation";
import * as S from "./styles";
import { listPopularFoodData } from "./mockData";

export const HomeScreen: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Box>
        <HeaderInfo />
      </S.Box>
      <S.Box justify="flex-start">
        <S.Box width={60} mt={8} mb={25} pl={16}>
          <CustomLabel
            textAlign="left"
            label="Lets find your best favorite food!"
            fontSize={24}
            fontWeight={700}
          />
        </S.Box>
      </S.Box>
      <S.Box height={170}>
        <FoodBanner />
      </S.Box>
      <S.Box>
        <SectionTitle />
      </S.Box>
      <S.Box>
        <ListFoodCard listPopularFoodData={listPopularFoodData} />
      </S.Box>
      <S.Box>
        <SectionTitle />
      </S.Box>
      <S.Box mb={32}>
        <ListFoodCard listPopularFoodData={listPopularFoodData} />
      </S.Box>
    </S.Wrapper>
  );
};
