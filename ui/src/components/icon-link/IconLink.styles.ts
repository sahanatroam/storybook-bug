import styled, { css } from 'styled-components';
import { IconLinkProps } from '../../types/icon-link/icon-link';

const baseTextLinkStyles = css<Partial<IconLinkProps>>`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  min-width: 44px;
  min-height: 44px;
  justify-content: center;
  ${({ shadow }) =>
    shadow &&
    `
    svg {
      -webkit-filter: drop-shadow(2px 1px 3px rgba(230, 0, 0, 0.5));
      filter: drop-shadow(2px 1px 3px rgba(230, 0, 0, 0.5));
    }
  `}
`;

export const StyledAnchor = styled.a<Partial<IconLinkProps>>`
  ${baseTextLinkStyles};
`;

export const StyledButton = styled.button<Partial<IconLinkProps>>`
  ${baseTextLinkStyles};
  padding: 0;
  margin: 0;
  appearance: none;
  border: none;
  background: none;
  cursor: pointer;
`;
