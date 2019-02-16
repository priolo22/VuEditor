<template>
  <div>
    <v-toolbar color="primary" flat>
      <v-flex align-self-center>
        <v-toolbar-title >
          <v-layout row align-center justify-center>
            <v-flex><v-img height="40px" contain src="https://uploads.codesandbox.io/uploads/user/4396eff8-8544-44a0-b5ee-c8b373eb3ca6/OX__-logo_white.png" /></v-flex>
            <v-flex><div class="title white--text font-weight-bold">CONVIVIO</div></v-flex>
          </v-layout>
        </v-toolbar-title>
      </v-flex>
    </v-toolbar>

    <v-list>
      <div v-for="(item, i) in items" :key="i">
        <v-list-tile :to="item.route">
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </div>
    </v-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: "HOME",
          icon: "home",
          route: { name: "socio.dashboard" }
        },
        {
          title: "PROFILO",
          icon: "perm_identity",
          route: { name: "socio.profilo" }
        },
        {
          title: "COMUNICAZIONI",
          icon: "mail_outline"
        },
        {
          title: "TESSERA E RINNOVI",
          icon: "credit_card",
          route: { name: "socio.tessera" }
        },
        {
          title: "CORSI E FORMAZIONE",
          icon: "receipt"
        },
        {
          title: "FISAR CLOUD",
          icon: "cloud_download"
        },
        {
          title: "PRIVACY E DATI PERSONALI",
          icon: "question_answer"
        },
        {
          title: "EVENTI FISAR",
          icon: "calendar_today"
        },
        {
          title: "AIUTO E SUPPORTO",
          icon: "dashboard"
        },
        {
          title: "ACCOUNT",
          icon: "dashboard"
        }
      ]
    };
  }
};
</script>
