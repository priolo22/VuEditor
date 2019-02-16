<template>
  <v-card>
    <v-card-text class="fill-height">
      <v-layout column fill-height align-center>
        <v-layout row align-center>
          <v-flex mr-2>
            <v-icon class="mr-1" size="60px">sentiment_satisfied</v-icon>
          </v-flex>
          <v-flex>
            <v-layout column align-left>
              <div class="caption ">Quando scade la mia tessera?</div>
              <div class="title mb-1 font-weight-black">14/08/2019</div>
              <div class="caption green--text">Mancano 50 giorni.</div>
            </v-layout>
          </v-flex>
          <v-flex align-self-end>
            <v-tooltip top>
              <v-btn slot="activator" icon><v-icon>card_giftcard</v-icon></v-btn>
              <span>RINNOVA LA TUA TESSERA</span>
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
  name: "tessera-cmp"
};
</script>
