<template>
  <v-card>
    <!-- v-card-title>Dati utente</v-card-title -->
    <v-card-title class="title">
      <div class="title">STORICO DEI CORSI E DEI SEMINARI FREQUENTATI</div>
      <v-spacer />
      <v-tooltip top>
        <v-btn icon slot="activator"><v-icon>open_in_new</v-icon></v-btn>
        <span>VAI ALLO STORICO</span>
      </v-tooltip>
    </v-card-title>

    <v-card-text>
      <v-data-table
        hide-actions
        :headers="headers"
        :items="data"
        class="elevation-1"
      >
        <template slot="items" slot-scope="props">
          <td>{{ props.item.data }}</td>
          <td>{{ props.item.nome }}</td>
          <td>{{ props.item.delegazione }}</td>
          <td>{{ props.item.voto }}</td>
          <td>
            <v-tooltip top class="mr-2">
              <v-icon slot="activator">cloud_download</v-icon>
              <span>SCARICA DIPLOMA</span>
            </v-tooltip>
            <v-tooltip top>
              <v-icon slot="activator">cloud_download</v-icon>
              <span>SCARICA CERTIFICAZIONE</span>
            </v-tooltip>
          </td>
        </template>
      </v-data-table>
    
    </v-card-text>

    <!--
      v-card-actions>
        <v-layout row>
          <v-btn color="primary"
            >CERTIFICAZIONE<v-icon right>cloud_download</v-icon></v-btn
          >
          <v-btn color="primary"
            >COPIA DIPLOMA<v-icon right>cloud_download</v-icon></v-btn
          >
          <v-spacer />
          <v-btn icon><v-icon>edit</v-icon></v-btn>
        </v-layout>
      </v-card-actions
    -->
  </v-card>
</template>
<style scoped></style>

<script>
export default {
  name: "storico-corsi-pag",
  data() {
    return {
      headers: [
        { text: "DATA", sortable: false },
        { text: "CORSO O SEMINARIO", sortable: false },
        { text: "ENTE", sortable: false },
        { text: "VOTO", sortable: false },
        { text: "DIPLOMA/CERTIFICAZIONE", sortable: false, align: "center" }
      ],
      data: [
        { data: "17/01/2019", nome: "DIPLOMA SOMMELIER 2", delegazione: "FIRENZE", voto: "6/10 SUPERATO", },
        { data: "14/11/2018", nome: "LIVELLO 2", delegazione: "FIRENZE", voto: "5/10 NON SUPERATO", },
        { data: "05/10/2018", nome: "RICONOSCERE IL VINO", delegazione: "TREVISO", voto: "7/10 SUPERATO", },
        { data: "02/10/2018", nome: "VINIFICAZIONE", delegazione: "VERONA", voto: "8/10 SUPERATO", },
        { data: "12/05/2018", nome: "LIVELLO 1", delegazione: "FIRENZE", voto: "6/10 SUPERATO", },
        { data: "23/12/2017", nome: "DIPLOMA SOMMELIER", delegazione: "FIRENZE", voto: "6/10 SUPERATO", },
      ]
    };
  }
};
</script>
