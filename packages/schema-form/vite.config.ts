import { defineConfig } from 'vite';
import vuePlugin from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';

export const EXTERNAL = [
  'vue',
  'vue-router',
  'qs',
  'axios',
  'pdfjs-dist',
  'pdfjs-dist/build/pdf.worker.entry',
  'pdfjs-dist/legacy/build/pdf.js',
  '@zdzz/shared',
  '@zdzz/hooks',
  /\.scss/,
  'xlsx',
];
export const GLOBALS = {
  vue: 'Vue',
  'vue-router': 'VueRouter',
  axios: 'Axios',
  qs: 'qs',
  'pdfjs-dist': 'pdfjsLib',
  'pdfjs-dist/legacy/build/pdf.js': 'pdfjsLib',
  '@zdzz/shared': 'zd_shared',
  '@zdzz/hooks': 'zd_hooks',
  xlsx: 'XLSX',
};

export default defineConfig(({ }) => {
  // return createBuildConfig('zd_components', { vue: true });

  return {
    plugins: [
      vuePlugin(),
      dts({
        include: ['src/**/*.ts', 'type.d.ts', 'src/**/*.vue'],
        outputDir: ['es'],
      }),
    ],
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
