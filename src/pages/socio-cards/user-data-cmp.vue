<template>
  <v-card :flat="hideTitle">
    <!-- v-card-title>Dati utente</v-card-title -->
    <v-card-title v-if="!hideTitle">
    <v-layout row align-center>
      <div class="title">{{title}} </div>
      <v-spacer />
      <v-tooltip top>
        <v-btn icon slot="activator"><v-icon>border_color</v-icon></v-btn>
        <span>MODIFICA I TUOI DATI</span>
      </v-tooltip>
    </v-layout>
     
     </v-card-title>

    <v-card-text>
      <v-layout column>
        <v-layout row>
          <v-flex mr-2 md6>
            <v-layout column>
              <v-text-field readonly box label="NOME" value="Simone" />
              <v-text-field box label="COGNOME" value="Nammipieri" />
              <v-select
                box
                label="DELEGAZIONE"
                value="Firenze"
                :items="['Firenze', 'Treviso', 'Roma', 'Bari']"
              />
            </v-layout>
          </v-flex>
          <v-flex md6>
            <v-layout column>
              <v-text-field
                box
                label="E-MAIL"
                value="nannipieri@fisar.org"
              ></v-text-field>
              <v-text-field
                box
                label="PASSWORD"
                type="password"
                value="secret"
              ></v-text-field>
              <v-select
                box
                label="RUOLO"
                multiple
                chips
                small-chips
                :value="['Socio', 'Relatore', 'CNT']"
                :items="['Socio', 'Relatore', 'CNT']"
              ></v-select>
            </v-layout>
          </v-flex>
        </v-layout>

        <div class="subheading">DATI ANAGRAFICI</div>
        <v-layout column>
          <v-layout row>
            <v-flex md2 mr-2
              ><v-select box label="SESSO" value="M" :items="['M', 'F']"
            /></v-flex>
            <v-flex md5 mr-2
              ><v-text-field box label="DATA NASCITA" value="14/08/1975"
            /></v-flex>
            <v-flex md5
              ><v-text-field box label="LUOGO NASCITA" value="Firenze"
            /></v-flex>
          </v-layout>
          <v-layout row>
            <v-flex md6 mr-2
              ><v-text-field box label="PAESE DI NASCITA" value="Italia"
            /></v-flex>
            <v-flex md6
              ><v-text-field
                box
                label="CODICE FISCALE O P.IVA"
                value="XXXXXXXXXXXXX"
            /></v-flex>
          </v-layout>
        </v-layout>

        <div class="subheading">INFORMAZIONI DI CONTATTO</div>
        <v-layout column>
          <v-layout row>
            <v-flex md6>
              <v-text-field
                box
                label="TELEFONO CELLULARE"
                value="+39 349 999 999"
              />
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex md6 mr-2>
              <v-text-field box label="TELEFONO FISSO" value="06 7854 37282" />
            </v-flex>
            <v-flex md6>
              <v-text-field box label="TELEFONO UFFICIO" value="06 672 16171" />
            </v-flex>
          </v-layout>
        </v-layout>

        <div class="subheading">RESIDENZA</div>
        <v-layout column>
          <v-layout row>
            <v-flex md9 mr-2>
              <v-text-field box label="INDIRIZZO" value="Via Labriola" />
            </v-flex>
            <v-flex md3>
              <v-text-field box label="N° CIV." value="24" />
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex md6 mr-2>
              <v-text-field box label="COMUNE" value="Firenze" />
            </v-flex>
            <v-flex md3 mr-2>
              <v-text-field box label="PROVINCIA" value="Firenze" />
            </v-flex>
            <v-flex md3>
              <v-text-field box label="CAP" value="71100" />
            </v-flex>
          </v-layout>
        </v-layout>

        <div class="subheading">RECAPITO DELLA CORRISPONDENZA</div>
        <v-layout column>
          <v-layout row>
            <v-flex md7 mr-2>
              <v-text-field box label="INDIRIZZO" value="Via Labriola" />
            </v-flex>
            <v-flex md2 mr-2>
              <v-text-field box label="N° CIV." value="24" />
            </v-flex>
            <v-flex md3 mr-2>
              <v-text-field box label="PROVINCIA" value="Firenze" />
            </v-flex>
            <v-flex md2>
              <v-text-field box label="CAP" value="71100" />
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex md6 mr-2>
              <v-text-field box label="COMUNE" value="Firenze" />
            </v-flex>
            <v-flex md6>
              <v-text-field
                box
                label="NOME SUL CITOFONO O CAMPANELLO"
                value="Presso..."
              />
            </v-flex>
          </v-layout>
        </v-layout>
      </v-layout>
    </v-card-text>

    <v-card-actions v-if="!hideActions">
      <v-layout row>
        <v-btn color="secondary">CERTIFICAZIONE<v-icon right>cloud_download</v-icon></v-btn>
        <v-btn color="secondary">COPIA DIPLOMA<v-icon right>cloud_download</v-icon></v-btn>
        <v-spacer />
        
      </v-layout>
    </v-card-actions>
  </v-card>
</template>
<style scoped></style>

<script>
export default {
  name: "user-edit-pag",
  props: {
    title: { type:String, default:"I TUOI DATI" },
    hideTitle: { type:Boolean, default:false },
    hideActions: { type:Boolean, default:false },
  }
};
</script>
