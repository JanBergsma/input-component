import type { Meta, StoryObj } from '@storybook/vue3'

import Input from '../components/Input.vue'

import '../assets/Input.css'
// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: 'Input',
  component: Input,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {},
  args: {} // default value
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {}

export const Error: Story = {
  args: { error: true }
}

export const Disabled: Story = {
  args: { disabled: true }
}
export const Text: Story = {
  args: { text: 'Some interesting text.' }
}

export const ErrorText: Story = {
  args: { error: true, text: 'Some interesting text.' }
}

export const StartIcon: Story = {
  args: { startIcon: 'local_grocery_store' }
}

export const EndIcon: Story = {
  args: { endIcon: 'local_grocery_store' }
}

export const Value: Story = {
  args: { value: 'Example Text' }
}

export const InputSizeSm: Story = {
  args: { inputsize: 'sm' }
}

export const InputSizeMd: Story = {
  args: { inputsize: 'md' }
}

export const FullWidth: Story = {
  args: { fullwidth: true }
}

export const Multiline: Story = {
  args: { multiline: true, rows: 4 }
}
