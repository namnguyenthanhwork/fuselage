import { Throbber } from '@boolfly.chat/fuselage';
import { HeroLayout, HeroLayoutTitle } from '@boolfly.chat/layout';
import type { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

const ConfirmationProcessPage = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <HeroLayout>
      <HeroLayoutTitle>{t('page.confirmationProcess.title')}</HeroLayoutTitle>
      <Throbber size='x16' inheritColor={true} />
    </HeroLayout>
  );
};

export default ConfirmationProcessPage;
