import { defineConfig } from 'vite';
import presets from './presets/presets';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [...presets],
});
