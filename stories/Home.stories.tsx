import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import HomePage from '../pages';

export default {
  title: 'Pages/Home',
  component: HomePage,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof HomePage>;

const Template: ComponentStory<typeof HomePage> = (args) => (
  <HomePage {...args} />
);

export const Default = Template.bind({});
Default.args = {};
