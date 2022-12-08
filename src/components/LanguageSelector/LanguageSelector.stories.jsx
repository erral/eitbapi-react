import React from 'react';
import LanguageSelectorComponent from './LanguageSelector';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'LanguageSelector',
  component: LanguageSelectorComponent,
};

export const LanguageSelector = () => <LanguageSelectorComponent />;
