import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';

export const EXTERNAL = [
  'vue',
  '@zdzz/shared',
  '@zdzz/hooks',
  /\.scss/,
  'element-plus',
];
export const GLOBALS = {
  vue: 'Vue',
  '@zdzz/shared': 'zd_shared',
  '@zdzz/hooks': 'zd_hooks',
  'element-plus': 'ElementPlus',
};

export default defineConfig(({ mode }) => {
  const _DEV_ = mode === 'production';
  return {
    plugins: [
      vue(),
      dts({
        include: ['src/**/*.ts', 'type.d.ts', 'src/**/*.vue'],
        outputDir: ['es'],
      }),
    ],
    define: {
      _DEV_: `${_DEV_}`,
    },
    build: {
      target: 'modules',
      cssCodeSplit: true,
      minify: true,
      chunkSizeWarningLimit: 1000,
      lib: {
        entry: './src/index.ts',
      },
      rollupOptions: {
        external: EXTERNAL,
        output: [
          {
            globals: GLOBALS,
            format: 'iife',
            dir: 'dist',
            preserveModulesRoot: 'src',
            name: 'iife',
          },
          {
            globals: GLOBALS,
            format: 'es',
            entryFileNames: '[name].js',
            preserveModules: true,
            dir: 'es',
            preserveModulesRoot: 'src',
          },
          {
            globals: GLOBALS,
            format: 'cjs',
            entryFileNames: '[name].js',
            preserveModules: true,
            dir: 'lib',
            preserveModulesRoot: 'src',
          },
        ],
      },
    },
  };
});
