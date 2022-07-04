import { TouchableOpacity } from "react-native";
import { orangeEC994B, white } from "../../../styles/constants";
import { styled } from "../../../styles/globleStyles";

export const WrapButton = styled(TouchableOpacity)<{
  width?: number;
  height?: number;
  color?: string;
}>`
  width: ${props => (props.width ? `${props.width}px` : "100%")};
  height: ${props => (props.height ? `${props.height}px` : "48px")};
  background-color: ${props => (props.color ? props.color : orangeEC994B)};
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
