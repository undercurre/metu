import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { viteMockServe } from 'vite-plugin-mock';
import Unocss from 'unocss/vite';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import {
    VantResolver,
    NaiveUiResolver,
} from 'unplugin-vue-components/resolvers';
import { createStyleImportPlugin, VantResolve } from 'vite-plugin-style-import';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import { FileSystemIconLoader } from 'unplugin-icons/loaders';
import { VitePluginFonts } from 'vite-plugin-fonts';
import VueI18n from '@intlify/vite-plugin-vue-i18n';

export default [
    vue(),
    vueJsx(),
    Unocss(),
    AutoImport({
        include: [
            /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
            /\.vue$/,
            /\.vue\?vue/, // .vue
            /\.md$/, // .md
        ],
        imports: ['vue', 'pinia', 'vue-router', 'vue-i18n', '@vueuse/core'],
        dts: './src/types/auto-imports.d.ts',
    }),
    Components({
        dirs: ['src/components/'], // 我地滴组件肯定写启哩到葛嘛
        extensions: ['vue'], //  // 组件的有效文件扩展名
        include: [/\.vue$/, /\.vue\?vue/], // 扫描范围
        resolvers: [
            VantResolver(), // 移动ui库
            NaiveUiResolver(), // PC端UI库
            IconsResolver({ customCollections: ['custom'] }),
        ], // ui库解析器
        dts: './src/types/components.d.ts', // 要生成相应的类，不然过不了ts
    }),
    createStyleImportPlugin({
        resolves: [VantResolve()],
    }),
    Icons({
        compiler: 'vue3', // 适应vue3依赖
        customCollections: {
            custom: FileSystemIconLoader('./assets/svg'), // 自定义目录
        },
        autoInstall: true, // 自动安装
    }),
    VitePluginFonts({
        google: {
            families: ['Open Sans', 'Montserrat', 'Fira Sans'],
        },
    }),
    VueI18n({
        include: ['../src/locales/'], // 翻译目录
    }),
    viteMockServe({
        mockPath: './src/mock',
        supportTs: true, //如果使用 js发开，则需要配置 supportTs 为 false
    }),
];
