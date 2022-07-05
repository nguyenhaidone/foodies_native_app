import * as React from "react";
import Svg, { Path } from "react-native-svg";

const MenuSvgComponent = (props: any) => (
  <Svg
    width={28}
    height={25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M27.5 20.882c0 .756-.613 1.368-1.368 1.368H15.118a1.368 1.368 0 1 1 0-2.736h11.014c.756 0 1.368.611 1.368 1.368ZM27.5 12.625c0 .756-.613 1.368-1.368 1.368H1.368a1.368 1.368 0 0 1 0-2.736h24.764c.756 0 1.368.613 1.368 1.368ZM26.132 5.736a1.368 1.368 0 0 0 0-2.736H9.618a1.368 1.368 0 0 0 0 2.736h16.514Z"
      fill="#93A3B4"
    />
  </Svg>
);

export default MenuSvgComponent;
