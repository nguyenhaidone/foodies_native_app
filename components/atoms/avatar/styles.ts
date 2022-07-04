import { View, Image } from "react-native";
import { styled } from "../../../styles/globleStyles";

export const WrapImage = styled(View)<{ width?: number; height?: number }>`
  width: ${props => (props.width ? props.width : 45)}px;
  height: ${props => (props.height ? props.height : 45)}px;
  border-radius: 50%;
`;

export const ImageScale = styled(Image)`
  width: 100%;
  height: 100%;
`;
