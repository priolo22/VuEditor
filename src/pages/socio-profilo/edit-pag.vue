<template>
  <v-container fluid grid-list-md>
    <v-layout column>

      <v-layout align-space-between row class="mb-4">
        <v-flex style="width:50px" mr-4> <avatar-cmp /> </v-flex>
        <v-flex d-flex mr-4> <punti-delegazione-cmp /> </v-flex>
        <v-flex d-flex mr-4> <punti-nazionale-cmp /> </v-flex>
        <v-flex d-flex> <tessera-cmp /> </v-flex>
      </v-layout>

      <v-layout row>
        <v-flex d-flex md6 mr-4> <user-data-cmp /> </v-flex>
        <v-flex d-flex md6>
          <v-layout column>
            <v-flex shrink mb-4> <storico-corsi-cmp /> </v-flex>
            <v-flex shrink> <storico-tessera-cmp /> </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>

    </v-layout>
  </v-container>
</template>
<style scoped></style>

<script>
import AvatarCmp from "../socio-cards/avatar-cmp";
import PuntiDelegazioneCmp from "../socio-cards/punti-delegazione-cmp";
import PuntiNazionaleCmp from "../socio-cards/punti-nazionale-cmp";
import TesseraCmp from "../socio-cards/tessera-cmp";
import UserDataCmp from "../socio-cards/user-data-cmp";
import StoricoCorsiCmp from "../socio-cards/storico-corsi-cmp";
import StoricoTesseraCmp from "../socio-cards/storico-tessera-cmp";

export default {
  components: {
    AvatarCmp,
    PuntiDelegazioneCmp,
    PuntiNazionaleCmp,
    TesseraCmp,
    UserDataCmp,
    StoricoCorsiCmp,
    StoricoTesseraCmp
  },
  name: "socio-profilo-pag"
};
</script>
