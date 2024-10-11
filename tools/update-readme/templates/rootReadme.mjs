import outdent from 'outdent';

import { depsBadge } from './badges/depsBadge.mjs';
import { npmVersionBadge } from './badges/npmVersionBadge.mjs';
import { boolflyChatLogo } from './boolflyChatLogo.mjs';

const pkgIcon = '\ud83d\udce6';

export const rootReadme = (pkgs) => outdent`
  ${boolflyChatLogo}

  <h1 align="center">Fuselage Monorepo</h1>

  ![Issues](https://img.shields.io/github/issues/boolfly/fuselage?style=flat-square)
  ![Pull requests](https://img.shields.io/github/issues-pr/boolfly/fuselage?style=flat-square)
  ![GitHub commit activity](https://img.shields.io/github/commit-activity/m/boolfly/fuselage?style=flat-square)

  | Package | Description | Version | Dependencies |
  |---------|-------------|---------|--------------|
  ${pkgs
    .map(
      (pkg) =>
        `| ${[
          `${pkgIcon} [\`${pkg.name}\`](/packages/${pkg.dirname})`,
          pkg.description ?? '',
          npmVersionBadge(pkg),
          depsBadge(pkg),
        ].join(' | ')} |`
    )
    .join('\n')}

`;
