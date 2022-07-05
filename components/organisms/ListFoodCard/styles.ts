import { styled } from "../../../styles/globleStyles";
import { View } from "react-native";

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
    justify-content: ${props => (props.justify ? props.justify : "center")}
    box-sizing: border-box;
  `;
