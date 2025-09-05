import * as React from 'react';

import { cn } from '../../lib/utils';
import UnstyledLink, { UnstyledLinkProps } from './UnstyledLink';

type PrimaryLinkVariant = 'primary' | 'basic';
type PrimaryLinkProps = {
  variant?: PrimaryLinkVariant;
} & UnstyledLinkProps;

const PrimaryLink = React.forwardRef<HTMLAnchorElement, PrimaryLinkProps>(
  ({ className, children, variant = 'primary', ...rest }, ref) => {
    return (
      <UnstyledLink
        ref={ref}
        {...rest}
        className={cn(
          'inline-flex items-center',
          'focus-visible:ring-primary-500 focus:outline-hidden focus-visible:rounded-sm focus-visible:ring-3 focus-visible:ring-offset-2',
          'font-medium',
          //#region  //*=========== Variant ===========
          variant === 'primary' && [
            'text-primary-500 hover:text-primary-600 active:text-primary-700',
            'disabled:text-primary-200',
          ],
          variant === 'basic' && [
            'text-black hover:text-gray-600 active:text-gray-800',
            'disabled:text-gray-300',
          ],
          //#endregion  //*======== Variant ===========
          className,
        )}
      >
        {children}
      </UnstyledLink>
    );
  },
);

PrimaryLink.displayName = 'PrimaryLink';

export default PrimaryLink;
