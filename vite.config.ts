import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';

export const EXTERNAL = [
  'vue',
  'element-plus',
  /\.scss/,
];
export const GLOBALS = {
  vue: 'Vue',
  'element-plus': 'ElementPlus',
};

export default defineConfig(({ mode }) => {
  const _DEV_ = mode === 'production';
  return {
    plugins: [
      vue(),
      dts({
        include: ['./src/**/*.vue', './src/**/*.ts', './src/**/*.d.ts'],
        outputDir: ['dist', 'lib', 'es'],
        // staticImport: true,
        clearPureImport: false,
        // skipDiagnostics: true,
        beforeWriteFile(filePath: string, content) {
          const filePathOut = filePath
            .replace(/dist\/src\//, 'dist/')
            .replace(/es\/src\//, 'es/')
            .replace(/lib\/src\//, 'lib/');
          return {
            filePath: filePathOut,
            content,
          };
        },
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
            entryFileNames: 'index.js',
          },
          {
            globals: GLOBALS,
            format: 'cjs',
            dir: 'dist',
            preserveModulesRoot: 'src',
            name: 'cjs',
            entryFileNames: 'index.cjs.js',
          },
          {
            globals: GLOBALS,
            format: 'es',
            dir: 'dist',
            preserveModulesRoot: 'src',
            name: 'es',
            entryFileNames: 'index.es.js',
          },
          //
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
