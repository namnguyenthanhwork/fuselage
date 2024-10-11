import { Icon } from '@boolfly.chat/fuselage';
import { TooltipWrapper } from '@boolfly.chat/layout';
import type { ReactElement } from 'react';

type InformationTooltipTriggerProps = {
  text: string;
};

const InformationTooltipTrigger = ({
  text,
}: InformationTooltipTriggerProps): ReactElement => (
  <TooltipWrapper text={text}>
    <Icon name='info' />
  </TooltipWrapper>
);

export default InformationTooltipTrigger;
