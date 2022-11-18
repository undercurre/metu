import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite';

export default [
    vue(),
    vueJsx(),
    Unocss(),
    AutoImport({
        include: [
            /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
            /\.vue$/, /\.vue\?vue/, // .vue
            /\.md$/, // .md
        ],
        imports: [
            'vue'
        ],
        dts: './src/types/auto-imports.d.ts',
    })
]