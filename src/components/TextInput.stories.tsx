import { Meta, StoryObj } from "@storybook/react";
import { TextInput, TextInputRootProps, TextInputInputProps } from './TextInput'
import { Envelope } from 'phosphor-react'

export default {
    title: 'Components/TextInput',
    component: TextInput.Root,
    args: {
        children: [
            <TextInput.Input placeholder="Type your e-mail address" />,
            <TextInput.Icon>
                <Envelope />
            </TextInput.Icon>
        ]
       
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            }
        },
    }
} as Meta<TextInputRootProps>

export const Defaut: StoryObj<TextInputRootProps> = {}

export const WithoutIcon: StoryObj<TextInputRootProps> = {
    args: {
        children: <TextInput.Input placeholder="Type your e-mail address" />
    }
} 