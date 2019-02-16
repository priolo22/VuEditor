<template>
  <v-layout>
    <v-flex>
      <v-stepper v-model="step">

        <v-stepper-header>
          <v-stepper-step color="secondary" :complete="step > 1" step="1">MODIFICA DATI ANAGRAFICI</v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step color="secondary" :complete="step > 2" step="2">CONFERMA</v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step color="secondary" step="3">CONSENSI PRIVACY</v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step color="secondary" step="4">PAGAMENTO</v-stepper-step>
        </v-stepper-header>

        <v-stepper-items>


          <v-stepper-content step="1">
            <v-card class="mb-5">
              <v-layout row>
                <v-flex md3></v-flex>
                <v-flex md9><user-data-cmp  hide-actions hide-title/></v-flex>
              </v-layout>
            </v-card>
            <v-layout row>
              <v-spacer />
              <v-btn flat to="tessera">Annulla</v-btn>
              <v-btn color="primary" @click="step=2;"> Avanti </v-btn>
            </v-layout>
          </v-stepper-content>


          <v-stepper-content step="2">
            <v-card class="mb-5">
              <v-layout row>

                <v-flex md3>
                  <v-layout column align-center>
                    <v-flex mt-4>
                      <v-img width="50"
                        src="https://uploads.codesandbox.io/uploads/user/4396eff8-8544-44a0-b5ee-c8b373eb3ca6/7CXf-scudo3.png"
                    />
                    </v-flex>
                    <v-flex mx-5 mt-3>
                      <div class="title text-md-center font-weight-black">Ho preso visione delle modifiche o della conferma dei miei dati personali e confermo quanto indicato</div>
                    </v-flex>
                  </v-layout>
                </v-flex>

                <v-flex md9><user-data-cmp hide-actions hide-title/></v-flex>

              </v-layout>
            </v-card>
            <v-layout row>
              <v-spacer />
              <v-btn flat @click="step=2;"><v-icon left>keyboard_backspace</v-icon> Precedente </v-btn>
              <v-btn color="primary" @click="step=3;"> Avanti </v-btn>
            </v-layout>
          </v-stepper-content>


          <v-stepper-content step="3">
            <v-card class="mb-5">
              <v-layout row>
                <v-flex md3></v-flex>
                <v-flex md9>
                  <v-layout column>

                    <v-layout row>
                      <v-flex><v-img width="30"
                        src="https://uploads.codesandbox.io/uploads/user/4396eff8-8544-44a0-b5ee-c8b373eb3ca6/7CXf-scudo3.png"
                    /></v-flex>
                      <v-flex>
                        <div class="title">INFORMATIVA COMPLETA</div>
                      </v-flex>
                      <v-spacer/>
                      <v-flex><div class="caption">SCARICA IL PDF</div></v-flex>
                      <v-flex><div class="title"><v-icon>cloud_download</v-icon></div></v-flex>
                    </v-layout>
                    </v-layout>

                </v-flex>
              </v-layout>
            </v-card>
            <v-layout row>
              <v-spacer />
              <v-btn flat @click="step=2;"><v-icon left>keyboard_backspace</v-icon> Precedente </v-btn>
              <v-btn color="primary" @click="step=3;"> Avanti </v-btn>
            </v-layout>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </v-flex>
  </v-layout>
</template>
<style scoped></style>

<script>

export default {
  components: {
    UserDataCmp,
  },
  name: "step1-tab-pag",
  data() {
    return {
    };
  }

};
</script>
