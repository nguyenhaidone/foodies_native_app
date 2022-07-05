import { styled } from "../../../styles/globleStyles";
import { Image, View, Text } from "react-native";
import { orangeEC994B } from "../../../styles/constants";

export const FoodImage = styled(Image)`
  width: 100%;
  height: 145px;
  border-radius: 13px;
`;

export const Card = styled(View)`
  width: 188px;
  height: 250px;
  border-radius: 13px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  margin-right: 10px;
`;

export const Add = styled(Text)`
  width: 32px;
  height: 32px;
  color: white;
  font-size: 20px;
  text-align: center;
  border-radius: 50px;
  background-color: ${orangeEC994B};
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
  height?: number;
  justify?: string;
  flexDirection?: string;
}>`
    padding-left: ${props => (props.pl ? props.pl : 0)}px;
    padding-right: ${props => (props.pr ? props.pr : 0)}px;
    padding-top: ${props => (props.pt ? props.pt : 0)}px;
    padding-bottom: ${props => (props.pb ? props.pb : 0)}px;
    margin-left: ${props => (props.ml ? props.ml : 0)}px;
    margin-right: ${props => (props.mr ? props.mr : 0)}px;
    margin-top: ${props => (props.mt ? props.mt : 0)}px;
    margin-bottom: ${props => (props.mb ? props.mb : 0)}px;
    width: ${props => (props.width ? `${props.width}%` : "100%")};
    height: ${props => (props.height ? `${props.height}px` : "auto")};
    display: ${props => (props.display ? props.display : "flex")};
    flex-direction: ${props =>
      props.flexDirection ? props.flexDirection : "column"};
    justify-content: ${props => (props.justify ? props.justify : "center")}
    box-sizing: border-box;
`;
