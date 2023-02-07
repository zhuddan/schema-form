import { defineConfig } from 'vite';
// import path from 'path';
import vue from '@vitejs/plugin-vue';
// import AutoImport from 'unplugin-auto-import/vite';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig(() => {
  // const isBuild = command === 'build';isBuild;
  // const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [
      vue(),
      // AutoImport({
      //   include: [
      //     /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
      //     /\.vue$/,
      //     /\.vue\?vue/, // .vue
      //   ],
      //   imports: ['vue', 'vue-router'],
      //   dts: './types/auto-imports.d.ts',
      //   eslintrc: {
      //     enabled: false, // Default `false`
      //     filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
      //     globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      //   },
      // }),
      dts({
        // 指定使用的tsconfig.json为我们整个项目根目录下掉,如果不配置,你也可以在components下新建tsconfig.json
        tsConfigFilePath: '../../tsconfig.json',
      }),
      // 因为这个插件默认打包到es下，我们想让lib目录下也生成声明文件需要再配置一个
      dts({
        outputDir: 'lib',
        tsConfigFilePath: '../../tsconfig.json',
      }),

    ],
    // resolve: {
    //   alias: {
    //     '@': path.resolve(__dirname, 'src'),
    //     '~': path.resolve(__dirname, 'types'),
    //   },
    // },
    // server: {
    //   port: Number(env.VITE_APP_PORT),
    //   host: true,
    // },
    // optimizeDeps: {
    //   // @iconify/iconify: The dependency is dynamically and virtually loaded by @purge-icons/generated, so it needs to be specified explicitly
    // },
    build: {
      target: 'modules',
      // 打包文件目录
      outDir: 'es',
      // 压缩
      minify: false,
      // css分离
      // cssCodeSplit: true,
      rollupOptions: {
        // 忽略打包vue文件
        external: ['vue'],
        input: ['src/index.ts'],
        output: [
          {
            format: 'es',
            // 不用打包成.es.js,这里我们想把它打包成.js
            entryFileNames: '[name].js',
            // 让打包目录和我们目录对应
            preserveModules: true,
            // 配置打包根目录
            dir: 'es',
            preserveModulesRoot: 'src',
          },
          {
            format: 'cjs',
            entryFileNames: '[name].js',
            // 让打包目录和我们目录对应
            preserveModules: true,
            // 配置打包根目录
            dir: 'lib',
            preserveModulesRoot: 'src',
          },
        ],
      },
      lib: {
        entry: './index.ts',
        formats: ['es', 'cjs'],
      },
    },
  };
});
