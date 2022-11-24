import autoprefixer from 'autoprefixer';

// eslint-disable-next-line no-undef
module.exports = {
    plugins: [
        autoprefixer({
            //兼容市面所有版本浏览器
            browsers: ['> 0% '],
        }),
    ],
    syntax: 'postcss',
};
