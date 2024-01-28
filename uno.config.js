// uno.config.ts

import { defineConfig, presetUno } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'

const theme = {
    colors: {
        'main': '#F5D0D0',
        'textColor': '#B86A6A',
        'btnBackground': '#FFF',
        'disableBtn': '#6C6C6C',
        'finishCard': '#D9D9D980'
    }
}

export default defineConfig({
    theme,
    shortcuts: {
        'title1': 'font-size-28px font-weight-700;',
        'btnContent': 'font-size-20px'
    },
    transformers: [
        transformerDirectives(),
    ],
    presets: [
        presetUno()
    ]
})
