import { View, Image } from "react-native";
import { styled } from "../../styles/globleStyles";

export const Wrapper = styled(View)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  box-sizing: border-box;
`;

export const WrapImage = styled(Image)`
  margin-top: 80px;
  width: 100%;
`;

export const Box = styled(View)<{
  pl?: number;
  pr?: number;
  pt?: number;
  pb?: number;
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
  display?: string;
  width?: number;
}>`
  padding-left: ${props => (props.pl ? props.pl : 0)}px;
  padding-right: ${props => (props.pr ? props.pr : 0)}px;
  padding-top: ${props => (props.pt ? props.pt : 0)}px;
  padding-bottom: ${props => (props.pb ? props.pb : 0)}px;
  margin-left: ${props => (props.ml ? props.ml : 0)}px;
  margin-right: ${props => (props.mr ? props.mr : 0)}px;
  margin-top: ${props => (props.mt ? props.mt : 0)}px;
  margin-bottom: ${props => (props.mb ? props.mb : 0)}px;
  width: ${props => (props.width ? `${props.width}px` : "100%")};
  display: ${props => (props.display ? props.display : "flex")};
  box-sizing: border-box;
`;
