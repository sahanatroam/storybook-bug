import { FundamentalProps as BaseFundamentalProps } from '../props';
import { IconLinkVariants } from './icon-link-variants';

type FundamentalProps = Omit<BaseFundamentalProps, 'disabled'>;

export interface IconLinkProps extends FundamentalProps {
  /** The icon selected status */
  selected?: boolean;
  /** The location for the URL link to navigate to */
  href?: string;
  /** Tooltip text if a user hovers on top of the link and aria label */
  label?: string;
  /** Where the linked source will be open in (e.g. new tab) */
  target?: string;
  /** On Click handler for TextLink variant 'button' */
  onClick?: () => void;
  /** Icon to be rendered left of text */
  icon: JSX.Element;
  /** show drop shadow behind the icon */
  shadow?: boolean;
  /** variant color to use for icon */
  variant?: IconLinkVariants;
}
