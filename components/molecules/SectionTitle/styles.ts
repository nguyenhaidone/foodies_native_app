import { View } from "react-native";
import { styled } from "../../../styles/globleStyles";

export const Wrapper = styled(View)`
  width: 100%;
  display: flex;
  margin: 20px 0px;
  flex-direction: row;
  padding: 0px 10px;
  box-sizing: border-box;
`;

export const WrapCol = styled(View)<{ alignItems?: string }>`
  width: 50%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: ${props => (props.alignItems ? props.alignItems : "flex-start")};
`;
