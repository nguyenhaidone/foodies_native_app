import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const BellSvgComponent = (props: any) => (
  <Svg
    width={21}
    height={21}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M13.948 15.805h5.431l-1.526-1.486a2.145 2.145 0 0 1-.478-.697 2.1 2.1 0 0 1-.168-.823V9.46a6.232 6.232 0 0 0-1.196-3.663 6.504 6.504 0 0 0-3.149-2.32v-.361c0-.561-.229-1.099-.636-1.496A2.203 2.203 0 0 0 10.69 1c-.576 0-1.13.223-1.536.62a2.087 2.087 0 0 0-.637 1.495v.36c-2.53.872-4.345 3.223-4.345 5.985v3.34a2.12 2.12 0 0 1-.646 1.519L2 15.805h5.431m6.517 0H7.431m6.517 0v1.057a3.13 3.13 0 0 1-.954 2.243c-.611.595-1.44.93-2.304.93a3.304 3.304 0 0 1-2.305-.93 3.13 3.13 0 0 1-.954-2.243v-1.057"
      stroke="#93A3B4"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Circle cx={16} cy={4} r={4} fill="#EC994B" />
  </Svg>
);

export default BellSvgComponent;
