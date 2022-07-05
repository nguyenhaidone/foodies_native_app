import { styled } from "../../../styles/globleStyles";
import { Text } from "react-native";
import { black46474B } from "../../../styles/constants";

export const WrapLabel = styled(Text)<{
  fontSize?: number;
  fontWeight?: number;
  lineHeight?: number;
  color?: string;
  padding?: number;
  margin?: number;
  textAlign?: string;
  width?: number;
}>`
  padding: ${props => (props.padding ? props.padding : 0)}px;
  margin: ${props => (props.margin ? props.margin : 0)}px;
  text-align: ${props => (props.textAlign ? props.textAlign : "center")};
  width: ${props => (props.width ? `${props.width}px` : "100%")};
  font-size: ${props => (props.fontSize ? props.fontSize : 20)}px;
  font-weight: ${props => (props.fontWeight ? props.fontWeight : 400)};
  color: ${props => (props.color ? props.color : black46474B)};
`;
