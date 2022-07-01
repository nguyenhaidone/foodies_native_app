import baseStyled, { ThemedStyledInterface } from "styled-components";
import * as C from "./constants";

export const defaultThemes = {
  color: {
    ...C.colorTheme,
  },
};

export type DefaultTheme = typeof defaultThemes;

export const styled = baseStyled as ThemedStyledInterface<DefaultTheme>;
