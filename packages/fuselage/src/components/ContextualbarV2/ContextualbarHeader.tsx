import { css } from '@boolfly.chat/css-in-js';
import type { ComponentProps } from 'react';
import { memo } from 'react';

import Box from '../Box';

type ContextualbarHeaderProps = ComponentProps<typeof Box>;

const ContextualbarHeader = ({
  children,
  ...props
}: ContextualbarHeaderProps) => (
  <Box
    display='flex'
    alignItems='center'
    height='x44'
    pi={16}
    borderBlockEndWidth='default'
    borderBlockColor='extra-light'
    flexShrink={0}
    {...props}
  >
    <Box
      display='flex'
      alignItems='center'
      justifyContent='space-between'
      flexGrow={1}
      height='100%'
      overflow='hidden'
      className={css`
        gap: 8px;
      `}
    >
      {children}
    </Box>
  </Box>
);

export default memo(ContextualbarHeader);
