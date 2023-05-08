import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import PendingState from './PendingState';

export default { 
    title: 'PendingState',
    component: PendingState,
} as Meta<typeof PendingState>;

const Template: StoryFn<typeof PendingState> = (args) => <PendingState {...args} />

export const Primary = Template.bind({});
Primary.args = {
    bodyMessage: "Primary"
}