import { addons } from 'storybook/manager-api'
import { create } from 'storybook/theming'

import { version } from '../package.json'

// テーマを指定すると OS のダークモードに従わなくなるので、既定と同じく読み込み時の設定に合わせる
const base = window.matchMedia('(prefers-color-scheme: dark)').matches
  ? 'dark'
  : 'light'

addons.setConfig({
  theme: create({
    base,
    brandTitle: `react-zangief v${version}`,
    brandUrl: 'https://www.npmjs.com/package/react-zangief'
  })
})
