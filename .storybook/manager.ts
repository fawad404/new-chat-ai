import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

addons.setConfig({
  theme: create({
    base: 'light',

    // Logo
    brandTitle: 'ChatSite Enterprise',
    brandUrl: 'https://github.com/asfandyar-malik',
    brandTarget: '_blank',
  }),
});
