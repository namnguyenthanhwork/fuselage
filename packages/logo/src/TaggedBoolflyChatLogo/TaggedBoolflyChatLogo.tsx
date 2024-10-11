import colors from '@boolfly.chat/fuselage-tokens/colors.json';
import type { ReactElement } from 'react';

import BoolflyChatLogo from '../BoolflyChatLogo';
import { LogoContainer, LogoTag } from './TaggedBoolflyChatLogo.styles';

type TaggedBoolflyChatLogoProps = {
  tagTitle?: string;
  tagBackground?: string;
  color?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const TaggedBoolflyChatLogo = ({
  tagTitle,
  tagBackground = colors.r400,
  color = colors.white,
  ...props
}: TaggedBoolflyChatLogoProps): ReactElement => (
  <LogoContainer {...props}>
    <BoolflyChatLogo />
    {tagTitle && (
      <LogoTag backgroundColor={tagBackground} color={color}>
        {tagTitle}
      </LogoTag>
    )}
  </LogoContainer>
);

export default TaggedBoolflyChatLogo;
