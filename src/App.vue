<template>
  <v-app light id="app">
    <v-navigation-drawer class="secondary" dark persistent flat enable-resize-watcher app>
      <nav-menu></nav-menu>
    </v-navigation-drawer>

    <tool-bar></tool-bar>

    <!-- style="height:0;" -->
    <v-content>
      <v-container fluid fill-height>
        <v-layout>
          <v-flex> <router-view></router-view> </v-flex>
        </v-layout>
      </v-container>
    </v-content>

    <page-footer></page-footer>
  </v-app>
</template>

<script>
import ToolBar from "./components/ToolBar";
import NavMenu from "./components/NavMenu";
import PageFooter from "./components/PageFooter";

export default {
  name: "App",
  components: {
    ToolBar,
    NavMenu,
    PageFooter
  }
};
</script>

<style></style>
