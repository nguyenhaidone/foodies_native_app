import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

const UserSvgComponent = (props: any) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)" fill="#46474B" fillOpacity={0.4}>
      <Path d="M21 24h-2v-5.043A2.96 2.96 0 0 0 16.043 16H7.957A2.96 2.96 0 0 0 5 18.957V24H3v-5.043A4.963 4.963 0 0 1 7.957 14h8.086A4.963 4.963 0 0 1 21 18.957V24ZM12 12a6 6 0 1 1 0-12 6 6 0 0 1 0 12Zm0-10a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default UserSvgComponent;
