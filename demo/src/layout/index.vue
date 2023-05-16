<script setup lang="ts">
import { formRoutes } from '@/router';
defineOptions({
  name: 'layout',
});
</script>

<template>
  <div class="layout">
    <header>
      <h1><a href="/">demo</a></h1>
    </header>
    <section>
      <aside>
        <ul>
          <li v-for="(nav, index) in formRoutes" :key="index">
            <router-link :to="nav.path">
              {{ nav.meta?.title }}
            </router-link>
          </li>
        </ul>
      </aside>
      <main>
        <router-view />
      </main>
    </section>
  </div>
</template>

<style scoped lang="scss">
.layout {
  height: 100vh;
  --header-height: 70px;

  header {
    height: var(--header-height);
    padding: 0 20px;
    overflow: hidden;
    background: #fff;
    box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
    display: flex;
    align-items: center;

    h1 {
      margin: 0;
    }
  }

  section {
    display: flex;
    height: calc(100vh - var(--header-height));

    aside {
      width: 200px;
      overflow-y: auto;
      border-right: 1px solid rgba(32, 33, 36, 0.28);

      ul {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
          list-style: none;

          a {
            border-bottom: 1px solid rgba(32, 33, 36, 0.28);
            padding: 15px 20px;
            display: block;
            position: relative;

            &.router-link-exact-active{
              &::after{
                content: '';
                background-color: var(--el-color-primary);
                position: absolute;
                top: 0;
                bottom: 0;
                right: 0;
                // background: red;
                width: 4px;
              }
              color:  var(--el-color-primary);
            }
          }
        }
      }
    }

    main {
      overflow-y: auto;
    }
  }
}
</style>