import '@/style/index.scss';
import 'element-plus/dist/index.css';

import { setupRouter } from '@/router';
import App from './App.vue';

const app = createApp(App);
setupRouter(app);
app.mount('#app');

