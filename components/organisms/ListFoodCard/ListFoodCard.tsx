import React from "react";
import { FlatList } from "react-native";
import { IFoodPopular } from "../../../screens/HomeScreen/types";
import { FoodCard } from "../../molecules/FoodCard/FoodCard";
import { IListFoodCardProps } from "./types";

export const ListFoodCard: React.FC<
  IListFoodCardProps
> = listPopularFoodData => {
  const [listPopularFood, setListPopularFood] = React.useState<IFoodPopular[]>(
    []
  );
  React.useEffect(() => {
    setListPopularFood(listPopularFoodData.listPopularFoodData || []);
  }, []);

  return (
    <FlatList
      data={listPopularFood}
      renderItem={({ item }) => <FoodCard {...item} />}
      keyExtractor={item => item.id}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    />
  );
};
