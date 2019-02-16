<template>
  <v-card>
    <!-- v-card-title>Dati utente</v-card-title -->
    <v-card-title class="title">
      <div class="title">STORICO DEI TESSERAMENTI</div>
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
          <td>{{ props.item.anno }}</td>
          <td >{{ props.item.delegazione }}</td>
          <td >{{ props.item.data }}</td>
          <td>
            <v-tooltip top>
              <v-icon slot="activator">cloud_download</v-icon>
              <span>SCARICA COPIA TESSERA</span>
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
        { text: "ANNO", sortable: false },
        { text: "DELEGAZIONE", sortable: false },
        { text: "DATA RINNOVO", sortable: false },
        { text: "DOCUMENTAZIONE", sortable: false },
      ],
      data: [
        { anno: "2019", delegazione: "FIRENZE", data: "17/01/2019" },
        { anno: "2018", delegazione: "FIRENZE", data: "17/01/2018" },
        { anno: "2017", delegazione: "TREVISO", data: "17/01/2017" },
        { anno: "2016", delegazione: "FIRENZE", data: "17/01/2016" },
      ]      
    };
  }
};
</script>
