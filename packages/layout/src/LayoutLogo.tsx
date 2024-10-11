import { Box } from '@boolfly.chat/fuselage';
import { BoolflyChatLogo } from '@boolfly.chat/logo';
import type { ReactElement } from 'react';

import { useDarkMode } from './DarkModeProvider';
import { useLayoutContext } from './contexts/LayoutContext';

export const LayoutLogo = (): ReactElement => {
  const { logo, logoDark = logo } = useLayoutContext();
  const isDark = useDarkMode();
  return (
    <Box width='100%' maxWidth={224}>
      {(isDark ? logoDark : logo) || <BoolflyChatLogo />}
    </Box>
  );
};
