import * as React from "react";
import Svg, { Path } from "react-native-svg";

const BackArrowSvgComponent = (props: any) => (
  <Svg
    width={12}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M10 16 2 9l8-7"
      stroke="#46474B"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default BackArrowSvgComponent;
