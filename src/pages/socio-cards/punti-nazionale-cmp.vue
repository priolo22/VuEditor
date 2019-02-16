<template>
  <v-card>
    <v-card-text class="fill-height">
      <v-layout fill-height column align-center>
        <v-layout row align-center>
          <v-flex mr-2>
            <v-img
              class="mr-2"
              width="45px"
              contain
              src="https://uploads.codesandbox.io/uploads/user/4396eff8-8544-44a0-b5ee-c8b373eb3ca6/sR3G-scudo1.png"
            />
          </v-flex>
          <v-flex>
            <v-layout column align-left>
              <div class="subheading mb-1">Il tuo punteggio Nazionale</div>
              <div class="title font-weight-black">900 Scudi</div>
            </v-layout>
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
  name: "punti-nazionale-cmp"
};
</script>
