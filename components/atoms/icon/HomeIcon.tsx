import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

const HomeSvgComponent = (props: any) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)" fill="#EC994B">
      <Path d="M12 14.992a3 3 0 0 0-3 3v6h6v-6a3 3 0 0 0-3-3Z" />
      <Path d="M17 17.992v6h4a3 3 0 0 0 3-3v-9.12a2 2 0 0 0-.563-1.393l-8.498-9.186a4 4 0 0 0-5.875 0L.581 10.477A2 2 0 0 0 0 11.886v9.105a3 3 0 0 0 3 3h4v-6c.019-2.726 2.22-4.953 4.878-5.017 2.748-.066 5.101 2.198 5.122 5.018Z" />
      <Path d="M12 14.992a3 3 0 0 0-3 3v6h6v-6a3 3 0 0 0-3-3Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default HomeSvgComponent;
