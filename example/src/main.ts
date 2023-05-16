import '@/style/index.scss';

import { setupRouter } from '@/router';
import App from './App.vue';
import { registerPlugins } from './plugins';

function __init__() {
  const app = createApp(App);
  // 注册路由
  setupRouter(app);
  // 插件
  registerPlugins(app);

  app.mount('#app');
}

__init__();
