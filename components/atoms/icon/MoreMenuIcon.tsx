import * as React from "react";
import Svg, { Path } from "react-native-svg";

const MoreMenuSvgComponent = (props: any) => (
  <Svg
    width={24}
    height={6}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm9 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
      fill="#46474B"
    />
  </Svg>
);

export default MoreMenuSvgComponent;
