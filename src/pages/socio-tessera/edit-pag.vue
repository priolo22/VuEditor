<template>
  <v-container fluid grid-list-md>

    <v-layout row>

      <!-- TESSERA -->
      <v-flex md5 mr-4 d-flex>
        <v-card>
          <v-card-text>
            <v-layout column align-center>
              <v-flex>
                <v-img width="400"
                  src="https://uploads.codesandbox.io/uploads/user/4396eff8-8544-44a0-b5ee-c8b373eb3ca6/EwX2-tessera.png"
                />
              </v-flex>
              <v-flex mt-4><v-btn icon><v-icon>cloud_download</v-icon></v-btn></v-flex>
              <v-flex><div class="subheading" style="margin-top:-10px">DOWNLOAD DELLA COPIA DIGITALE</div></v-flex>
              <v-flex mt-4><v-btn to="rinnovo" color="primary">RINNOVA LA TUA TESSERA</v-btn></v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-flex>  

      <v-flex md7 d-flex><v-layout column>
        <v-flex d-flex mb-4>
          <v-layout row>
            <v-flex d-flex mr-4> <punti-delegazione-cmp /> </v-flex>
            <v-flex d-flex mr-4> <punti-nazionale-cmp /> </v-flex>
            <v-flex d-flex> <tessera-cmp /> </v-flex>
          </v-layout>
        </v-flex>
        <v-flex d-flex> <storico-tessera-cmp /> </v-flex>
      </v-layout> </v-flex>

    </v-layout>

  </v-container>
</template>
<style scoped></style>

<script>
import TesseraCmp from "../socio-cards/tessera-cmp";
import StoricoTesseraCmp from "../socio-cards/storico-tessera-cmp";
import PuntiDelegazioneCmp from "../socio-cards/punti-delegazione-cmp";
import PuntiNazionaleCmp from "../socio-cards/punti-nazionale-cmp";

export default {
  components: {
    TesseraCmp,
    StoricoTesseraCmp,
    PuntiDelegazioneCmp,
    PuntiNazionaleCmp,
  },
  name: "socio-tessera-pag"
};
</script>
