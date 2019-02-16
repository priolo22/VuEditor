
<template>
  <v-card>
    <v-card-text>
      <v-layout column align-center>
        <v-layout row align-center>
          <v-flex>
            <v-avatar size="85" color="grey lighten-4">
              <img
                src="https://uploads.codesandbox.io/uploads/user/4396eff8-8544-44a0-b5ee-c8b373eb3ca6/dWp1-806686_people_512x512.png"
                alt="avatar"
              />
            </v-avatar>
          </v-flex>
          <v-flex align-self-end>
            <v-tooltip top>
              <v-btn slot="activator" icon><v-icon>add_a_photo</v-icon></v-btn>
              <span>CAMBIA IMMAGINE</span>
            </v-tooltip>
          </v-flex>
        </v-layout>
      </v-layout>
    </v-card-text>
  </v-card>
</template>

<style scoped></style>

<script>
export default {
  components: {},
  name: "avatar-cmp"
};
</script>
