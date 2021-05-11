import React, { cloneElement, useState } from "react";
import { useTheme } from "styled-components";
import { IconLinkProps } from "../../types/icon-link/icon-link";
import { IconLinkVariants } from "../../types/icon-link/icon-link-variants";
import { StyledAnchor, StyledButton } from "./IconLink.styles";

export const IconLink = ({
  variant = IconLinkVariants.Primary,
}: IconLinkProps): JSX.Element => {
  return <h1>{variant}</h1>;
};
