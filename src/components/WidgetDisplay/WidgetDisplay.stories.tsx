import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import WidgetDisplay from './WidgetDisplay';

export default { 
    title: 'WidgetDisplay',
    component: WidgetDisplay,
} as Meta<typeof WidgetDisplay>;

const Template: StoryFn<typeof WidgetDisplay> = () => <WidgetDisplay />

export const Primary = Template.bind({});
// Primary.args = {
//     userAddress: "",
//     visibility: true, 
//     mode: true
// }