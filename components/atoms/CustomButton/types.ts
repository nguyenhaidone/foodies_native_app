import { Button } from "react-native";

export interface ICustomButton {
  title: string;
  width?: number;
  height?: number;
  color?: string;
  backgroundColor?: string;
  handleOnPress: (event: UIEvent) => void;
}
