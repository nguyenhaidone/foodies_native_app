import { View } from "react-native";
import { styled } from "../../../styles/globleStyles";

export const WrapBanner = styled(View)`
  width: 100%;
  height: 100%;
  border-radius: 20px;
`;
// export const WrapBanner = styled(View)<{ bannerUrl?: string }>`
//   background-image: url(${props =>
//     props.bannerUrl ? props.bannerUrl : "../../../assets/images/katsu.png"});
//   background-size: contain;
//   width: 100%;
//   border-radius: 20px;
// `;
