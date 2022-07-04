export interface IHomescreenProps {
  avatar?: string;
  destination?: string;
  bestFavoritesFoodBanner?: string;
  listPopularFood?: IFoodPopular[];
}

export interface IFoodPopular {
  id: any;
  picUrl?: string;
  subscription?: string;
  price?: string;
  onAddClick?: () => void;
}
