import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import ReputexWidget from './ReputexWidget';

export default { 
    title: 'ReputexWidget',
    component: ReputexWidget,
} as Meta<typeof ReputexWidget>;

const Template: StoryFn<typeof ReputexWidget> = (args) => <ReputexWidget {...args} />

export const Primary = Template.bind({});
Primary.args = {
    userAddress: "",
    visibility: true, 
    mode: true
}